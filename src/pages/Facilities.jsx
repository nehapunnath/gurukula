import React, { useState } from 'react';
import { AcademicCapIcon,BookOpenIcon,BeakerIcon,ComputerDesktopIcon,MusicalNoteIcon,PaintBrushIcon,TrophyIcon,HeartIcon,ClockIcon,MapPinIcon,MagnifyingGlassIcon,XMarkIcon,FunnelIcon,UserGroupIcon,BuildingLibraryIcon,TruckIcon,PuzzlePieceIcon,WifiIcon,LightBulbIcon,ClipboardDocumentCheckIcon} from '@heroicons/react/24/outline';
import c1 from '../assets/c1.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import s7 from '../assets/s7.jpg'
import s12 from '../assets/s12.jpg'
import s16 from '../assets/s16.jpg'


const Facilities = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedFacility, setSelectedFacility] = useState(0);

  // Facilities data with images
  const facilities = [
 
    {
      id: 2,
      title: "Laboratories",
      description: "State-of-the-art laboratories for Physics, Chemistry, and Biology equipped with modern equipment and safety measures. Students get hands-on experience with experiments and research projects. All labs are designed to meet international safety standards with proper ventilation and emergency equipment.",
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Advanced Equipment", "Safety Measures", "Research Projects"],
      category: "academic",
      icon: <BeakerIcon className="w-8 h-8 text-teal-600" />,
      image: s6
    },
    {
      id: 3,
      title: "Computer Labs",
      description: "Modern computer labs with high-speed internet, latest software, and hardware. We provide IT education from basic computer literacy to advanced programming. Our labs are equipped with the latest technology to prepare students for the digital future.",
      features: ["100+ Computers", "High-Speed Internet", "Programming Software", "IT Certification", "Latest Technology", "Digital Literacy"],
      category: "technology",
      icon: <ComputerDesktopIcon className="w-8 h-8 text-teal-600" />,
      image: c1
    },
    {
      id: 4,
      title: "Classrooms",
      description: "Digitally equipped classrooms with interactive whiteboards, audio-visual systems, and comfortable seating to enhance the learning experience. All classrooms are designed to facilitate collaborative learning and interactive teaching methodologies.",
      features: ["Interactive Whiteboards", "Audio-Visual Systems", "Air-Conditioned", "Digital Content", "Collaborative Learning", "Ergonomic Furniture"],
      category: "academic",
      icon: <AcademicCapIcon className="w-8 h-8 text-teal-600" />,
      image: s16
    },
    {
      id: 5,
      title: "Sports Facilities",
      description: "Comprehensive sports infrastructure including playgrounds, indoor sports complex, and coaching for various sports to promote physical fitness and teamwork. We believe in the holistic development of students through physical activities.",
      features: ["Basketball Court", "Football Field", "Indoor Games", "Swimming Pool", "Coaching Facilities", "Fitness Equipment"],
      category: "sports",
      icon: <TrophyIcon className="w-8 h-8 text-teal-600" />,
      image: s7
    },
    {
      id: 6,
      title: "Art & Music Rooms",
      description: "Dedicated spaces for creative expression with instruments, art supplies, and exhibition areas to nurture artistic talents among students. We encourage creativity and self-expression through various artistic mediums.",
      features: ["Music Instruments", "Art Supplies", "Dance Studio", "Exhibition Space", "Practice Rooms", "Recording Equipment"],
      category: "arts",
      icon: <MusicalNoteIcon className="w-8 h-8 text-teal-600" />,
      image: s12
    },
    
  ];

  // Category filters
  const categories = [
    { id: 'all', name: 'All Facilities' },
    { id: 'academic', name: 'Academic' },
    { id: 'technology', name: 'Technology' },
    { id: 'sports', name: 'Sports' },
    { id: 'arts', name: 'Arts & Music' },
    { id: 'health', name: 'Health' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ];

  // Filtering logic
  const filteredFacilities = facilities.filter(facility => {
    return activeFilter === 'all' || facility.category === activeFilter;
  });

  return (
    <div className="font-sans pt-16 bg-gray-50 min-h-screen">
      {/* Hero Section (unchanged as requested) */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-24 md:py-32 mt-16 overflow-hidden">
        <div className="absolute inset-0  bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-900/80 to-teal-800/80"></div>
        
        {/* Animated elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">Our Facilities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">State-of-the-art infrastructure for holistic education</p>
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

      {/* Key Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">Why Choose Our Facilities?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 rounded-full">
                  <BuildingLibraryIcon className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600 text-sm">An alluring ambience with well-ventilated classrooms and labs designed for optimal learning experiences. Our campus features modern architecture with ample natural light and spacious learning environments.</p>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 rounded-full">
                  <UserGroupIcon className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Qualified Faculties</h3>
              <p className="text-gray-600 text-sm">Dedicated team of experienced and qualified faculty members committed to student success. Our teachers regularly participate in professional development programs.</p>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 rounded-full">
                  <BeakerIcon className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Well Equipped Labs</h3>
              <p className="text-gray-600 text-sm">Modern Science, Computer, Robotics, and Language labs with state-of-the-art equipment. Students get hands-on experience with the latest technology and scientific instruments.</p>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 rounded-full">
                  <TruckIcon className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Transport Facility</h3>
              <p className="text-gray-600 text-sm">70+ buses available that cover various places with safety and reliability as our top priorities. All vehicles are equipped with GPS tracking and safety features.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Labs Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Well-Equipped Science & Computer Labs</h2>
              <p className="text-gray-700 mb-6">
                A Science lab is a workplace for the conduct of scientific research. It helps students to remember the concepts better. 
                It is a facility that provides controlled conditions in which scientific experiments and measurement may be performed.
              </p>
              <p className="text-gray-700 mb-6">
                All the laboratories are well-stocked with sufficient chemicals, specimens and instruments so that every student gets 
                the opportunity to carry out the experiments individually. Well-qualified and experienced teachers guide the students 
                to explore the world of science through a meticulously planned schedule of practical classes.
              </p>
              <p className="text-gray-700 mb-6">
                Moreover, the safety of every child while handling the chemicals and instruments is duly taken care of. All labs have
                safety equipment including eye wash stations, fire extinguishers, and first aid kits. Our lab instructors are trained
                in safety protocols and emergency procedures.
              </p>
              <p className="text-gray-700">
                The computer lab is upgraded with appropriate software to enable students of classes XI and XII to compile and run 
                programs in Java with BlueJ, in addition with all the basic software needed to do the projects and assignments. We
                also provide specialized software for graphic design, video editing, and programming to cater to diverse interests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extracurricular Activities Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-4">Extracurricular Activities</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Students are allowed to participate in numerous activities that help them to discover their hidden talents.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <MusicalNoteIcon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-800">Cultural Activities</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Our cultural programs include music, dance, drama, and art competitions that help students express their creativity and develop confidence. We host annual cultural festivals that showcase student talents and celebrate diversity.
              </p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Annual cultural festival
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Music and dance classes
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Drama and theater workshops
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <BookOpenIcon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-800">Literary Activities</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Debate clubs, creative writing workshops, and public speaking sessions help students enhance their communication and critical thinking skills. We participate in inter-school competitions and host literary events throughout the year.
              </p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Debate and elocution competitions
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Creative writing workshops
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  School magazine publication
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <TrophyIcon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-800">Sports Activities</h3>
              </div>
              <p className="text-gray-700 text-sm">
                From team sports like basketball and soccer to individual pursuits like swimming and athletics, we offer diverse opportunities for physical development. Our teams regularly participate in district and state level competitions.
              </p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Annual sports day
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Inter-house competitions
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                  Professional coaching
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Facilities Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">Additional Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <HeartIcon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-800">Medical Room</h3>
              </div>
              <p className="text-gray-700">
                Fully equipped medical room with a trained nurse available during school hours to address health concerns and emergencies. We have tie-ups with nearby hospitals for any emergency situations. Regular health check-ups and vaccination drives are organized for students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <ClipboardDocumentCheckIcon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-800">Cafeteria</h3>
              </div>
              <p className="text-gray-700">
                Hygienic cafeteria serving nutritious meals and snacks. We follow strict food safety standards and offer balanced meal options. Our menu is designed by nutritionists to ensure students receive healthy and delicious food options that support their growth and learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <WifiIcon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-800">Wi-Fi Campus</h3>
              </div>
              <p className="text-gray-700">
                Fully Wi-Fi enabled campus with high-speed internet access available in all classrooms and common areas. Our network is secured with advanced firewalls and content filtering to ensure a safe online learning environment for students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 rounded-lg mr-3">
                  <LightBulbIcon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-800">Auditorium</h3>
              </div>
              <p className="text-gray-700">
                A spacious auditorium with modern audio-visual equipment and seating capacity for 500 people, used for assemblies, performances, and events. The auditorium features advanced lighting and sound systems to support various types of performances and presentations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Grid - With Images */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category.id 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-teal-700 hover:bg-teal-100'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility, index) => (
              <div 
                key={facility.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedFacility(index)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-teal-100 rounded-lg mr-3">
                      {facility.icon}
                    </div>
                    <h3 className="font-bold text-teal-800 text-lg">{facility.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {facility.description}
                  </p>
                  
                  <h4 className="font-semibold text-teal-800 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {facility.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                    {/* {facility.features.length > 3 && (
                      <li className="text-teal-600 text-xs">
                        +{facility.features.length - 3} more features
                      </li>
                    )} */}
                  </ul>
                  
                  {/* <button className="text-teal-600 hover:text-teal-800 text-sm font-medium">
                    Learn More →
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Virtual Tour Section */}
      <div className="py-12 bg-gradient-to-br from-teal-700 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-4xl font-bold mb-2">4+</div>
                <div className="text-sm">ACRES CAMPUS</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm">CLASSROOMS</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm">SPECIALIZED LABS</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;