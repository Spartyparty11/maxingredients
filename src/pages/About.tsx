import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Expertise',
      description: 'Our team brings decades of food industry experience and deep knowledge of ingredient sourcing, quality standards, and supply chain management.'
    },
    {
      icon: Award,
      title: 'Friendliness',
      description: 'We believe in building lasting partnerships through personalized service, clear communication, and a genuine commitment to your success.'
    },
    {
      icon: Clock,
      title: 'Accuracy',
      description: 'Precision in every detail - from product specifications to delivery schedules. We get it right the first time, every time.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Built on transparency, reliability, and consistent quality. Our track record speaks for itself with long-term client relationships.'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20" role="banner">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5644956/pexels-photo-5644956.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
          }}
          role="img"
          aria-label="Food manufacturing facility"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted Ingredient Sourcing Since 2011
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Building partnerships that help food manufacturers succeed with quality ingredients and reliable service.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2011, Max Ingredients began with a simple mission: to bridge the gap between 
              food manufacturers and reliable ingredient suppliers. What started as a small operation 
              has grown into a trusted nationwide network.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Journey</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Over the past 13+ years, we've built lasting relationships with both suppliers and 
                  manufacturers, creating a supply chain that prioritizes quality, reliability, and 
                  cost-effectiveness.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve food manufacturers across the country, from artisan bakeries to 
                  large-scale production facilities, helping them source everything from specialty 
                  ingredients to bulk commodities.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">13+ Years</h4>
                      <p className="text-sm text-gray-600">Industry Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Users className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">500+</h4>
                      <p className="text-sm text-gray-600">Satisfied Clients</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Award className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">USDA</h4>
                      <p className="text-sm text-gray-600">Certified Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Sets Us Apart</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We understand that ingredient sourcing is more than just procurement – it's about 
              finding partners you can trust. Our deep industry knowledge, combined with our 
              extensive supplier network, allows us to provide solutions that go beyond commodity trading.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need help finding a specialty ingredient, managing seasonal price 
              fluctuations, or optimizing your supply chain logistics, we're here to help your 
              business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with clients and suppliers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <IconComponent className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team/Partnership Section */}
      <section className="py-16 bg-white" role="region" aria-labelledby="partnership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="partnership-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Built on Strong Partnerships
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our success comes from the relationships we've built with suppliers, manufacturers, 
            and logistics partners across the food industry.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supplier Network</h3>
              <p className="text-gray-600">
                Vetted suppliers across North America ensuring quality and reliability
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Logistics Partners</h3>
              <p className="text-gray-600">
                Reliable transportation networks for on-time delivery nationwide
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of food safety, regulations, and market trends
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;