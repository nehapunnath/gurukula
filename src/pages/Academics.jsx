import React, { useState } from 'react';
import { 
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ChartBarIcon,
  BeakerIcon,
  CalculatorIcon,
  LanguageIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  ComputerDesktopIcon,
  ClockIcon,
  CalendarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [activeProgram, setActiveProgram] = useState(0);

  // Programs offered
  const programs = [
    {
      title: "Pre-KG to Grade 5",
      description: "Foundational learning with play-based activities and basic literacy and numeracy skills",
      icon: <BookOpenIcon className="w-8 h-8 text-teal-600" />,
      features: ["Play-based learning", "Phonics program", "Basic numeracy", "Creative arts", "Physical development"]
    },
    {
      title: "Middle School (Grades 6-8)",
      description: "Building strong academic foundations with exploratory learning across subjects",
      icon: <LightBulbIcon className="w-8 h-8 text-teal-600" />,
      features: ["Subject specialization", "Project-based learning", "Critical thinking skills", "STEM integration", "Language development"]
    },
    {
      title: "High School (Grades 9-10)",
      description: "Focused academic preparation with CBSE curriculum and board examination focus",
      icon: <AcademicCapIcon className="w-8 h-8 text-teal-600" />,
      features: ["CBSE curriculum", "Board exam preparation", "Career counseling", "Advanced mathematics", "Science streams"]
    },
    {
      title: "Pre-University (Grades 11-12)",
      description: "Specialized streams preparing students for higher education and competitive exams",
      icon: <TrophyIcon className="w-8 h-8 text-teal-600" />,
      features: ["Science Stream (PCMB)", "Commerce Stream", "Humanities Stream", "Competitive exam preparation", "University guidance"]
    }
  ];

  // Curriculum highlights
  const curriculum = {
    approach: "Our curriculum blends the best of traditional values with modern educational practices, creating a holistic learning experience that prepares students for the challenges of the 21st century.",
    features: [
      {
        title: "STEM Education",
        description: "Integrated Science, Technology, Engineering and Mathematics approach with hands-on learning",
        icon: <BeakerIcon className="w-6 h-6 text-teal-600" />
      },
      {
        title: "Language Development",
        description: "Emphasis on English proficiency along with options for Hindi, Kannada, and Sanskrit",
        icon: <LanguageIcon className="w-6 h-6 text-teal-600" />
      },
      {
        title: "Arts Integration",
        description: "Visual and performing arts integrated across subjects to foster creativity",
        icon: <PaintBrushIcon className="w-6 h-6 text-teal-600" />
      },
      {
        title: "Digital Literacy",
        description: "Technology integration from early years with dedicated computer science curriculum",
        icon: <ComputerDesktopIcon className="w-6 h-6 text-teal-600" />
      }
    ]
  };

  // Academic calendar
  const academicCalendar = [
    { month: "June", events: ["Academic Year Begins", "Orientation Program"] },
    { month: "July", events: ["Parent-Teacher Meeting", "Science Exhibition"] },
    { month: "August", events: ["Independence Day Celebration", "Sports Day"] },
    { month: "September", events: ["Teacher's Day", "Unit Test 1"] },
    { month: "October", events: ["Gandhi Jayanti", "Cultural Fest"] },
    { month: "November", events: ["Children's Day", "Project Submission"] },
    { month: "December", events: ["Annual Day", "Winter Break Begins"] },
    { month: "January", events: ["School Reopens", "Republic Day"] },
    { month: "February", events: ["Unit Test 2", "Science Symposium"] },
    { month: "March", events: ["Board Exams", "Final Exams"] },
    { month: "April", events: ["Result Declaration", "New Session Planning"] },
    { month: "May", events: ["Summer Break", "Remedial Classes"] }
  ];

  // Faculty highlights
  const faculty = [
    {
      name: "Dr. Meena Sharma",
      qualification: "Ph.D in Physics, IIT Alumnus",
      experience: "15+ years",
      role: "Head of Science Department",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mr. Ramesh Kumar",
      qualification: "M.Tech, M.Ed",
      experience: "12+ years",
      role: "Mathematics Department",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ms. Priya Nair",
      qualification: "M.A. English, B.Ed",
      experience: "10+ years",
      role: "English Faculty",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Anand Patel",
      qualification: "Ph.D in Chemistry",
      experience: "18+ years",
      role: "Senior Science Faculty",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Academic achievements
  const achievements = [
    { year: "2023", achievement: "100% pass rate in CBSE Board Exams" },
    { year: "2023", achievement: "5 students scored above 95% in Grade 12" },
    { year: "2022", achievement: "State rank in National Science Olympiad" },
    { year: "2022", achievement: "Best School Award for Academic Excellence" },
    { year: "2021", achievement: "3 students qualified for NTSE Stage 2" },
    { year: "2021", achievement: "1st place in Inter-School Math Quiz" }
  ];

  return (
    <div className="font-sans pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-24 md:py-32 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-900/80 to-teal-800/80"></div>
        
        {/* Animated elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Academics</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Excellence in Education with a Foundation of Values</p>
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

      {/* Programs Offered */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture young minds at every stage of development
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${activeProgram === index ? 'ring-2 ring-teal-500' : ''}`}
                onClick={() => setActiveProgram(index)}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-2 text-center">{program.title}</h3>
                <p className="text-gray-700 text-sm mb-4 text-center">{program.description}</p>
                <ul className="text-sm text-gray-600">
                  {program.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Program Detail */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">{programs[activeProgram].title} - Detailed Overview</h3>
            <p className="text-gray-700 mb-6">
              Our {programs[activeProgram].title.toLowerCase()} program is carefully designed to provide a balanced education that fosters intellectual, 
              social, and emotional growth. We follow the CBSE curriculum while incorporating innovative teaching 
              methodologies to ensure holistic development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-teal-800 mb-3">Key Focus Areas</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <AcademicCapIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Conceptual understanding</span>
                  </li>
                  <li className="flex items-center">
                    <LightBulbIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Critical thinking skills</span>
                  </li>
                  <li className="flex items-center">
                    <UserGroupIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Collaborative learning</span>
                  </li>
                  <li className="flex items-center">
                    <GlobeAltIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Global perspective</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-800 mb-3">Assessment Pattern</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChartBarIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Continuous and comprehensive evaluation</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpenIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Formative and summative assessments</span>
                  </li>
                  <li className="flex items-center">
                    <TrophyIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Skill-based evaluation</span>
                  </li>
                  <li className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Regular progress tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-4">Our Curriculum</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A balanced and comprehensive curriculum that prepares students for academic success and life beyond school
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <p className="text-gray-700 text-lg mb-6 text-center">
              {curriculum.approach}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.features.map((feature, index) => (
                <div key={index} className="bg-teal-50 p-6 rounded-xl transition-all duration-300 hover:bg-teal-100">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-teal-100 rounded-lg mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-teal-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Subjects Offered */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">Subjects Offered</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-teal-800 mb-3 border-b pb-2">Core Subjects</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CalculatorIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Mathematics</span>
                  </li>
                  <li className="flex items-center">
                    <LanguageIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>English</span>
                  </li>
                  <li className="flex items-center">
                    <BeakerIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Science (Physics, Chemistry, Biology)</span>
                  </li>
                  <li className="flex items-center">
                    <GlobeAltIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Social Studies</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-800 mb-3 border-b pb-2">Languages</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <LanguageIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Hindi</span>
                  </li>
                  <li className="flex items-center">
                    <LanguageIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Kannada</span>
                  </li>
                  <li className="flex items-center">
                    <LanguageIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Sanskrit</span>
                  </li>
                  <li className="flex items-center">
                    <LanguageIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>French (Optional)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-800 mb-3 border-b pb-2">Electives &amp; Co-curricular</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ComputerDesktopIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Computer Science</span>
                  </li>
                  <li className="flex items-center">
                    <MusicalNoteIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Music</span>
                  </li>
                  <li className="flex items-center">
                    <PaintBrushIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Art Education</span>
                  </li>
                  <li className="flex items-center">
                    <TrophyIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span>Physical Education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Academic Calendar */}
      <div className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-4">Academic Calendar 2023-24</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Important dates and events for the current academic year
          </p>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {academicCalendar.map((month, index) => (
                <div key={index} className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 text-center mb-2">{month.month}</h3>
                  <ul className="text-sm text-gray-700">
                    {month.events.map((event, i) => (
                      <li key={i} className="mb-1 text-center">{event}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center justify-center mx-auto">
                Download Full Academic Calendar
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-4">Academic Achievements</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Celebrating excellence and outstanding performance in academics
          </p>
          
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-teal-800 mb-6">Recent Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-teal-600 font-bold">{item.year}</div>
                      <div className="text-gray-700">{item.achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-teal-800 mb-6">Academic Performance</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-teal-800 mb-4">CBSE Board Results 2023</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>School Pass Percentage</span>
                      <span className="font-bold text-teal-600">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students scoring above 90%</span>
                      <span className="font-bold text-teal-600">42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students scoring above 95%</span>
                      <span className="font-bold text-teal-600">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>School Average Score</span>
                      <span className="font-bold text-teal-600">87.5%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
                  <h4 className="font-semibold text-teal-800 mb-4">Competitive Exams</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>NTSE Qualifiers</span>
                      <span className="font-bold text-teal-600">3 Students</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Science Olympiad Awards</span>
                      <span className="font-bold text-teal-600">12 Students</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Math Olympiad Awards</span>
                      <span className="font-bold text-teal-600">8 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Academics;