import React, { useState, useEffect } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  AcademicCapIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="font-sans pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-24 md:py-32 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-900/80 to-teal-800/80"></div>
        
        {/* Animated elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">Get in touch with Sri Gurukula - We're here to answer all your questions</p>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-gray-50 fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-teal-800 mb-6 flex items-center">
                <ChatBubbleLeftRightIcon className="w-8 h-8 mr-3 text-teal-600" />
                Get In Touch
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                We'd love to hear from you. Whether you're a parent, student, or well-wisher, 
                feel free to reach out to us with any questions or concerns.
              </p>

              <div className="space-y-6">
                <div className="flex items-start p-4 bg-teal-50 rounded-2xl transition-all duration-300 hover:bg-teal-100 hover:shadow-md">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <MapPinIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-1">Address</h3>
                    <p className="text-gray-700">123 Education Street, Knowledge City</p>
                    <p className="text-gray-700">Bangalore, Karnataka 560001</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-teal-50 rounded-2xl transition-all duration-300 hover:bg-teal-100 hover:shadow-md">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <PhoneIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-1">Phone</h3>
                    <p className="text-gray-700">+91 80 1234 5678</p>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-teal-50 rounded-2xl transition-all duration-300 hover:bg-teal-100 hover:shadow-md">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <EnvelopeIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-1">Email</h3>
                    <p className="text-gray-700">info@srigurukula.edu.in</p>
                    <p className="text-gray-700">admissions@srigurukula.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-teal-50 rounded-2xl transition-all duration-300 hover:bg-teal-100 hover:shadow-md">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <ClockIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-1">Office Hours</h3>
                    <p className="text-gray-700">Monday to Friday: 8:30 AM - 4:30 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Campus Map */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Visit Our Campus</h3>
                <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.991238966772!2d77.5943143756968!3d12.908600487416772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1512b2a317c5%3A0x637cb7c4666369e2!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1690987491163!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sri Gurukula Campus Location"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-xl animate-fade-in-right">
              <h2 className="text-2xl font-bold text-teal-800 mb-6 flex items-center">
                <PaperAirplaneIcon className="w-7 h-7 mr-3 text-teal-600" />
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-6 rounded-lg mb-6">
                  <div className="flex items-center">
                    <div className="py-3">
                      <svg className="w-12 h-12 text-teal-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Thank you for your message!</p>
                      <p>We will get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
                    <UserIcon className="w-5 h-5 mr-2 text-teal-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 flex items-center">
                      <DevicePhoneMobileIcon className="w-5 h-5 mr-2 text-teal-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academics">Academic Information</option>
                    <option value="facilities">Campus Facilities</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contacts Section */}
      <div className="py-16 bg-gradient-to-br from-teal-800 to-teal-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-teal-600/20 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-400/20 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-500/20 rounded-full flex items-center justify-center">
                <AcademicCapIcon className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Admissions Office</h3>
              <p className="mb-2">admissions@srigurukula.edu.in</p>
              <p>+91 98765 43210</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-500/20 rounded-full flex items-center justify-center">
                <AcademicCapIcon className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Office</h3>
              <p className="mb-2">academics@srigurukula.edu.in</p>
              <p>+91 98765 43211</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-500/20 rounded-full flex items-center justify-center">
                <AcademicCapIcon className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student Support</h3>
              <p className="mb-2">support@srigurukula.edu.in</p>
              <p>+91 98765 43212</p>
            </div>
          </div>
        </div>
        
        {/* Wave divider at the bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;