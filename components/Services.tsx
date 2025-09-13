// components/Services.tsx
'use client';

import { useState } from 'react';
import { SERVICES } from '@/constants/Services';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding gradient-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-gradient-primary mb-4">Our Services</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive textile dyeing and finishing solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="card p-6 cursor-pointer animate-scale-in hover:scale-105 transition-transform duration-200"
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🧵</span>
              </div>
              <h4 className="text-blue-900 mb-2">{service.title}</h4>
              {service.subtitle && (
                <p className="text-sm text-teal-600 font-medium mb-3">
                  {service.subtitle}
                </p>
              )}
              <p className={`text-neutral-600 text-sm transition-all duration-200 ${
                selectedService === index ? 'line-clamp-none' : 'line-clamp-3'
              }`}>
                {service.description}
              </p>
              <button className="text-blue-600 text-sm font-medium mt-3 hover:text-blue-700">
                {selectedService === index ? 'Show less' : 'Learn more →'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}