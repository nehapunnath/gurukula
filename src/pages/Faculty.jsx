import React, { useState } from 'react';
import { 
  AcademicCapIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const Faculty = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Faculty data with Google images
  const faculty = [
    {
      id: 1,
      name: "Dr. Meena Sharma",
      subject: "Physics",
      department: "science",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Mr. Ramesh Kumar",
      subject: "Mathematics",
      department: "mathematics",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Ms. Priya Nair",
      subject: "English Literature",
      department: "languages",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Dr. Anand Patel",
      subject: "Chemistry",
      department: "science",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Mrs. Lakshmi Devi",
      subject: "Hindi",
      department: "languages",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Mr. Suresh Menon",
      subject: "Accountancy",
      department: "commerce",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Ms. Anjali Mehta",
      subject: "History",
      department: "humanities",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Mr. Vikram Singh",
      subject: "Computer Science",
      department: "computer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      name: "Mrs. Geeta Reddy",
      subject: "Biology",
      department: "science",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      name: "Mr. Arjun Kapoor",
      subject: "Physical Education",
      department: "physical",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      name: "Ms. Sunita Das",
      subject: "Economics",
      department: "commerce",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      name: "Mr. Rajesh Khanna",
      subject: "Sanskrit",
      department: "languages",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Department filters
  const departments = [
    { id: 'all', name: 'All Faculty' },
    { id: 'science', name: 'Science' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'languages', name: 'Languages' },
    { id: 'commerce', name: 'Commerce' },
    { id: 'humanities', name: 'Humanities' },
    { id: 'computer', name: 'Computer Science' },
    { id: 'physical', name: 'Physical Education' }
  ];

  // Filtering logic
  const filteredFaculty = faculty.filter(teacher => {
    const matchesDepartment = activeFilter === 'all' || teacher.department === activeFilter;
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         teacher.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="font-sans pt-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
<div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-24 md:py-32 mt-16 overflow-hidden">
        <div className="absolute inset-0  bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-900/80 to-teal-800/80"></div>
        
        {/* Animated elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">Our Faculty</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">Meet our dedicated team of educators</p>
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

      {/* Filters and Search */}
      <div className="py-6 bg-white sticky top-16 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <FunnelIcon className="h-5 w-5 text-teal-600 mr-2" />
              <span className="text-sm font-medium text-teal-800">Filter by Department:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setActiveFilter(dept.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${activeFilter === dept.id ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-teal-100'}`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFaculty.map(teacher => (
                <div key={teacher.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-teal-800 mb-1">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">{teacher.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                <AcademicCapIcon className="w-8 h-8 text-teal-600" />
              </div>
              <p className="text-gray-600">No faculty members match your search criteria.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-teal-600 hover:text-teal-800 text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">{faculty.length}+</div>
              <div className="text-sm text-teal-800">Faculty Members</div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">10+</div>
              <div className="text-sm text-teal-800">Years Average Experience</div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">100%</div>
              <div className="text-sm text-teal-800">Postgraduate Qualifications</div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">15+</div>
              <div className="text-sm text-teal-800">Subjects Offered</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Faculty;