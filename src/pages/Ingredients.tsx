import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Droplets, Wheat, Apple, Beef, Coffee, ArrowRight } from 'lucide-react';

const Ingredients = () => {
  const categories = [
    {
      icon: Apple,
      title: 'IQF Fruits & Vegetables',
      description: 'Individual Quick Frozen produce maintaining peak nutrition and flavor. Perfect for manufacturers needing consistent quality year-round. Available in various cuts and specifications.',
      examples: 'Berries, diced vegetables, fruit pieces'
    },
    {
      icon: Droplets,
      title: 'Drums & Totes',
      description: 'Bulk liquid and semi-solid ingredients in food-grade containers. Ideal for large-scale production with easy handling and storage. Various sizes available.',
      examples: 'Fruit purees, syrups, oils, concentrates'
    },
    {
      icon: Package,
      title: 'Packaged Pallets',
      description: 'Pre-packaged ingredient pallets ready for immediate use. Streamlined logistics and inventory management for efficient production workflows.',
      examples: 'Flour, sugar, specialty ingredients'
    },
    {
      icon: Package,
      title: 'Full Truck Loads',
      description: 'Cost-effective shipping for high-volume requirements. Direct supplier-to-manufacturer delivery with competitive pricing for bulk orders.',
      examples: 'Grains, commodities, bulk seasonings'
    },
    {
      icon: Package,
      title: 'LTL Shipments',
      description: 'Less-than-truckload options for smaller quantities. Flexible ordering with reliable delivery schedules perfect for specialty ingredients.',
      examples: 'Specialty flours, extracts, additives'
    },
    {
      icon: Wheat,
      title: 'Grains & Cereals',
      description: 'High-quality grains and cereal products sourced from trusted suppliers. Various grades and specifications available for different applications.',
      examples: 'Wheat, oats, rice, specialty grains'
    },
    {
      icon: Beef,
      title: 'Proteins & Meats',
      description: 'Premium protein ingredients for food manufacturing. USDA-inspected facilities with full traceability and quality assurance programs.',
      examples: 'Meat powders, protein concentrates'
    },
    {
      icon: Coffee,
      title: 'Specialty Ingredients',
      description: 'Unique and hard-to-find ingredients for specialty applications. Custom sourcing services for specific formulation requirements.',
      examples: 'Extracts, flavorings, functional ingredients'
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
            backgroundImage: 'url(https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
          }}
          role="img"
          aria-label="Various food ingredients and spices"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quality Ingredients for Every Need
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            From IQF products to specialty ingredients, we source what you need with the quality you demand.
          </p>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="py-16 bg-white" aria-labelledby="ingredients-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="ingredients-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Ingredient Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sourcing solutions for food manufacturers across all categories and specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-emerald-300 transition-all duration-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <IconComponent className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500 font-medium mb-1">Examples:</p>
                    <p className="text-sm text-emerald-600">{category.examples}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50" aria-labelledby="quality-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="quality-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every ingredient we source meets strict quality standards and food safety requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Package className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Certified Suppliers
              </h3>
              <p className="text-gray-600">
                All suppliers are vetted and maintain relevant food safety certifications including HACCP, SQF, and BRC.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Package className="h-8 w-8 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Traceability
              </h3>
              <p className="text-gray-600">
                Complete supply chain traceability from source to delivery, ensuring full accountability and transparency.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Package className="h-8 w-8 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Testing & Analysis
              </h3>
              <p className="text-gray-600">
                Regular testing for contaminants, nutritional content, and quality parameters to ensure product integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sourcing CTA */}
      <section className="py-16 bg-blue-600 text-white" role="region" aria-labelledby="custom-heading">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 id="custom-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Need Something Special?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Can't find what you're looking for? Our team specializes in custom sourcing solutions 
            for unique ingredients and specifications.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-blue-100">✓ Specialty organic ingredients</p>
            <p className="text-blue-100">✓ Unique processing requirements</p>
            <p className="text-blue-100">✓ Custom packaging solutions</p>
            <p className="text-blue-100">✓ International sourcing</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Contact Us for Custom Sourcing
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ingredients;