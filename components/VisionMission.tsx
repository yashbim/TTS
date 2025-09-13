// components/VisionMission.tsx
import { VM } from '@/constants/VisionMission';

export default function VisionMission() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12">
          {VM.map((item, index) => (
            <div key={index} className="animate-slide-up">
              <div className="card p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.title === 'Vision' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-r from-purple-500 to-purple-600'
                  }`}>
                    <span className="text-white font-bold text-xl">
                      {item.title === 'Vision' ? '👁️' : '🎯'}
                    </span>
                  </div>
                  <h3 className="ml-4 text-gradient-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}