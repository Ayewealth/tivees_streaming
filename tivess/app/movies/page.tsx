"use client"
import { useState, useRef } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { FaPlus, FaVolumeUp, FaVolumeMute, FaEye } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { SolidMainPlayBtn } from "../component/btns/AllBtns" 

const Movies = () => {
  const [isMuted, setIsMuted] = useState(true)
  const heroSwiperRef = useRef<any>(null)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const genreSwiperRef = useRef<any>(null)
  const topSwiperRef = useRef<any>(null)
  const trendingSwiperRef = useRef<any>(null)
  const newReleasesSwiperRef = useRef<any>(null)

  const featuredMovies = [
    {
      id: 1,
      title: "Avengers : Endgame",
      description:
        "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
      image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=1200&q=80",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&q=80",
    },
  ]

  const genreMovies = [
    {
      genre: "Action",
      movies: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
          title: "Extraction",
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
          title: "Rebel Ridge",
        },
        { id: 3, image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80", title: "The Raid" },
        { id: 4, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80", title: "Mad Max" },
      ],
    },
    {
      genre: "Adventure",
      movies: [
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80",
          title: "Jungle Quest",
        },
        {
          id: 6,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
          title: "Mountain Peak",
        },
        {
          id: 7,
          image: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=400&q=80",
          title: "Lost Worlds",
        },
        { id: 8, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", title: "Explorer" },
      ],
    },
    {
      genre: "Comedy",
      movies: [
        { id: 9, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", title: "Laughs" },
        {
          id: 10,
          image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
          title: "Happy Days",
        },
        {
          id: 11,
          image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80",
          title: "Funny Man",
        },
        {
          id: 12,
          image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
          title: "The Joker",
        },
      ],
    },
    {
      genre: "Drama",
      movies: [
        {
          id: 13,
          image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
          title: "Dark Society",
        },
        {
          id: 14,
          image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
          title: "The Truth",
        },
        {
          id: 15,
          image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80",
          title: "Real Life",
        },
        { id: 16, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80", title: "Emotions" },
      ],
    },
    {
      genre: "Horror",
      movies: [
        {
          id: 17,
          image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80",
          title: "Night Terror",
        },
        { id: 18, image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80", title: "The Dark" },
        { id: 19, image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80", title: "Haunted" },
        { id: 20, image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=8", title: "Fear" },
      ],
    },
  ]

  const topMovies = [
    {
      id: 1,
      badge: "TOP 10 IN",
      genre: "Action",
      movies: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
          title: "Extraction",
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
          title: "Rebel Ridge",
        },
        { id: 3, image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80", title: "The Raid" },
        { id: 4, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80", title: "Mad Max" },
      ],
    },
    {
      id: 2,
      badge: "TOP 10 IN",
      genre: "Adventure",
      movies: [
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
          title: "Dark Society",
        },
        { id: 6, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", title: "The Truth" },
        { id: 7, image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80", title: "Real Life" },
        { id: 8, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80", title: "Emotions" },
      ],
    },
    {
      id: 3,
      badge: "TOP 10 IN",
      genre: "Comedy",
      movies: [
        { id: 9, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", title: "Laughs" },
        {
          id: 10,
          image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
          title: "Happy Days",
        },
        {
          id: 11,
          image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80",
          title: "Funny Man",
        },
        {
          id: 12,
          image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
          title: "The Joker",
        },
      ],
    },
    {
      id: 4,
      badge: "TOP 10 IN",
      genre: "Drama",
      movies: [
        { id: 13, image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80", title: "Society" },
        { id: 14, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", title: "The Way" },
        { id: 15, image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80", title: "Life" },
        { id: 16, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80", title: "Hearts" },
      ],
    },
  ]

  const trendingMovies = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=300&q=80",
      title: "Morphus",
      duration: "3h 30min",
      views: "2K",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=80",
      title: "Prem Jaan",
      duration: "2h 37min",
      views: "1.5K",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&q=80",
      title: "Shor Mangal Bhari",
      duration: "2h 10min",
      views: "1.8K",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&q=80",
      title: "Pathan",
      duration: "2h 20min",
      views: "3K",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80",
      title: "Antman",
      duration: "2h 22min",
      views: "5K",
    },
  ]

  const newReleases = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&q=80",
      title: "Adipurush",
      releaseDate: "Released at 16 April 2023",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
      title: "The Warrior",
      releaseDate: "Released at 22 April 2023",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=300&q=80",
      title: "Sin City",
      releaseDate: "Released at 13 April 2023",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&q=80",
      title: "Tomorrow War",
      releaseDate: "Released at 19 April 2023",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80",
      title: "Misfire",
      releaseDate: "Released at 11 April 2023",
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative 2xl:h-[90vh] xl:h-screen lg:h-screen h-[80vh] w-full">
        <Swiper
          ref={heroSwiperRef}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveHeroSlide(swiper.realIndex)}
          className="h-full"
        >
          {featuredMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              {/* Background Image with gradients */}
              <div className="absolute inset-0">
                <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>
              </div>
              {/* Content positioned at bottom */}
              <div className="absolute lg:inset-0 bottom-10 flex justify-center items-center">
                <div className="w-full m-auto justify-center p-8 md:p-16 pb-20">
                  <h1 className="text-4xl 2xl:text-5xl xl:text-4xl lg:text-4xl text-center font-bold mb-4 text-balance">
                    {movie.title}
                  </h1>
                  <p className="text-gray-300 mb-8 text-sm 2xl:text-base text-center flex m-auto max-w-xl line-clamp-3">
                    {movie.description}
                  </p>
                  {/* Action Buttons */}
                  <div className="flex items-center m-auto justify-center gap-4">
                    <div>
                      <SolidMainPlayBtn title="Play Now" />
                    </div>
                    <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors">
                      <FaPlus className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors"
                    >
                      {isMuted ? <FaVolumeMute className="w-5 h-5" /> : <FaVolumeUp className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => heroSwiperRef.current?.swiper.slidePrev()}
          className="absolute left-4 md:left-8 lg:top-1/2 top-1/3 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
        >
          <BiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={() => heroSwiperRef.current?.swiper.slideNext()}
          className="absolute right-4 md:right-8 lg:top-1/2 top-1/3 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
        >
          <BiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </section>

      {/* Main Content Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-12 z-40 bg-neutral-950">
        {/* Movies Header Badge */}
        <div className="inline-block bg-red-600 text-white px-4 py-1 rounded text-sm font-semibold mb-8">Movies</div>

        {/* Our Genres Section */}
        <div className="mb-16 relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Our Genres</h2>
          </div>
          <Swiper
            ref={genreSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {genreMovies.map((category) => (
              <SwiperSlide key={category.genre}>
                <div className="group cursor-pointer">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
                    <div className="grid grid-cols-2 gap-1 p-1">
                      {category.movies.map((movie) => (
                        <div key={movie.id} className="aspect-square overflow-hidden rounded">
                          <img
                            src={movie.image || "/placeholder.svg"}
                            alt={movie.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="p-2 flex items-center justify-between">
                      <h3 className="font-semibold">{category.genre}</h3>
                      <BiChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => genreSwiperRef.current?.swiper.slidePrev()}
            className="absolute right-20 md:right-20 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={() => genreSwiperRef.current?.swiper.slideNext()}
            className="absolute right-4 md:right-8 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Popular Genres Section */}
        <div className="mb-16 relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Genres</h2>
          </div>
          <Swiper
            ref={topSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {topMovies.map((category) => (
              <SwiperSlide key={category.genre}>
                <div className="group cursor-pointer">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
                    <div className="grid grid-cols-2 gap-1 p-1">
                      {category.movies.map((movie) => (
                        <div key={movie.id} className="aspect-square overflow-hidden rounded">
                          <img
                            src={movie.image || "/placeholder.svg"}
                            alt={movie.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded font-semibold">
                          {category.badge}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{category.genre}</h3>
                        <BiChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => topSwiperRef.current?.swiper.slidePrev()}
            className="absolute right-20 md:right-20 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={() => topSwiperRef.current?.swiper.slideNext()}
            className="absolute right-4 md:right-8 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Trending Now Section */}
        <div className="mb-16 relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Trending Now</h2>
          </div>
          <Swiper
            ref={trendingSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {trendingMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-neutral-900">
                    <img
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                        <p className="text-white text-sm font-semibold">{movie.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 px-2 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <span>{movie.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye className="w-3 h-3" />
                      <span>{movie.views}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => trendingSwiperRef.current?.swiper.slidePrev()}
            className="absolute right-20 md:right-20 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={() => trendingSwiperRef.current?.swiper.slideNext()}
            className="absolute right-4 md:right-8 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* New Releases Section */}
        <div className="mb-16 relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">New Releases</h2>
          </div>
          <Swiper
            ref={newReleasesSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {newReleases.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-neutral-900">
                    <img
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                        <p className="text-white text-sm font-semibold">{movie.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 text-xs text-gray-400">
                    <p>{movie.releaseDate}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => newReleasesSwiperRef.current?.swiper.slidePrev()}
            className="absolute right-20 md:right-20 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={() => newReleasesSwiperRef.current?.swiper.slideNext()}
            className="absolute right-4 md:right-8 lg:top-0 top-0 -translate-y-1/2 z-60 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <BiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Movies
