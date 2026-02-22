'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const growthData = [
  { day: 'Mon', growth: 25 },
  { day: 'Tue', growth: 40 },
  { day: 'Wed', growth: 35 },
  { day: 'Thu', growth: 50 },
  { day: 'Fri', growth: 60 },
  { day: 'Sat', growth: 70 },
  { day: 'Sun', growth: 55 },
];

export default function UserGrowthChart() {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4 sm:p-5 md:p-6 border border-gray-800 w-full min-w-0 overflow-hidden">
      <h2 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">User Growth per week</h2>
      <div className="w-full h-[220px] sm:h-[230px] md:h-[250px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={growthData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis 
              dataKey="day" 
              stroke="#6b7280"
              tick={{ fill: '#9ca3af', fontSize: 11 }}
              axisLine={{ stroke: '#374151' }}
            />
            <YAxis 
              stroke="#6b7280"
              tick={{ fill: '#9ca3af', fontSize: 11 }}
              axisLine={{ stroke: '#374151' }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              width={40}
            />
            <Bar 
              dataKey="growth" 
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm text-center mt-2">2023</p>
    </div>
  );
}

