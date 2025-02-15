import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '10,000+' },
    { icon: Globe, label: 'Destinations', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Shield, label: 'Satisfaction Rate', value: '98%' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Travel experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-4">About ExoticTravels</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Creating unforgettable travel experiences since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2009, ExoticTravels has been at the forefront of creating extraordinary travel experiences. 
                Our passion for exploration and commitment to excellence has made us a trusted name in the travel industry.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that travel has the power to transform lives, broaden horizons, and create lasting memories. 
                Our team of experienced travel experts works tirelessly to craft unique itineraries that combine adventure, 
                culture, and luxury.
              </p>
              <p className="text-gray-600">
                Whether you're seeking a peaceful retreat in the Maldives or an adventurous trek through the 
                mountains of Nepal, we're here to make your travel dreams a reality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
                alt="Travel planning"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
                alt="Travel experience"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;