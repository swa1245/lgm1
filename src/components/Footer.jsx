import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white py-12">
      <div className="flex items-center justify-between gap-20 space-y-4 px-4">
        <div className="flex justify-between items-center space-x-4">
          <a href="https://www.instagram.com/lgm.sports?igsh=MW5lOXQ2dGFjcmZ3cA==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 6.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm6.5-2.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/share/1AFW5ucGBg/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.001 3.657 9.127 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563v1.88h2.773l-.443 2.89h-2.33V22C18.343 21.127 22 17.001 22 12z"/>
            </svg>
          </a>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Bont Skates India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
