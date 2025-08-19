import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Clock, Users, CheckCircle, Star, Quote } from 'lucide-react';

const Home = () => {
  const categories = [
    {
      icon: Package,
      title: 'IQF Products',
      description: 'Individual Quick Frozen fruits and vegetables for consistent quality and extended shelf life.'
    },
    {
      icon: Package,
      title: 'Drums & Totes',
      description: 'Bulk liquid and semi-solid ingredients in convenient, food-grade packaging.'
    },
    {
      icon: Package,
      title: 'Packaged Pallets',
      description: 'Pre-packaged ingredient pallets ready for immediate use in production.'
    },
    {
      icon: Truck,
      title: 'Full Truck Loads',
      description: 'Cost-effective shipping for large-volume ingredient requirements.'
    },
    {
      icon: Package,
      title: 'LTL Shipments',
      description: 'Less-than-truckload options for smaller orders with reliable delivery.'
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expertise',
      description: 'Over 13 years of food industry knowledge and ingredient sourcing experience.'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Consistent quality and dependable supply chains you can count on.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Precision logistics ensuring your ingredients arrive exactly when needed.'
    },
    {
      icon: Star,
      title: 'Service',
      description: 'Personalized support and custom solutions for your unique requirements.'
    },
  ];

  const testimonials = [
    {
      quote: "Max Ingredients has been our trusted partner for over 5 years. Their reliability and quality are unmatched.",
      author: "Sarah Johnson",
      company: "Premium Foods Manufacturing",
      rating: 5
    },
    {
      quote: "The team at Max Ingredients always goes above and beyond to meet our tight deadlines and specific requirements.",
      author: "Michael Chen",
      company: "Artisan Bakery Solutions",
      rating: 5
    },
    {
      quote: "Outstanding service and competitive pricing. They've helped us scale our operations efficiently.",
      author: "David Rodriguez",
      company: "Fresh Start Food Co.",
      rating: 5
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20 lg:py-32" role="banner">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
          role="img"
          aria-label="Fresh produce and ingredients"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Source Quality Ingredients, Delivered Nationwide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              Since 2011, Max Ingredients has helped food manufacturers find fresh, 
              reliable, cost-effective ingredients.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-emerald-600"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ingredient Categories */}
      <section className="py-16 bg-gray-50" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ingredient Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From IQF products to full truck loads, we handle all your ingredient sourcing needs 
              with precision and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <IconComponent className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Max Ingredients?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has made us a trusted partner for food manufacturers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by food manufacturers across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                      aria-hidden="true" 
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-emerald-600 mb-4" aria-hidden="true" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <cite className="font-semibold text-gray-900 not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white" role="region" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source Your Next Ingredient?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get in touch with our ingredient experts for a customized quote and solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;