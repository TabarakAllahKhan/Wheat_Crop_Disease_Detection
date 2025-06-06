export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or feedback? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6 bg-gray-50 dark:bg-[#2a2a2a] p-8 rounded-2xl shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
