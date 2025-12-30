'use client';

import { useRouter } from 'next/navigation';
import MetricCard from '../component/admin/MetricCard';
import RevenueChart from '../component/admin/RevenueChart';
import UserGrowthChart from '../component/admin/UserGrowthChart';
import RecentActivity from '../component/admin/RecentActivity';

export default function AdminHomePage() {
  const router = useRouter();

  const handleNewContent = () => {
    router.push('/admin/content');
  };

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-black min-h-screen pt-16 lg:pt-8 w-full overflow-x-hidden">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Home</h1>
          <button 
            onClick={handleNewContent}
            className="w-full sm:w-auto bg-[#2a2a2a] hover:bg-[#333] text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors border border-gray-700"
          >
            + New Content
          </button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8">
          <MetricCard
            label="MRR"
            value="₩1,277,892"
            change="+12.5%"
            changePositive={true}
          />
          <MetricCard
            label="Active Users"
            value="608"
            change="+8.1%"
            changePositive={true}
          />
          <MetricCard
            label="Watch Hours"
            value="12.5M"
            change="+61.1%"
            changePositive={true}
          />
        </div>

        {/* Revenue Trend Chart */}
        <div className="mb-6 md:mb-8 w-full">
          <RevenueChart />
        </div>

        {/* Bottom Section: User Growth and Recent Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <UserGrowthChart />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

