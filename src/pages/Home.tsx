import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate(); // Inicialize o useNavigate

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const destinations = [
    {
      title: 'Maldives Paradise',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
      price: '$1,299',
      rating: 4.8,
    },
    {
      title: 'Santorini Dreams',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      price: '$1,499',
      rating: 4.9,
    },
    {
      title: 'Bali Adventure',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      price: '$999',
      rating: 4.7,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21"
            alt="Tropical paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">Discover Your Next Adventure</h1>
            <p className="text-xl mb-8">
              Experience unforgettable journeys to the world's most exotic destinations
            </p>
            <button
              onClick={() => navigate('/destinations')} // Adicione o evento onClick para navegar
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our hand-picked selection of stunning locations around the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">7 Days Tour</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-secondary" />
                      <span className="text-gray-600">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{destination.price}</span>
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;