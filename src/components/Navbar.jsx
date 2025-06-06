import { useState, useEffect } from "react";
import { Wheat, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full  bg-white/80 dark:bg-[#1e1e1e]/90 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo - Always Visible */}
          <div className="flex items-center gap-2 text-green-800 dark:text-green-400">
            <Wheat />
            <span className="text-xl font-bold">WheatDoc</span>
          </div>

          {/* Hamburger Icon (Small Screens) */}
          <div className="sm:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Nav Links - Desktop */}
          <ul className="hidden sm:flex items-center gap-6 text-sm sm:text-base">
            <li>
              <a href="#features" className="text-gray-800 dark:text-gray-100 hover:text-green-500">Features</a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-800 dark:text-gray-100 hover:text-green-500">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 dark:text-gray-100 hover:text-green-500">Contact</a>
            </li>
            <li>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="sm:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3 text-base">
              <li>
                <a href="#features" className="block text-gray-800 dark:text-gray-100 hover:text-green-500">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="block text-gray-800 dark:text-gray-100 hover:text-green-500">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="block text-gray-800 dark:text-gray-100 hover:text-green-500">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
