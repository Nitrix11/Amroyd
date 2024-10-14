import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>SEO Optimization</li>
            <li>Digital Marketing</li>
            <li>Graphic Design</li>
            <li>Content Creation</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Home</li>
        
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="mb-4">Get the latest updates and news delivered to your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-l-md border border-gray-300"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} CRICVEST. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;