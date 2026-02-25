
'use client'

import React, { useState } from 'react'
import { OutlineBtn, SolidMainBtn } from '../component/btns/AllBtns';

const Subcription = () => {
        const [selectedPlan, setSelectedPlan] = useState('monthly');
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
    <div className='py-16 pt-32 lg:px-0 px-5 max-w-6xl mx-auto'>
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
                <div className="grid md:grid-cols-2 gap-4">
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

<div className='pt-20'>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Compare our plans and find the right one for you
                </h2>
                <p className="text-gray-400 mb-8">
                    TiveesMedia offers three different plans to fit your needs: Basic, 
                    Standard, and Premium. Compare the features of each plan and choose 
                    the one that's right for you.
                </p>

                {/* Comparison Table */}
                <div className="mt-12 overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-neutral-800">
                                <th className="text-left py-4 px-6 text-lg font-semibold">Features</th>
                                <th className="text-left py-4 px-6 text-lg font-semibold">Basic</th>
                                <th className="text-left py-4 px-6 text-lg font-semibold">
                                    Standard 
                                    <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Popular</span>
                                </th>
                                <th className="text-left py-4 px-6 text-lg font-semibold">Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Price</td>
                                <td className="py-4 px-6">₦1,200/ month</td>
                                <td className="py-4 px-6">₦1,700/ month</td>
                                <td className="py-4 px-6">₦2,000/ month</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Content</td>
                                <td className="py-4 px-6 text-sm text-gray-300">Access to a wide selection of movies and shows, including some new releases.</td>
                                <td className="py-4 px-6 text-sm text-gray-300">Access to a wider selection of movies and shows, including most new releases and exclusive content</td>
                                <td className="py-4 px-6 text-sm text-gray-300">Access to a widest selection of movies and shows, including all new releases and Offline Viewing</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Devices</td>
                                <td className="py-4 px-6">Watch on one device simultaneously</td>
                                <td className="py-4 px-6">Watch on Two device simultaneously</td>
                                <td className="py-4 px-6">Watch on Four device simultaneously</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Free Trail</td>
                                <td className="py-4 px-6">7 Days</td>
                                <td className="py-4 px-6">7 Days</td>
                                <td className="py-4 px-6">7 Days</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Cancel Anytime</td>
                                <td className="py-4 px-6">Yes</td>
                                <td className="py-4 px-6">Yes</td>
                                <td className="py-4 px-6">Yes</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">HDR</td>
                                <td className="py-4 px-6">No</td>
                                <td className="py-4 px-6">Yes</td>
                                <td className="py-4 px-6">Yes</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Dolby Atmos</td>
                                <td className="py-4 px-6">No</td>
                                <td className="py-4 px-6">Yes</td>
                                <td className="py-4 px-6">Yes</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Ad - Free</td>
                                <td className="py-4 px-6">No</td>
                                <td className="py-4 px-6">Yes</td>
                                <td className="py-4 px-6">Yes</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Offline Viewing</td>
                                <td className="py-4 px-6">No</td>
                                <td className="py-4 px-6">Yes, for select titles.</td>
                                <td className="py-4 px-6">Yes, for all titles.</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-4 px-6 text-gray-400">Family Sharing</td>
                                <td className="py-4 px-6">No</td>
                                <td className="py-4 px-6">Yes, up to 5 family members.</td>
                                <td className="py-4 px-6">Yes, up to 6 family members.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

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

export default Subcription