import React from 'react'
import heroImage from '../assets/wheat-field-yellow.jpg'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
   <section className="pt-32 sm:pt-40 px-4 sm:px-8 bg-white dark:bg-[#121212] text-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
          {/* Text content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-green-800 dark:text-green-400">
              Empowering Farmers, One Field at a Time
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              At WheatDoc, our mission is to support sustainable farming with technology-driven insights and services.
            </p>
            <Link
              to="/dashboard"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-full transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Image content */}
          <div className="flex justify-center md:justify-end">
            <img src={heroImage} alt="Wheat Crop" className="rounded-xl shadow-lg max-h-96 w-auto" />
          </div>
        </div>
      </section>
  );
}


export default Hero
