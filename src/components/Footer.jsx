import { Wheat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 mb-8">
          {/* Logo + Tagline */}
          

          {/* Links */}
          

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-500" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-green-500" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-green-500" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} WheatDoc. All rights reserved | By Tabarak Allah
        </div>
      </div>
    </footer>
  );
}
