import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Star, Users, Coffee, Wifi, Car, Utensils } from 'lucide-react';

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const packages = [
    {
      title: 'Luxury Maldives Escape',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
      price: '$2,499',
      duration: '7 Days',
      rating: 4.8,
      people: '2-4',
      features: ['All-inclusive Resort', 'Water Activities', 'Spa Access', 'Gourmet Dining'],
      description: 'Experience ultimate luxury in overwater villas with pristine beaches and crystal-clear waters.',
    },
    {
      title: 'Greek Islands Explorer',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      price: '$1,999',
      duration: '10 Days',
      rating: 4.9,
      people: '2-6',
      features: ['Island Hopping', 'Cultural Tours', 'Wine Tasting', 'Local Cuisine'],
      description: 'Discover the magic of Santorini, Mykonos, and other stunning Greek islands.',
    },
    {
      title: 'Bali Cultural Journey',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      price: '$1,599',
      duration: '8 Days',
      rating: 4.7,
      people: '2-8',
      features: ['Temple Tours', 'Cooking Classes', 'Rice Terrace Trek', 'Spa Treatments'],
      description: 'Immerse yourself in Balinese culture, traditions, and natural beauty.',
    },
  ];

  const amenities = [
    { icon: Coffee, label: 'Breakfast Included' },
    { icon: Wifi, label: 'Free Wi-Fi' },
    { icon: Car, label: 'Airport Transfer' },
    { icon: Utensils, label: 'Restaurant Access' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            alt="Luxury travel"
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
            <h1 className="text-5xl font-bold mb-4">Travel Packages</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Carefully curated packages for unforgettable experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
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
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">{pkg.people} People</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-secondary" />
                      <span className="text-gray-600">{pkg.rating}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Packages Include</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <amenity.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="text-gray-700">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;