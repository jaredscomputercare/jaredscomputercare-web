"use client";
import React, { useState, useEffect, useRef } from 'react';
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
  UploadCloud
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-slate-900/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home', 'top')}
          >
            <img 
              src="/assets/navbarlogo.png" 
              alt="Jared's Computer Care" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home', 'services')} className="text-slate-300 hover:text-white transition-colors text-base font-medium">Services</button>
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
          alt="Jared's Computer Care Background" 
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
              alt="Jared's Computer Care Logo" 
              // Added explicit high-opacity drop shadow
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
                Expert IT Services <br className="hidden md:block" />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 pb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                & Computer Repair
              </span>
            </h1>
            
            <p 
              className="mt-2 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-300 mb-6"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              Fast, reliable support for your home or business. We fix tech headaches so you can get back to what matters.
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
      <Icon className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Computer Repairs & Upgrades",
      description: "Comprehensive diagnostics, hardware repairs, screen replacements, and performance upgrades for both desktops and laptops.",
      icon: Monitor
    },
    {
      title: "Custom PC Builds",
      description: "Expertly assembled custom computers for gaming, video editing, or office productivity, tailored to your budget.",
      icon: Cpu
    },
    {
      title: "Phone Repair",
      description: "Screen replacements, battery swaps, and diagnostics for iPhone and Android devices.",
      icon: Smartphone
    },
    {
      title: "Hardware Procurement",
      description: "Sourcing and setup of bulk computer orders for businesses and schools. We handle the logistics and configuration.",
      icon: Package
    },
    {
      title: "Virus Removal",
      description: "Complete malware detection and removal. We secure your system and protect your personal data from future threats.",
      icon: ShieldCheck
    },
    {
      title: "Computer Cleaning",
      description: "Physical dust removal to prevent overheating, thermal paste re-application, and system optimization.",
      icon: Wind
    },
    {
      title: "Website Development",
      description: "Custom, responsive websites designed to grow your business. From landing pages to full online stores.",
      icon: Globe
    },
    {
      title: "Networking & Wifi",
      description: "Home and office network setup, troubleshooting connectivity issues, and optimizing WiFi range and speed.",
      icon: Wifi
    },
    {
      title: "And Much More",
      description: "Don't see what you need? We probably do it. Call us to discuss your specific technology requirements.",
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
            From cracked screens to complex networks, we have the tools and expertise to handle it all.
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

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 bg-blue-100 rounded-full z-0 opacity-50"></div>
            <div className="relative z-10 bg-slate-900 rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-center gap-4 mb-6">
                 {/* Headshot Image */}
                <img 
                  src="/assets/headshot.png" 
                  alt="Jared Messner" 
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
          </div>
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Jared's Computer Care
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Based right here in Addison County, Vermont, I provide personalized IT support that big box stores just can't match. 
            </p>
            <p className="text-lg text-slate-600 mb-8">
              With years of experience troubleshooting everything from vintage desktops to modern smart home networks, I understand that every tech problem is unique. I treat your devices with the same care I'd treat my own.
            </p>
            
            <div className="space-y-4">
              {[
                "Locally Owned & Operated",
                "Fast Turnaround Times",
                "On-Site & Remote Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-3" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};

const ContactPage = ({ onNavigate }: ContactPageProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
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
              Have a computer problem? Need a quote for a custom build? Fill out the form or use the contact details below. We usually respond within 24 hours.
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
                  <a href="mailto:jaredscomputercare@gmail.com" className="mt-2 block text-blue-600 font-semibold hover:underline">jaredscomputercare@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Service Area</h3>
                  <p className="mt-1 text-slate-600">Mobile Service Available</p>
                  <p className="mt-2 text-slate-900 font-medium">Proudly Serving Addison County, VT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            <form 
              action="https://formsubmit.co/jaredscomputercare@gmail.com" 
              method="POST" 
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Inquiry - Jared's Computer Care" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />

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
                    placeholder="(802) 123-4567"
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
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                  <option>Computer Repairs & Upgrades</option>
                  <option>Custom PC Builds</option>
                  <option>Phone Repair</option>
                  <option>Hardware Procurement</option>
                  <option>Virus Removal</option>
                  <option>Computer Cleaning</option>
                  <option>Website Development</option>
                  <option>Networking & WiFi</option>
                  <option>Other... </option>
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
                    className="hidden" // Hide default input
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
                  placeholder="Briefly describe the request or issue..."
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
              <span>jaredscomputercare@gmail.com</span>
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
          <p>© 2025 Jared's Computer Care. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Based in Middlebury, VT.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    
    // Handle scrolling for anchors on the home page
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
    <div className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services />
            <About />
          </>
        ) : (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}