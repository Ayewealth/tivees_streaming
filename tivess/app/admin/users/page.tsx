'use client';

import { useState } from 'react';
import { Search, Filter, Download, Plus, Pencil, Trash2, MoreVertical } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  avatarColor: string;
  watchHours: string;
  subscriptionTier: 'Pro' | 'Basic' | 'Success';
  dateJoined: string;
}

const usersData: User[] = [
  { id: 1, name: 'Devon Lane', email: 'devoniane@gmail.com', avatarColor: 'bg-blue-500', watchHours: '342h 32s', subscriptionTier: 'Pro', dateJoined: '2024-06-24 10:45:00' },
  { id: 2, name: 'Robert Fox', email: 'robertfox96@gmail.com', avatarColor: 'bg-green-500', watchHours: '342h 32s', subscriptionTier: 'Basic', dateJoined: '2024-06-24 10:45:00' },
  { id: 3, name: 'Jane Smith', email: 'janesmith@gmail.com', avatarColor: 'bg-purple-500', watchHours: '342h 32s', subscriptionTier: 'Success', dateJoined: '2024-06-24 10:45:00' },
  { id: 4, name: 'John Doe', email: 'johndoe@gmail.com', avatarColor: 'bg-red-500', watchHours: '342h 32s', subscriptionTier: 'Pro', dateJoined: '2024-06-24 10:45:00' },
  { id: 5, name: 'Emily Johnson', email: 'emilyj@gmail.com', avatarColor: 'bg-yellow-500', watchHours: '342h 32s', subscriptionTier: 'Basic', dateJoined: '2024-06-24 10:45:00' },
  { id: 6, name: 'Michael Brown', email: 'mbrown@gmail.com', avatarColor: 'bg-pink-500', watchHours: '342h 32s', subscriptionTier: 'Pro', dateJoined: '2024-06-24 10:45:00' },
  { id: 7, name: 'Sarah Wilson', email: 'swilson@gmail.com', avatarColor: 'bg-indigo-500', watchHours: '342h 32s', subscriptionTier: 'Success', dateJoined: '2024-06-24 10:45:00' },
  { id: 8, name: 'David Lee', email: 'dlee@gmail.com', avatarColor: 'bg-teal-500', watchHours: '342h 32s', subscriptionTier: 'Basic', dateJoined: '2024-06-24 10:45:00' },
  { id: 9, name: 'Lisa Anderson', email: 'landerson@gmail.com', avatarColor: 'bg-orange-500', watchHours: '342h 32s', subscriptionTier: 'Pro', dateJoined: '2024-06-24 10:45:00' },
  { id: 10, name: 'Chris Taylor', email: 'ctaylor@gmail.com', avatarColor: 'bg-cyan-500', watchHours: '342h 32s', subscriptionTier: 'Basic', dateJoined: '2024-06-24 10:45:00' },
];

const getSubscriptionBadgeColor = (tier: string) => {
  switch (tier) {
    case 'Pro':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'Basic':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'Success':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = 50;
  const totalUsers = 500;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleFilter = () => {
    console.log('Filter users');
    // TODO: Implement filter UI when design is provided
  };

  const handleExport = () => {
    const filtered = usersData.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.subscriptionTier.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const csvContent = [
      ['Name', 'Email', 'Watch Hours', 'Subscription Tier', 'Date Joined'],
      ...filtered.map(user => [user.name, user.email, user.watchHours, user.subscriptionTier, user.dateJoined])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAddUser = () => {
    console.log('Add new user');
    // TODO: Implement add user form when UI design is provided
  };

  const handleEdit = (userId: number) => {
    console.log('Edit user:', userId);
    // TODO: Implement edit user functionality when UI design is provided
  };

  const handleDelete = (userId: number, userName: string) => {
    if (confirm(`Are you sure you want to delete user "${userName}"? This action cannot be undone.`)) {
      console.log('Delete user:', userId);
      // TODO: Implement delete user API call
    }
  };

  const handleMoreOptions = (userId: number) => {
    console.log('More options for user:', userId);
    // TODO: Implement more options menu when UI design is provided
  };

  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.subscriptionTier.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-black min-h-screen pt-16 lg:pt-8 w-full overflow-x-hidden">
      <div className="max-w-full">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Users</h1>
          <p className="text-gray-400 text-sm sm:text-base">Manage and monitor user accounts</p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Filter Button */}
          <button 
            onClick={handleFilter}
            className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 text-white px-4 py-2.5 rounded-lg hover:bg-[#242424] transition-colors"
          >
            <Filter size={18} />
            <span className="text-sm font-medium">Filter</span>
          </button>

          {/* Export Data Button */}
          <button 
            onClick={handleExport}
            className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 text-white px-4 py-2.5 rounded-lg hover:bg-[#242424] transition-colors"
          >
            <Download size={18} />
            <span className="text-sm font-medium">Export Data</span>
          </button>

          {/* Add User Button */}
          <button 
            onClick={handleAddUser}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors"
          >
            <Plus size={18} />
            <span className="text-sm font-medium">Add User</span>
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-800">
            <h2 className="text-white font-semibold text-sm sm:text-base">USERS</h2>
          </div>

          {/* Table - Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">User</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">Watch Hours</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">Subscription Tier</th>
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">Date Joined</th>
                  <th className="text-right px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-800 hover:bg-[#242424] transition-colors">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`${user.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                          {getInitials(user.name)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-medium text-sm truncate">{user.name}</p>
                          <p className="text-gray-400 text-xs truncate">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{user.watchHours}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getSubscriptionBadgeColor(user.subscriptionTier)}`}>
                        {user.subscriptionTier}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{user.dateJoined}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleEdit(user.id)}
                          className="p-2 hover:bg-gray-800 rounded transition-colors" 
                          aria-label="Edit"
                        >
                          <Pencil size={16} className="text-gray-400" />
                        </button>
                        <button 
                          onClick={() => handleDelete(user.id, user.name)}
                          className="p-2 hover:bg-gray-800 rounded transition-colors" 
                          aria-label="Delete"
                        >
                          <Trash2 size={16} className="text-gray-400" />
                        </button>
                        <button 
                          onClick={() => handleMoreOptions(user.id)}
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

          {/* Mobile View */}
          <div className="md:hidden">
            {paginatedUsers.map((user) => (
              <div key={user.id} className="p-4 border-b border-gray-800">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`${user.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                      {getInitials(user.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-medium text-sm truncate">{user.name}</p>
                      <p className="text-gray-400 text-xs truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button 
                      onClick={() => handleEdit(user.id)}
                      className="p-2 hover:bg-gray-800 rounded transition-colors"
                    >
                      <Pencil size={16} className="text-gray-400" />
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id, user.name)}
                      className="p-2 hover:bg-gray-800 rounded transition-colors"
                    >
                      <Trash2 size={16} className="text-gray-400" />
                    </button>
                    <button 
                      onClick={() => handleMoreOptions(user.id)}
                      className="p-2 hover:bg-gray-800 rounded transition-colors"
                    >
                      <MoreVertical size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Watch Hours</p>
                    <p className="text-gray-300">{user.watchHours}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Subscription</p>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getSubscriptionBadgeColor(user.subscriptionTier)}`}>
                      {user.subscriptionTier}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400 text-xs mb-1">Date Joined</p>
                    <p className="text-gray-300 text-xs">{user.dateJoined}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6">
          {/* Pagination Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            {/* Rows per Page */}
            <div className="flex items-center gap-2">
              <label className="text-gray-400 text-sm">Rows per Page:</label>
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                className="bg-[#1a1a1a] border border-gray-800 text-white px-3 py-1.5 rounded text-sm focus:outline-none focus:border-gray-700"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            {/* Page Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 bg-[#1a1a1a] border border-gray-800 text-white rounded text-sm hover:bg-[#242424] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                &lt; Prev
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  currentPage === 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1a1a1a] border border-gray-800 text-white hover:bg-[#242424]'
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  currentPage === 2
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1a1a1a] border border-gray-800 text-white hover:bg-[#242424]'
                }`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(3)}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  currentPage === 3
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1a1a1a] border border-gray-800 text-white hover:bg-[#242424]'
                }`}
              >
                3
              </button>
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
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 bg-[#1a1a1a] border border-gray-800 text-white rounded text-sm hover:bg-[#242424] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next &gt;
              </button>
            </div>

            {/* Go to Page */}
            <div className="flex items-center gap-2">
              <label className="text-gray-400 text-sm">Go to Page:</label>
              <input
                type="number"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => {
                  const page = Math.max(1, Math.min(totalPages, Number(e.target.value)));
                  setCurrentPage(page);
                }}
                className="w-16 bg-[#1a1a1a] border border-gray-800 text-white px-2 py-1.5 rounded text-sm focus:outline-none focus:border-gray-700"
              />
              <button
                onClick={() => {}}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
              >
                Go
              </button>
            </div>
          </div>

          {/* Showing Results */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredUsers.length)} of {totalUsers}
          </p>
        </div>
      </div>
    </div>
  );
}

