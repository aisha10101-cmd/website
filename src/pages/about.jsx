import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaQuoteLeft, FaQuoteRight, FaGraduationCap, FaHeart, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-purple bg-opacity-95 p-2 rounded-xl shadow-lg mr-4 backdrop-blur-sm">
              <img src="logo.png" alt="Achieving in Balance Logo" className="w-20 h-20 object-contain" />
            </div>
            <div>
              <p className="text-xl font-bold">Achieving in Balance</p>
              <p className="text-purple-200 text-sm">Therapeutic Educational Consulting</p>
            </div>
          </div>
          <div className="hidden md:flex items-center text-sm space-x-6">
            <a href="mailto:support@achievinginbalance.com" className="flex items-center hover:text-purple-200 transition-colors">
              <FaEnvelope className="mr-2" />
              support@achievinginbalance.com
            </a>
            <a href="tel:9194106028" className="flex items-center hover:text-purple-200 transition-colors">
              <FaPhone className="mr-2" />
              (919) 410-6028
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
              ACHIEVING IN BALANCE
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                HOME
              </Link>
              <Link to="/about" className="text-purple-600 font-medium border-b-2 border-purple-600">
                ABOUT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-2 rounded-full mb-6">
              <span className="text-purple-700 font-semibold text-sm">Therapeutic Educational Consulting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Achieving in Balance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Restoring hope, trust, and stability to individuals and families through compassionate therapeutic educational consulting
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2 text-purple-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Founder Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-xl shadow-lg mr-4">
                    <FaGraduationCap className="text-white text-3xl" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Founder</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-purple-700">Aisha Burton, M.Ed., M.S., LCMHCA</span> is the founder of Achieving in Balance, LLC. 
                    Aisha has been a certified school counselor since 2013 and has been an educator, facilitator, and school 
                    counselor in public, charter, and independent schools for over twenty years.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In 2022, she became a Licensed Clinical Mental Health Counselor Associate in an effort to expand her 
                    clinical knowledge and skills, bringing a unique blend of educational and therapeutic expertise to her practice.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 p-8 rounded-2xl shadow-xl border border-purple-200 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200 to-transparent rounded-full -mr-10 -mt-10 opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-200 to-transparent rounded-full -ml-8 -mb-8 opacity-50"></div>
                  
                  <div className="relative z-10">
                    <FaQuoteLeft className="text-purple-400 mb-6" size={32} />
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                      Aisha found her calling when she read the book, "Let Your Life Speak: Listening for the Voice of
                      Vocation." The book clarified that finding your life's vocation fulfills your spirit and soul and
                      helps you excel at what you do because you have passion and love for it.
                    </p>
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                      This helped Aisha recognize her life's purpose was to be of service to students and their families first as a school
                      counselor and now as a therapeutic educational consultant guiding families to hope, trust,
                      and stability.
                    </p>
                    <div className="flex justify-end">
                      <FaQuoteRight className="text-purple-400" size={32} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-900 p-1">
                  <div className="bg-black rounded-xl overflow-hidden">
                    <video 
                      className="w-full aspect-video object-cover"
                      controls
                      poster="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=640&h=360&fit=crop&crop=face"
                      preload="metadata"
                    >
                      <source src="aib.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none rounded-2xl"></div>
                </div>
                
                {/* Professional Credentials Card */}
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-xl shadow-lg border border-purple-200">
                  <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center">
                    <FaGraduationCap className="mr-2" />
                    Professional Credentials
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      M.Ed. (Master of Education)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      M.S. (Master of Science)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      LCMHCA (Licensed Clinical Mental Health Counselor Associate)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      20+ Years Educational Experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 right-32 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-32 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Mission */}
              <div className="space-y-8">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl shadow-lg mr-4">
                    <FaHeart className="text-white text-3xl" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Mission</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 relative overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At Achieving in Balance, we are committed to restoring hope, trust, and stability to individuals and families
                      struggling with mental health challenges. We believe that everyone deserves access to the right resources
                      and support systems to help them thrive and achieve balance in their lives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-8">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl shadow-lg mr-4">
                    <FaUsers className="text-white text-3xl" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Values</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 relative overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full -ml-12 -mb-12"></div>
                  <div className="relative z-10">
                    <div className="space-y-8">
                      <div className="flex items-start group hover:bg-purple-50 p-3 rounded-lg transition-all duration-300">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">1</div>
                        <div>
                          <h4 className="font-bold text-purple-700 mb-2 text-lg">Compassion</h4>
                          <p className="text-gray-700">We approach each individual and family with genuine care and understanding.</p>
                        </div>
                      </div>
                      <div className="flex items-start group hover:bg-purple-50 p-3 rounded-lg transition-all duration-300">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">2</div>
                        <div>
                          <h4 className="font-bold text-purple-700 mb-2 text-lg">Expertise</h4>
                          <p className="text-gray-700">We maintain the highest level of professional knowledge and skills.</p>
                        </div>
                      </div>
                      <div className="flex items-start group hover:bg-purple-50 p-3 rounded-lg transition-all duration-300">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">3</div>
                        <div>
                          <h4 className="font-bold text-purple-700 mb-2 text-lg">Collaboration</h4>
                          <p className="text-gray-700">We work closely with families and other professionals to ensure comprehensive care.</p>
                        </div>
                      </div>
                      <div className="flex items-start group hover:bg-purple-50 p-3 rounded-lg transition-all duration-300">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">4</div>
                        <div>
                          <h4 className="font-bold text-purple-700 mb-2 text-lg">Integrity</h4>
                          <p className="text-gray-700">We maintain the highest ethical standards in all our practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start group hover:bg-purple-50 p-3 rounded-lg transition-all duration-300">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">5</div>
                        <div>
                          <h4 className="font-bold text-purple-700 mb-2 text-lg">Growth</h4>
                          <p className="text-gray-700">We believe in the capacity for positive change and development in every individual.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-3 rounded-xl border border-white border-opacity-20">
                <img src="logo.png" alt="Achieving in Balance Logo" className="h-16 w-auto" />
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
                <li><Link to="/treatment-options" className="hover:text-purple-400 transition-colors">Treatment Options</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-purple-400" />
                  <a href="mailto:support@achievinginbalance.com" className="hover:text-purple-400 transition-colors">
                    support@achievinginbalance.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-purple-400" />
                  <a href="tel:9194106028" className="hover:text-purple-400 transition-colors">
                    (919) 410-6028
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© Copyright 2025 Achieving In Balance - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;