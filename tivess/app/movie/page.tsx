'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { SolidMainBtn, SolidMainPlayBtn, SolidWatchBtn } from '../component/btns/AllBtns';
import { FaPlus, FaThumbsUp, FaVolumeMute, FaVolumeUp, FaStar, FaChevronLeft, FaChevronRight, FaRegCalendarAlt, FaGlobe } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import { RiMovie2Line } from 'react-icons/ri';
import WatchModal from '../component/WatchModal';


interface MovieData {
    title: string;
    description: string;
    image: string;
    videoUrl: string;
    releaseYear?: string;
    languages?: string[];
    ratings?: {
        imdb?: number;
        streamvibe?: number;
    };
    genres?: string[];
    director?: {
        name: string;
        country: string;
        image: string;
    };
    music?: {
        name: string;
        country: string;
        image: string;
    };
    cast?: Array<{
        id: number;
        image: string;
    }>;
    reviews?: Array<{
        user: string;
        country: string;
        rating: number;
        comment: string;
    }>;
}

const Movie = () => {
    const [isMuted, setIsMuted] = useState(true)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [currentCastIndex, setCurrentCastIndex] = useState(0);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    const router = useRouter()
    const searchParams = useSearchParams()
  
    const movie = useMemo<MovieData | null>(() => {
        const movieData = searchParams.get('data')
        if (!movieData) return null
        try {
            const parsedMovie = JSON.parse(movieData)
            console.log('This is data', parsedMovie)
            return {
                ...parsedMovie,
                title: parsedMovie.title,
                description: parsedMovie.description,
                image: parsedMovie.image,
                videoUrl: parsedMovie.videoUrl,
                releaseYear: parsedMovie.releaseYear || '2022',
                languages: parsedMovie.languages || ['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada'],
                ratings: parsedMovie.ratings || { imdb: 4.5, streamvibe: 4 },
                genres: parsedMovie.genres || ['Action', 'Adventure'],
                director: parsedMovie.director || { 
                    name: 'Rishab Shetty', 
                    country: 'India', 
                    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80' 
                },
                music: parsedMovie.music || { 
                    name: 'B. Ajaneesh Loknath', 
                    country: 'India', 
                    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80' 
                },
                cast: [
                    {
                        id: 1,
                        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80'
                    },

                    {
                        id: 2,
                        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80'
                    },

                    {
                        id: 3,
                        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80'
                    },

                    {
                        id: 4,
                        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80'
                    },

                    {
                        id: 5,
                        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80'
                    },

                    {
                        id: 6,
                        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80'
                    },

                    {
                        id: 7,
                        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80'
                    },

                    {
                        id: 8,
                        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80'
                    },

                    {
                        id: 9,
                        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80'
                    },

                    {
                        id: 10,
                        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80'
                    },

                    {
                        id: 11,
                        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80'
                    },

                    {
                        id: 12,
                        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80'
                    },

                    {
                        id: 13,
                        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80'
                    }
                ],
                reviews: [
                    {
                        id: 1,
                        user: 'John Doe',
                        country: 'USA',
                        rating: 4.5,
                        comment: 'Amazing movie with stunning visuals!'
                    },
                    {
                        id: 2,
                        user: 'Jane Smith',
                        country: 'UK',
                        rating: 4.0,
                        comment: 'Great storyline and character development.'
                    },

                    {
                        id: 3,
                        user: 'Akira Tanaka',
                        country: 'Japan',
                        rating: 5.0,
                        comment: 'A masterpiece of modern cinema!'
                    }
                ]
            }
        } catch (error) {
            console.error('Error parsing mentor data:', error)
            return null
        }
    }, [searchParams])

    const visibleCast = movie?.cast?.slice(currentCastIndex, currentCastIndex + 7) || [];
    const canScrollCastLeft = currentCastIndex > 0;
    const canScrollCastRight = movie?.cast && currentCastIndex + 7 < movie.cast.length;

    const handleCastScroll = (direction: 'left' | 'right') => {
        if (direction === 'left' && canScrollCastLeft) {
            setCurrentCastIndex(prev => Math.max(0, prev - 1));
        } else if (direction === 'right' && canScrollCastRight) {
            setCurrentCastIndex(prev => prev + 1);
        }
    };

    const visibleReviews = movie?.reviews?.slice(currentReviewIndex, currentReviewIndex + 2) || [];
    const canScrollReviewLeft = currentReviewIndex > 0;
    const canScrollReviewRight = movie?.reviews && currentReviewIndex + 2 < movie.reviews.length;

    const handleReviewScroll = (direction: 'left' | 'right') => {
        if (direction === 'left' && canScrollReviewLeft) {
            setCurrentReviewIndex(prev => Math.max(0, prev - 1));
        } else if (direction === 'right' && canScrollReviewRight) {
            setCurrentReviewIndex(prev => prev + 1);
        }
    };


      const [isModalOpen, setIsModalOpen] = useState(false);
        useEffect(() => {
            if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            } else {
            document.body.style.overflow = 'unset';
            }
            
            return () => {
            document.body.style.overflow = 'unset';
            };
        }, [isModalOpen]);

        const handleGetStarted = (e: any) => {
            e.preventDefault();
            setIsModalOpen(true);
        };

    return (
        <div className="bg-black min-h-screen text-white">
            <WatchModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
            <section className="relative h-[90vh] w-full overflow-hidden">
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    muted={isMuted}
                    loop
                    playsInline
                    poster={movie?.image}
                >
                    <source
                        src={movie?.videoUrl}
                        type="video/mp4"
                    />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-20 bg-linear-to-t from-black from-20% via-black/70 via-60% to-transparent"></div>
                <div className="absolute bottom-0 z-30 w-full flex flex-col items-center justify-end pb-20 px-4">
                    <h1 className="lg:text-4xl text-4xl font-bold text-center mb-6">
                        {movie?.title}
                    </h1>
                    <p className="lg:text-lg text-base text-center max-w-3xl mb-8 text-gray-300">
                        {movie?.description}
                    </p>

                    <div className="w-fit flex lg:flex-col flex-col-reverse gap-3 items-center">
                        <div className="flex items-center m-auto justify-center gap-2">
                            <button className="w-12 h-12 bg-white/10 cursor-pointer hover:bg-white/20 rounded flex items-center justify-center transition-colors">
                                <FaPlus className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 bg-white/10 cursor-pointer hover:bg-white/20 rounded flex items-center justify-center transition-colors">
                                <FaThumbsUp className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="w-12 h-12 bg-white/10 cursor-pointer hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                            >
                                {isMuted ? <FaVolumeMute className="w-5 h-5" /> : <FaVolumeUp className="w-5 h-5" />}
                            </button>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <SolidMainPlayBtn onClick={handlePlayVideo} title="Play Now" />
                            </div>

                            <div  onClick={handleGetStarted}>
                                <SolidWatchBtn title="Create Watchparty" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-zinc-950'>

                <div className="max-w-7xl mx-auto px-4 py-12 ">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Description and Cast */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-900">
                                <h2 className="text-xl font-semibold mb-4">Description</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {movie?.description}
                                </p>
                            </div>

                            {/* Cast */}
                            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-900">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">Cast</h2>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleCastScroll('left')}
                                            disabled={!canScrollCastLeft}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                                canScrollCastLeft ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-900/50 cursor-not-allowed'
                                            }`}
                                        >
                                            <FaChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button 
                                            onClick={() => handleCastScroll('right')}
                                            disabled={!canScrollCastRight}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                                canScrollCastRight ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-900/50 cursor-not-allowed'
                                            }`}
                                        >
                                            <FaChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:flex flex flex-wrap gap-4 overflow-hidden">
                                    {visibleCast.map((actor, index) => (
                                        <div key={index} className="shrink-0">
                                            <div className="w-20 h-20  rounded-lg overflow-hidden bg-zinc-800">
                                                <img 
                                                    src={actor.image} 
                                                    alt={'Actor Image'}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reviews */}
                            <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-900">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">Reviews</h2>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 flex gap-2 items-center bg-zinc-800 hover:bg-zinc-900 rounded text-sm font-medium transition-colors">
                                            <FaPlus className="" />
                                            Add Review
                                        </button>
                                        
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {visibleReviews.map((review, index) => (
                                        <div key={index} className="bg-zinc-800/20 rounded-lg p-4 border border-zinc-900">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-semibold">{review.user}</h3>
                                                    <p className="text-sm text-gray-400">From {review.country}</p>
                                                </div>
                                                <div className="flex items-center gap-1 bg-zinc-900 px-2 py-1 rounded">
                                                    <FaStar className="w-3 h-3 text-[#E50000]" />
                                                    <span className="text-sm font-medium">{review.rating}</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-300 leading-relaxed">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-2 mt-4">
                                    {movie?.reviews?.map((_, index) => (
                                        <div 
                                            key={index} 
                                            className={`h-1 rounded-full transition-all ${
                                                index === currentReviewIndex ? 'w-8 bg-[#E50000]' : 'w-2 bg-zinc-700'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <button 
                                        onClick={() => handleReviewScroll('left')}
                                        disabled={!canScrollReviewLeft}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                            canScrollReviewLeft ? 'bg-zinc-900 hover:bg-zinc-700' : 'bg-zinc-900/50 cursor-not-allowed'
                                        }`}
                                    >
                                        <FaChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={() => handleReviewScroll('right')}
                                        disabled={!canScrollReviewRight}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                            canScrollReviewRight ? 'bg-zinc-900 hover:bg-zinc-700' : 'bg-zinc-900/50 cursor-not-allowed'
                                        }`}
                                    >
                                        <FaChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Movie Info */}
                        <div className="space-y-6">
                            {/* Release Year */}
                            <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-900">
                                <div className="flex items-center gap-2 text-gray-400 mb-2">
                                    <span><FaRegCalendarAlt /></span>
                                    <span className="text-sm">Released Year</span>
                                </div>
                                <p className="text-lg font-semibold">{movie?.releaseYear}</p>
                            </div>

                            {/* Languages */}
                            <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-900">
                                <div className="flex items-center gap-2 text-gray-400 mb-3">
                                    <span><FaGlobe /></span>
                                    <span className="text-sm">Available Languages</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {movie?.languages?.map((lang, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-zinc-900 rounded text-sm border border-zinc-900"
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Ratings */}
                            <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-900">
                                <div className="flex items-center gap-2 text-gray-400 mb-3">
                                    <FaStar className="w-4 h-4" />
                                    <span className="text-sm">Ratings</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">IMDb</span>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar 
                                                    key={i} 
                                                    className={`w-4 h-4 ${
                                                        i < Math.floor(movie?.ratings?.imdb || 0) ? 'text-red-500' : 'text-zinc-700'
                                                    }`}
                                                />
                                            ))}
                                            <span className="ml-2 font-medium">{movie?.ratings?.imdb}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Streamvibe</span>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar 
                                                    key={i} 
                                                    className={`w-4 h-4 ${
                                                        i < Math.floor(movie?.ratings?.streamvibe || 0) ? 'text-red-500' : 'text-zinc-700'
                                                    }`}
                                                />
                                            ))}
                                            <span className="ml-2 font-medium">{movie?.ratings?.streamvibe}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Genres */}
                            <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-900">
                                <div className="flex items-center gap-2 text-gray-400 mb-3">
                                    <span><RiMovie2Line /></span>
                                    <span className="text-sm">Genres</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {movie?.genres?.map((genre, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-zinc-800 rounded text-sm border border-zinc-700"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Director */}
                            <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-900">
                                <h3 className="text-sm text-gray-400 mb-3">Director</h3>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-800">
                                        <img 
                                            src={movie?.director?.image} 
                                            alt={movie?.director?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{movie?.director?.name}</p>
                                        <p className="text-sm text-gray-400">From {movie?.director?.country}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Music */}
                            <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-900">
                                <h3 className="text-sm text-gray-400 mb-3">Music</h3>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-800">
                                        <img 
                                            src={movie?.music?.image} 
                                            alt={movie?.music?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{movie?.music?.name}</p>
                                        <p className="text-sm text-gray-400">From {movie?.music?.country}</p>
                                    </div>
                                </div>
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
        </div>
    )
}

export default Movie