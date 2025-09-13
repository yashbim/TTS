// components/Qualities.tsx
import { QUALITIES } from '@/constants/Qualities';

export default function Qualities() {
  return (
    <section id="qualities" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-gradient-primary mb-4">Our Core Values</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            The principles that drive our commitment to excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {QUALITIES.map((quality, index) => (
            <div key={index} className="card p-6 text-center animate-fade-in group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h4 className="text-blue-900 mb-3">{quality.title}</h4>
              <p className="text-neutral-600 text-sm line-clamp-4">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}