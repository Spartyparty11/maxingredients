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
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-20 lg:py-32 overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Source Quality Ingredients, Delivered Nationwide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed animate-fade-in-up animation-delay-300">
              Since 2011, Max Ingredients has helped food manufacturers find fresh, 
              reliable, cost-effective ingredients.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-emerald-600 shadow-xl hover:shadow-2xl animate-fade-in-up animation-delay-600"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ingredient Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative" aria-labelledby="categories-heading">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Ingredient Categories
              </h2>
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto w-24"></div>
            </div>
          </div>
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 rounded-xl group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ml-4 group-hover:text-emerald-800 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-transparent rounded-bl-full opacity-50"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">13+</div>
              <div className="text-emerald-100 font-medium">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-emerald-100 font-medium">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-emerald-100 font-medium">Ingredient Types</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24hr</div>
              <div className="text-emerald-100 font-medium">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Why Choose Max Ingredients?
              </h2>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto w-32"></div>
            </div>
          </div>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has made us a trusted partner for food manufacturers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const colors = [
                { bg: 'bg-gradient-to-br from-blue-100 to-blue-200', icon: 'text-blue-600', hover: 'group-hover:from-blue-200 group-hover:to-blue-300' },
                { bg: 'bg-gradient-to-br from-emerald-100 to-emerald-200', icon: 'text-emerald-600', hover: 'group-hover:from-emerald-200 group-hover:to-emerald-300' },
                { bg: 'bg-gradient-to-br from-orange-100 to-orange-200', icon: 'text-orange-600', hover: 'group-hover:from-orange-200 group-hover:to-orange-300' },
                { bg: 'bg-gradient-to-br from-purple-100 to-purple-200', icon: 'text-purple-600', hover: 'group-hover:from-purple-200 group-hover:to-purple-300' }
              ];
              const color = colors[index % colors.length];
              
              return (
                <div key={index} className="group text-center transform hover:-translate-y-2 transition-all duration-300">
                  <div className={`${color.bg} ${color.hover} p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <IconComponent className={`h-12 w-12 ${color.icon}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative" aria-labelledby="testimonials-heading">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                What Our Clients Say
              </h2>
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto w-28"></div>
            </div>
          </div>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600">
              Trusted by food manufacturers across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-emerald-200 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                        aria-hidden="true" 
                      />
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-3 rounded-xl w-fit mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300">
                    <Quote className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4">
                    <cite className="font-bold text-gray-900 not-italic group-hover:text-emerald-800 transition-colors duration-300">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-gray-600 mt-1">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-100 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden" role="region" aria-labelledby="cta-heading">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Source Your Next Ingredient?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our ingredient experts for a customized quote and solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 shadow-2xl hover:shadow-3xl"
          >
            Contact Us Today
            <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;