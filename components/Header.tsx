// components/Header.tsx
export default function Header() {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TTS</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient-primary">
              Total Textile Solutions
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-neutral-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-neutral-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-neutral-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#qualities" className="text-neutral-700 hover:text-blue-600 transition-colors">Values</a>
            <a href="#contact" className="text-neutral-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}