"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiFilter, 
  FiX, 
  FiCalendar,
  FiUser,
  FiTag,
  FiFolder
} from 'react-icons/fi';

const BlogFilter = ({ 
  onFilterChange, 
  filters, 
  availableAuthors = [], 
  availableCategories = [], 
  availableTags = [] 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (e) => {
    onFilterChange({
      ...filters,
      search: e.target.value
    });
  };

  const handleDatePeriodChange = (period) => {
    onFilterChange({
      ...filters,
      datePeriod: period
    });
  };

  const handleAuthorChange = (author) => {
    onFilterChange({
      ...filters,
      author: author
    });
  };

  const handleCategoryChange = (category) => {
    onFilterChange({
      ...filters,
      category: category
    });
  };

  const handleTagToggle = (tag) => {
    const currentTags = filters.tags || [];
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    onFilterChange({
      ...filters,
      tags: updatedTags
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      search: '',
      datePeriod: '',
      tags: [],
      author: '',
      category: ''
    });
  };

  const hasActiveFilters = filters.search || 
                          filters.datePeriod || 
                          filters.author || 
                          filters.category || 
                          (filters.tags && filters.tags.length > 0);

  const datePeriods = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last year'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8"
    >
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between mb-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
            isFilterOpen 
              ? 'bg-blue-50 border-blue-200 text-blue-700'
              : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
          }`}
        >
          <FiFilter className="w-4 h-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-xs rounded-full">
              {(filters.tags?.length || 0) + 
               (filters.author ? 1 : 0) + 
               (filters.category ? 1 : 0) + 
               (filters.datePeriod ? 1 : 0)}
            </span>
          )}
        </motion.button>

        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={clearAllFilters}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiX className="w-4 h-4" />
            Clear all
          </motion.button>
        )}
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg p-6 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Date Period Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <FiCalendar className="w-4 h-4" />
                  Date Period
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => handleDatePeriodChange('')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      !filters.datePeriod 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    All time
                  </button>
                  {datePeriods.map((period) => (
                    <button
                      key={period}
                      onClick={() => handleDatePeriodChange(period)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        filters.datePeriod === period 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <FiUser className="w-4 h-4" />
                  Author
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  <button
                    onClick={() => handleAuthorChange('')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      !filters.author 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    All authors
                  </button>
                  {availableAuthors.map((author) => (
                    <button
                      key={author}
                      onClick={() => handleAuthorChange(author)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        filters.author === author 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      {author}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <FiFolder className="w-4 h-4" />
                  Category
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      !filters.category 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    All categories
                  </button>
                  {availableCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        filters.category === category 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <FiTag className="w-4 h-4" />
                  Tags
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {availableTags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleTagToggle(tag)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        filters.tags?.includes(tag)
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{tag}</span>
                        {filters.tags?.includes(tag) && (
                          <FiX className="w-3 h-3" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters Summary */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <h4 className="text-sm font-medium text-gray-700 mb-3">Active Filters:</h4>
                <div className="flex flex-wrap gap-2">
                  {filters.datePeriod && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {filters.datePeriod}
                      <button onClick={() => handleDatePeriodChange('')}>
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.author && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      {filters.author}
                      <button onClick={() => handleAuthorChange('')}>
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.category && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {filters.category}
                      <button onClick={() => handleCategoryChange('')}>
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.tags?.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                      {tag}
                      <button onClick={() => handleTagToggle(tag)}>
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogFilter;