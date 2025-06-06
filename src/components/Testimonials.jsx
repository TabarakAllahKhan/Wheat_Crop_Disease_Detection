import React from "react";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Patel",
      role: "Farmer from Gujarat",
      quote:
        "WheatDoc helped me detect rust disease early and save my entire crop. I can’t imagine farming without it now!",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Meera Singh",
      role: "Agronomist",
      quote:
        "This tool bridges the gap between modern technology and traditional farming. A real game-changer for farmers.",
      image: "https://i.pravatar.cc/100?img=22",
    },
    {
      name: "Amit Verma",
      role: "Wheat Farmer, Punjab",
      quote:
        "Just a photo and I get instant diagnosis and treatment. My yield has improved thanks to WheatDoc.",
      image: "https://i.pravatar.cc/100?img=36",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-700 dark:text-green-400">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-md p-6 transition hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 shadow"
                />
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  “{testimonial.quote}”
                </p>
                <div className="text-green-700 dark:text-green-400 font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
