import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const blogPosts = [
    {
      title: '10 Hidden Gems in Southeast Asia',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b',
      date: 'March 15, 2024',
      author: 'Sarah Johnson',
      category: 'Travel Tips',
      excerpt: 'Discover lesser-known destinations in Southeast Asia that offer unique experiences away from the tourist crowds.',
    },
    {
      title: 'Ultimate Guide to Safari Photography',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      date: 'March 12, 2024',
      author: 'Michael Chen',
      category: 'Photography',
      excerpt: 'Learn essential tips and techniques for capturing stunning wildlife photos during your safari adventure.',
    },
    {
      title: 'Best Time to Visit the Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
      date: 'March 10, 2024',
      author: 'Emma Wilson',
      category: 'Destinations',
      excerpt: 'Plan your perfect Maldives getaway with our comprehensive guide to weather, activities, and seasonal highlights.',
    },
    {
      title: 'Local Cuisine Guide: Greek Islands',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
      date: 'March 8, 2024',
      author: 'Alex Thompson',
      category: 'Food & Culture',
      excerpt: 'Explore the rich flavors and culinary traditions of the Greek Islands, from fresh seafood to traditional desserts.',
    },
    {
      title: 'Sustainable Travel: Tips & Tricks',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      date: 'March 5, 2024',
      author: 'Lisa Martinez',
      category: 'Eco-Travel',
      excerpt: 'Learn how to minimize your environmental impact while traveling and support local communities.',
    },
    {
      title: 'Adventure Sports in New Zealand',
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3',
      date: 'March 3, 2024',
      author: 'David Cooper',
      category: 'Adventure',
      excerpt: 'From bungee jumping to skydiving, discover the best adrenaline-pumping activities in New Zealand.',
    },
  ];

  const categories = ['All', 'Travel Tips', 'Photography', 'Destinations', 'Food & Culture', 'Eco-Travel', 'Adventure'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = blogPosts.filter(
    post => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Travel blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-4">Travel Blog</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Stories, tips, and inspiration for your next adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-primary" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-gray-600 text-sm">{post.date}</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;