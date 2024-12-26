import React from 'react';

const Foot = () => {
  return (
      <footer className="bg-gray-800 text-white py-8 mt-[550px]">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
  );
};

export default Foot;
