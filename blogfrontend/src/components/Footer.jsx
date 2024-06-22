import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="text-sm hover:underline">Facebook</Link>
          <Link href="#" className="text-sm hover:underline">Twitter</Link>
          <Link href="#" className="text-sm hover:underline">Instagram</Link>
          <Link href="#" className="text-sm hover:underline">LinkedIn</Link>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-sm">© 2024 RD. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
