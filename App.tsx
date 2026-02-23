import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MessageSquare, CheckCircle, ArrowRight, Heart, Users, ShieldCheck, 
  Smile, Zap, Send, Sparkles, LayoutDashboard,
  Lock, UserCircle, MousePointerClick, ChevronLeft, ChevronRight, Clock, Hand, TrendingUp,
  Building2, Mail, User, Briefcase, ChevronDown, BarChart3, Activity, Video, HeartPulse
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Types ---

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- Components ---

const DemoFormModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h2>
              <p className="text-slate-600 mb-8">
                Thank you for your interest in GOQii. One of our wellbeing experts will reach out to you within 24 hours to schedule your demo.
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Demo</h2>
                <p className="text-slate-600">See how GOQii can support your team's wellbeing and engagement.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input required type="text" placeholder="Acme Inc." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Job Title</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="text" placeholder="HR Director" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Company Size</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-4 pr-10 focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all">
                        <option>1-50</option>
                        <option>51-200</option>
                        <option>201-1000</option>
                        <option>1000+</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Submit Request <ArrowRight size={20} /></>
                  )}
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed px-4">
                  By clicking submit, you agree to our terms of service and acknowledge that your data will be handled in accordance with our privacy policy.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onOpenDemo }: { onOpenDemo: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <img 
            src="https://appcdn.goqii.com/storeimg/97203_1771501982.jpg" 
            alt="HealthEngage Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
          <span className="text-lg md:text-2xl font-bold tracking-tight text-slate-900">HealthEngage - Corporate</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenDemo}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
          >
            Request a Demo
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} className="text-slate-600" /> : <Menu size={24} className="text-slate-600" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          <button onClick={() => { onOpenDemo(); setMobileMenuOpen(false); }} className="bg-blue-600 text-white w-full py-3 rounded-full font-semibold">Request a Demo</button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onOpenDemo }: { onOpenDemo: () => void }) => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070" 
        alt="Supportive workplace" 
        className="w-full h-full object-cover brightness-[0.98]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div className="max-w-2xl">
        <span className="inline-block text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 px-4 py-2 bg-blue-50 rounded-full">
          GOQii HEALTH ENGAGE
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
          Supporting People. Strengthening Teams.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-10">
          A simple platform that helps organizations support employees through human-led guidance, everyday actions, and care support — designed for real workdays.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onOpenDemo}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
          >
            Request a Demo <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const TrustMarquee = () => {
  const logos = [
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients5.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients1.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients6.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients7.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients9.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients10.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients17.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients27.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients29.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients41.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients33.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients45.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients46.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients42.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients23.jpg",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/client-public-sector1.png",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/client-public-sector2.png",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/client-public-sector3.png",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/client-public-sector4.png",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/client-public-sector5.png",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/client-public-sector6.png",
    "https://storecdn.goqii.com/media/corporate20211121/assets/images/clients/our-clients19.jpg"
  ];

  return (
    <section className="py-20 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h3 className="text-slate-400 font-bold text-xs uppercase tracking-[0.25em] mb-4">
          TRUSTED BY LEADING ORGANIZATIONS
        </h3>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Helping enterprises, financial institutions, and public sector teams across industries build a culture of wellbeing.
        </p>
      </div>

      <div className="overflow-hidden relative whitespace-nowrap py-4">
        <div className="flex animate-marquee gap-16 items-center">
          {[...logos, ...logos].map((src, idx) => (
            <div key={idx} className="shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img 
                src={src} 
                alt={`Client Logo ${idx}`} 
                className="h-16 md:h-20 w-auto object-contain px-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyGOQii = ({ onOpenDemo }: { onOpenDemo: () => void }) => {
  const points = [
    {
      title: "Trust-Owned",
      bold: "Personal information stays with the employee. Always.",
      desc: "Employees are in control of their own data. GOQii is built on trust, with clear boundaries that respect privacy.",
      icon: <Lock className="text-blue-600" size={28} />,
      bgColor: "bg-blue-100/50",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Human-Led",
      bold: "Guidance from real people, not just messages.",
      desc: "Employees are supported by experienced coaches who understand work challenges. Empathetic and meaningful.",
      icon: <UserCircle className="text-indigo-600" size={28} />,
      bgColor: "bg-indigo-100/50",
      image: "https://appcdn.goqii.com/storeimg/86122_1771502251.jpg"
    },
    {
      title: "Simple Actions",
      bold: "Small habits that fit into busy workdays.",
      desc: "Support delivered through short, practical actions. Simple moments to reset without disrupting work.",
      icon: <MousePointerClick className="text-emerald-600" size={28} />,
      bgColor: "bg-emerald-100/50",
      image: "https://appcdn.goqii.com/storeimg/67213_1771503055.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-blue-600 font-extrabold tracking-widest text-sm uppercase mb-4 block">WHY GOQii</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Built into the Flow of Work</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            GOQii integrates smoothly into everyday work life, enabling employees to engage effortlessly without added complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {points.map((item, idx) => (
            <div key={idx} className="relative rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              <div className="p-10 flex-1">
                <div className={`${item.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="font-bold text-blue-600 text-sm mb-4 tracking-tight uppercase">{item.bold}</p>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-blue-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="text-2xl font-bold text-blue-900 mb-2">Ready to evolve your workplace?</h4>
            <p className="text-blue-700 font-medium">GOQii helps build a culture where support is part of everyday work, not an extra task to manage.</p>
          </div>
          <button 
            onClick={onOpenDemo}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 shrink-0"
          >
            See the Difference
          </button>
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselData = [
    {
      title: "Designed for Real Workdays",
      tagline: "Support that fits into the flow of work",
      desc: "GOQii is built around how people actually work — between meetings, deadlines, and responsibilities. Support is available in small moments, without disrupting productivity.",
      icon: <Clock className="text-blue-600" size={32} />,
      image: "https://appcdn.goqii.com/storeimg/56521_1771503384.jpg"
    },
    {
      title: "Built on Participation, Not Pressure",
      tagline: "Engagement that feels voluntary, not forced",
      desc: "Employees choose how and when they engage. Activities are light, inclusive, and designed to encourage participation without competition or obligation.",
      icon: <Hand className="text-emerald-600" size={32} />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Human Support at the Core",
      tagline: "Real conversations, real guidance",
      desc: "Employees are supported by experienced coaches who understand real work and life challenges. The experience feels human, empathetic, and grounded — not automated.",
      icon: <Users className="text-indigo-600" size={32} />,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&get=80&w=800"
    },
    {
      title: "Simple Actions That Add Up",
      tagline: "Small habits with meaningful impact",
      desc: "GOQii focuses on short, practical actions that take only a few minutes. These small moments help employees manage stress and maintain energy throughout the day.",
      icon: <Zap className="text-amber-600" size={32} />,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Consistency Over Campaigns",
      tagline: "Support that lasts beyond launch day",
      desc: "Rather than one-off events, GOQii encourages consistent engagement over time. This helps support become part of everyday work culture, not just a temporary initiative.",
      icon: <TrendingUp className="text-rose-600" size={32} />,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Respectful by Design",
      tagline: "Privacy and trust come first",
      desc: "Employees remain in control of their personal information. Support is offered in a way that feels safe, respectful, and non-intrusive — building trust across the organization.",
      icon: <Lock className="text-slate-600" size={32} />,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % carouselData.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);

  return (
    <section id="what-we-do" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">People at Work, Made Simple</h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>
              GOQii fits naturally into workdays by focusing on simple actions and human guidance, rather than complex programs or one-time initiatives.
            </p>
          </div>
        </div>

        <div className="relative bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 transition-all duration-500 transform">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  {carouselData[activeSlide].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">{carouselData[activeSlide].title}</h3>
                  <p className="text-blue-600 font-semibold">{carouselData[activeSlide].tagline}</p>
                </div>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                {carouselData[activeSlide].desc}
              </p>
              
              <div className="flex items-center gap-6">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-blue-600">
                  <ChevronLeft />
                </button>
                <div className="flex gap-2">
                  {carouselData.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                    />
                  ))}
                </div>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-blue-600">
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                key={activeSlide}
                src={carouselData[activeSlide].image} 
                alt={carouselData[activeSlide].title}
                className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-2xl text-slate-800 font-medium italic leading-relaxed border-l-4 border-blue-600 pl-8 text-left py-2">
            "The result is a people-first experience that supports employees every day — without complexity, pressure, or disruption."
          </p>
        </div>
      </div>
    </section>
  );
};

const HowGOQiiSupports = () => {
  const categories = [
    {
      title: "Employee Assistance, Coaching & Engagement",
      tagline: "Human support and everyday actions that fit naturally into work life",
      desc: "GOQii brings together confidential support, coaching, and simple daily actions to help employees manage work, life, and routine pressures — without complexity or intrusion.",
      points: [
        "Confidential emotional support (EAP)",
        "One-to-one coaching and guidance",
        "Support for stress and burnout",
        "Everyday lifestyle and routine support",
        "Team activities and shared challenges"
      ],
      icon: <Activity className="text-blue-600" size={32} />,
      color: "bg-blue-50"
    },
    {
      title: "Care & Insurance Support",
      tagline: "Clear guidance and support for care and coverage needs",
      desc: "GOQii helps employees navigate care-related needs and insurance questions with clarity and confidence, supported in a respectful and approachable way.",
      points: [
        "Support for ongoing care needs",
        "Women’s and family support",
        "Recovery and physiotherapy support",
        "Care navigation and guidance",
        "Insurance and claims assistance"
      ],
      icon: <ShieldCheck className="text-purple-600" size={32} />,
      color: "bg-purple-50"
    },
    {
      title: "Business Impact & ROI",
      tagline: "Meaningful outcomes for organizations, without tracking individuals",
      desc: "GOQii is designed to support people in ways that naturally strengthen teams and organizations — while always respecting employee privacy.",
      points: [
        "Stronger employee participation",
        "Better focus and day-to-day energy",
        "Reduced disruption from stress and burnout",
        "Clear visibility for HR on adoption and usage",
        "Alignment between people experience and business goals"
      ],
      icon: <BarChart3 className="text-emerald-600" size={32} />,
      color: "bg-emerald-50"
    }
  ];

  return (
    <section id="approach" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How GOQii Works for Your Workforce</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Added Image Section within this section */}
        <div className="mb-16 rounded-[3rem] overflow-hidden shadow-2xl h-[450px] relative group">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" 
            alt="Supportive Workforce Collaboration" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <p className="text-2xl font-bold max-w-2xl leading-tight">
              An integrated ecosystem that brings together human empathy and practical tools to support your team's everyday needs.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full group">
              <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{cat.title}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-6 leading-snug">{cat.tagline}</p>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {cat.desc}
              </p>
              <ul className="mt-auto space-y-3">
                {cat.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-blue-500 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-xl text-slate-600 font-medium italic border-t border-slate-200 pt-8">
            "One platform that supports people at work — and delivers meaningful value to organizations."
          </p>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const items = [
    { 
      title: "Emotional Space", 
      bold: "Support that feels safe, private, and approachable",
      desc: "Employees have access to confidential support that helps them manage stress, work pressures, and personal challenges. Conversations are human and judgment-free.", 
      icon: <Heart className="text-rose-500" />,
      image: "https://appcdn.goqii.com/storeimg/30975_1771504097.jpg"
    },
    { 
      title: "Lifestyle Rhythm", 
      bold: "Guidance that fits real schedules, not ideal ones",
      desc: "Employees receive practical guidance on sleep, energy, movement, and daily habits — designed to fit into busy workdays. Support adapts to how people live.", 
      icon: <Zap className="text-amber-500" />,
      image: "https://appcdn.goqii.com/storeimg/66712_1771504222.jpg"
    },
    { 
      title: "Team Connection", 
      bold: "Shared moments that bring people together",
      desc: "Light, low-pressure challenges and activities help teams connect naturally — whether they work remotely or in-office. This builds a sense of belonging.", 
      icon: <Users className="text-blue-500" />,
      image: "https://appcdn.goqii.com/storeimg/88320_1771504506.jpg"
    },
    { 
      title: "Curated Wisdom", 
      bold: "Clear guidance in a noisy world",
      desc: "Employees are guided by expert-led content that simplifies complex topics and filters out trends. Information is practical, relevant, and easy to apply.", 
      icon: <LayoutDashboard className="text-indigo-500" />,
      image: "https://appcdn.goqii.com/storeimg/16878_1771504536.jpg"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-100">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 text-balance">What Employees Experience</h2>
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Support That Fits into Everyday Work</h3>
        <p className="text-slate-600 leading-relaxed">
          GOQii is designed around real workdays — busy schedules, shifting priorities, and everyday pressures. The experience feels human, supportive, and easy to be part of.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl">
            <div className="h-48 w-full overflow-hidden relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="font-semibold text-slate-800 text-sm mb-3 leading-snug">{item.bold}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CoachingSection = () => (
  <section className="py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Virtual Coaching & Long-Term Health Programs</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          GOQii extends everyday support through live, guided sessions and focused programs that help employees build strength, consistency, and healthier routines over time.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group overflow-hidden flex flex-col">
          <div className="h-64 w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" alt="Virtual Coaching" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
          <div className="p-10 flex-1">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
              <Video className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Virtual Coaching</h3>
            <p className="text-blue-600 font-semibold mb-6">Live, guided sessions employees can join from anywhere</p>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
              Employees can take part in live virtual sessions led by experienced coaches. Sessions are designed to fit busy schedules and support everyday movement, focus, and balance — without pressure or performance expectations.
            </p>
            <ul className="space-y-4">
              {[
                "Live fitness classes including cardio and strength training",
                "Guided yoga and flexibility sessions",
                "Meditation and breathing practices for focus and calm",
                "Easy access from home or the workplace"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                  <CheckCircle className="text-blue-500 shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group overflow-hidden flex flex-col">
          <div className="h-64 w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" alt="Health Support" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
          <div className="p-10 flex-1">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
              <HeartPulse className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Long-Term Health Support</h3>
            <p className="text-indigo-600 font-semibold mb-6">Structured support for ongoing health goals</p>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
              GOQii offers focused programs to support employees managing long-term health challenges. These programs emphasize consistency, guidance, and practical lifestyle changes that employees can sustain over time.
            </p>
            <ul className="space-y-4">
              {[
                "Weight management and healthy routine support",
                "Obesity management through guided programs",
                "Support for managing long-term conditions",
                "Lifestyle coaching focused on daily habits"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                  <CheckCircle className="text-indigo-500 shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { 
      num: "01", 
      title: "Assessment", 
      tagline: "Understanding people, not profiling them",
      desc: "We begin with a simple, respectful assessment to understand employee needs, preferences, and everyday challenges — without being intrusive or overwhelming." 
    },
    { 
      num: "02", 
      title: "Recommendations", 
      tagline: "Personal guidance that makes sense",
      desc: "Based on individual inputs, employees receive clear and practical recommendations — simple actions, guidance, and support that fit naturally into their workday." 
    },
    { 
      num: "03", 
      title: "Participation", 
      tagline: "Everyday actions that build consistency",
      desc: "Employees choose how they participate — through activities, guidance, and support at their own pace. Over time, these small actions become part of everyday work culture." 
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">How GOQii Works</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-slate-800 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-8 shadow-2xl">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-blue-400 font-semibold mb-4 leading-tight">{step.tagline}</p>
              <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HRSection = () => (
  <section id="leadership" className="py-24 max-w-7xl mx-auto px-6 bg-white">
    <div className="bg-blue-600 rounded-[3rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
      <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 leading-tight">Designed for HR and Leadership Teams</h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          GOQii helps organizations support employee wellbeing without adding complexity.
        </p>
        <ul className="space-y-4">
          {[
            "Simple rollout", 
            "Easy participation", 
            "One platform for multiple needs", 
            "Clear engagement visibility", 
            "Employee privacy respected"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-lg text-blue-50">
              <CheckCircle className="text-blue-200 shrink-0" size={24} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-blue-700/50 p-20 flex items-center justify-center relative">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
          alt="HR Manager" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <Building2 size={200} className="text-white relative z-10 opacity-40" />
      </div>
    </div>
  </section>
);

const EAPSection = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-100">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-8">Support That Fits Your Workplace</h2>
      <p className="text-2xl text-slate-600 leading-relaxed italic">
        "GOQii brings together employee assistance, everyday activities, and human support into one simple experience — making it easier for employees to seek help and for organizations to offer meaningful initiatives."
      </p>
    </div>
  </section>
);

const WhoWeWorkWith = () => {
  const industries = [
    "Enterprises and corporate teams",
    "Financial services and insurers",
    "Manufacturing and industrial organizations",
    "Media and creative companies",
    "Public sector and institutions"
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Who We Work With</h2>
          <div className="grid gap-4">
            {industries.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xl font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 rounded-[3rem] p-20 flex items-center justify-center relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
            alt="Corporate Office" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <Users size={180} className="text-slate-200 relative z-10" />
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onOpenDemo }: { onOpenDemo: () => void }) => (
  <section className="py-32 relative overflow-hidden bg-blue-600">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
      <h2 className="text-5xl font-bold mb-6">Let’s Build a Healthier Workforce</h2>
      <p className="text-2xl text-blue-100 mb-12">
        See how GOQii can support your employees and create a healthier, more engaged workplace.
      </p>
      <button 
        onClick={onOpenDemo}
        className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl"
      >
        Request a Demo
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-slate-900 text-slate-400">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="https://appcdn.goqii.com/storeimg/97203_1771501982.jpg" 
            alt="HealthEngage Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="text-2xl font-bold tracking-tight text-white">HealthEngage</span>
        </div>
        <p className="text-sm leading-relaxed">
          The workplace wellbeing platform for modern organizations. Simple, engaging, and effective support for your entire team.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Platform</h4>
        <ul className="space-y-4 text-sm">
          <li><a href="#" className="hover:text-blue-400 transition-colors">Emotional Wellbeing</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Physical Health</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Team Challenges</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm">
          <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Resources</h4>
        <ul className="space-y-4 text-sm">
          <li><a href="#" className="hover:text-blue-400 transition-colors">HR Toolkit</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-slate-800 text-xs flex flex-col md:row items-center justify-between gap-4">
      <p>© {new Date().getFullYear()} GOQii Technologies Private Limited. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
      </div>
    </div>
  </footer>
);

const DemoAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the GOQii Demo Assistant. Your goal is to help HR leaders understand GOQii's enterprise platform.
          CORE PRINCIPLES:
          - Write in plain English.
          - Avoid medical or clinical language.
          - Avoid statistics, ROI numbers, and testimonials.
          - Focus on approach, experience, and simplicity.
          - Friendly, professional, enterprise-ready tone.
          - Keep answers brief and easy to scan.
          - If someone asks for a demo, tell them to click the 'Request a Demo' button on the page.`,
        },
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. How can I help with GOQii?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a bit of trouble right now. Please try again or use the demo request button!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={20} />
              <span className="font-bold">GOQii Demo Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <MessageSquare size={32} />
                </div>
                <p className="text-slate-600 font-medium">Hello! How can I help you learn about GOQii's workplace wellbeing solutions today?</p>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 p-3 rounded-2xl flex gap-1 items-center">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..." 
              className="flex-1 bg-slate-50 border-none rounded-full px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce-slow"
        >
          <MessageSquare size={32} />
        </button>
      )}
    </div>
  );
};

// --- App Root ---

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemo = () => setIsDemoModalOpen(true);
  const hideDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar onOpenDemo={openDemo} />
      <main>
        <Hero onOpenDemo={openDemo} />
        <TrustMarquee />
        <WhyGOQii onOpenDemo={openDemo} />
        <WhatWeDo />
        <HowGOQiiSupports />
        <Experience />
        <CoachingSection />
        <HowItWorks />
        <HRSection />
        <EAPSection />
        <WhoWeWorkWith />
        <FinalCTA onOpenDemo={openDemo} />
      </main>
      <Footer />
      <DemoAssistant />
      <DemoFormModal isOpen={isDemoModalOpen} onClose={hideDemo} />
    </div>
  );
}
