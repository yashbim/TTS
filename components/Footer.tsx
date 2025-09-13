// components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-white section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TTS</span>
              </div>
              <h3 className="text-2xl font-bold">Total Textile Solutions</h3>
            </div>
            <p className="text-neutral-400 mb-6">
              Your trusted partner in professional textile dyeing and finishing services.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <span>📧</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <span>📱</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <span>🌐</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Fabric Dyeing</li>
              <li>Washing & Drying</li>
              <li>Elastic Dyeing</li>
              <li>Thread Over Dyeing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>📍 Your Address Here</li>
              <li>📞 +94 XX XXX XXXX</li>
              <li>✉️ info@totaltextile.lk</li>
              <li>🕒 Mon - Fri: 8AM - 5PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400">
            © 2024 Total Textile Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}