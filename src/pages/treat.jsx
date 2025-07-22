import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLeaf, FaSchool, FaHome, FaExchangeAlt } from 'react-icons/fa';

const TreatmentCard = ({ title, description, icon, color, image }) => {
  const IconComponent = icon;
  
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg`}>
      <div className={`${color} p-6`}>
        <h3 className="text-2xl font-bold text-white flex items-center">
          <IconComponent className="mr-3" /> {title}
        </h3>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const TreatmentOptionsPage = () => {
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
          </div>
        </header>
  
        {/* Navigation */}
        <nav className="bg-white py-4 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800">ACHIEVING IN BALANCE</Link>
              <div className="flex space-x-8">
                <Link to="/" className="text-gray-800 hover:text-purple-600 font-medium">HOME</Link>
                <Link to="/about" className="text-gray-800 hover:text-purple-600 font-medium">ABOUT</Link>
                <Link to="/treatment-options" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-300 border-b-2 border-purple-600">TREATMENT OPTIONS</Link>
                <Link to="/services" className="text-gray-800 hover:text-purple-600 font-medium">SERVICES</Link>
              </div>
            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Treatment Options</h1>
            <p className="text-xl text-gray-600">
              At Achieving in Balance, we carefully assess each client's unique needs and recommend the most appropriate treatment options. Our goal is to provide families with comprehensive information about various therapeutic approaches to help them make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Options Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TreatmentCard 
              title="Wilderness Programs" 
              description="Wilderness Programs employ nature as a therapeutic backdrop, blending evidence-based therapy with experiential education. This approach enables clients to temporarily distance themselves from the stressors, difficulties, and distractions of everyday life, such as those encountered at home and school."
              icon={FaLeaf}
              color="bg-purple-700"
            />
            
            <TreatmentCard 
              title="Therapeutic Boarding Schools" 
              description="Therapeutic boarding schools offer therapeutic support along with a comprehensive educational environment that includes appropriate levels of supervision and structure. They focus on nurturing the physical, emotional, behavioral, familial, social, intellectual, and academic development of students. These schools typically provide high school diplomas or credits that can be used for admission to other secondary schools."
              icon={FaSchool}
              color="bg-blue-600"
            />
            
            <TreatmentCard 
              title="Residential Treatment Centers" 
              description="Residential treatment centers specialize in treating adolescents with complex psychological and behavioral challenges. They can also offer medication management and medical supervision on-site. These programs are intended for youth and young adults who can benefit from community-based treatment, which may include individual/group therapy, recreational activities, community service, academic support, mentoring, coaching, and/or assistance with addiction issues."
              icon={FaHome}
              color="bg-green-600"
            />
            
            <TreatmentCard 
              title="Transitional Programs" 
              description="These programs focus on young adults aged 18 and older who can benefit from a supportive environment and life skills training during their transition to adulthood. They often facilitate access to community-based self-help groups like 12-step programs and may include a psychiatric aspect. Typically, they offer educational opportunities linked to community colleges or universities and may provide on-site schooling."
              icon={FaExchangeAlt}
              color="bg-yellow-600"
            />
          </div>
        </div>
      </section>
      
      {/* Placement Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Placement Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Placement</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our approach is centered on tailoring the support to meet the unique circumstances of the
                client. After engaging in a thorough conversation and assessment, Achieving In Balance will
                identify and recommend the most suitable treatment options available. These recommendations
                are not just for the individual in need but also for the family, fostering a comprehensive and
                collaborative approach to healing and well-being.
              </p>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2 mb-6">
                <p className="text-gray-600 italic">
                  We believe that effective treatment requires a personalized approach that considers the whole person and their family system.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Comprehensive Assessment</h4>
                    <p className="text-gray-600">We conduct a thorough evaluation of the client's needs, strengths, and challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personalized Recommendations</h4>
                    <p className="text-gray-600">Based on our assessment, we provide customized treatment options that align with the client's specific needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Family Education</h4>
                    <p className="text-gray-600">We educate families about available treatment options, helping them understand the benefits and limitations of each approach.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Case Management</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Once the treatment commences, Achieving In Balance maintains an ongoing and open line of
                communication with the family. Achieving In Balance takes on the essential responsibility of
                monitoring the client's progress within the treatment program, ensuring that it aligns with their
                wellness goals and objectives.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In addition to overseeing the client's development, Achieving In Balance actively engages with
                the family. These conversations offer a platform for discussing the treatment plan, sharing
                insights, and providing valuable guidance throughout the client's entire wellness journey.
              </p>
              
              <div className="flex justify-center mt-8">
                <a href="/services" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
                  Learn More About Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Understanding Therapeutic Support</h2>
            
            <div className="rounded-lg overflow-hidden shadow-xl mb-8">
              <video 
                className="w-full h-auto"
                controls
                poster="/api/placeholder/640/360"
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-gray-100 p-4">
                <p className="text-gray-700 text-center">Welcome to the world of Therapeutic educational consultants</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-8">
                Understanding the various treatment options available can be overwhelming. Our therapeutic educational consultants are here to guide you through the process and help you make informed decisions about your loved one's care.
              </p>
              
              <a href="/about" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out">
                Learn About Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center md:justify-start space-x-4">
              <img src="/api/placeholder/100/100" alt="Mental Health First Aid Logo" className="h-16 w-auto" />
              <img src="/api/placeholder/100/100" alt="IECA Logo" className="h-16 w-auto" />
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

export default TreatmentOptionsPage; 