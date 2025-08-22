
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, AcademicCapIcon, BookOpenIcon, UserGroupIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Leaders from '../components/Leaders';
import NewsInsights from '../components/NewsInsights';
import Gallery from '../components/Gallery';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const announcements = [
    "Admissions Open for Academic Year 2024-25",
    "Annual Sports Day scheduled for February 15th",
    "New Computer Lab inaugurated with state-of-the-art facilities",
    "School achieves 100% results in SSLC examinations"
  ];
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  // Carousel images (placeholder URLs from Unsplash)
  const carouselImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  ];

  // Courses offered data
  const courses = [
    {
      title: "Pre-KG to Class 10",
      description: "State Board English Medium School with 4 acre campus",
      icon: "🎒",
      features: ["CBSE Curriculum", "Smart Classrooms", "Play Areas", "Activity-Based Learning"]
    },
    {
      title: "PU College",
      description: "Pre-University Education (11th & 12th Standard)",
      icon: "📚",
      features: ["Science Stream", "Commerce Stream", "Arts Stream", "Excellent Results"]
    },
    {
      title: "Degree College",
      description: "Undergraduate Programs in Multiple Disciplines",
      icon: "🎓",
      features: ["B.A., B.Com, B.Sc", "Quality Education", "Career Guidance", "Placement Support"]
    }
  ];

  // Statistics data
  const statistics = [
    { number: "2000+", label: "Students", icon: <UserGroupIcon className="w-12 h-12" /> },
    { number: "100+", label: "Faculty", icon: <AcademicCapIcon className="w-12 h-12" /> },
    { number: "5000+", label: "Alumni", icon: "🌟" },
    { number: "20+", label: "Years", icon: <CalendarIcon className="w-12 h-12" /> }
  ];

  // Facilities data
  const facilities = [
    {
      title: "Digital Classrooms",
      description: "Smart classrooms with interactive learning technology",
      image: "https://images.unsplash.com/photo-1588072432836-e10032781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      title: "Science Labs",
      description: "Well-equipped laboratories for practical learning",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Library",
      description: "Extensive collection of books and digital resources",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
    },
    {
      title: "Sports Facilities",
      description: "Indoor and outdoor facilities for various sports",
      image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // News data
  const news = [
    {
      title: "Annual Day Celebration",
      date: "Feb 15, 2024",
      excerpt: "The school celebrated its annual day with great enthusiasm and cultural performances.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Science Fair Winners",
      date: "Jan 28, 2024",
      excerpt: "Our students won 3 prizes at the regional science fair competition.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "New Computer Lab",
      date: "Dec 10, 2023",
      excerpt: "The new computer lab with latest technology was inaugurated by the Education Minister.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Manual carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="font-sans">
      {/* Full-width Carousel with increased height */}
      <div className="relative w-full h-screen max-h-[600px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={image}
              alt={`Campus ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                  Sri Gurukula Group of Institutions
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
                  Nurturing Minds, Building Futures for Over Two Decades
                </p>
                <div className="flex justify-center gap-4 animate-fade-in delay-500">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Apply Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg hover:bg-white/20 transform hover:-translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full transition duration-300 backdrop-blur-sm"
        >
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full transition duration-300 backdrop-blur-sm"
        >
          <ChevronRightIcon className="w-8 h-8 text-white" />
        </button>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-teal-400 scale-125' : 'bg-white/70'} hover:scale-110`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Announcements Section with improved marquee */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white py-4 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="container mx-auto flex items-center relative z-10">
          <span className="font-bold text-lg mr-6 whitespace-nowrap flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-teal-300 animate-pulse mr-2"></span>
            Announcements:
          </span>
          <div className="overflow-hidden w-full">
            <div className="animate-marquee whitespace-nowrap">
              {announcements.map((announcement, index) => (
                <span key={index} className="text-lg mx-8 inline-block hover:text-teal-200 transition-colors cursor-pointer">
                  {announcement} 
                  <span className="ml-8 text-teal-300">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video and Welcome Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* YouTube Video with modern styling */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 group">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/6SrslB5_T3I"
                title="About Sri Gurukula"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-72 md:h-96 rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
          
          {/* Welcome Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full"></div>
            <h2 className="text-3xl font-bold text-teal-800 mb-6 relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-gradient-to-r after:from-teal-500 after:to-purple-500 after:rounded-full">
              Welcome to Sri Gurukula
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Established with a vision to provide quality education, Sri Gurukula Group of Institutions 
              has been a beacon of learning excellence for over two decades. Our institution combines 
              traditional values with modern educational practices to nurture well-rounded individuals.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Spread across a lush green 4-acre campus, we provide a conducive environment for 
              academic growth and personal development. Our dedicated faculty and state-of-the-art 
              facilities ensure that every student receives the attention and resources they need to excel.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Learn More
              </button>
              <button className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg transform hover:-translate-y-1">
                Campus Tour
              </button>
            </div>
          </div>
        </div>
      </div>
      <Leaders/>

      {/* Courses Offered Section */}
      <div className="py-16 bg-gradient-to-b from-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-100/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-4 relative inline-block">
              Courses Offered
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive educational programs designed to shape future leaders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                <h3 className="text-2xl font-bold text-teal-800 text-center mb-4">{course.title}</h3>
                <p className="text-gray-700 text-center mb-6">{course.description}</p>
                <ul className="mt-4 space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-gradient-to-r from-teal-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')]"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Our Achievements
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-400 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                <div className="flex justify-center mb-4 text-teal-300 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-teal-300">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-4 relative inline-block">
              Our Facilities
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600">State-of-the-art infrastructure for holistic development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-sm opacity-90">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Explore All Facilities
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* News & Events Section */}
      <NewsInsights/>

      <Gallery/>
      
      {/* Campus Facilities Section */}
      <div className="py-16 bg-gradient-to-b from-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-teal-100/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-full bg-gradient-to-l from-purple-100/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500/10 rounded-full"></div>
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-3 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-gradient-to-r after:from-teal-500 after:to-purple-500 after:rounded-full">
              Campus Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Spacious classrooms with digital learning tools",
                "Well-equipped science and computer laboratories",
                "Library with extensive collection of books and journals",
                "Sports facilities including playground, indoor games",
                "Auditorium for cultural events and seminars",
                "Transportation facilities available",
                "Cafeteria serving nutritious meals",
                "Medical room with trained staff"
              ].map((facility, index) => (
                <div key={index} className="flex items-start p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors duration-300">
                  <span className="text-teal-600 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
            display: inline-block;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          .delay-200 {
            animation-delay: 200ms;
          }
          .delay-500 {
            animation-delay: 500ms;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;