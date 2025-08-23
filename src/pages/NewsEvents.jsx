import React, { useState, useEffect } from 'react';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  AcademicCapIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  SpeakerWaveIcon,
  TrophyIcon,
  MusicalNoteIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const NewsEvents = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample news data
  const news = [
    {
      id: 1,
      title: "Annual Science Fair 2023 Showcases Student Innovation",
      date: "2023-10-15",
      excerpt: "Students from grades 6-12 displayed innovative projects at our annual science fair, with several projects winning recognition at the state level.",
      category: "academics",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Sri Gurukula Wins Regional Basketball Championship",
      date: "2023-09-28",
      excerpt: "Our senior basketball team brought home the trophy after an exciting tournament against 12 schools from the region.",
      category: "sports",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true,
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "New Computer Lab Inaugurated with State-of-the-Art Facilities",
      date: "2023-09-10",
      excerpt: "The new computer lab features 40 high-end systems, interactive displays, and specialized software for programming and design courses.",
      category: "facilities",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Cultural Fest 2023 Celebrates Diversity and Talent",
      date: "2023-08-25",
      excerpt: "Students showcased performances representing various Indian states and cultures, promoting unity in diversity.",
      category: "events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Parent-Teacher Meeting Scheduled for November 5th",
      date: "2023-10-28",
      excerpt: "The quarterly parent-teacher meeting will be held on November 5th to discuss student progress and development.",
      category: "announcements",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "2 min read"
    },
    {
      id: 6,
      title: "School Announces New Scholarship Program for Meritorious Students",
      date: "2023-10-05",
      excerpt: "The new scholarship program will provide financial assistance to 20 students based on academic excellence and extracurricular achievements.",
      category: "announcements",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "3 min read"
    }
  ];

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Annual Day Celebration",
      date: "2023-11-20",
      time: "5:00 PM - 8:00 PM",
      location: "School Auditorium",
      description: "Our annual cultural extravaganza showcasing student talents in music, dance, and drama.",
      category: "events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Inter-School Science Symposium",
      date: "2023-11-25",
      time: "9:00 AM - 4:00 PM",
      location: "Science Block",
      description: "Students from 15 schools will participate in various science competitions and exhibitions.",
      category: "academics",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Parent Workshop: Digital Wellness",
      date: "2023-12-05",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Hall",
      description: "A workshop for parents on managing screen time and promoting digital wellness in children.",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Sports Day",
      date: "2023-12-15",
      time: "8:00 AM - 5:00 PM",
      location: "School Grounds",
      description: "Annual sports day with track and field events for all classes.",
      category: "sports",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Career Counseling Session",
      date: "2023-12-18",
      time: "2:00 PM - 4:00 PM",
      location: "Career Guidance Cell",
      description: "Interactive session for grade 10 and 12 students on career options and higher education.",
      category: "academics",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All News & Events', icon: <AcademicCapIcon className="w-5 h-5" /> },
    { id: 'academics', name: 'Academics', icon: <BookOpenIcon className="w-5 h-5" /> },
    { id: 'sports', name: 'Sports', icon: <TrophyIcon className="w-5 h-5" /> },
    { id: 'events', name: 'Events', icon: <MusicalNoteIcon className="w-5 h-5" /> },
    { id: 'announcements', name: 'Announcements', icon: <SpeakerWaveIcon className="w-5 h-5" /> },
    { id: 'facilities', name: 'Facilities', icon: <AcademicCapIcon className="w-5 h-5" /> },
    { id: 'workshops', name: 'Workshops', icon: <BookOpenIcon className="w-5 h-5" /> }
  ];

  // Filtering logic
  const filteredNews = news.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredEvents = events.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = news.filter(item => item.featured);

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      academics: 'bg-blue-100 text-blue-800',
      sports: 'bg-green-100 text-green-800',
      events: 'bg-purple-100 text-purple-800',
      announcements: 'bg-amber-100 text-amber-800',
      facilities: 'bg-cyan-100 text-cyan-800',
      workshops: 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      academics: <BookOpenIcon className="w-4 h-4" />,
      sports: <TrophyIcon className="w-4 h-4" />,
      events: <MusicalNoteIcon className="w-4 h-4" />,
      announcements: <SpeakerWaveIcon className="w-4 h-4" />,
      facilities: <AcademicCapIcon className="w-4 h-4" />,
      workshops: <BookOpenIcon className="w-4 h-4" />
    };
    return icons[category] || <AcademicCapIcon className="w-4 h-4" />;
  };

  return (
    <div className="font-sans pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-24 md:py-32 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-900/80 to-teal-800/80"></div>
        
        {/* Animated elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-amber-400/20 rounded-full animate-ping"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">News & Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up">Stay updated with the latest happenings at Sri Gurukula</p>
         
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
      <div className={`py-6 bg-white sticky top-16 z-20 shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id ? 
                    'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg' : 
                    'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'}`}
                >
                  <span className="flex items-center justify-center">
                    {category.icon}
                  </span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured News Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4 relative inline-block">
              <span className="relative z-10">Featured News</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-200 opacity-60 -z-10"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Highlighting the most important stories and achievements from our school community</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                    <span className="text-white text-sm font-medium">Read full story</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(item.category)}`}>
                      {getCategoryIcon(item.category)}
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm text-teal-600">{formatDate(item.date)}</p>
                    <p className="text-xs text-gray-500">{item.readTime}</p>
                  </div>
                  <h3 className="text-xl font-bold text-teal-800 mb-3 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <button className="flex items-center text-teal-600 font-medium group-hover:text-teal-800 transition-colors">
                    Read more
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-teal-200/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-200/30 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4 flex items-center justify-center">
              <CalendarIcon className="w-9 h-9 mr-3 text-teal-600" />
              Upcoming Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Mark your calendars for these exciting upcoming events at Sri Gurukula</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(event.category)}`}>
                      {getCategoryIcon(event.category)}
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 border-l-4 border-teal-500">
                  <div className="flex items-center text-sm text-teal-600 mb-3">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <h3 className="text-xl font-bold text-teal-800 mb-3 group-hover:text-teal-600 transition-colors">{event.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                    Add to Calendar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12 bg-white/50 rounded-2xl backdrop-blur-sm">
              <div className="w-24 h-24 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center">
                <CalendarIcon className="w-12 h-12 text-teal-600" />
              </div>
              <p className="text-gray-600 text-lg">No upcoming events match your filters.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-teal-600 hover:text-teal-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* News Archive Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">News Archive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Catch up on all the latest news and stories from our school community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(item.category)}`}>
                      {getCategoryIcon(item.category)}
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs text-teal-600">{formatDate(item.date)}</p>
                    <p className="text-xs text-gray-500">{item.readTime}</p>
                  </div>
                  <h3 className="text-lg font-bold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <button className="text-teal-600 text-sm font-medium hover:text-teal-800 transition-colors flex items-center group-hover:underline">
                    Read more
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <div className="w-24 h-24 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center">
                <BookOpenIcon className="w-12 h-12 text-teal-600" />
              </div>
              <p className="text-gray-600 text-lg">No news articles match your filters.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-teal-600 hover:text-teal-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center">
              Load More News
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="py-16 bg-gradient-to-br from-teal-800 to-teal-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-teal-500/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-400/10 rounded-full"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Subscribe to our newsletter to receive the latest news and event updates directly in your inbox</p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-sm mt-4 opacity-70">We respect your privacy and will never share your information</p>
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

export default NewsEvents;