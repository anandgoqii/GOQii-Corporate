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
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    companySize: '',
    interests: [] as string[],
    role: '',
    notes: ''
  });

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        companyName: '',
        companySize: '',
        interests: [],
        role: '',
        notes: ''
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const companySizes = ['1–50', '51–200', '201–1,000', '1,000+'];
  const interestOptions = [
    'Employee Assistance & Coaching',
    'Lifestyle & Everyday Habits',
    'Virtual Coaching & Fitness',
    'Chronic Care & Long-Term Health',
    'Gamification & Rewards',
    'Insurance & Care Navigation'
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-8 animate-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h2>
              <p className="text-slate-600 mb-8">
                Thanks — our team will reach out with a demo tailored to your needs.
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="relative">
              {/* Progress Indicator */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Step {step} of 4</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-6 bg-blue-600' : i < step ? 'w-2 bg-blue-300' : 'w-2 bg-slate-200'}`} />
                  ))}
                </div>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Let’s start with you</h2>
                    <p className="text-slate-600">Tell us a bit about who you are.<br/>This helps us tailor the demo to your workplace.</p>
                  </div>

                  <form onSubmit={handleNext} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="First & Last Name" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="you@company.com" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900" 
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-green-500" /> We’ll never spam you.
                      </span>
                      <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center gap-2"
                      >
                        Next <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <div className="mb-8">
                    <button onClick={handleBack} className="text-slate-400 hover:text-slate-600 mb-4 flex items-center gap-1 text-sm font-medium transition-colors">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">About your organization</h2>
                    <p className="text-slate-600">Help us understand your workplace.</p>
                  </div>

                  <form onSubmit={handleNext} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Company Name" 
                        value={formData.companyName}
                        onChange={e => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900" 
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Company Size <span className="text-slate-400 font-normal ml-1">(Select one)</span></label>
                      <div className="grid grid-cols-2 gap-3">
                        {companySizes.map(size => (
                          <div 
                            key={size}
                            onClick={() => setFormData({...formData, companySize: size})}
                            className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all duration-200 ${
                              formData.companySize === size 
                                ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                                : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              formData.companySize === size ? 'border-blue-500' : 'border-slate-300'
                            }`}>
                              {formData.companySize === size && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-in zoom-in duration-200" />}
                            </div>
                            <span className={`font-medium ${formData.companySize === size ? 'text-blue-700' : 'text-slate-700'}`}>{size}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button 
                        type="submit" 
                        disabled={!formData.companySize}
                        className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <div className="mb-6">
                    <button onClick={handleBack} className="text-slate-400 hover:text-slate-600 mb-4 flex items-center gap-1 text-sm font-medium transition-colors">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">What are you exploring right now?</h2>
                    <p className="text-slate-600">Select what’s most relevant. You can choose more than one.</p>
                  </div>

                  <form onSubmit={handleNext} className="space-y-6">
                    <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                      {interestOptions.map(option => {
                        const isSelected = formData.interests.includes(option);
                        return (
                          <div 
                            key={option}
                            onClick={() => toggleInterest(option)}
                            className={`cursor-pointer border rounded-xl p-3.5 flex items-center gap-3 transition-all duration-200 ${
                              isSelected 
                                ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                                : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                              isSelected ? 'bg-blue-500 border-blue-500' : 'border-slate-300 bg-white'
                            }`}>
                              {isSelected && <CheckCircle size={14} className="text-white animate-in zoom-in duration-200" />}
                            </div>
                            <span className={`font-medium text-sm ${isSelected ? 'text-blue-700' : 'text-slate-700'}`}>{option}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center gap-2"
                      >
                        Next <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                  <div className="mb-8">
                    <button onClick={handleBack} className="text-slate-400 hover:text-slate-600 mb-4 flex items-center gap-1 text-sm font-medium transition-colors">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Almost done</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Role</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="HR / People Ops / Benefits / Leadership / Other" 
                        value={formData.role}
                        onChange={e => setFormData({...formData, role: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900" 
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">Anything specific you’d like us to cover? <span className="text-slate-400 font-normal">(Optional)</span></label>
                      <textarea 
                        rows={3}
                        placeholder="Tell us a bit more..." 
                        value={formData.notes}
                        onChange={e => setFormData({...formData, notes: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 resize-none" 
                      />
                    </div>

                    <div className="pt-4">
                      <button 
                        disabled={loading}
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>🎉 Request My Demo</>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onOpenDemo, setCurrentPage }: { onOpenDemo: () => void, setCurrentPage: (page: string) => void }) => {
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
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <img 
            src="https://appcdn.goqii.com/storeimg/17315_1772198483.png" 
            alt="HealthEngage Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto object-contain" 
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenDemo}
            className="hidden md:block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
          >
            Request a Demo
          </button>
          <button className="md:hidden p-2 -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
      tagline: "Healthy habits that fit into the flow of work",
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-scroll every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

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
      tagline: "Human support that fits into everyday work life",
      desc: "GOQii provides confidential guidance, practical coaching, and simple daily habits that help employees manage work and life — without complexity.",
      points: [
        "Confidential emotional support (EAP)",
        "1:1 personal & work coaching",
        "Stress & burnout management",
        "Daily lifestyle guidance",
        "Team challenges & shared activities"
      ],
      icon: <Users className="text-blue-600" size={32} strokeWidth={1.5} />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100/50"
    },
    {
      title: "Chronic Care",
      tagline: "Clear guidance for long-term health needs",
      desc: "GOQii helps employees manage ongoing conditions and insurance queries with clarity and confidence.",
      points: [
        "Diabetes & obesity programs",
        "Weight & routine management",
        "Women’s & family health",
        "Recovery & physiotherapy guidance",
        "Insurance & claims assistance"
      ],
      icon: <ShieldCheck className="text-purple-600" size={32} strokeWidth={1.5} />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100/50"
    },
    {
      title: "Business Impact & ROI",
      tagline: "Measurable outcomes — with full employee privacy",
      desc: "GOQii strengthens teams through engagement and participation while respecting individual confidentiality.",
      points: [
        "Higher program participation",
        "Improved focus & daily energy",
        "Reduced stress-related disruption",
        "Clear HR visibility on adoption",
        "Better alignment between wellbeing & performance"
      ],
      icon: <TrendingUp className="text-emerald-600" size={32} strokeWidth={1.5} />,
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100/50"
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
              An integrated ecosystem that brings together human empathy and practical tools to enable your team's everyday needs.
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
            "Supporting employees through life’s pressures—so they can thrive at work and beyond."
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
      bold: "Space that feels safe, private, and approachable",
      desc: "Employees have access to confidential conversations that help them manage stress, work pressures, and personal challenges. Conversations are human, respectful, and judgment-free.", 
      icon: <Heart className="text-rose-500" />,
      image: "https://appcdn.goqii.com/storeimg/30975_1771504097.jpg"
    },
    { 
      title: "Lifestyle Rhythm", 
      bold: "Guidance that fits real schedules, not ideal ones",
      desc: "Employees receive practical guidance on sleep, energy, movement, and daily habits — designed to fit into busy workdays. The experience adapts to how people actually live and work.", 
      icon: <Zap className="text-amber-500" />,
      image: "https://appcdn.goqii.com/storeimg/66712_1771504222.jpg"
    },
    { 
      title: "Team Connection", 
      bold: "Shared moments that bring people together",
      desc: "Light, low-pressure challenges and activities help teams connect naturally — whether they work remotely or in-office. These shared moments build a sense of belonging across teams.", 
      icon: <Users className="text-blue-500" />,
      image: "https://appcdn.goqii.com/storeimg/88320_1771504506.jpg"
    },
    { 
      title: "Curated Wisdom", 
      bold: "Clear guidance in a noisy world",
      desc: "Employees are guided by expert-led content that simplifies complex topics and filters out trends. Information is practical, relevant, and easy to apply.", 
      icon: <LayoutDashboard className="text-indigo-500" />,
      image: "https://appcdn.goqii.com/storeimg/16878_1771504536.jpg"
    },
    { 
      title: "Virtual Coaching", 
      bold: "Live, guided sessions employees can join from anywhere",
      desc: "Employees can take part in live virtual sessions led by experienced coaches. Sessions are designed to fit busy schedules and support everyday movement, focus, and balance — without pressure or performance expectations.", 
      icon: <Video className="text-blue-500" />,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
      bullets: [
        "Live fitness classes including cardio and strength training",
        "Guided yoga and flexibility sessions",
        "Meditation and breathing practices for focus and calm",
        "Easy access from home or the workplace"
      ]
    },
    { 
      title: "Long-Term Health Programs", 
      bold: "Structured guidance for ongoing health goals",
      desc: "GOQii offers focused programs to help employees manage long-term health challenges. These programs emphasize consistency, guidance, and practical lifestyle changes that can be sustained over time.", 
      icon: <HeartPulse className="text-indigo-500" />,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      bullets: [
        "Weight management and healthy routine support",
        "Obesity management through guided programs",
        "Support for managing long-term conditions",
        "Lifestyle coaching focused on daily habits"
      ]
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-100">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 text-balance">What Employees Experience</h2>
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Healthy Habits that Fit into Everyday Work</h3>
        <p className="text-slate-600 leading-relaxed">
          GOQii is designed around real workdays — busy schedules, shifting priorities, and everyday pressures. The experience feels human, approachable, and easy to be part of.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {item.bullets && (
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                      <CheckCircle className="text-blue-500 shrink-0 mt-0.5" size={14} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const GamificationSection = () => {
  const points = [
    "Participation-led challenges that are easy to join",
    "Points and milestones that recognize regular involvement",
    "Rewards aligned with healthy routines and positive habits",
    "Inclusive design suitable for all roles, ages, and fitness levels",
    "No forced competition or public comparisons"
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Gamification & Rewards</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Encouraging Participation Through Everyday Motivation</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              GOQii HealthEngage uses light gamification and meaningful rewards to encourage regular participation — making everyday actions more engaging without creating pressure or unhealthy competition.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Rather than focusing on winners or rankings, the approach is designed to recognize consistency, effort, and involvement across the workforce.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-6">How It Works</h4>
              <ul className="space-y-4">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden flex flex-col h-full">
              <div className="h-64 w-full relative">
                <img 
                  src="https://picsum.photos/seed/gamification/800/600?blur=2" 
                  alt="Gamification in Workplace" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-10 relative bg-white flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-8 -mt-16 relative z-10 shadow-lg border-4 border-white">
                  <Sparkles size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Designed for Workplaces</h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Gamification in GOQii HealthEngage is built to fit naturally into work life — motivating employees quietly and consistently, while helping organizations drive sustained participation across programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
        <h2 className="text-4xl font-bold mb-16">How GOQii Comes Together in Three Steps</h2>
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

const BusinessImpactSection = () => {
  const impacts = [
    {
      title: "Higher Employee Participation",
      stat: "30–50%",
      desc: "Participation grows steadily as programs fit naturally into everyday work.",
      color: "blue"
    },
    {
      title: "Improved Habit Consistency",
      stat: "20–40%",
      desc: "Employees are more likely to maintain routines when actions remain simple and achievable.",
      color: "emerald"
    },
    {
      title: "Reduced Stress-Related Disruption",
      stat: "15–30%",
      desc: "Regular access to guidance helps teams stay balanced and focused.",
      color: "amber"
    },
    {
      title: "Stronger Program Engagement",
      stat: "25–45%",
      desc: "Gamification and challenges drive ongoing participation across teams.",
      color: "purple"
    },
    {
      title: "Clear Visibility for HR",
      stat: "Clear Insights",
      desc: "Adoption and usage trends are visible in aggregate — without individual-level tracking.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'emerald': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'amber': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'purple': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'orange': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Business Impact & ROI</h2>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Clear outcomes organizations can see and measure</h3>
          <p className="text-slate-600 leading-relaxed">
            Aggregated insights based on participation and program usage — without individual tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-[2rem] border transition-all hover:shadow-lg flex flex-col h-full ${getColorClasses(item.color)}`}
            >
              <div className="mb-6">
                <span className="text-4xl font-black tracking-tight opacity-90">{item.stat}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-700 leading-relaxed flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Easy to roll out and easy for employees to use",
      text: "GOQii HealthEngage blended seamlessly into our workplace. Employees found it approachable, and participation grew without the need for constant reminders.",
      author: "HR Leader",
      company: "Global Enterprise"
    },
    {
      quote: "Human-led and respectful of privacy",
      text: "What stood out was the human guidance and the clear focus on employee privacy. It felt supportive without being intrusive.",
      author: "People & Culture Head",
      company: "Financial Services Organization"
    },
    {
      quote: "A practical platform that works in real workdays",
      text: "The platform focuses on small, consistent actions rather than big programs. That made a real difference in sustained participation.",
      author: "Benefits Manager",
      company: "Manufacturing Organization"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">What Organizations Say About GOQii HealthEngage</h2>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Trusted by teams across industries</h3>
          <p className="text-slate-600 leading-relaxed">
            Organizations choose GOQii HealthEngage for its people-first approach, ease of adoption, and ability to fit naturally into everyday work life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full relative">
              <div className="text-blue-500 mb-6 opacity-20">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.592C16.63 13.98 16.74 13.332 16.74 12.672V3H22V12.672C22 15.684 20.89 18.576 18.72 20.724L14.017 21ZM3.017 21L5.41 14.592C5.63 13.98 5.74 13.332 5.74 12.672V3H11V12.672C11 15.684 9.89 18.576 7.72 20.724L3.017 21Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 leading-snug">“{item.quote}”</h4>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {item.text}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="font-bold text-slate-900">{item.author}</p>
                <p className="text-sm text-slate-500">{item.company}</p>
              </div>
            </div>
          ))}
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

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <footer className="py-16 bg-slate-900 text-slate-400">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <div 
          className="flex items-center gap-3 mb-6 cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <img 
            src="https://appcdn.goqii.com/storeimg/25673_1772198622.png" 
            alt="HealthEngage Logo" 
            className="h-10 w-auto object-contain" 
          />
        </div>
        <p className="text-sm leading-relaxed">
          The workplace wellbeing platform for modern organizations. Simple, engaging, and effective support for your entire team.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Platform</h4>
        <ul className="space-y-4 text-sm">
          <li><button onClick={() => setCurrentPage('emotional-wellbeing')} className="hover:text-blue-400 transition-colors text-left">Emotional Wellbeing</button></li>
          <li><button onClick={() => setCurrentPage('physical-health')} className="hover:text-blue-400 transition-colors text-left">Physical Health</button></li>
          <li><button onClick={() => setCurrentPage('team-challenges')} className="hover:text-blue-400 transition-colors text-left">Team Challenges</button></li>
          <li><button onClick={() => setCurrentPage('integrations')} className="hover:text-blue-400 transition-colors text-left">Integrations</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm">
          <li><button onClick={() => setCurrentPage('about-us')} className="hover:text-blue-400 transition-colors text-left">About Us</button></li>
          <li><button onClick={() => setCurrentPage('careers')} className="hover:text-blue-400 transition-colors text-left">Careers</button></li>
          <li><button onClick={() => setCurrentPage('privacy-policy')} className="hover:text-blue-400 transition-colors text-left">Privacy Policy</button></li>
          <li><button onClick={() => setCurrentPage('security')} className="hover:text-blue-400 transition-colors text-left">Security</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Resources</h4>
        <ul className="space-y-4 text-sm">
          <li><button onClick={() => setCurrentPage('hr-toolkit')} className="hover:text-blue-400 transition-colors text-left">HR Toolkit</button></li>
          <li><button onClick={() => setCurrentPage('case-studies')} className="hover:text-blue-400 transition-colors text-left">Case Studies</button></li>
          <li><button onClick={() => setCurrentPage('help-center')} className="hover:text-blue-400 transition-colors text-left">Help Center</button></li>
          <li><button onClick={() => setCurrentPage('contact-support')} className="hover:text-blue-400 transition-colors text-left">Contact Support</button></li>
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

import { ContentPage } from './content';

// --- App Root ---

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const openDemo = () => setIsDemoModalOpen(true);
  const hideDemo = () => setIsDemoModalOpen(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar onOpenDemo={openDemo} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onOpenDemo={openDemo} />
            <TrustMarquee />
            <WhyGOQii onOpenDemo={openDemo} />
            <WhatWeDo />
            <HowGOQiiSupports />
            <Experience />
            <GamificationSection />
            <HowItWorks />
            <EAPSection />
            <BusinessImpactSection />
            <TestimonialSection />
            <FinalCTA onOpenDemo={openDemo} />
          </>
        ) : (
          <ContentPage pageId={currentPage} />
        )}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <DemoAssistant />
      <DemoFormModal isOpen={isDemoModalOpen} onClose={hideDemo} />
    </div>
  );
}
