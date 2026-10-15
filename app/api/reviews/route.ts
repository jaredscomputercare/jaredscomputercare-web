import { NextResponse } from 'next/server';

const COLORS = [
  'bg-blue-600',
  'bg-purple-600',
  'bg-emerald-600',
  'bg-indigo-600',
  'bg-green-600',
  'bg-amber-600',
];

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing GOOGLE_PLACES_API_KEY in environment variables' },
      { status: 500 }
    );
  }

  try {
    const searchRes = await fetch(
      'https://places.googleapis.com/v1/places:searchText',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'places.id,places.displayName',
        },
        body: JSON.stringify({
          textQuery: "Jared's Computer Care Middlebury Vermont",
          includePureServiceAreaBusinesses: true,
        }),
        next: { revalidate: 86400 },
      }
    );

    if (!searchRes.ok) {
      throw new Error('Text Search failed');
    }

    const searchData = await searchRes.json();
    const placeId = searchData.places?.[0]?.id;

    if (!placeId) {
      throw new Error('Could not find Place ID');
    }

    // Include authorAttribution in the field mask to get profile pictures
    const v1Url = `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews&key=${apiKey}`;
    const v1Res = await fetch(v1Url, { next: { revalidate: 86400 } });

    if (!v1Res.ok) {
      throw new Error('Place Details failed');
    }

    const data = await v1Res.json();

    if (data.reviews && Array.isArray(data.reviews)) {
      const formattedReviews = data.reviews
        .filter((r: any) => (r.rating ?? 5) >= 4 && r.text?.text)
        .map((r: any, index: number) => {
          const fullName = r.authorAttribution?.displayName || 'Customer';
          const parts = fullName.trim().split(' ');
          const formattedName =
            parts.length > 1
              ? `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`
              : fullName;

          return {
            name: formattedName,
            initial: formattedName.charAt(0).toUpperCase(),
            color: COLORS[index % COLORS.length],
            time: r.relativePublishTimeDescription || 'Recently',
            text: r.text?.text || '',
            rating: r.rating || 5,
            photoUri: r.authorAttribution?.photoUri || null, // Captured from Google!
          };
        });

      return NextResponse.json({
        reviews: formattedReviews,
        rating: data.rating || 5.0,
        totalReviews: data.userRatingCount || formattedReviews.length,
      });
    }

    return NextResponse.json({ reviews: [], rating: 5.0, totalReviews: 0 });

  } catch (error: any) {
    console.error('Failed to fetch live Google reviews:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}