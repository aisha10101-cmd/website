import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaChevronRight, FaPlayCircle, FaPauseCircle, FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleVideo = () => {
    const video = document.getElementById('featured-video');
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-50">
 

      {/* Main Navigation */}
    {/* Header - Top Bar with Enhanced Gradients */}

{/* Main Navigation with Enhanced Design */}
<header 
  className="bg-white py-4 sticky top-0 z-50 transition-all duration-300"
  style={{ 
    boxShadow: scrollY > 20 ? '0 10px 25px rgba(0,0,0,0.05)' : 'none',
    background: scrollY > 100 ? 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(249,250,251,0.95))' : 'white' 
  }}
>
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="h-12 flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
          <img 
            src="/logo.png" 
            alt="Achieving in Balance Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-violet-700 text-xl font-bold tracking-wide">ACHIEVING IN BALANCE</h1>
          <p className="text-xs text-purple-600 font-medium">Therapeutic Educational Consulting</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 font-medium relative group py-2 overflow-hidden">
          HOME
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 font-medium relative group py-2 overflow-hidden">
          ABOUT
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
        <a 
          href="#contact" 
          className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white rounded-full shadow-md group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-600"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-500 opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative">CONTACT US</span>
        </a>
      </nav>

      {/* Mobile Menu Button with Animation */}
      <button 
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 transform' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>
    </div>
  </div>

  {/* Mobile Menu with Enhanced Animation */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-gradient-to-b from-white to-gray-50 border-t mt-4"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/" className="text-gray-800 hover:text-purple-600 font-medium py-2 block border-b border-gray-100">
              HOME
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/about" className="text-gray-800 hover:text-purple-600 font-medium py-2 block border-b border-gray-100">
              ABOUT
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/treatment-options" className="text-gray-800 hover:text-purple-600 font-medium py-2 block border-b border-gray-100">
              TREATMENT OPTIONS
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/services" className="text-gray-800 hover:text-purple-600 font-medium py-2 block border-b border-gray-100">
              SERVICES
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#contact" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white rounded-full shadow-md group w-full">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-600"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-500 opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-center w-full">CONTACT US</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/api/placeholder/1920/1080)', filter: 'brightness(0.4)' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Restoring Hope, Trust, and Stability
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Professional guidance for individuals and families navigating mental health challenges and educational needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#services" className="bg-white text-purple-800 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 transform">
                Explore Our Services
                <FaChevronRight className="ml-2" />
              </a>
              <a href="#about" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center hover:bg-white/10 transition-colors">
                Learn More About Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-10 h-10 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* About Section with Video */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h5 className="text-purple-600 font-semibold mb-3 uppercase tracking-wide">Who We Are</h5>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Therapeutic Educational Consulting</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="space-y-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-3xl font-bold text-gray-800 leading-tight">What does a Therapeutic Educational Consultant do?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A therapeutic educational consultant is an experienced professional with deep knowledge of mental health diagnoses, adolescent behaviors, substance abuse, emotional disabilities, and learning differences.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We leverage our expertise to connect families, both neurotypical and neurodivergent, with the necessary resources and programs aimed at enhancing mental and emotional well-being.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start bg-purple-50 p-4 rounded-lg transition-all hover:shadow-md">
                    <div className="bg-purple-600 rounded-full p-2 mr-4 text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Assessment & Evaluation</h4>
                      <p className="text-gray-700 mt-1">Thoroughly assessing the unique needs of the client and family.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-purple-50 p-4 rounded-lg transition-all hover:shadow-md">
                    <div className="bg-purple-600 rounded-full p-2 mr-4 text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Customized Recommendations</h4>
                      <p className="text-gray-700 mt-1">Providing recommendations tailored to the specific needs of the client while educating families about treatment options.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-purple-50 p-4 rounded-lg transition-all hover:shadow-md">
                    <div className="bg-purple-600 rounded-full p-2 mr-4 text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Case Management</h4>
                      <p className="text-gray-700 mt-1">Facilitating comprehensive case management including transition services to ensure continued success.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <a href="#" className="inline-flex items-center text-purple-600 font-semibold group">
                    Learn more about our approach
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-2xl"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <video 
                    id="featured-video"
                    className="w-full h-full object-cover"
                    poster="/api/placeholder/1280/720"
                    onClick={toggleVideo}
                  >
                    <source src="aib.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom Video Controls */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <button 
                      onClick={toggleVideo} 
                      className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white transform transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300"
                    >
                      {isVideoPlaying ? <FaPauseCircle size={40} /> : <FaPlayCircle size={40} />}
                    </button>
                  </div>
                </div>
                
                {/* Video Caption */}
                <div className="bg-white p-6 border-t-4 border-purple-600">
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Welcome to Achieving in Balance</h4>
                  <p className="text-gray-700">
                    Discover how our therapeutic educational consulting services can help individuals and families navigate complex challenges.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
       {/* Quote Section (Replacing Stats Section) */}
<section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <svg className="w-12 h-12 text-purple-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-2xl md:text-3xl italic font-light leading-relaxed mb-6">
        "Vocation does not mean a goal that I pursue. It means a calling that I hear . . . I must listen for the truths & values at the heart of my own identity, not the standards by which I must live– but the standards by which I cannot help but live if I am living my own life."
      </p>
      <div className="w-16 h-1 bg-purple-400 mx-auto mb-4"></div>
      <p className="text-purple-200 font-medium italic">
        Let Your Life Speak: Listening for the Voice of Vocation
      </p>
    </div>
  </div>
</section>
        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h5 className="text-purple-600 font-semibold mb-3 uppercase tracking-wide">What We Offer</h5>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                We provide comprehensive services to help individuals and families 
                navigate mental health challenges and educational needs.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 transform duration-300"
                variants={fadeIn}
              >
                <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional Development</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive professional development opportunities for those working 
                    in mental health and education fields.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Workshops for educators
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Training programs
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Certification courses
                    </li>
                  </ul>
                  <a  className="text-blue-500 font-semibold flex items-center hover:text-blue-600 transition-colors">
                    Learn more
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 transform duration-300"
                variants={fadeIn}
              >
                <div className="h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Mental Health First Aid</h3>
                  <p className="text-gray-600 mb-6">
                    Essential skills training to identify and respond effectively to mental health 
                    and substance use challenges.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Recognition of warning signs
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Support strategies
                    </li>
                  </ul>
                  <a href="#" className="text-yellow-500 font-semibold flex items-center hover:text-yellow-600 transition-colors">
                    Learn more
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 transform duration-300"
                variants={fadeIn}
              >
                <div className="h-24 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Workshops & Presentations</h3>
                  <p className="text-gray-600 mb-6">
                    Engaging workshops and presentations designed for schools, businesses, 
                    and community organizations.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Interactive sessions
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Customized content
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Expert facilitators
                    </li>
                  </ul>
                  <a href="#" className="text-red-500 font-semibold flex items-center hover:text-red-600 transition-colors">
                    Learn more
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="mt-16 text-center">
              <a href="#" className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
                View All Services
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to take the first step?</h2>
              <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                Contact us today to schedule a consultation and discover how our therapeutic 
                educational consulting services can help you or your loved ones.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="bg-white text-purple-800 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 transform">
                  Schedule a Consultation
                </a>
                <a href="#" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center hover:bg-white/10 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-purple-600 font-semibold mb-3 uppercase tracking-wide">Get In Touch</h5>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Request a Consultation</option>
                    <option value="services">Services Inquiry</option>
                    <option value="workshop">Workshop Booking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 px-8 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8 flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-5">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(919) 410-6028</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8 flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-5">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">support@achievinginbalance.com</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl p-8 flex-grow flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-5">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Weekends: By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 8.1 19.33 6.66 18.12C7.61 16.8 9.63 16 12 16C14.37 16 16.39 16.8 17.34 18.12C15.9 19.33 14.03 20 12 20Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white tracking-wide">ACHIEVING IN BALANCE</h1>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Providing therapeutic educational consulting services to help individuals 
                and families navigate mental health challenges and educational needs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <FaLinkedinIn className="text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 relative pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <svg className="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <svg className="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/treatment-options" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <svg className="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Treatment Options
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <svg className="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <svg className="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <svg className="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
        
         
              <h3 className="text-lg font-semibold mb-6 relative pb-3">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Professional Development",
                  "Mental Health First Aid",
                  "Workshops & Presentations",
                  "Therapeutic Consulting",
                  "Educational Planning"
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                      <svg className="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div> {/* end grid */}
          <div className="text-center text-gray-500 mt-12 text-sm">
            &copy; {new Date().getFullYear()} Achieving in Balance. All rights reserved.
          </div>
        </div> {/* end container */}
      </footer>
    </div>
                
  );
};

export default HomePage;


