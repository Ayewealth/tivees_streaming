'use client';

import { useState } from 'react';
import { Search, Filter, Download, Plus, Pencil, Trash2, MoreVertical, X, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import MetricCard from '../../component/admin/MetricCard';

interface WatchParty {
  id: number;
  title: string;
  thumbnail: string;
  hostName: string;
  hostEmail: string;
  hostAvatarColor: string;
  participants: number;
  duration: string;
  status: 'Loading' | 'Published' | 'Draft';
}

const watchPartyData: WatchParty[] = [
  { id: 1, title: 'Inception', thumbnail: '/assets/movie (1).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-blue-500', participants: 12, duration: '2h 31m', status: 'Loading' },
  { id: 2, title: 'Breaking Bad', thumbnail: '/assets/movie (2).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-green-500', participants: 23, duration: '2h 31m', status: 'Published' },
  { id: 3, title: 'The Matrix', thumbnail: '/assets/movie (3).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-purple-500', participants: 10, duration: '2h 31m', status: 'Draft' },
  { id: 4, title: 'Planet Earth 3', thumbnail: '/assets/movie (4).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-red-500', participants: 37, duration: '2h 31m', status: 'Published' },
  { id: 5, title: 'Planet Earth', thumbnail: '/assets/movie (1).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-yellow-500', participants: 19, duration: '2h 31m', status: 'Published' },
  { id: 6, title: 'The Dark Knight', thumbnail: '/assets/movie (2).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-pink-500', participants: 15, duration: '2h 31m', status: 'Published' },
  { id: 7, title: 'Game of Thrones', thumbnail: '/assets/movie (3).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-indigo-500', participants: 28, duration: '2h 31m', status: 'Loading' },
  { id: 8, title: 'Interstellar', thumbnail: '/assets/movie (4).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-teal-500', participants: 21, duration: '2h 31m', status: 'Draft' },
  { id: 9, title: 'Stranger Things', thumbnail: '/assets/movie (1).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-orange-500', participants: 33, duration: '2h 31m', status: 'Published' },
  { id: 10, title: 'The Crown', thumbnail: '/assets/movie (2).png', hostName: 'Dianne Russell', hostEmail: 'diannerussell456@gmail.com', hostAvatarColor: 'bg-cyan-500', participants: 18, duration: '2h 31m', status: 'Published' },
];

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Published':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Draft':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'Loading':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export default function WatchPartyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = 50;
  const totalWatchParties = 500;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const filteredWatchParties = watchPartyData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.hostName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.hostEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExport = () => {
    const csvContent = [
      ['Title', 'Host', 'Participants', 'Duration', 'Status'],
      ...filteredWatchParties.map(item => [item.title, item.hostName, item.participants.toString(), item.duration, item.status])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'watchparty-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filteredWatchParties.slice(startIndex, endIndex);

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-black min-h-screen pt-16 lg:pt-8 w-full overflow-x-hidden">
      <div className="max-w-full">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Watchparty</h1>
          <p className="text-gray-400 text-sm sm:text-base">Real-time monitoring of active watch parties</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8">
          <MetricCard
            label="Active Parties"
            value="12"
            change="+12.5%"
            changePositive={true}
          />
          <MetricCard
            label="Total Participants"
            value="89"
            change="+8.1%"
            changePositive={true}
          />
          <MetricCard
            label="Avg Participant"
            value="3.4"
            change="+61.1%"
            changePositive={true}
          />
        </div>

        {/* Watchparty List/Table Section */}
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden">
          {/* Action Bar */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-800 flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-gray-800 rounded-lg pl-10 pr-16 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-gray-400 text-xs">
                <kbd className="px-1.5 py-0.5 bg-[#1a1a1a] border border-gray-700 rounded text-xs">⌘</kbd>
                <kbd className="px-1.5 py-0.5 bg-[#1a1a1a] border border-gray-700 rounded text-xs">K</kbd>
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filter Button */}
            <button 
              onClick={() => console.log('Filter watch parties')}
              className="flex items-center justify-center gap-2 bg-[#0f0f0f] border border-gray-800 text-white px-4 py-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <Filter size={18} />
              <span className="text-sm font-medium">Filter</span>
            </button>

            {/* Export Data Button */}
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 bg-[#0f0f0f] border border-gray-800 text-white px-4 py-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <Download size={18} />
              <span className="text-sm font-medium">Export Data</span>
            </button>

            {/* Add Button */}
            <button 
              onClick={() => console.log('Add new watch party')}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors"
            >
              <Plus size={18} />
              <span className="text-sm font-medium">Button text</span>
            </button>
          </div>

          {/* Table - Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">TITLE</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">HOST</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">PARTICIPANTS</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">DURATION</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">
                    <div className="flex items-center gap-2">
                      STATUS
                      <ArrowUpDown size={14} className="text-gray-500" />
                    </div>
                  </th>
                  <th className="text-right px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((party) => (
                  <tr key={party.id} className="border-b border-gray-800 hover:bg-[#242424] transition-colors">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={party.thumbnail}
                            alt={party.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <span className="text-white font-medium text-sm">{party.title}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`${party.hostAvatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                          {getInitials(party.hostName)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-medium text-sm truncate">{party.hostName}</p>
                          <p className="text-gray-400 text-xs truncate">{party.hostEmail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{party.participants}</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{party.duration}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(party.status)}`}>
                        {party.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => console.log('Edit watch party:', party.id)}
                          className="p-2 hover:bg-gray-800 rounded transition-colors" 
                          aria-label="Edit"
                        >
                          <Pencil size={16} className="text-gray-400" />
                        </button>
                        <button 
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete "${party.title}"? This action cannot be undone.`)) {
                              console.log('Delete watch party:', party.id);
                            }
                          }}
                          className="p-2 hover:bg-gray-800 rounded transition-colors" 
                          aria-label="Delete"
                        >
                          <Trash2 size={16} className="text-gray-400" />
                        </button>
                        <button 
                          onClick={() => console.log('More options for watch party:', party.id)}
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
            {paginatedData.map((party) => (
              <div key={party.id} className="p-4 border-b border-gray-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={party.thumbnail}
                      alt={party.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base mb-2">{party.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`${party.hostAvatarColor} w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0`}>
                        {getInitials(party.hostName)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-white text-sm truncate">{party.hostName}</p>
                        <p className="text-gray-400 text-xs truncate">{party.hostEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Participants</p>
                    <p className="text-gray-300">{party.participants}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Duration</p>
                    <p className="text-gray-300">{party.duration}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400 text-xs mb-1">Status</p>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(party.status)}`}>
                      {party.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-800">
                  <button 
                    onClick={() => console.log('Edit watch party:', party.id)}
                    className="p-2 hover:bg-gray-800 rounded transition-colors"
                  >
                    <Pencil size={16} className="text-gray-400" />
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete "${party.title}"? This action cannot be undone.`)) {
                        console.log('Delete watch party:', party.id);
                      }
                    }}
                    className="p-2 hover:bg-gray-800 rounded transition-colors"
                  >
                    <Trash2 size={16} className="text-gray-400" />
                  </button>
                  <button 
                    onClick={() => console.log('More options for watch party:', party.id)}
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
                Showing {startIndex + 1}-{Math.min(endIndex, filteredWatchParties.length)} of {totalWatchParties}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

