import React, { useState } from 'react'
import ad from '../assets/ad.jpg'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import chairperson from '../assets/chairperson.jpg'

function Leaders() {
    const [activeCard, setActiveCard] = useState(null);
    
    const leadership = [
    {
      name: "Sri Rajeshwara Shivacharya Swamiji",
      position: "Srimadh Rajapura Samstana Mutt Educational Trust",
      message: "Dear Parents, Namaste 🙏 A child's journey of learning begins at home and blossoms in school. As parents, you are the first gurus, shaping values, discipline, and devotion in young hearts. Let education not only fill their minds with knowledge but also their hearts with humility and wisdom. Walk with them, guide them, and be their strength for they are the future torchbearers of dharma and humanity. May the Almighty bless your family with peace, health, and spiritual growth.",
      image: g1
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
  
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-teal-200/30 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200/30 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-4 relative inline-block">
            Leadership
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leaders who guide our institution with wisdom and dedication
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((person, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${activeCard === index ? 'ring-2 ring-teal-500' : ''}`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium">Click to {activeCard === index ? 'collapse' : 'expand'}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-1">{person.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{person.position}</p>
                
                <div className={`overflow-hidden transition-all duration-500 ${activeCard === index ? 'max-h-96' : 'max-h-20'}`}>
                  <p className="text-gray-700 italic">"{person.message}"</p>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center text-teal-600 font-medium">
                    <span className="mr-2">{activeCard === index ? 'Show less' : 'Read more'}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${activeCard === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Meet All Leaders
          </button>
        </div>
      </div>
    </div>
  )
}

export default Leaders