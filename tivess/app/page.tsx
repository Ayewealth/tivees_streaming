'use client';

import { useRef, useState } from 'react';
import { SolidMainPlayBtn } from './component/btns/AllBtns';
import { FaPlay } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? 0 : index);
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = direction === 'left' 
        ? categoryScrollRef.current.scrollLeft - scrollAmount
        : categoryScrollRef.current.scrollLeft + scrollAmount;
      
      categoryScrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Data Arrays
  const categories = [
    {
      id: 1,
      name: 'Action',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
      slug: 'action',
      movies: [
        { poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1574267432644-f74d8eb4aa22?w=200&q=80' }
      ]
    },
    {
      id: 2,
      name: 'Adventure',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80',
      slug: 'adventure',
      movies: [
        { poster: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80' }
      ]
    },
    {
      id: 3,
      name: 'Comedy',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
      slug: 'comedy',
      movies: [
        { poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1522009433803-07dedf7afe83?w=200&q=80' }
      ]
    },
    {
      id: 4,
      name: 'Drama',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&q=80',
      slug: 'drama',
      movies: [
        { poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=200&q=80' }
      ]
    },
    {
      id: 5,
      name: 'Horror',
      image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80',
      slug: 'horror',
      movies: [
        { poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=200&q=80' }
      ]
    },
    {
      id: 6,
      name: 'Sci-Fi',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80',
      slug: 'sci-fi',
      movies: [
        { poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=200&q=80' },
        { poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=200&q=80' }
      ]
    }
  ];

  const devices = [
    {
      id: 1,
      icon: '📱',
      name: 'Smartphones',
      description: 'StreamMedia is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.'
    },
    {
      id: 2,
      icon: '📱',
      name: 'Tablet',
      description: 'StreamMedia is optimized for both Android and iOS tablets. Enjoy larger screens and perfect viewing experience.'
    },
    {
      id: 3,
      icon: '📺',
      name: 'Smart TV',
      description: 'StreamMedia is available on all major Smart TV platforms. Experience cinema-quality viewing from your living room.'
    },
    {
      id: 4,
      icon: '💻',
      name: 'Laptops',
      description: 'Watch anywhere on your Mac or PC. StreamMedia works on all laptops with high-quality streaming.'
    },
    {
      id: 5,
      icon: '🎮',
      name: 'Gaming Consoles',
      description: 'Available on PlayStation, Xbox, and Nintendo. Switch seamlessly between gaming and streaming.'
    },
    {
      id: 6,
      icon: '🥽',
      name: 'VR Headsets',
      description: 'Immerse yourself in entertainment with VR support. Experience movies like never before in virtual reality.'
    }
  ];

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

  const pricingPlans = [
    {
      id: 1,
      name: 'Monthly Plan',
      description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
      price: '₦1,200',
      period: '/month',
      type: 'monthly'
    },
    {
      id: 2,
      name: 'Yearly Plan',
      description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
      price: '₦2,000',
      period: '/month',
      type: 'yearly'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/assets/banner.png"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/[1] from-[20%] via-black/70 via-[60%] to-transparent"></div>

        {/* Play Button Overlay (before video plays) */}
        {!isVideoPlaying && (
          <div className="absolute inset-0 z-25 lg:-top-20 -top-80 flex justify-center text-4xl  items-center">
            <button
              onClick={handlePlayVideo}
              className="text-4xl text-red-50 rounded-full cursor-pointer bg-black/80 hover:bg-black/70 p-3 flex flex-col items-center gap-2 transition-colors"
            >
              <FaPlay />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 z-30 w-full flex flex-col items-center justify-end pb-20 px-4">
          <h1 className="lg:text-6xl text-5xl font-bold text-center mb-6">
            The Best Streaming Experience
          </h1>
          <p className="lg:text-lg text-base text-center max-w-3xl mb-8 text-gray-300">
            StreamMedia is the best streaming experience for watching your favorite 
            movies and shows anytime, anywhere. Enjoy blockbusters, classics, TV 
            shows, and download for offline viewing — available on all devices.
          </p>

          <div className="w-fit">
            <SolidMainPlayBtn title="Start Watching Now" />
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES SECTION ==================== */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore our wide variety of categories
              </h2>
              <p className="text-gray-400">
                Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => scrollCategories('left')}
                className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 rounded-full flex items-center justify-center border border-neutral-700 transition-colors"
              >
                <BiChevronLeft />
              </button>
              <button
                onClick={() => scrollCategories('right')}
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
              >
                <BiChevronRight />
              </button>
            </div>
          </div>

          {/* Categories Carousel */}
          <div 
            ref={categoryScrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <a
                key={category.id}
                // href={`/category/${category.slug}`}
                className="group cursor-pointer shrink-0"
              >
                <div className="relative bg-neutral-950 rounded-lg p-4 overflow-hidden border-2 border-neutral-900 transition-all">
                  {/* Movie Grid */}
                  <div className="">
                      <div className="aspect-square overflow-hidden rounded">
                        <img
                          src={category.image}
                          alt={`Movie poster for ${category.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    {/* Category Name Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end justify-between p-4">
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <BiChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </a>
            ))}
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
            {devices.map((device) => (
              <div 
                key={device.id}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 rounded-lg p-6 cursor-pointer hover:border-red-950 transition-all"
              >
                <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center mb-4">
                  <span className="text-2xl">{device.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{device.name}</h3>
                <p className="text-gray-400 text-sm">
                  {device.description}
                </p>
              </div>
            ))}
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
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-neutral-950 to-neutral-900">
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
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
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
            ))}
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}