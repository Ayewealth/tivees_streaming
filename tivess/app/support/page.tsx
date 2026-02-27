'use client'

import React from 'react'
import { SolidMainBtn } from '../component/btns/AllBtns'

const Support = () => {
    const [openFaq, setOpenFaq] = React.useState<number>(1);
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? 0 : index);
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
    <div>
        <section className='py-16 pt-32 lg:px-0 px-5 max-w-6xl mx-auto'>
            <div className='flex lg:flex-row flex-col gap-5'>
                <div>
                    <h2 className='text-3xl md:text-4xl font-bold '>Welcome to our <br className='hidden lg:block'/> support page!</h2>
                    <p className='mb-5 pt-3'>
                        We're here to help you with any problems you may be having with our product.
                    </p>
                    <img 
                        src={"/assets/movie (4).png"} alt="" 
                        className="w-full"
                    />
                </div>

                <form className='bg-neutral-950 border border-neutral-900 rounded-md lg:p-6 p-3'>
                    <div className='lg:flex-row flex-col flex gap-2 lg:mb-5 mb-7'>
                        <div>
                            <p>First Name</p>
                            <input type="text" required placeholder='Enter first name: ' className='bg-neutral-900 mt-1 w-full p-3 border border-neutral-800 rounded'/>
                        </div>

                        <div>
                            <p>Last Name</p>
                            <input type="text" required placeholder='Enter last name: ' className='bg-neutral-900 mt-1 w-full p-3 border border-neutral-800 rounded'/>
                        </div>
                    </div>

                    <div className='lg:flex-row flex-col flex gap-2 lg:mb-5 mb-7'>
                        <div className='w-full'>
                            <p>Email:</p>
                            <input type="text" required placeholder='john@gmail.com' className='bg-neutral-900 mt-1 w-full p-3 border border-neutral-800 rounded'/>
                        </div>

                        <div className='w-full'>
                            <p>Phone Number: </p>
                            <input type="text" required placeholder='+234 809 442 2807 ' className='bg-neutral-900 mt-1 w-full p-3 border border-neutral-800 rounded'/>
                        </div>
                    </div>

                    <div className='flex gap-2 mb-5'>
                        <div className='w-full'>
                            <p>Message</p>
                            <textarea placeholder='Enter your Message: ' required name="" id="" 
                                className='bg-neutral-900 mt-1 p-3 border border-neutral-800 rounded max-w-full min-w-full h-32' 
                            />
                        </div>
                    </div>

                    <div>
                        <SolidMainBtn title='Submit'/>
                    </div>

                    <div className='flex flex-row gap-2 items-center justify-center m-auto mt-5'>
                        <input type="checkbox" className='w-5 h-5 bg-neutral-900 text-neutral-800 cursor-pointer'/>
                        <p className='text-sm'>I agree with Terms of Use and Privacy Policy</p>
                    </div>
                </form>
            </div>
        </section>

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

            <div className="space-y-4 ">
                {faqs.map((faq, index) => (
                    <div 
                    key={index}
                    className="border-b border-gray-800"
                    >
                    <button
                        onClick={() => toggleFaq(index + 1)}
                        className="w-full flex cursor-pointer justify-between items-center py-5 text-left hover:text-red-500 transition-colors"
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

export default Support