"use client";
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Monitor, 
  Wifi, 
  ShieldCheck, 
  Wind, 
  Cpu, 
  Smartphone, 
  Menu, 
  X,
  ChevronRight,
  CheckCircle2,
  Send,
  ArrowLeft,
  LucideIcon,
  Package,
  Globe,
  Plus,
  Paperclip,
  UploadCloud,
  DollarSign,
  Clock,
  Leaf,
  Map,
  Star
} from 'lucide-react';

// --- Types ---

interface NavigationHandler {
  (page: string, sectionId?: string): void;
}

interface NavbarProps {
  onNavigate: NavigationHandler;
  currentPage: string;
}

interface HeroProps {
  onNavigate: NavigationHandler;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ContactPageProps {
  onNavigate: NavigationHandler;
}

interface FooterProps {
  onNavigate: NavigationHandler;
}

// --- Components ---

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, sectionId?: string) => {
    onNavigate(page, sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-slate-900/95 py-2 md:py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home', 'top')}
          >
            <img 
              src="/assets/navbarlogo.png" 
              alt="Jared's Computer Care Logo" 
              className="h-10 md:h-14 w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home', 'services')} className="text-slate-300 hover:text-white transition-colors text-base font-medium">Services</button>
            <button onClick={() => handleNavClick('home', 'pricing')} className="text-slate-300 hover:text-white transition-colors text-base font-medium">Pricing</button>
            <button onClick={() => handleNavClick('home', 'service-area')} className="text-slate-300 hover:text-white transition-colors text-base font-medium">Service Area</button>
            <button onClick={() => handleNavClick('home', 'about')} className="text-slate-300 hover:text-white transition-colors text-base font-medium">About</button>
            <button onClick={() => handleNavClick('contact')} className={`text-base font-medium transition-colors ${currentPage === 'contact' ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}>Contact</button>
            
            <a 
              href="tel:8023987650" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              <span className="text-base">(802) 398-7650</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 absolute w-full border-t border-slate-700 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => handleNavClick('home', 'services')} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Services</button>
            <button onClick={() => handleNavClick('home', 'pricing')} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Pricing</button>
            <button onClick={() => handleNavClick('home', 'service-area')} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Service Area</button>
            <button onClick={() => handleNavClick('home', 'about')} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">About</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">Contact</button>
            <a 
              href="tel:8023987650" 
              className="block mt-4 w-full text-center bg-blue-600 text-white px-4 py-3 rounded-md font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="relative bg-slate-900 pt-16 pb-12 lg:pt-24 lg:pb-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/herobg.png" 
          alt="Abstract technology background for Jared's Computer Care" 
          className="w-full h-full object-cover"
        />
        {/* Darkish Overlay */}
        <div className="absolute inset-0 bg-slate-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Logo Column (Left on Desktop) */}
          <div className="mb-8 lg:mb-0 flex justify-center lg:justify-start">
             <img 
              src="/assets/mainlogo.png" 
              alt="Jared's Computer Care Main Logo - IT Services in Vermont" 
              className="w-full max-w-lg h-auto max-h-80 object-contain drop-shadow-2xl lg:max-w-full lg:max-h-[30rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]" 
            />
          </div>

          {/* Content Column (Right on Desktop) */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-600 mb-4 backdrop-blur-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
              <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
              <span className="text-sm text-slate-200 font-medium" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>Serving Addison County, VT</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              <span style={{ textShadow: "0 4px 10px rgba(0,0,0,0.9)" }}>
                IT Services <br className="hidden md:block" />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 pb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                & Computer Repair
              </span>
            </h1>
            
            <p 
              className="mt-2 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-300 mb-6"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              Fast, reliable support for your home or business. We fix tech headaches locally so you can get back to what matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-1"
              >
                Get a Quote
                <ChevronRight className="ml-2 -mr-1" size={20} />
              </button>
              <button 
                onClick={() => onNavigate('home', 'services')}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-400 text-base font-medium rounded-lg text-slate-200 bg-transparent hover:bg-slate-800/50 md:text-lg transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.39)]"
              >
                Our Services
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
      <Icon className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} aria-hidden="true" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Computer Repairs & Upgrades",
      description: "Comprehensive diagnostics, hardware repairs, screen replacements, and performance upgrades for both desktop computers and laptops.",
      icon: Monitor
    },
    {
      title: "Custom PC Builds",
      description: "Expertly assembled custom computers for gaming, video editing, or office productivity, tailored precisely to your budget.",
      icon: Cpu
    },
    {
      title: "Phone & Tablet Repair",
      description: "Screen replacements, battery swaps, and in-depth diagnostics for iPhone, iPad, and Android mobile devices.",
      icon: Smartphone
    },
    {
      title: "Hardware Procurement",
      description: "Sourcing and setup of bulk computer orders for local VT businesses and schools. We handle the logistics and configuration.",
      icon: Package
    },
    {
      title: "Virus & Malware Removal",
      description: "Complete malware detection and removal. We secure your system and protect your personal data from future cyber threats.",
      icon: ShieldCheck
    },
    {
      title: "Computer Cleaning",
      description: "Physical dust removal to prevent overheating, thermal paste re-application, and operating system optimization.",
      icon: Wind
    },
    {
      title: "Website Development",
      description: "Custom, responsive websites designed to grow your business. From landing pages to full online e-commerce stores.",
      icon: Globe
    },
    {
      title: "Networking & Wifi",
      description: "Home and office network setup, troubleshooting connectivity issues, and optimizing WiFi range and internet speed.",
      icon: Wifi
    },
    {
      title: "And Much More",
      description: "Don't see what you need? We probably do it. Call us to discuss your specific technology and smart home requirements.",
      icon: Plus
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Complete Tech Solutions
          </p>
          <p className="mt-4 text-xl text-slate-600">
            From cracked screens to complex networks, we have the tools and expertise to handle it all right here in Addison County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">No Surprises</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Transparent Pricing
          </p>
          <p className="mt-4 text-xl text-slate-600">
            We believe in honest, straightforward pricing for all our local IT and computer repair services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hourly Rate Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900">Hourly Rate</h3>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">
                <Clock size={24} />
              </div>
            </div>
            <div className="mb-4 relative z-10">
              <span className="text-5xl font-extrabold text-blue-600">$75</span>
              <span className="text-slate-500 font-medium ml-2">/ hour</span>
            </div>
            <p className="text-slate-600 relative z-10">
              Our standard rate for computer repairs, network setups, virus removal, and general IT troubleshooting.
            </p>
          </div>

          {/* Minimum Fee Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900">Minimum Fee</h3>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600">
                <DollarSign size={24} />
              </div>
            </div>
            <div className="mb-4 relative z-10">
              <span className="text-5xl font-extrabold text-green-600">$50</span>
              <span className="text-slate-500 font-medium ml-2">minimum</span>
            </div>
            <p className="text-slate-600 relative z-10">
              Applies to all service calls and acts as a base diagnostic fee. If the repair is quick, this is all you pay!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  const towns = [
    "Addison", "Brandon", "Bridport", "Bristol", 
    "Cornwall", "Ferrisburgh", "Goshen", "Granville", 
    "Hancock", "Leicester", "Lincoln", "Middlebury", 
    "Monkton", "New Haven", "Orwell", "Panton", 
    "Ripton", "Rochester", "Salisbury", "Shoreham", "Starksboro", 
    "Vergennes", "Waltham", "Weybridge", "Whiting"
  ];

  return (
    <section id="service-area" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column: Text & Info */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Map className="text-blue-400" size={32} />
            </div>
            <h2 className="text-3xl font-extrabold mb-4 text-white">Our Service Area</h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              We provide top-tier computer repair, networking, and IT support across Addison County and beyond. While these are our primary hubs, we proudly serve <strong className="text-white">all surrounding communities</strong>. We bring our mobile tech services directly to you.
            </p>
            <div className="inline-block bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-slate-300">
                <span className="text-blue-400 font-bold">Please note:</span> A <strong className="text-white">$0.75 / mile</strong> travel fee applies for services located outside our standard coverage area.
              </p>
            </div>
          </div>

          {/* Right Column: Pill Tag Grid */}
          <div className="lg:col-span-7 flex flex-wrap gap-3 lg:gap-4">
            {towns.map((town) => (
              <div 
                key={town} 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-600 backdrop-blur-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)] hover:border-slate-500 transition-colors cursor-default"
              >
                <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                <span className="text-sm text-slate-200 font-medium" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>{town}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

const About = () => {
  const reviews = [
    {
      name: "Jerry N.",
      initial: "J",
      color: "bg-blue-600",
      time: "2 months ago",
      text: "I took my laptop to Jared after it stopped working entirely. He diagnosed the issue quickly, replaced the hard drive, and upgraded the RAM. It now runs even better than the day I bought it. Highly recommend his services for any tech repairs!"
    },
    {
      name: "Tre B.",
      initial: "T",
      color: "bg-green-600",
      time: "1 month ago",
      text: "Great service. Jared is very understanding and easy to work with. Super intelligent as well."
    },
    {
      name: "Darcie L.",
      initial: "D",
      color: "bg-purple-600",
      time: "2 weeks ago",
      text: "Jared goes above and beyond and knows what he's doing, he's passionate about building and repairing electronics, I'd recommend him to anyone. He's upfront about pricing and super knowledgable. He's also fast and very responsive!"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="mb-12 lg:mb-0 relative">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 bg-blue-100 rounded-full z-0 opacity-50"></div>
            <div className="relative z-10 bg-slate-900 rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-center gap-4 mb-6">
                 {/* Headshot Image */}
                <img 
                  src="/assets/headshot.png" 
                  alt="Jared Messner - Founder of Jared's Computer Care" 
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow-md"
                />
                <div>
                  <h4 className="text-xl font-bold">Jared Messner</h4>
                  <p className="text-blue-400">Founder & Lead Technician</p>
                </div>
              </div>
              <p className="text-slate-300 italic text-lg">
                "My goal is simple: to make technology work for you, not against you. I believe in honest pricing, transparent communication, and getting the job done right the first time."
              </p>
            </div>

            {/* Repair First Philosophy Box */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-8 relative overflow-hidden shadow-sm">
              <Leaf className="absolute -bottom-6 -right-6 text-green-100 h-40 w-40 transform rotate-12" />
              <h3 className="text-2xl font-bold text-green-800 mb-3 flex items-center gap-3 relative z-10">
                <Leaf size={28} className="text-green-600" />
                Our "Repair First" Philosophy
              </h3>
              <p className="text-green-900 relative z-10 leading-relaxed font-medium">
                We firmly believe in repairing your existing technology first. Selling you a new product is our second option, recommended only when necessary. We operate with honesty and integrity, and we care about our green earth by actively working to reduce e-waste.
              </p>
            </div>

          </div>
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6 mt-4 lg:mt-0">
              Jared Messner IT Services
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Based right here in Addison County, Vermont, I provide personalized IT support and tech repair that big box stores just can't match. 
            </p>
            <p className="text-lg text-slate-600 mb-8">
              With years of experience troubleshooting everything from vintage desktop computers to modern smart home networks, I understand that every tech problem is unique. I treat your devices with the exact same care I'd treat my own.
            </p>
            
            <div className="space-y-4">
              {[
                "Locally Owned & Operated in Middlebury area",
                "Honest, Transparent Pricing",
                "Fast Turnaround Times",
                "On-Site & Remote Tech Support",
                "Repair First Philosophy"
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle2 className="text-blue-500 mr-3" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Trusted by Addison County</h3>
            <p className="text-lg text-slate-600">See what our customers have to say</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-lg shadow-inner`}>
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-500 font-medium">{review.time}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-slate-600 italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { name: 'CompTIA A+', src: '/assets/A+.png' },
    { name: 'CompTIA Network+', src: '/assets/Network+.png' },
    { name: 'CompTIA Security+', src: '/assets/Security+.png' },
    { name: 'Linux LPI Essentials', src: '/assets/LPIEssentials.png' },
    { name: 'Cisco CCNA', src: '/assets/CCNA.png' },
    { name: 'Microsoft SC-300', src: '/assets/image_4f52fc.png', customClass: 'scale-90' }
  ];

  return (
    <section className="py-12 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Industry Certifications & Qualifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center h-16 md:h-24 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
              title={cert.name}
            >
              <img 
                src={cert.src} 
                alt={`${cert.name} Certification Badge`} 
                className={`max-h-full w-auto object-contain ${cert.customClass || ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactPage = ({ onNavigate }: ContactPageProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    device: 'Laptop',
    message: ''
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    // Tell FormSubmit to send the user back to the home page WITH a success flag
    if (typeof window !== 'undefined') {
        const baseUrl = window.location.origin;
        setRedirectUrl(`${baseUrl}/?success=true`);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-36 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information Column */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-8">
              Have a computer problem? Need a quote for a custom build or networking job? Fill out the form or use the contact details below. We usually respond within 24 hours.
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                  <p className="mt-1 text-slate-600">Call or Text for fastest service</p>
                  <a href="tel:8023987650" className="mt-2 block text-blue-600 font-semibold hover:underline">(802) 398-7650</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">For general inquiries and quotes</p>
                  <a href="mailto:jared@jaredscomputercare.com" className="mt-2 block text-blue-600 font-semibold hover:underline">jared@jaredscomputercare.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Service Area</h3>
                  <p className="mt-1 text-slate-600">Mobile Service Available</p>
                  <p className="mt-2 text-slate-900 font-medium">Proudly Serving Addison County, VT & Surrounding Towns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            <form 
              action="https://formsubmit.co/jared@jaredscomputercare.com" 
              method="POST" 
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Inquiry - Jared's Computer Care" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting Jared's Computer Care. We have received your message and will get back to you shortly." />
              
              <input type="hidden" name="_next" value={redirectUrl} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="(802) 555-0123"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  onChange={handleChange}
                >
                  <option>Computer Repairs & Upgrades</option>
                  <option>Custom PC Builds</option>
                  <option>Phone Repair</option>
                  <option>Hardware Procurement</option>
                  <option>Virus Removal</option>
                  <option>Computer Cleaning</option>
                  <option>Website Development</option>
                  <option>Networking & Wifi</option>
                  <option>Other...</option>
                </select>
              </div>

              <div>
                <label htmlFor="attachment" className="block text-sm font-medium text-slate-700 mb-1">Attachment (Optional)</label>
                <div className="relative">
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    className="hidden" 
                  />
                  <label 
                    htmlFor="attachment" 
                    className="flex items-center justify-center w-full px-4 py-2 border border-dashed border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors text-slate-600"
                  >
                    {fileName ? (
                      <span className="flex items-center text-blue-600 font-medium">
                        <Paperclip size={16} className="mr-2" />
                        {fileName}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <UploadCloud size={18} className="mr-2 text-slate-400" />
                        Click to upload image or file
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Briefly describe the issue..."
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
              >
                Send Message
                <Send className="ml-2" size={18} />
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                We respect your privacy. Your information is never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Jared's Computer Care</h3>
            <p className="text-slate-400 max-w-xs">
              Professional IT services and computer repair for Addison County, VT. We bring your tech back to life.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="flex items-start space-x-3 text-slate-300">
              <Phone className="flex-shrink-0 text-blue-500 mt-1" size={18} />
              <span>(802) 398-7650</span>
            </div>
            <div className="flex items-start space-x-3 text-slate-300">
              <Mail className="flex-shrink-0 text-blue-500 mt-1" size={18} />
              <span>jared@jaredscomputercare.com</span>
            </div>
            <div className="flex items-start space-x-3 text-slate-300">
              <MapPin className="flex-shrink-0 text-green-500 mt-1" size={18} />
              <span>Proudly Serving Addison County, VT</span>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-2">Ready to get fixed?</h4>
            <p className="text-slate-400 text-sm mb-4">
              Don't let tech issues slow you down. Reach out today for a quick quote.
            </p>
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Get a Quote Now
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Jared's Computer Care LLC | All rights reserved.</p>
          <p className="mt-2 md:mt-0">Based in Middlebury, VT.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      
      if (urlParams.get('success') === 'true') {
        setShowSuccessModal(true);
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  const handleNavigate = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = sectionId === 'top' 
          ? document.body 
          : document.getElementById(sectionId);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen relative">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services />
            <Pricing />
            <ServiceArea />
            <About />
            <Certifications />
          </>
        ) : (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />

      {/* SUCCESS MODAL POPUP */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 transition-all">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform scale-100 transition-transform">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-slate-600 mb-8">
              Thank you for reaching out. We have received your message and will get back to you shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Back to Website
            </button>
          </div>
        </div>
      )}
    </div>
  );
}