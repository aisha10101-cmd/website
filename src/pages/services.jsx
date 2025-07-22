import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaArrowRight, FaLeaf, FaSchool, FaHome, FaExchangeAlt, FaBrain, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const IconComponent = icon;
  
  return (
    <motion.div 
      className={`p-6 rounded-lg shadow-lg ${color} transition-all duration-300 h-full`}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="bg-white p-3 rounded-full mr-4">
            <IconComponent className={`text-xl ${isHovered ? 'text-purple-600' : 'text-gray-700'}`} />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white text-opacity-90 mb-6 flex-grow">{description}</p>
        <motion.div 
          className="mt-auto"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <button className="flex items-center text-white font-medium">
            Learn more <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Therapeutic Educational Consulting",
      description: "Our approach is centered on tailoring the support to meet the unique circumstances of the client. After engaging in a thorough conversation and assessment, we identify and recommend the most suitable treatment options available.",
      icon: FaBrain,
      color: "bg-purple-600"
    },
    {
      title: "Mental Health First Aid",
      description: "A skills-based training course that teaches participants to identify, understand and respond to mental health and substance use challenges. Create a new path of resilience and wellbeing while reducing stigma.",
      icon: FaHeartbeat,
      color: "bg-blue-600"
    },
    {
      title: "Wilderness Programs",
      description: "Wilderness Programs employ nature as a therapeutic backdrop, blending evidence-based therapy with experiential education. This approach enables clients to temporarily distance themselves from everyday stressors.",
      icon: FaLeaf,
      color: "bg-green-600"
    },
    {
      title: "Therapeutic Boarding Schools",
      description: "Therapeutic boarding schools offer therapeutic support along with a comprehensive educational environment that includes appropriate levels of supervision and structure.",
      icon: FaSchool,
      color: "bg-indigo-600"
    },
    {
      title: "Residential Treatment Centers",
      description: "Residential treatment centers specialize in treating adolescents with complex psychological and behavioral challenges. They can also offer medication management and medical supervision on-site.",
      icon: FaHome,
      color: "bg-red-600"
    },
    {
      title: "Transitional Programs",
      description: "These programs focus on young adults aged 18 and older who can benefit from a supportive environment and life skills training during their transition to adulthood.",
      icon: FaExchangeAlt,
      color: "bg-yellow-600"
    }
  ];

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
              <Link to="/about" className="text-gray-800 hover:text-purple-600 font-medium">ABOUT</Link>
              <Link to="/treatment-options" className="text-gray-800 hover:text-purple-600 font-medium">TREATMENT OPTIONS</Link>
              <Link to="/services" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-300 border-b-2 border-purple-600">SERVICES</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Achieving in Balance offers a comprehensive range of services designed to support individuals and families facing mental health challenges. Our expert team works closely with each client to develop personalized solutions.
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Case Management</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Once treatment commences, Achieving In Balance maintains an ongoing and open line of
                  communication with the family. We take on the essential responsibility of
                  monitoring the client's progress within the treatment program, ensuring that it aligns with their
                  wellness goals and objectives.
                </p>
                <p className="mt-4">
                  In addition to overseeing the client's development, we actively engage with
                  the family. These conversations offer a platform for discussing the treatment plan, sharing
                  insights, and providing valuable guidance throughout the client's entire wellness journey.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Our Case Management Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Regular progress updates and assessments</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Coordination between treatment providers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Family support and education</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Advocacy for the client's needs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Transition planning and aftercare recommendations</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <video 
                className="w-full h-auto"
                controls
                poster="/api/placeholder/640/360"
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-gray-100 p-4">
                <p className="text-gray-700 text-center">How our comprehensive case management approach works</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health First Aid */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mental Health First Aid</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <p className="text-gray-700 text-lg mb-6">
                Mental Health First Aid is a skills-based training course that teaches participants to identify,
                understand and respond to mental health and substance use challenges.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Program Benefits:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Create a new path of resilience and wellbeing</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Reduce stigma and discrimination</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Improve overall psychological safety</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Address mental health and substance use challenges</p>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Participants Will Learn:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Risk factors and warning signs of mental health and substance use challenges</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Information on depression, anxiety, trauma, psychosis and substance use</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">A 5-step Action Plan to help someone developing a mental health or substance use challenge</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Available evidence-based professional, peer and self-help resources</p>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="#workshops" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out">
                Schedule a Training Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Presentations */}
      <section id="workshops" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Workshops & Presentations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">For Schools</h3>
                <p className="text-gray-600 mb-4">
                  Customized workshops for teachers, administrators, and students to promote mental wellness in educational environments.
                </p>
                <a href="#contact" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn more <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">For Parents</h3>
                <p className="text-gray-600 mb-4">
                  Informative sessions designed to help parents understand and support children with mental health and behavioral challenges.
                </p>
                <a href="#contact" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn more <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">For Organizations</h3>
                <p className="text-gray-600 mb-4">
                  Professional development workshops focused on mental health awareness and creating supportive workplace environments.
                </p>
                <a href="#contact" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn more <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center">
                      <FaEnvelope className="text-purple-600 mr-3" />
                      <a href="mailto:support@achievinginbalance.com" className="text-gray-700 hover:text-purple-600">
                        support@achievinginbalance.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <FaPhone className="text-purple-600 mr-3" />
                      <a href="tel:9194106028" className="text-gray-700 hover:text-purple-600">
                        (919) 410-6028
                      </a>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Hours of Operation</h4>
                  <p className="text-gray-700 mb-4">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  
                  <p className="text-gray-600">
                    We are committed to responding to all inquiries within 24 business hours.
                  </p>
                </div>
                
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Your Email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default ServicesPage;