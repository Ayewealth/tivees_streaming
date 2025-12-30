'use client';

import { useState } from 'react';
import { Download, Plus, Pencil, Trash2, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import MetricCard from '../../component/admin/MetricCard';
import ViewsWatchTimeChart from '../../component/admin/ViewsWatchTimeChart';
import WeeklyChurnRateChart from '../../component/admin/WeeklyChurnRateChart';

interface TopContent {
  id: number;
  title: string;
  type: 'Movie' | 'Series';
  views: string;
  duration: string;
  engagement: number;
  thumbnail: string;
}

const topContentData: TopContent[] = [
  { id: 1, title: 'Inception', type: 'Movie', views: '125.7M', duration: '2h 31m', engagement: 80, thumbnail: '/assets/movie (1).png' },
  { id: 2, title: 'Breaking Bad', type: 'Series', views: '800k', duration: '2h 3m', engagement: 70, thumbnail: '/assets/movie (2).png' },
  { id: 3, title: 'The Matrix', type: 'Series', views: '654k', duration: '2h 10m', engagement: 60, thumbnail: '/assets/movie (3).png' },
  { id: 4, title: 'Planet Earth 3', type: 'Movie', views: '449.1K', duration: '2h 37m', engagement: 90, thumbnail: '/assets/movie (4).png' },
  { id: 5, title: 'Planet Earth', type: 'Series', views: '332.1K', duration: '2h 3m', engagement: 75, thumbnail: '/assets/movie (1).png' },
  { id: 6, title: 'The Dark Knight', type: 'Movie', views: '298.5K', duration: '2h 32m', engagement: 85, thumbnail: '/assets/movie (2).png' },
  { id: 7, title: 'Game of Thrones', type: 'Series', views: '267.3K', duration: '2h 15m', engagement: 78, thumbnail: '/assets/movie (3).png' },
  { id: 8, title: 'Interstellar', type: 'Movie', views: '245.8K', duration: '2h 49m', engagement: 82, thumbnail: '/assets/movie (4).png' },
  { id: 9, title: 'Stranger Things', type: 'Series', views: '223.1K', duration: '2h 8m', engagement: 88, thumbnail: '/assets/movie (1).png' },
  { id: 10, title: 'The Crown', type: 'Series', views: '201.4K', duration: '2h 5m', engagement: 72, thumbnail: '/assets/movie (2).png' },
];

export default function InsightsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = 50;
  const totalContent = 500;

  const handleExport = () => {
    const csvContent = [
      ['Title', 'Type', 'Views', 'Duration', 'Engagement'],
      ...topContentData.map(item => [item.title, item.type, item.views, item.duration, `${item.engagement}%`])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'top-performing-content-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = topContentData.slice(startIndex, endIndex);

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-black min-h-screen pt-16 lg:pt-8 w-full overflow-x-hidden">
      <div className="max-w-full">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Insights</h1>
          <p className="text-gray-400 text-sm sm:text-base">Platform performance and engagement metrics</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8">
          <MetricCard
            label="Total Views"
            value="1.2M"
            change="+12%"
            changePositive={true}
          />
          <MetricCard
            label="Avg Watch Time"
            value="1h 43m"
            change="+6%"
            changePositive={true}
          />
          <MetricCard
            label="User Engagement"
            value="68.2%"
            change="+61.1%"
            changePositive={true}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8">
          <ViewsWatchTimeChart />
          <WeeklyChurnRateChart />
        </div>

        {/* Top Performing Content Table */}
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden">
          {/* Table Header */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-white font-semibold text-sm sm:text-base">Top performing Content</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handleExport}
                className="flex items-center justify-center gap-2 bg-[#0f0f0f] border border-gray-800 text-white px-4 py-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                <Download size={18} />
                <span className="text-sm font-medium">Export Data</span>
              </button>
              <button 
                onClick={() => console.log('Add new content')}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors"
              >
                <Plus size={18} />
                <span className="text-sm font-medium">Button text</span>
              </button>
            </div>
          </div>

          {/* Table - Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">TITLE</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">TYPE</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">VIEWS</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">DURATION</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">ENGAGEMENT</th>
                  <th className="text-right px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-800 hover:bg-[#242424] transition-colors">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <span className="text-white font-medium text-sm">{item.title}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{item.type}</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{item.views}</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{item.duration}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-[100px]">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${item.engagement}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-300 text-sm whitespace-nowrap">{item.engagement}%</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => console.log('Edit content:', item.id)}
                          className="p-2 hover:bg-gray-800 rounded transition-colors" 
                          aria-label="Edit"
                        >
                          <Pencil size={16} className="text-gray-400" />
                        </button>
                        <button 
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete "${item.title}"? This action cannot be undone.`)) {
                              console.log('Delete content:', item.id);
                            }
                          }}
                          className="p-2 hover:bg-gray-800 rounded transition-colors" 
                          aria-label="Delete"
                        >
                          <Trash2 size={16} className="text-gray-400" />
                        </button>
                        <button 
                          onClick={() => console.log('More options for content:', item.id)}
                          className="p-2 hover:bg-gray-800 rounded transition-colors" 
                          aria-label="More options"
                        >
                          <MoreVertical size={16} className="text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Card Layout */}
          <div className="md:hidden">
            {paginatedData.map((item) => (
              <div key={item.id} className="p-4 border-b border-gray-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Type</p>
                        <p className="text-gray-300">{item.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Views</p>
                        <p className="text-gray-300">{item.views}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Duration</p>
                        <p className="text-gray-300">{item.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Engagement</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-[80px]">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{ width: `${item.engagement}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-300 text-sm whitespace-nowrap">{item.engagement}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-800">
                  <button 
                    onClick={() => console.log('Edit content:', item.id)}
                    className="p-2 hover:bg-gray-800 rounded transition-colors"
                  >
                    <Pencil size={16} className="text-gray-400" />
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete "${item.title}"? This action cannot be undone.`)) {
                        console.log('Delete content:', item.id);
                      }
                    }}
                    className="p-2 hover:bg-gray-800 rounded transition-colors"
                  >
                    <Trash2 size={16} className="text-gray-400" />
                  </button>
                  <button 
                    onClick={() => console.log('More options for content:', item.id)}
                    className="p-2 hover:bg-gray-800 rounded transition-colors"
                  >
                    <MoreVertical size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-4 sm:px-6 py-4 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <label className="text-gray-400 text-sm">Rows per Page:</label>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-[#1a1a1a] border border-gray-800 text-white px-3 py-1.5 rounded text-sm focus:outline-none focus:border-gray-700"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 bg-[#1a1a1a] border border-gray-800 text-white rounded text-sm hover:bg-[#242424] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &lt; Prev
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1.5 rounded text-sm transition-colors ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#1a1a1a] border border-gray-800 text-white hover:bg-[#242424]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="px-2 text-gray-400">...</span>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`px-3 py-1.5 rounded text-sm transition-colors ${
                          currentPage === totalPages
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#1a1a1a] border border-gray-800 text-white hover:bg-[#242424]'
                        }`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 bg-[#1a1a1a] border border-gray-800 text-white rounded text-sm hover:bg-[#242424] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next &gt;
                </button>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-gray-400 text-sm">Go to Page:</label>
                <input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const page = Math.min(Math.max(1, parseInt(e.target.value) || 1), totalPages);
                    setCurrentPage(page);
                  }}
                  className="w-16 bg-[#1a1a1a] border border-gray-800 text-white px-2 py-1.5 rounded text-sm focus:outline-none focus:border-gray-700"
                />
                <button
                  onClick={() => setCurrentPage(Math.min(Math.max(1, currentPage), totalPages))}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                >
                  Go &gt;
                </button>
              </div>
            </div>

            <div className="mt-4 text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                Showing {startIndex + 1}-{Math.min(endIndex, topContentData.length)} of {totalContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

