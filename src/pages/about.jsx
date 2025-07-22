import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 8.1 19.33 6.66 18.12C7.61 16.8 9.63 16 12 16C14.37 16 16.39 16.8 17.34 18.12C15.9 19.33 14.03 20 12 20Z" fill="white"/>
            </svg>
            <div className="text-sm">
              <p className="font-bold">Achieving in Balance</p>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <a href="mailto:support@achievinginbalance.com" className="flex items-center mr-6">
              <FaEnvelope className="mr-2" />
              support@achievinginbalance.com
            </a>
            <a href="tel:9194106028" className="flex items-center">
              <FaPhone className="mr-2" />
              (919) 410-6028
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">ACHIEVING IN BALANCE</Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-800 hover:text-purple-600 font-medium">HOME</Link>
              <Link to="/about" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-300 border-b-2 border-purple-600">ABOUT</Link>
              <Link to="/treatment-options" className="text-gray-800 hover:text-purple-600 font-medium">TREATMENT OPTIONS</Link>
              <Link to="/services" className="text-gray-800 hover:text-purple-600 font-medium">SERVICES</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Achieving in Balance</h1>
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Founder</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Aisha Burton, M.Ed., M.S., LCMHCA is the founder of Achieving in Balance, LLC. Aisha has
                    been a certified school counselor since 2013 and has been an educator, facilitator, and school
                    counselor in public, charter, and independent schools for over twenty years. In 2022, she
                    became a Licensed Clinical Mental Health Counselor Associate in an effort to expand her
                    clinical knowledge and skills.
                  </p>
                  
                  <div className="my-8 bg-purple-50 p-6 rounded-lg shadow-inner border-l-4 border-purple-500">
                    <FaQuoteLeft className="text-purple-400 mb-4" size={24} />
                    <p className="text-gray-700 italic">
                      Aisha found her calling when she read the book, Let Your Life Speak: Listening for the Voice of
                      Vocation. The book clarified that finding your life's vocation fulfills your spirit and soul and
                      helps you excel at what you do because you have passion and love for it. This helped Aisha
                      recognize her life's purpose was to be of service to students and their families first as a school
                      counselor and now as a therapeutic educational consultant guiding families to hope, trust,
                      and stability.
                    </p>
                    <div className="flex justify-end">
                      <FaQuoteRight className="text-purple-400 mt-4" size={24} />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Achieving in Balance, we are committed to restoring hope, trust, and stability to individuals and families
                    struggling with mental health challenges. We believe that everyone deserves access to the right resources
                    and support systems to help them thrive and achieve balance in their lives.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <video 
                    className="w-full h-auto"
                    controls
                    poster="/api/placeholder/640/360"
                  >
                    <source src="#" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                      <p className="text-gray-700"><span className="font-semibold">Compassion:</span> We approach each individual and family with genuine care and understanding.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                      <p className="text-gray-700"><span className="font-semibold">Expertise:</span> We maintain the highest level of professional knowledge and skills.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                      <p className="text-gray-700"><span className="font-semibold">Collaboration:</span> We work closely with families and other professionals to ensure comprehensive care.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</div>
                      <p className="text-gray-700"><span className="font-semibold">Integrity:</span> We maintain the highest ethical standards in all our practices.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">5</div>
                      <p className="text-gray-700"><span className="font-semibold">Growth:</span> We believe in the capacity for positive change and development in every individual.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-purple-700 mb-8 text-center">Our Certifications</h2>
              <div className="flex flex-wrap justify-center items-center gap-12">
                <div className="text-center">
                  <img src="/api/placeholder/150/150" alt="Mental Health First Aid Certification" className="mx-auto mb-4 h-24 w-auto" />
                  <p className="text-gray-700 font-medium">Mental Health First Aid</p>
                </div>
                <div className="text-center">
                  <img src="/api/placeholder/150/150" alt="IECA Certification" className="mx-auto mb-4 h-24 w-auto" />
                  <p className="text-gray-700 font-medium">Independent Educational Consultants Association</p>
                </div>
                <div className="text-center">
                  <img src="/api/placeholder/150/150" alt="Licensed Clinical Mental Health" className="mx-auto mb-4 h-24 w-auto" />
                  <p className="text-gray-700 font-medium">Licensed Clinical Mental Health</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center md:justify-start space-x-4">
            <img src="amamh.png" alt="Mental Health First Aid Logo" className="h-16 w-auto" />
              <img src="ieca.png" alt="IECA Logo" className="h-16 w-auto" />
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
                <li><Link to="/treatment-options" className="hover:text-purple-400">Treatment Options</Link></li>
                <li><Link to="/services" className="hover:text-purple-400">Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Contacts</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:support@achievinginbalance.com" className="hover:text-purple-400">
                    support@achievinginbalance.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2" />
                  <a href="tel:9194106028" className="hover:text-purple-400">
                    (919) 410-6028
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© Copyright 2025 Achieving In Balance</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;