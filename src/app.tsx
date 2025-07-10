import React from 'react';
import { CheckCircle, Mail, Globe, Shield, TrendingUp, Users, Award, BarChart3, Star } from 'lucide-react';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/public/logo_transparent_background-Signature.png" 
                alt="CTX Trader Logo" 
                className="h-16 w-auto mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CTX Trader, LLC</h1>
                <p className="text-sm text-gray-600">Your Trusted E-commerce Partner</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('partnering')}
                className="text-sm font-medium text-gray-600 hover:text-custom-orange-500 transition-colors"
              >
                Partnering With Us
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-gray-600 hover:text-custom-orange-500 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-gray-600 hover:text-custom-orange-500 transition-colors"
              >
                Contact
              </button>
              <a 
                href="mailto:info@ctxtrader.com" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom-orange-500 hover:bg-custom-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-custom-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted E-commerce Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              CTX Trader, LLC specializes in sourcing high-quality products from trusted suppliers 
              and distributing them through select e-commerce platforms with professional integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@ctxtrader.com" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-custom-orange-500 hover:bg-custom-orange-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              <button
                onClick={() => scrollToSection('partnering')}
                className="inline-flex items-center px-8 py-3 border border-custom-orange-500 text-base font-medium rounded-md text-custom-orange-500 bg-white hover:bg-custom-orange-50 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About CTX Trader, LLC</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              CTX Trader, LLC is a U.S.-based online retail company that sources high-quality products 
              from trusted suppliers and distributes them through select e-commerce platforms. We focus on 
              listing integrity, brand protection, and long-term supplier relationships. We use data to 
              choose which products to represent and sell.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h3>
            <p className="text-lg text-gray-600">
              We're committed to building lasting partnerships through professional service and integrity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-custom-orange-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Professional Listing Management</h4>
              </div>
              <p className="text-gray-600">
                Expert listing management and optimization to maximize your product visibility and sales performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-custom-orange-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">MAP & Pricing Guidelines</h4>
              </div>
              <p className="text-gray-600">
                Strict adherence to MAP and pricing guidelines to protect your brand integrity and market position.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-custom-orange-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Branded Product Representation</h4>
              </div>
              <p className="text-gray-600">
                Professional representation of your brand with consistent messaging and quality standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-custom-orange-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Reliable Customer Support</h4>
              </div>
              <p className="text-gray-600">
                Dedicated customer support team ensuring positive customer experiences and brand loyalty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-custom-orange-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Data-Driven Product Selection</h4>
              </div>
              <p className="text-gray-600">
                Strategic product selection based on comprehensive market data and performance analytics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-custom-orange-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Long-term Partnership Focus</h4>
              </div>
              <p className="text-gray-600">
                Building sustainable, long-term relationships that grow and evolve with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnering With CTX Trader Section */}
      <section id="partnering" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🤝 Partnering With CTX Trader
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-custom-orange-600 mb-8">
              Protect Your Brand. Simplify Your Channel. Grow Your Sales.
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Amazon can be a double-edged sword — for many brands, it's become a crowded, chaotic space 
                where unauthorized sellers slash prices, misrepresent products, and damage the customer experience.
              </p>
              <p className="text-xl font-semibold text-custom-orange-600">
                At CTX Trader, LLC, we offer a better path.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">🧭 Who We Are</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  CTX Trader is a U.S.-based online retail company that partners with manufacturers and 
                  distributors to purchase and resell products on Amazon. Our approach is built on long-term 
                  relationships, brand protection, and operational excellence.
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  We don't just move product — we take ownership of your brand's presence on the marketplace 
                  and treat it with the care it deserves.
                </p>
              </div>
            </div>
          </div>

          {/* Why Suppliers Choose Us */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🛡️ Why Suppliers Choose Us</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-custom-orange-50 p-6 rounded-lg border-l-4 border-custom-orange-500">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-custom-orange-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Listing Integrity</h4>
                </div>
                <p className="text-gray-600">
                  We optimize your product pages with accurate content, high-quality images, and SEO-driven copy.
                </p>
              </div>

              <div className="bg-custom-orange-50 p-6 rounded-lg border-l-4 border-custom-orange-500">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-custom-orange-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Brand Protection</h4>
                </div>
                <p className="text-gray-600">
                  We work with one supplier per product line and don't create unnecessary channel conflict.
                </p>
              </div>

              <div className="bg-custom-orange-50 p-6 rounded-lg border-l-4 border-custom-orange-500">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-custom-orange-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">MAP Compliance</h4>
                </div>
                <p className="text-gray-600">
                  We strictly follow your pricing policies and don't engage in price wars.
                </p>
              </div>

              <div className="bg-custom-orange-50 p-6 rounded-lg border-l-4 border-custom-orange-500">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-custom-orange-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Customer Experience</h4>
                </div>
                <p className="text-gray-600">
                  Fast fulfillment, responsive service, and high seller ratings mean your customers stay happy.
                </p>
              </div>

              <div className="bg-custom-orange-50 p-6 rounded-lg border-l-4 border-custom-orange-500 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-custom-orange-500 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Clean Distribution</h4>
                </div>
                <p className="text-gray-600">
                  One partner, one destination — no confusion, no chaos, no unauthorized sellers.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">📣 What Our Partners Say</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-custom-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "We used to deal with a dozen resellers — CTX streamlined everything, and our Amazon presence looks 10x more professional."
                </p>
                <p className="text-sm text-gray-600 font-medium">— Manufacturing Partner</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-custom-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "They stick to MAP, keep the listings sharp, and take the pressure off our team."
                </p>
                <p className="text-sm text-gray-600 font-medium">— Distribution Partner</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-custom-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "It's been a relief knowing our brand is being represented properly on Amazon."
                </p>
                <p className="text-sm text-gray-600 font-medium">— Brand Partner</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-custom-orange-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Start the Conversation</h3>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're a small manufacturer or a large distributor, CTX Trader is built to be a 
              low-friction, high-integrity partner you can rely on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partners@ctxtrader.com" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-custom-orange-500 hover:bg-custom-orange-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email: partners@ctxtrader.com
              </a>
              <a 
                href="https://www.ctxtrader.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-custom-orange-500 text-base font-medium rounded-md text-custom-orange-500 bg-white hover:bg-custom-orange-50 transition-colors"
              >
                <Globe className="w-5 h-5 mr-2" />
                Website: www.ctxtrader.com
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4 font-medium">
              CTX Trader, LLC<br />
              Professional. Reliable. Brand-Safe Reselling.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo and Company Info */}
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/logo_transparent_background-Signature.png" 
                alt="CTX Trader Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h4 className="font-semibold">CTX Trader, LLC</h4>
                <p className="text-sm text-gray-400">Your Trusted E-commerce Partner</p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="text-sm text-gray-400">
              <h5 className="font-semibold text-white mb-2">Contact Information</h5>
              <div className="space-y-1">
                <p>5900 Balcones Drive STE 100</p>
                <p>Austin, TX 78731</p>
                <p className="mt-2">Phone: (512) 553-2509</p>
                <p>Email: info@ctxtrader.com</p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-gray-400 md:text-right">
              © 2025 CTX Trader, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;