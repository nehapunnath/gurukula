import React, { useState } from 'react'
import ad from '../assets/ad.jpg'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import chairperson from '../assets/chairperson.jpg'
import principal2 from '../assets/principal2.jpg'

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
      // name: "Sri Rajeshwara Shivacharya Swamiji",
      position: "Srimadh Rajapura Samstana Mutt Educational Trust",
      message: "Dear Parents, Namaste 🙏A child's life is like a beautiful garden, and you, as parents, are the first gardeners. The seeds of love, values, and discipline that you plant today will blossom into the virtues of tomorrow. Let us together nurture their minds with knowledge, their hearts with compassion, and their souls with humility. Stand by them, guide them, and inspire them to walk the path of righteousness. May your home always be filled with joy, harmony, and divine blessings",
      image: g2
    },
    {
      name: "Mr. C Natraj",
      position: "Chairperson",
      message: "Dear Students, Parents, and Staff, Welcome to a new chapter of learning and growth! At SriGurukulaInternationalSchool we believe education+ culture is more than academics it's about building character, curiosity, and confidence. Every child here is a spark of potential, and together, we light the path to a brighter tomorrow. To students dream bold, work smart, stay kind. To parents thank you for your trust and support. To staff your passion makes this place thrive. Let's keep moving forward with purpose, with pride.",
      image: chairperson
    },
    {
      name: "Mrs. Bhuvaneshwari N",
      position: "Principal",
      message: "Dear Parents and Students, It is my privilege to welcome you to Sri Gurukula International School, a place where learning goes beyond textbooks and classrooms. At SGIS, we believe every child is unique and has the ability to shine when given the right guidance, care, and opportunities.As Principal, my vision is to create an environment where discipline and creativity walk hand in hand, where children are encouraged to think independently, act responsibly, and grow holistically. Our dedicated teachers, along with the support of parents, work together to nurture not only academic excellence but also strong values, life skills, and character in every student.We strive to build a school culture that inspires curiosity, celebrates diversity, and prepares students to face the challenges of the future with confidence and compassion.I look forward to walking this journey together with you, ensuring that our children not only succeed in their studies but also grow into responsible, kind, and capable individuals.",
      image: principal2
    },
    {
      name: "Dr. Komal Sharma",
      position: "Academic Director",
      message: "Dear Parents and Guardians, It gives me immense pleasure to welcome you to Sri Gurukula International School. Education is a shared journey where the school, teachers, parents, and students walk hand in hand to create a strong foundation for lifelong learning. At SGIS, we believe in nurturing every child's potential by blending academic excellence with values, creativity, and skills for the future. Our aim is to create not just successful learners, but responsible citizens and compassionate human beings.",
      image: ad
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/30 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold mb-3 tracking-wider uppercase text-sm">Leadership Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Guiding Visionaries</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the exceptional leaders who guide our institution with wisdom, dedication, and a shared vision for excellence
          </p>
        </div>

        <div className="space-y-16">
          {leadership.map((person, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
            >
              {/* Image Section */}
              <div className="w-full md:w-2/5 flex rounded-pill justify-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-xs">
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover  transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="text-white font-medium text-lg">{person.name}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-3/5">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <span className="inline-block text-blue-600 font-medium mb-2">{person.position}</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{person.name}</h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${activeCard === index ? 'max-h-96' : 'max-h-20'}`}>
                    <p className="text-gray-700 leading-relaxed">"{person.message}"</p>
                  </div>
                  
                  <button 
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                    className="mt-4 flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    <span className="mr-2">{activeCard === index ? 'Read less' : 'Read more'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${activeCard === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  )
}

export default Leaders