import { Camera, Search, Stethoscope, Lightbulb } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-[#121212] mt-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
          Empowering Farmers with Smart Crop Care
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          WheatDoc helps you identify wheat diseases using your smartphone camera and provides expert-backed solutions to protect your crops and yield.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Camera className="w-10 h-10 text-green-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Snap a Picture</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Take a clear photo of your wheat crop using your phone to begin diagnosis.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Search className="w-10 h-10 text-green-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">AI Disease Detection</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Our AI analyzes the image to detect common wheat diseases instantly.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Stethoscope className="w-10 h-10 text-green-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Get Diagnosis</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Receive an accurate diagnosis of the issue affecting your crop, with severity level.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Lightbulb className="w-10 h-10 text-green-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Actionable Advice</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get treatment suggestions, prevention tips, and connect with local experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
