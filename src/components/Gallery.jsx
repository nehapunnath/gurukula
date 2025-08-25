import React, { useState } from 'react'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import s1 from '../assets/s1.jpg'
import s15 from '../assets/s15.jpg'
import s5 from '../assets/s5.jpg'
import c1 from '../assets/c1.jpg'
import s2 from '../assets/s2.jpg'
import s7 from '../assets/s7.jpg'
import s8 from '../assets/s8.jpg'
import s11 from '../assets/s11.jpg'
import s4 from '../assets/s4.jpg'
import s3 from '../assets/s3.jpg'


function Gallery() {
  const galleryImages = [
    s4,s15,s5,c1,s2,s7,s8,s11

  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (lightboxIndex + 1) % galleryImages.length;
    } else {
      newIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setLightboxIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-700/5 -skew-y-3 translate-y-48 -translate-x-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Campus Life
          </span>
          <h2 className="text-4xl font-bold text-teal-800 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600">Explore moments from our vibrant campus life and events</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">Campus Image {index + 1}</p>
                  <div className="flex items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowsPointingOutIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">Click to enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-60"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-60"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-60"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">Image {lightboxIndex + 1} of {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery