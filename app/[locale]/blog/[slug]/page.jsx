"use client"

import { useState, useEffect, use } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiTag } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getBlogBySlug } from "@/components/blog/utils/data"
import 'highlight.js/styles/github-dark.css'; // You can choose different themes

export default function BlogDetail({ params }) {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  
  // Unwrap params using React.use()
  const { slug } = use(params);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        console.log('🚀 Loading blog with slug:', slug);
        setIsLoading(true);
        const blogData = await getBlogBySlug(slug);
        
        if (!blogData) {
          setError('Blog not found');
          return;
        }
        
        setBlog(blogData);
        console.log('✅ Blog loaded:', blogData);
      } catch (err) {
        console.error('❌ Error loading blog:', err);
        setError('Failed to load blog');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      loadBlog();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          ></motion.div>
          <p className="text-gray-600">Loading blog post...</p>
        </motion.div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error || 'Blog not found'}
          </h1>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-gray-100 sticky top-0 z-10"
      >
        <div className="max-w-4xl mx-auto px-4 mt-24 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-lg bg-black hover:text-gray-300 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </motion.header>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          {/* Hero Image */}
          {blog.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          )}

          {/* Blog Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    <FiTag className="w-3 h-3" />
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Description */}
            {blog.description && (
              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                {blog.description}
              </p>
            )}
          </motion.header>

          {/* Divider */}
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border-gray-200 mb-8"
          />

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r
              prose-ul:list-none prose-ul:pl-0 prose-ol:list-none prose-ol:pl-0
              prose-li:text-gray-700 prose-li:mb-2
              prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2
              prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
              prose-img:rounded-lg prose-img:shadow-md"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                // Custom components for better styling
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href}
                    className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
                    target={href?.startsWith('http') ? '_blank' : '_self'}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-6">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-2 mb-6">
                    {children}
                  </ol>
                ),
                li: ({ children, index }) => (
                  <li className="flex items-start">
               
                    <span className="text-gray-700 leading-relaxed">{children}</span>
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 bg-blue-50 px-4 py-2 rounded-r my-6">
                    {children}
                  </blockquote>
                ),
                code: ({ inline, children }) => {
                  if (inline) {
                    return (
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      {children}
                    </code>
                  );
                }
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </motion.div>
        </article>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Published on {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}