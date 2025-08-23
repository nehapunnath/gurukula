import React, { useState, useEffect } from 'react';
import { AcademicCapIcon, UserGroupIcon, BookOpenIcon, HeartIcon,ClockIcon,MapPinIcon,PhoneIcon,EnvelopeIcon,GlobeAltIcon,SparklesIcon,TrophyIcon,LightBulbIcon,ScaleIcon} from '@heroicons/react/24/outline';
import ad from '../assets/ad.jpg'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import chairperson from '../assets/chairperson.jpg'

const About = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Core values data
  const values = [
    {
      title: "Excellence in Education",
      description: "Committed to providing the highest quality education through innovative teaching methods and curriculum.",
      icon: <AcademicCapIcon className="w-10 h-10 text-teal-600" />,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Holistic Development",
      description: "Focusing on the overall growth of students - academic, physical, emotional, and spiritual.",
      icon: <UserGroupIcon className="w-10 h-10 text-teal-600" />,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Value-Based Learning",
      description: "Instilling strong ethical values and character building alongside academic education.",
      icon: <BookOpenIcon className="w-10 h-10 text-teal-600" />,
      color: "bg-amber-100 text-amber-800"
    },
    {
      title: "Community Service",
      description: "Encouraging students to contribute positively to society and serve the community.",
      icon: <HeartIcon className="w-10 h-10 text-teal-600" />,
      color: "bg-red-100 text-red-800"
    }
  ];

  // Leadership data
  const leadership = [
    {
      name: "Sri Rajeshwara Shivacharya Swamiji",
      position: "Srimadh Rajapura Samstana Mutt Educational Trust",
      message: "Dear Parents, Namaste 🙏 A child's journey of learning begins at home and blossoms in school. As parents, you are the first gurus, shaping values, discipline, and devotion in young hearts. Let education not only fill their minds with knowledge but also their hearts with humility and wisdom. Walk with them, guide them, and be their strength for they are the future torchbearers of dharma and humanity. May the Almighty bless your family with peace, health, and spiritual growth.",
      image:    g1
    },
    {
      name: "Mr. C Natraj",
      position: "Chairperson",
      message: "Dear Students, Parents, and Staff, Welcome to a new chapter of learning and growth! At SriGurukulaInternationalSchool we believe education+ culture is more than academics it's about building character, curiosity, and confidence. Every child here is a spark of potential, and together, we light the path to a brighter tomorrow. To students dream bold, work smart, stay kind. To parents thank you for your trust and support. To staff your passion makes this place thrive. Let's keep moving forward with purpose, with pride.",
      image: chairperson
    },
    {
      name: "Dr. Komal Sharma",
      position: "Academic Director",
      message: "Dear Parents and Guardians, It gives me immense pleasure to welcome you to Sri Gurukula International School. Education is a shared journey where the school, teachers, parents, and students walk hand in hand to create a strong foundation for lifelong learning. At SGIS, we believe in nurturing every child's potential by blending academic excellence with values, creativity, and skills for the future. Our aim is to create not just successful learners, but responsible citizens and compassionate human beings.",
      image: ad
    }
  ];

  // Stats data
  const stats = [
    { number: "2000+", label: "Students Enrolled" },
    { number: "150+", label: "Qualified Teachers" },
    { number: "20+", label: "Years of Excellence" },
    { number: "15+", label: "Acres Campus" }
  ];

  return (
    <div className="font-sans pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-24 md:py-32 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-900/80 to-teal-800/80"></div>
        
        {/* Animated elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-amber-400/20 rounded-full animate-ping"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">About Sri Gurukula</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">Nurturing Minds, Building Futures for Over Two Decades</p>
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

      {/* Stats Section */}
      <div className="py-12 bg-white shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-700 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-teal-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-teal-800 mb-6 flex items-center">
                <SparklesIcon className="w-8 h-8 mr-3 text-amber-500" />
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Established in the year 2000, Sri Gurukula Group of Institutions has been a beacon of learning 
                excellence for over two decades. Our institution was founded with a vision to provide quality 
                education that combines traditional values with modern educational practices.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Spread across a lush green 4-acre campus, we provide a conducive environment for academic 
                growth and personal development. Our dedicated faculty and state-of-the-art facilities ensure 
                that every student receives the attention and resources they need to excel.
              </p>
              <p className="text-gray-700 text-lg">
                From humble beginnings with just a handful of students, we have grown into a premier educational 
                institution offering comprehensive education from Pre-KG to Degree programs, shaping the future 
                of thousands of students.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Campus Overview" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-lg">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Mission and Vision Section */}
      <div className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-teal-200/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-200/30 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">Our Mission & Vision</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
                <BookOpenIcon className="w-8 h-8 mr-3 text-teal-600" />
                Our Mission
              </h3>
              <p className="text-gray-700 mb-4">
                To provide a nurturing educational environment that fosters academic excellence, character 
                development, and holistic growth. We are committed to empowering students with knowledge, 
                skills, and values to become responsible global citizens and future leaders.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                <h4 className="font-bold text-teal-800 mb-2">Our Commitment:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Delivering academic excellence through innovative teaching methodologies</li>
                  <li>Creating a safe, inclusive, and stimulating learning environment</li>
                  <li>Nurturing individual talents and fostering creativity</li>
                  <li>Instilling strong ethical values and social responsibility</li>
                  <li>Building partnerships with parents and the community</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
                <AcademicCapIcon className="w-8 h-8 mr-3 text-teal-600" />
                Our Vision
              </h3>
              <p className="text-gray-700 mb-4">
                To be a premier educational institution recognized for innovation, excellence, and values-based 
                education. We aim to create a transformative educational experience that prepares students to 
                meet the challenges of a rapidly changing world while staying rooted in ethical values.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                <h4 className="font-bold text-teal-800 mb-2">Our Aspirations:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>To be a center of excellence in holistic education</li>
                  <li>To develop future-ready global citizens with strong Indian values</li>
                  <li>To foster innovation, critical thinking, and lifelong learning</li>
                  <li>To create a sustainable and environmentally conscious learning community</li>
                  <li>To be recognized as a model institution for value-based education</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">Our Educational Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-teal-50 rounded-lg transition-all duration-300 hover:bg-teal-100">
                <div className="flex justify-center mb-4">
                  <UserGroupIcon className="w-12 h-12 text-teal-600" />
                </div>
                <h4 className="font-bold text-teal-800 mb-2">Child-Centered Approach</h4>
                <p className="text-gray-700">We believe each child is unique and deserves an education that recognizes their individual strengths, interests, and learning styles.</p>
              </div>
              
              <div className="text-center p-6 bg-teal-50 rounded-lg transition-all duration-300 hover:bg-teal-100">
                <div className="flex justify-center mb-4">
                  <ScaleIcon className="w-12 h-12 text-teal-600" />
                </div>
                <h4 className="font-bold text-teal-800 mb-2">Values Integration</h4>
                <p className="text-gray-700">Moral and ethical values are seamlessly integrated into our curriculum, helping students develop strong character and integrity.</p>
              </div>
              
              <div className="text-center p-6 bg-teal-50 rounded-lg transition-all duration-300 hover:bg-teal-100">
                <div className="flex justify-center mb-4">
                  <GlobeAltIcon className="w-12 h-12 text-teal-600" />
                </div>
                <h4 className="font-bold text-teal-800 mb-2">Global Perspective</h4>
                <p className="text-gray-700">While rooted in Indian culture, our education provides a global outlook, preparing students for challenges and opportunities worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${value.color} transition-all duration-300 ${activeValue === index ? 'scale-110' : ''}`}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-200/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200/30 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4 relative inline-block">
              Leadership
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who guide our institution with wisdom and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium">Click to read message</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-1">{leader.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{leader.position}</p>
                  
                  <div className="border-l-4 border-teal-500 pl-4 mb-6">
                    <p className="text-gray-700 italic">"{leader.message}"</p>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <HeartIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Committed to excellence in education</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default About;