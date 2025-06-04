import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiClock, 
  FiUser, 
  FiTag, 
  FiArrowRight,
  FiCalendar,
  FiBookmark,
  FiShare2
} from 'react-icons/fi';

const BlogCard = ({ blog, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Handle cases where slug might not exist
  const blogSlug = blog.slug || blog.documentId || `blog-${blog.id}`;
  
  console.log('🔗 Blog card using slug:', blogSlug, 'for blog:', blog.title);

  if (blog.featured) {
    // Featured card layout (large horizontal)
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="group md:col-span-2 lg:col-span-2"
      >
        <Link href={`/blog/${blogSlug}`} className="block h-full">
          <motion.div
            variants={hoverVariants}
            initial="rest"
            whileHover="hover"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <motion.div variants={imageVariants}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
              
              {/* Overlay with Category */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Featured Badge */}
              <div className="absolute top-4 right-4">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full"
                >
                  Featured
                </motion.span>
              </div>

              {/* Quick Actions */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Handle bookmark logic here
                  }}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <FiBookmark className="w-4 h-4 text-gray-600" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Handle share logic here
                  }}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <FiShare2 className="w-4 h-4 text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + tagIndex * 0.05 }}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <FiTag className="w-3 h-3" />
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors text-xl md:text-2xl"
              >
                {blog.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-sm mb-4 line-clamp-3"
              >
                {blog.description}
              </motion.p>

              {/* Meta Information */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between text-sm text-gray-500"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FiUser className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read More Arrow */}
                <motion.div
                  className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">Read more</span>
                  <FiArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.article>
    );
  }

  // Regular card layout (compact vertical)
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group"
    >
      <Link href={`/blog/${blogSlug}`} className="block h-full">
        <motion.div
          variants={hoverVariants}
          initial="rest"
          whileHover="hover"
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative overflow-hidden flex-shrink-0">
            <motion.div variants={imageVariants}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            
            {/* Overlay with Category */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Handle bookmark logic here
                }}
                className="p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <FiBookmark className="w-3 h-3 text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Handle share logic here
                }}
                className="p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <FiShare2 className="w-3 h-3 text-gray-600" />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            {/* Tags - Simplified for vertical cards */}
            <div className="flex flex-wrap gap-1 mb-3">
              {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + tagIndex * 0.05 }}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors"
                >
                  <FiTag className="w-2.5 h-2.5" />
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors text-base leading-tight flex-shrink-0"
            >
              {blog.title}
            </motion.h3>

            {/* Description - Shorter for vertical cards */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1"
            >
              {blog.description}
            </motion.p>

            {/* Meta Information - Simplified */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              {/* Author and Date on separate line */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <FiUser className="w-3 h-3" />
                  <span className="truncate">{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="w-3 h-3" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
              
              {/* Date and Read More */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{formatDate(blog.date)}</span>
                <motion.div
                  className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all duration-300"
                  whileHover={{ x: 3 }}
                >
                  <span className="text-xs font-medium">Read</span>
                  <FiArrowRight className="w-3 h-3" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};

const BlogGrid = ({ blogs, isLoading }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-6 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <motion.div
        variants={emptyStateVariants}
        initial="hidden"
        animate="visible"
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <FiTag className="w-8 h-8 text-gray-400" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Try adjusting your search criteria or clearing your filters to see more results.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="wait">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogGrid;