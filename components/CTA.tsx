// components/CTA.tsx
export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <h2 className="text-white mb-6">Ready to Transform Your Textiles?</h2>
        <p className="text-blue-100 text-lg mb-8">
          Partner with us for premium textile dyeing and finishing services that exceed expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-warm">
            Get Started Today
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}