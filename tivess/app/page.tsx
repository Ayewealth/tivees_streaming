'use client';

import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const toggleFaq = (index:any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is StreamMedia?",
      answer: "StreamMedia is a streaming service that allows you to watch movies and shows on demand."
    },
    {
      question: "How much does StreamMedia cost?",
      answer: "StreamMedia offers flexible pricing plans starting from ₦1,200/month for our basic plan."
    },
    {
      question: "What content is available on StreamMedia?",
      answer: "We offer a vast library of movies, TV shows, documentaries, and exclusive originals across all genres."
    },
    {
      question: "How can I watch StreamMedia?",
      answer: "You can watch StreamMedia on any device including smartphones, tablets, smart TVs, laptops, and gaming consoles."
    },
    {
      question: "How do I sign up for StreamMedia?",
      answer: "Simply click on 'Start Free Trial' button and follow the registration process to create your account."
    },
    {
      question: "What is the StreamMedia free trial?",
      answer: "New users get a 30-day free trial to explore all our content and features before subscribing."
    },
    {
      question: "How do I contact StreamMedia customer support?",
      answer: "You can reach our 24/7 customer support team via email at support@streammedia.com or through our live chat."
    },
    {
      question: "What are the StreamMedia payment methods?",
      answer: "We accept all major credit cards, debit cards, PayPal, and mobile payment options."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute z-20 top-0 left-0 w-full h-full bg-black/80"></div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full px-4">
          <h1 className="lg:text-5xl text-4xl font-bold text-center mb-4">
            The Best Streaming Experience
          </h1>
          <p className="lg:text-base text-sm text-center max-w-3xl mb-8 text-gray-300">
            StreamMedia is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. 
            With StreamMedia, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, 
            and more. You can also download and watch offline. StreamMedia is available on all your devices.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded flex items-center gap-2 transition-all transform hover:scale-105">
            <span className="text-xl">▶</span>
            Start Watching Now
          </button>
        </div>
      </section>

      {/* ==================== CATEGORIES SECTION ==================== */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore our wide variety of categories
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Action Category */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-3 transition-transform transform group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" 
                  alt="Action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold">Action</h3>
                </div>
              </div>
            </div>

            {/* Adventure Category */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-3 transition-transform transform group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80" 
                  alt="Adventure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold">Adventure</h3>
                </div>
              </div>
            </div>

            {/* Comedy Category */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-3 transition-transform transform group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80" 
                  alt="Comedy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold">Comedy</h3>
                </div>
              </div>
            </div>

            {/* Drama Category */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-3 transition-transform transform group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&q=80" 
                  alt="Drama"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold">Drama</h3>
                </div>
              </div>
            </div>

            {/* Horror Category */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-3 transition-transform transform group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80" 
                  alt="Horror"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold">Horror</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEVICES SECTION ==================== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Provide you streaming experience across various devices.
          </h2>
          <p className="text-gray-400 mb-12">
            With StreamMedia, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be 
            compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
          </p>

          {/* Devices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Smartphones */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 rounded-lg p-6 cursor-pointer hover:border-red-950 transition-all">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smartphones</h3>
              <p className="text-gray-400 text-sm">
                StreamMedia is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.
              </p>
            </div>

            {/* Tablet */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 rounded-lg p-6 cursor-pointer hover:border-red-950 transition-all">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tablet</h3>
              <p className="text-gray-400 text-sm">
                StreamMedia is optimized for both Android and iOS tablets. Enjoy larger screens and perfect viewing experience.
              </p>
            </div>

            {/* Smart TV */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 rounded-lg p-6 cursor-pointer hover:border-red-950 transition-all">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center mb-4">
                <span className="text-2xl">📺</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart TV</h3>
              <p className="text-gray-400 text-sm">
                StreamMedia is available on all major Smart TV platforms. Experience cinema-quality viewing from your living room.
              </p>
            </div>

            {/* Laptops */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 rounded-lg p-6 cursor-pointer hover:border-red-950 transition-all">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Laptops</h3>
              <p className="text-gray-400 text-sm">
                Watch anywhere on your Mac or PC. StreamMedia works on all laptops with high-quality streaming.
              </p>
            </div>

            {/* Gaming Consoles */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 rounded-lg p-6 cursor-pointer hover:border-red-950 transition-all">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gaming Consoles</h3>
              <p className="text-gray-400 text-sm">
                Available on PlayStation, Xbox, and Nintendo. Switch seamlessly between gaming and streaming.
              </p>
            </div>

            {/* VR Headsets */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 rounded-lg p-6 cursor-pointer hover:border-red-950 transition-all">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center mb-4">
                <span className="text-2xl">🥽</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">VR Headsets</h3>
              <p className="text-gray-400 text-sm">
                Immerse yourself in entertainment with VR support. Experience movies like never before in virtual reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400">
                Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamMedia
              </p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded whitespace-nowrap ml-4 transition-colors">
              Ask a Question
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => toggleFaq(index + 1)}
                  className="w-full flex justify-between items-center py-5 text-left hover:text-red-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 font-semibold">0{index + 1}</span>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                  <span className="text-2xl text-red-600">
                    {openFaq === index + 1 ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index + 1 && (
                  <div className="pb-5 pl-12 text-gray-400 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the plan that's right for you
          </h2>
          <p className="text-gray-400 mb-8">
            Join StreamMedia and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
          </p>

          {/* Plan Toggle */}
          <div className="flex justify-start gap-4 mb-12">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-6 py-2 rounded transition-colors ${
                selectedPlan === 'monthly'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-6 py-2 rounded transition-colors ${
                selectedPlan === 'yearly'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Yearly
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Monthly Plan</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
              </p>
              <div className="mb-8">
                <span className="text-5xl font-bold">₦1,200</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-transparent border border-gray-600 hover:border-red-600 text-white py-3 rounded transition-colors">
                  Start Free Trial
                </button>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded transition-colors">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Yearly Plan</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Access to a widest selection of movies and shows, including all new releases and Offline Viewing.
              </p>
              <div className="mb-8">
                <span className="text-5xl font-bold">₦2,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-transparent border border-gray-600 hover:border-red-600 text-white py-3 rounded transition-colors">
                  Start Free Trial
                </button>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded transition-colors">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574267432644-f74d8eb4aa22?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start your free trial today!
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamMedia.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-all transform hover:scale-105">
            Start a Free Trial
          </button>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2024 StreamMedia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}