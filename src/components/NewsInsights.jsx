import React from 'react'
import { CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

function NewsInsights() {
    const newsItems = [
    {
      title: "Science Fair 2023",
      date: "Dec 15, 2023",
      excerpt: "Students showcased innovative projects at the annual science fair.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Academics"
    },
    {
      title: "Cultural Day Celebration",
      date: "Nov 20, 2023",
      excerpt: "Annual cultural day celebrated with traditional performances.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2155&q=80",
      category: "Events"
    },
    {
      title: "Sports Achievements",
      date: "Oct 10, 2023",
      excerpt: "Our students won 5 gold medals at the district level sports meet.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Sports"
    }
  ];
  
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-teal-700/5 -skew-y-3 -translate-y-24 origin-top-left"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-600/5 rounded-full translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl font-bold text-teal-800 mb-4">News & Insights</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest happenings and achievements at our institution</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <CalendarDaysIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">{news.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {news.title}
                </h3>
                <p className="text-gray-700 mb-4">{news.excerpt}</p>
                <a href="#" className="inline-flex items-center text-teal-600 font-semibold group-hover:text-teal-800 transition-colors duration-300">
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center">
            View All News
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsInsights