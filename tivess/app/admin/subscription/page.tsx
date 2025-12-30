'use client';

import { Check, X, Pencil, Trash2 } from 'lucide-react';
import MetricCard from '../../component/admin/MetricCard';

interface Feature {
  text: string;
  included: boolean;
}

interface SubscriptionPlan {
  id: number;
  name: string;
  price: number;
  subscribers: number;
  features: Feature[];
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 1,
    name: 'Basic plan',
    price: 1200,
    subscribers: 107,
    features: [
      { text: '720P HD', included: true },
      { text: 'Standard Content', included: true },
      { text: '1 Device support', included: true },
      { text: 'Watch Party feature', included: false },
      { text: '10GB Storage', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    id: 2,
    name: 'Standard Plan',
    price: 1700,
    subscribers: 301,
    features: [
      { text: '1080p Full HD', included: true },
      { text: '100GB storage', included: true },
      { text: '2 Devices support', included: true },
      { text: 'Full Content Library', included: true },
      { text: 'Watch Party Feature', included: true },
      { text: 'API access', included: false },
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 2000,
    subscribers: 200,
    features: [
      { text: '4k Ultra HD', included: true },
      { text: 'Unlimited storage', included: true },
      { text: '4 Devices', included: true },
      { text: 'Full Content Library + Exclusive', included: true },
      { text: 'Watch party Feature', included: true },
      { text: 'Full API access', included: true },
    ],
  },
];

export default function SubscriptionPage() {
  const handleEdit = (planId: number, planName: string) => {
    console.log('Edit plan:', planId, planName);
    // TODO: Implement edit functionality when UI design is provided
  };

  const handleDelete = (planId: number, planName: string) => {
    if (confirm(`Are you sure you want to delete the "${planName}"? This action cannot be undone.`)) {
      console.log('Delete plan:', planId);
      // TODO: Implement delete API call
    }
  };

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-black min-h-screen pt-16 lg:pt-8 w-full overflow-x-hidden">
      <div className="max-w-full">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Subscriptions</h1>
          <p className="text-gray-400 text-sm sm:text-base">Manage subscription plans and revenue</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8">
          <MetricCard
            label="Total MRR"
            value="₦5,177,892"
            change="+12.5%"
            changePositive={true}
          />
          <MetricCard
            label="Active Subscribers"
            value="608"
            change="+8.1%"
            changePositive={true}
          />
          <MetricCard
            label="Avg Revenue per user"
            value="₦1,200"
            change="+61.1%"
            changePositive={true}
          />
        </div>

        {/* Subscription Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-4 sm:p-5 md:p-6 flex flex-col"
            >
              {/* Plan Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 capitalize">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    ₦{plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-gray-400 text-sm">
                  {plan.subscribers} {plan.subscribers === 1 ? 'Subscriber' : 'Subscribers'}
                </p>
              </div>

              {/* Features List */}
              <div className="flex-1 mb-6 space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <X className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-300' : 'text-gray-500 line-through'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-800">
                <button
                  onClick={() => handleEdit(plan.id, plan.name)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg transition-colors"
                >
                  <Pencil size={16} />
                  <span className="text-sm font-medium">Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(plan.id, plan.name)}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

