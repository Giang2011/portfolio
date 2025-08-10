'use client';

import { useEffect, useState } from 'react';
import {
  UserIcon,
  LightBulbIcon,
  InformationCircleIcon,
  CalendarIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  HeartIcon,
  DocumentArrowDownIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PlayCircleIcon,
  LinkIcon,
  DocumentMagnifyingGlassIcon,
  // ...existing code...
} from '@heroicons/react/24/outline';
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiLaravel } from 'react-icons/si';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('projects');
  const [certificateImage, setCertificateImage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true); // Đánh dấu đã ở client
    
    // Ẩn loading screen sau 3 giây
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Add animation class when section comes into view
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Animation observer for scroll-triggered animations
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          entry.target.classList.remove('animate-hidden');
        } else {
          entry.target.classList.remove('animate-visible');
          entry.target.classList.add('animate-hidden');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Delay để đảm bảo DOM đã render
    const setupAnimations = () => {
      // Observe all sections
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      // Observe all animatable elements
      const animatableElements = document.querySelectorAll('.scroll-animate');
      animatableElements.forEach((element) => animationObserver.observe(element));
    };

    // Setup animations after a short delay
    setTimeout(setupAnimations, 100);

    return () => {
      clearTimeout(loadingTimer);
      const sections = document.querySelectorAll('section[id]');
      const animatableElements = document.querySelectorAll('.scroll-animate');
      sections.forEach((section) => observer.unobserve(section));
      animatableElements.forEach((element) => animationObserver.unobserve(element));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'My Work' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              {/* Welcome text với animation */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  Welcome
                </span>
                <span className="inline-block ml-4 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                  to
                </span>
                <span className="inline-block ml-4 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
                  my
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
                Portfolio
              </h2>
              
              {/* Loading dots */}
              <div className="flex justify-center mt-8 space-x-2 animate-fade-in-up" style={{ animationDelay: '2.5s', animationFillMode: 'both' }}>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Portfolio Content */}
      <div className={`min-h-screen bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-cyan-50/80 transition-opacity duration-1000 relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Social Icons - Fixed Left */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-4">
          {[
            {
              name: 'GitHub',
              url: 'https://github.com/Giang2011',
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-black">
                  <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              )
            },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/giang-nguy%E1%BB%85n-7b4052307/',
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-700">
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
              )
            },
            {
              name: 'Facebook',
              url: 'https://facebook.com',
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                  <path fill="currentColor" d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z"/>
                </svg>
              )
            },
            {
              name: 'Instagram',
              url: 'https://instagram.com',
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-500">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.947s.011-3.584.069-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.637.334-3.608 1.308-.974.974-1.25 2.241-1.308 3.608-.058 1.266-.069 1.646-.069 4.947s.011 3.584.069 4.85c.058 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.947.069s3.667-.011 4.947-.069c1.276-.062 2.637-.334 3.608-1.308.974-.974 1.25-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.011-3.584-.069-4.851c-.058-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.25-3.608-1.308-1.266-.058-1.646-.069-4.947-.069zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              )
            },
            {
              name: 'Twitter',
              url: 'https://twitter.com',
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-sky-500">
                  <path fill="currentColor" d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482c-4.083-.205-7.697-2.162-10.126-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/>
                </svg>
              )
            }
          ].map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:scale-110 social-icon animate-fade-in-up opacity-0"
              title={social.name}
              style={{ animationDelay: `${1.5 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Navigation - Compact */}
      <nav className="fixed top-6 right-6 z-50">
        {/* Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg animate-fade-in-up opacity-0"
          style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Slide Menu */}
        <div className={`absolute top-16 right-0 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform -translate-y-4 scale-95 pointer-events-none'
        }`}>
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                  activeSection === item.id ? 'bg-blue-500 text-white' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center text-center px-4 ${isClient ? 'animate-in' : ''}`}>
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl animate-float">
            G
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 animate-gradient-text">Giang</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            Information Technology student from Hanoi, Vietnam
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg animate-pulse-custom opacity-0"
            style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
          >
            Learn More About Me
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tiêu đề About Me */}
          <div className="text-center mb-16 animate-fade-in-up opacity-0 scroll-animate" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600 mt-2">
              Discover my journey, passions, and the story behind my work
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="order-1 md:order-1 animate-slide-in-left opacity-0 scroll-animate" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="w-96 h-96 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform animate-gentle-bounce">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="order-2 md:order-2 space-y-8 animate-slide-in-right opacity-0 scroll-animate" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              {/* Who Am I Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-card-hover scroll-animate">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Who Am I</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mình là Nguyễn Thái Giang. Hiện tại mình là sinh viên năm 3 
                  ngành Công nghệ Thông tin Việt Nhật tại Đại học Bách Khoa Hà Nội.
                </p>
              </div>

              {/* My Approach Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-card-hover scroll-animate">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <LightBulbIcon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">My Approach</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mình muốn trở thành một data science, tập trung vào việc phân tích dữ liệu và học máy để tạo ra những giải pháp thông minh.
                </p>
              </div>

              {/* Personal Info Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-card-hover scroll-animate">
                <div className="flex items-center gap-3 mb-6">
                  <InformationCircleIcon className="w-6 h-6 text-cyan-500" />
                  <h3 className="text-xl font-bold text-gray-800">Personal Info</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Name:</p>
                      <p className="font-medium text-gray-800">Nguyễn Thái Giang</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <CalendarIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth:</p>
                      <p className="font-medium text-gray-800">November 20, 2005</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <MapPinIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Place of Birth:</p>
                      <p className="font-medium text-gray-800">Bac Ninh, Vietnam</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <EnvelopeIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email:</p>
                      <p className="font-medium text-gray-800">giang197719742002@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <PhoneIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone:</p>
                      <p className="font-medium text-gray-800">+84 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <AcademicCapIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Education:</p>
                      <p className="font-medium text-gray-800">University of Science and Technology</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sở thích Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-card-hover scroll-animate">
                <div className="flex items-center gap-3 mb-6">
                  <HeartIcon className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-800">Passion</h3>
                </div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-medium text-gray-800">
                      Mình thích lập trình, học hỏi công nghệ mới và giải quyết các bài toán phức tạp. 
                      Ngoài ra, mình còn đam mê thể thao. Mình tin rằng việc rèn luyện sức khỏe đem lại cho mình tinh thần và năng lượng tích cực để làm việc hiệu quả hơn.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="pt-4 scroll-animate">
                <button className="w-full bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                  <DocumentArrowDownIcon className="w-5 h-5 text-gray-700" />
                  Download My Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up opacity-0 scroll-animate" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Portfolio Showcase</h2>
            <p className="text-lg text-gray-600">
              Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 animate-slide-up opacity-0 scroll-animate" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="bg-gray-200/70 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
              {[
                { label: 'Projects', value: 'projects' },
                { label: 'Certificates', value: 'certificates' },
                { label: 'Tech Stack', value: 'techstack' }
              ].map((tab, index) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.value 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {index === 0 && <DocumentTextIcon className="w-5 h-5" />}
                    {index === 1 && <CheckBadgeIcon className="w-5 h-5" />}
                    {index === 2 && <WrenchScrewdriverIcon className="w-5 h-5" />}
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Tab */}
          {(activeTab === 'projects') && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Stock App",
                  description: "Stock App là ứng dụng web cho phép người dùng theo dõi và quản lý danh mục đầu tư chứng khoán của mình một cách dễ dàng.",
                  image: "bg-gradient-to-br from-blue-400 to-purple-400",
                  tech: ["Javafx", "Python", "sqlite", "Alpha Vantage API"]
                },
                {
                  title: "GoEasy",
                  description: "GoEasy là một sản phẩm gợi ý lộ trình du lịch thông minh, kết hợp với api gemini để tạo ra lộ trình du lịch phù hợp với sở thích và nhu cầu của người dùng.",
                  image: "bg-gradient-to-br from-purple-400 to-blue-400",
                  tech: ["Next.js", "TypeScript", "MySQL", "Express", "Opentripmap API", "Gemini API"]
                },
                {
                  title: "Coffee Shop",
                  description: "Ứng dụng bán hàng trực tuyến cho quán cà phê, cho phép người dùng đặt hàng và thanh toán trực tuyến.",
                  image: "bg-gradient-to-br from-gray-500 to-gray-700",
                  tech: ["React", "Laravel php", "MySQL"]
                },
              ].map((project, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-up opacity-0 scroll-animate" style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                  <div className={`h-48 ${project.image} rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform animate-gradient-shift`}>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <PlayCircleIcon className="w-10 h-10 text-white/80" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech && project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors animate-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "HTML + CSS + Bootstrap: The Beginner's Guide",
                  issuer: "udemy",
                  date: "2025",
                  description: "Foundational understanding of HTML, CSS, and Bootstrap for web development",
                  image: "/certificates/html-css-bootstrap.jpg"
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-yellow-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-up opacity-0 scroll-animate" style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-3xl text-white">
                      <CheckBadgeIcon className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
                      <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{cert.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-600 text-sm font-medium">{cert.date}</span>
                    <button
                      className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium flex items-center gap-1"
                      onClick={() => setCertificateImage(cert.image)}
                    >
                      <DocumentMagnifyingGlassIcon className="w-4 h-4" /> View Certificate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'techstack' && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                { name: 'HTML', color: 'from-orange-500 to-red-500' },
                { name: 'CSS', color: 'from-blue-500 to-cyan-500' },
                { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
                { name: 'Laravel PHP', color: 'from-red-600 to-orange-600' },
                { name: 'Python', color: 'from-blue-500 to-blue-700' },
                { name: 'React', color: 'from-cyan-400 to-blue-500' },
                { name: 'Node.js', color: 'from-green-600 to-emerald-600' }
              ].map((tech, index) => (
                <div key={index} className="group scroll-animate animate-fade-in-up opacity-0" style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'forwards' }}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-cyan-500/50 transition-all duration-300 text-center shadow-lg">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform border border-gray-200">
                      {tech.name === 'HTML' && <FaHtml5 className="w-10 h-10 text-orange-500" />}
                      {tech.name === 'CSS' && <FaCss3Alt className="w-10 h-10 text-blue-500" />}
                      {tech.name === 'JavaScript' && <SiJavascript className="w-10 h-10 text-yellow-400" />}
                      {tech.name === 'Laravel PHP' && <SiLaravel className="w-10 h-10 text-red-600" />}
                      {tech.name === 'Python' && <FaPython className="w-10 h-10 text-blue-600" />}
                      {tech.name === 'React' && <FaReact className="w-10 h-10 text-cyan-400" />}
                      {tech.name === 'Node.js' && <FaNodeJs className="w-10 h-10 text-green-600" />}
                    </div>
                    <h3 className="text-gray-800 font-bold mb-2">{tech.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 animate-fade-in-up opacity-0 scroll-animate" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>My Work</h2>
          <div className="flex flex-col gap-8 w-full">
            {[
              {
                title: "Sinno Innovation Club",
                description: "Sinno Innovation Club là một tổ chức sinh viên tại trường Đại học Bách Khoa Hà Nội, nơi sinh viên có thể tham gia vào các dự án công nghệ và khởi nghiệp.",
                position: "Ban Khởi Nghiệp",
                image: "/image.png"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 w-full hover:scale-105 transition-all duration-300 group shadow-lg flex items-center gap-6 animate-slide-in-left opacity-0 hover:shadow-xl scroll-animate" style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}>
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center animate-gentle-bounce">
                  <img src={project.image} alt={project.title + ' image'} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold animate-tech-badge">{project.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 scroll-animate">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                degree: "Bachelor of Information Technology",
                school: "Hanoi University of Science and Technology",
                period: "2023 - Present",
                description: "Focused on software engineering, algorithms, and data structures. Graduated with honors and completed thesis on machine learning applications.",
                achievements: ["Outstanding Student Award"]
              }
            ].map((edu, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:bg-white/90 transition-all duration-300 shadow-lg scroll-animate">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                  <span className="text-blue-600 font-medium">{edu.period}</span>
                </div>
                <h4 className="text-xl text-blue-700 mb-3">{edu.school}</h4>
                <p className="text-gray-600 mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <span key={achievement} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 scroll-animate">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto scroll-animate">
            I&apos;m always interested in new opportunities and interesting projects.
            Let&apos;s connect and see how we can work together to create something amazing!
          </p>
          <div className="flex justify-center space-x-8 mb-16 scroll-animate">
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/giang-nguy%E1%BB%85n-7b4052307/', icon: '💼' },
              { name: 'GitHub', url: 'https://github.com/Giang2011', icon: '🐱' },
              { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
              { name: 'Instagram', url: 'https://instagram.com', icon: '📸' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors text-lg hover:scale-110 transform duration-200"
                title={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="ml-2 hidden sm:inline">{social.name}</span>
              </a>
            ))}
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center scroll-animate">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-gray-800 font-bold mb-2">Location</h3>
              <p className="text-gray-600">Hanoi, Vietnam</p>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="text-gray-800 font-bold mb-2">Email</h3>
              <p className="text-gray-600">giang197719742002@gmail.com</p>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="text-gray-800 font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+84 123 456 789</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Image Modal */}
      {certificateImage && (
        <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center" onClick={() => setCertificateImage(null)}>
          <div className="bg-white rounded-xl p-4 shadow-2xl max-w-lg w-full flex flex-col items-center">
            <img src={certificateImage} alt="Certificate" className="max-h-[70vh] w-auto rounded-lg mb-4" />
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              onClick={() => setCertificateImage(null)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
