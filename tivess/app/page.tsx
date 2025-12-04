'use client';

import { useRef, useState } from 'react';
import { OutlineBtn, SolidMainBtn, SolidMainPlayBtn } from './component/btns/AllBtns';
import { FaPlay, FaTv } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { HiMiniDeviceTablet } from 'react-icons/hi2';
import { BsHeadsetVr, BsLaptop } from 'react-icons/bs';
import { RiGamepadLine } from 'react-icons/ri';
import Link from 'next/link';

const Home = ()=> {
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

  const devices = [
    {
      id: 1,
      icon: <MdOutlinePhoneIphone  />,
      name: 'Smartphones',
      description: 'StreamMedia is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.'
    },
    {
      id: 2,
      icon: <HiMiniDeviceTablet />,
      name: 'Tablet',
      description: 'StreamMedia is optimized for both Android and iOS tablets. Enjoy larger screens and perfect viewing experience.'
    },
    {
      id: 3,
      icon: <FaTv />,
      name: 'Smart TV',
      description: 'StreamMedia is available on all major Smart TV platforms. Experience cinema-quality viewing from your living room.'
    },
    {
      id: 4,
      icon: <BsLaptop />,
      name: 'Laptops',
      description: 'Watch anywhere on your Mac or PC. StreamMedia works on all laptops with high-quality streaming.'
    },
    {
      id: 5,
      icon: <RiGamepadLine />,
      name: 'Gaming Consoles',
      description: 'Available on PlayStation, Xbox, and Nintendo. Switch seamlessly between gaming and streaming.'
    },
    {
      id: 6,
      icon: <BsHeadsetVr />,
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
        <div className="absolute inset-0 z-20 bg-linear-to-t from-black from-20% via-black/70 via-60% to-transparent"></div>

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
            <Link href="/movies">
              <SolidMainPlayBtn title="Start Watching Now" />
            </Link>
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
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 100000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              
              375: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"

            
          >
              <SwiperSlide>
                <div className="relative bg-neutral-950 rounded-lg overflow-hidden border-2 border-neutral-900 transition-all">
                  <div className="">
                      <div className="aspect-square overflow-hidden rounded">
                        <img
                          src={"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80"}
                          alt={`Movie poster for Action`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex items-end justify-between p-4">
                      <h3 className="text-xl font-bold">Action</h3>
                      <BiChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative bg-neutral-950 rounded-lg overflow-hidden border-2 border-neutral-900 transition-all">
                  <div className="">
                      <div className="aspect-square overflow-hidden rounded">
                        <img
                          src={"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80"}
                          alt={`Movie poster for Action`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex items-end justify-between p-4">
                      <h3 className="text-xl font-bold">Adventure</h3>
                      <BiChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="relative bg-neutral-950 rounded-lg overflow-hidden border-2 border-neutral-900 transition-all">
                  <div className="">
                      <div className="aspect-square overflow-hidden rounded">
                        <img
                          src={"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80"}
                          alt={`Movie poster for Action`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex items-end justify-between p-4">
                      <h3 className="text-xl font-bold">Comedy</h3>
                      <BiChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="relative bg-neutral-950 rounded-lg overflow-hidden border-2 border-neutral-900 transition-all">
                  <div className="">
                      <div className="aspect-square overflow-hidden rounded">
                        <img
                          src={"https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80"}
                          alt={`Movie poster for Action`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex items-end justify-between p-4">
                      <h3 className="text-xl font-bold">Drama</h3>
                      <BiChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="relative bg-neutral-950 rounded-lg overflow-hidden border-2 border-neutral-900 transition-all">
                  <div className="">
                      <div className="aspect-square overflow-hidden rounded">
                        <img
                          src={"https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80"}
                          alt={`Movie poster for Action`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex items-end justify-between p-4">
                      <h3 className="text-xl font-bold">Horror</h3>
                      <BiChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* ==================== DEVICES SECTION ==================== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-linear-to-t from-black to-neutral-950">
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
                className="bg-neutral-950 border-2 border-neutral-900 rounded-lg p-6 cursor-pointer  transition-all"
              >
                <div className="w-12 h-12 bg-[#E50000] rounded flex items-center justify-center mb-4">
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
      <section className="py-16 px-5 md:px-8 lg:px-16 bg-linear-to-t from-black to-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="lg:flex justify-between items-start mb-8 gap-5">
            <div className='lg:w-[68%]'>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 w-full">
                Got questions? We've got answers! Check out our FAQ section  to find answers to the most common questions about StreamMedia
              </p>
            </div>

            <div className='lg:w-[20%] w-fit lg:pt-0 pt-5'>
              <SolidMainBtn title='Ask a Question'/>
            </div>
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
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-linear-to-b from-neutral-black to-neutral-950">
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
                  : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-6 py-2 rounded transition-colors ${
                selectedPlan === 'yearly'
                  ? 'bg-red-600 text-white'
                  : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
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
                className="bg-neutral-900 border border-neutral-800 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className='w-full'>
                    <OutlineBtn title="Start Free Trial" />
                  </div>

                  <div className='w-full'>
                    <SolidMainBtn title="Choose Plan" />
                  </div>
              
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
            src="/assets/banner.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Start your free trial today!
          </h2>
          <p className="text-gray-300 mb-8 text-base">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamMedia.
          </p>

          <div className='w-fit mx-auto '>
            <SolidMainBtn title="Start a Free Trial" />
          </div>
        </div>
      </section>

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

export default Home;