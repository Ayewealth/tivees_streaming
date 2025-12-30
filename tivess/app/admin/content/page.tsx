'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Search, Filter, Download, Pencil, Trash2, MoreVertical, X, Video, Image as ImageIcon, ClipboardList } from 'lucide-react';
import QuillEditor from './QuillEditor';

interface ContentItem {
  id: number;
  title: string;
  type: 'Movie' | 'Series';
  views: string;
  duration: string;
  status: 'Loading' | 'Published' | 'Draft';
  thumbnail: string;
}

const contentData: ContentItem[] = [
  { id: 1, title: 'Inception', type: 'Movie', views: '125.7K', duration: '2h 31m', status: 'Loading', thumbnail: '/assets/movie (1).png' },
  { id: 2, title: 'Breaking Bad', type: 'Series', views: '125.7K', duration: '2h 31m', status: 'Published', thumbnail: '/assets/movie (2).png' },
  { id: 3, title: 'The Matrix', type: 'Series', views: '125.7K', duration: '2h 31m', status: 'Draft', thumbnail: '/assets/movie (3).png' },
  { id: 4, title: 'Planet Earth 3', type: 'Movie', views: '125.7K', duration: '2h 31m', status: 'Published', thumbnail: '/assets/movie (4).png' },
  { id: 5, title: 'Planet Earth', type: 'Series', views: '125.7K', duration: '2h 31m', status: 'Published', thumbnail: '/assets/movie (1).png' },
  { id: 6, title: 'The Dark Knight', type: 'Movie', views: '125.7K', duration: '2h 31m', status: 'Published', thumbnail: '/assets/movie (2).png' },
  { id: 7, title: 'Game of Thrones', type: 'Series', views: '125.7K', duration: '2h 31m', status: 'Published', thumbnail: '/assets/movie (3).png' },
  { id: 8, title: 'Interstellar', type: 'Movie', views: '125.7K', duration: '2h 31m', status: 'Draft', thumbnail: '/assets/movie (4).png' },
  { id: 9, title: 'Stranger Things', type: 'Series', views: '125.7K', duration: '2h 31m', status: 'Published', thumbnail: '/assets/movie (1).png' },
  { id: 10, title: 'The Crown', type: 'Series', views: '125.7K', duration: '2h 31m', status: 'Published', thumbnail: '/assets/movie (2).png' },
];

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Published':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Draft':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Loading':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export default function ContentPage() {
  // Form state
  const [formData, setFormData] = useState({
    movieTitle: '',
    shortTitle: '',
    articleTitle: '',
    description: '',
  });

  // File upload state
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [isDraggingVideo, setIsDraggingVideo] = useState(false);
  const [isDraggingThumbnail, setIsDraggingThumbnail] = useState(false);

  // Table state
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = 50;
  const totalContent = 500;

  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  // Video upload handlers
  const handleVideoDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingVideo(true);
  };

  const handleVideoDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingVideo(false);
  };

  const handleVideoDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingVideo(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
    }
  };

  const handleVideoFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
    }
  };

  // Thumbnail upload handlers
  const handleThumbnailDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingThumbnail(true);
  };

  const handleThumbnailDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingThumbnail(false);
  };

  const handleThumbnailDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingThumbnail(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setThumbnailFile(file);
    }
  };

  const handleThumbnailFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setThumbnailFile(file);
    }
  };

  // Form handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.shortTitle || !formData.articleTitle) {
      alert('Please fill in all required fields (Short Title and Article Title)');
      return;
    }

    // Here you would typically send the data to your API
    // For now, we'll just log it
    console.log('Form Data:', {
      ...formData,
      videoFile: videoFile?.name,
      thumbnailFile: thumbnailFile?.name,
    });

    // TODO: Implement API call to save content
    // Example:
    // const formDataToSend = new FormData();
    // formDataToSend.append('movieTitle', formData.movieTitle);
    // formDataToSend.append('shortTitle', formData.shortTitle);
    // formDataToSend.append('articleTitle', formData.articleTitle);
    // formDataToSend.append('description', formData.description);
    // if (videoFile) formDataToSend.append('video', videoFile);
    // if (thumbnailFile) formDataToSend.append('thumbnail', thumbnailFile);
    // await fetch('/api/content', { method: 'POST', body: formDataToSend });

    alert('Content saved successfully! (This is a placeholder - implement API integration)');
    
    // Reset form after successful submission (uncomment when API is ready)
    // setFormData({ movieTitle: '', shortTitle: '', articleTitle: '', description: '' });
    // setVideoFile(null);
    // setThumbnailFile(null);
  };

  // Export functionality
  const handleExport = () => {
    const csvContent = [
      ['Title', 'Type', 'Views', 'Duration', 'Status'],
      ...contentData.map(item => [item.title, item.type, item.views, item.duration, item.status])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filter content based on search
  const filteredContent = contentData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-black min-h-screen pt-16 lg:pt-8 w-full overflow-x-hidden">
      <div className="max-w-full">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Content</h1>
          <p className="text-gray-400 text-sm sm:text-base">Manage your media catalog</p>
        </div>

        {/* Content Upload/Creation Section */}
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-4 sm:p-5 md:p-6 mb-6 md:mb-8">
          {/* Video File Upload */}
          <div className="mb-6">
            <div
              onDragOver={handleVideoDragOver}
              onDragLeave={handleVideoDragLeave}
              onDrop={handleVideoDrop}
              onClick={() => videoInputRef.current?.click()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDraggingVideo
                  ? 'border-gray-500 bg-gray-500/10'
                  : videoFile
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                onChange={handleVideoFileSelect}
                className="hidden"
              />
              {/* Purple video icon with overlapping documents and play button */}
              <div className="mx-auto mb-4 w-16 h-16 relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-lg"></div>
                <Video className="mx-auto relative z-10 text-purple-500" size={48} />
              </div>
              <p className="text-white mb-2">
                Drag and drop video file here, or <span className="text-red-500 font-semibold">Browse</span>
              </p>
              <p className="text-gray-400 text-sm">Max video file size is 10GB</p>
              {videoFile && (
                <p className="text-green-400 text-sm mt-2">Selected: {videoFile.name}</p>
              )}
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Movie Title</label>
              <div className="relative">
                <input
                  type="text"
                  name="movieTitle"
                  value={formData.movieTitle}
                  onChange={handleInputChange}
                  placeholder="Enter movie title"
                  className="w-full bg-[#0f0f0f] border border-gray-800 rounded-lg pl-4 pr-10 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
                />
                <ClipboardList className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Short Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="shortTitle"
                value={formData.shortTitle}
                onChange={handleInputChange}
                placeholder="Enter short title"
                required
                className="w-full bg-[#0f0f0f] border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="articleTitle"
                value={formData.articleTitle}
                onChange={handleInputChange}
                placeholder="Enter article title"
                required
                className="w-full bg-[#0f0f0f] border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
              />
            </div>
          </div>

          {/* Description and Thumbnail Upload - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Description WYSIWYG Editor */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Description</label>
              <QuillEditor
                value={formData.description}
                onChange={(value) => setFormData(prev => ({ ...prev, description: value }))}
                placeholder="Enter description"
              />
            </div>

            {/* Movie Thumbnail Upload */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Thumbnail</label>
              <div
                onDragOver={handleThumbnailDragOver}
                onDragLeave={handleThumbnailDragLeave}
                onDrop={handleThumbnailDrop}
                onClick={() => thumbnailInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors h-[300px] flex flex-col items-center justify-center ${
                  isDraggingThumbnail
                    ? 'border-gray-500 bg-gray-500/10'
                    : thumbnailFile
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <input
                  ref={thumbnailInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailFileSelect}
                  className="hidden"
                />
                {/* Orange image icon with overlapping images and mountain/sun graphic */}
                <div className="mx-auto mb-4 w-16 h-16 relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-lg"></div>
                  <ImageIcon className="mx-auto relative z-10 text-orange-500" size={48} />
                </div>
                <p className="text-white mb-2">
                  Drag and drop video file here, or <span className="text-red-500 font-semibold">Browse</span>
                </p>
                <p className="text-gray-400 text-sm">Minimum 800px width recommended. Max 10MB each</p>
                {thumbnailFile && (
                  <p className="text-green-400 text-sm mt-2">Selected: {thumbnailFile.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Save Content
            </button>
          </div>
        </div>

        {/* Content List/Table Section */}
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
                className="w-full bg-[#0f0f0f] border border-gray-800 rounded-lg pl-10 pr-10 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filter Button */}
            <button 
              onClick={() => console.log('Filter content')}
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
          </div>

          {/* Table Header */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-800">
            <h2 className="text-white font-semibold text-sm sm:text-base">TITLE</h2>
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
                  <th className="text-left px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">STATUS</th>
                  <th className="text-right px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredContent.map((item) => (
                  <tr key={item.id} className="border-b border-gray-800 hover:bg-[#242424] transition-colors">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-12 h-16 object-cover rounded flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/movieBanner.png';
                          }}
                        />
                        <div>
                          <p className="text-white font-medium text-sm">{item.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{item.type}</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{item.views}</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-300 text-sm">{item.duration}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(item.status)}`}>
                        {item.status}
                      </span>
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

          {/* Mobile View */}
          <div className="md:hidden">
            {filteredContent.map((item) => (
              <div key={item.id} className="p-4 border-b border-gray-800">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-16 object-cover rounded flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/movieBanner.png';
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-medium text-sm truncate">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
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
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Views</p>
                    <p className="text-gray-300">{item.views}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Duration</p>
                    <p className="text-gray-300">{item.duration}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400 text-xs mb-1">Status</p>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(item.status)}`}>
                      {item.status}
                    </span>
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
                Go &gt;
              </button>
            </div>
          </div>

          {/* Showing Results */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Showing {(currentPage - 1) * rowsPerPage + 1}-{Math.min(currentPage * rowsPerPage, totalContent)} of {totalContent}
          </p>
        </div>
      </div>
    </div>
  );
}

