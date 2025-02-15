//path: src/pages/Destinations.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Star, Calendar } from 'lucide-react';

const Destinations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const destinations = [
    {
      title: 'Maldives Paradise',
      category: 'Beach',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
      rating: 4.8,
      duration: '7 Days',
      description: 'Experience luxury and tranquility in crystal clear waters.',
    },
    {
      title: 'Santorini Dreams',
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      rating: 4.9,
      duration: '5 Days',
      description: 'Discover the magic of Greek islands and stunning sunsets.',
    },
    {
      title: 'Bali Adventure',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      rating: 4.7,
      duration: '10 Days',
      description: 'Explore temples, rice terraces, and vibrant culture.',
    },
    {
      title: 'Swiss Alps',
      category: 'Mountain',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
      rating: 4.9,
      duration: '8 Days',
      description: 'Experience breathtaking mountain views and winter sports.',
    },
    {
      title: 'Tokyo Lights',
      category: 'Urban',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
      rating: 4.8,
      duration: '6 Days',
      description: 'Immerse yourself in modern Japanese culture and cuisine.',
    },
    {
      title: 'Safari Adventure',
      category: 'Wildlife',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      rating: 4.9,
      duration: '9 Days',
      description: 'Witness amazing wildlife in their natural habitat.',
    },
  ];

  const categories = ['All', 'Beach', 'Cultural', 'Adventure', 'Mountain', 'Urban', 'Wildlife'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredDestinations = destinations.filter(
    dest => selectedCategory === 'All' || dest.category === selectedCategory
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
            alt="World destinations"
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
            <h1 className="text-5xl font-bold mb-4">Explore Our Destinations</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover handpicked destinations that will take your breath away
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

      {/* Destinations Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">{destination.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-secondary" />
                      <span className="text-gray-600">{destination.rating}</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;