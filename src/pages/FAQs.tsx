import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are your typical delivery times?',
      answer: 'Delivery times vary by product type and location. Standard ingredients typically deliver within 5-10 business days. Rush orders can often be accommodated within 2-3 business days for an additional fee. We work closely with our logistics partners to provide accurate delivery estimates and keep you informed throughout the process.'
    },
    {
      question: 'Can you source uncommon or specialty ingredients?',
      answer: 'Absolutely! Custom sourcing is one of our specialties. Whether you need organic, non-GMO, allergen-free, or other specialty ingredients, our team has the expertise and network to find what you need. We handle everything from rare spices to specialized protein powders and functional ingredients.'
    },
    {
      question: 'What are your minimum order requirements?',
      answer: 'Minimum orders vary by ingredient type. For bulk commodities, we typically work with pallet quantities or higher. For specialty ingredients, minimums can be as low as 50 lbs. LTL shipments allow for smaller quantities when needed. Contact us to discuss specific requirements for your ingredients.'
    },
    {
      question: 'What certifications do your suppliers have?',
      answer: 'All our suppliers maintain relevant food safety certifications including HACCP, SQF, BRC, and FDA registration. Many also hold organic, kosher, halal, and other specialty certifications. We can provide certification documentation for any ingredient upon request and help match you with certified suppliers for specific requirements.'
    },
    {
      question: 'How do you handle logistics and shipping?',
      answer: 'We coordinate all logistics through our network of trusted carriers. We offer both full truck loads (FTL) and less-than-truckload (LTL) shipping options. All shipments include tracking information, and we proactively communicate any delays or issues. Temperature-controlled shipping is available for products requiring cold chain management.'
    },
    {
      question: 'How is pricing determined for ingredients?',
      answer: 'Pricing is based on current market conditions, quantity, packaging requirements, and delivery specifications. We provide transparent pricing with no hidden fees. For ongoing relationships, we can establish contract pricing to help with budget planning. Market updates and price forecasts are available for key commodities.'
    },
    {
      question: 'What quality assurance measures do you have in place?',
      answer: 'Quality assurance is fundamental to our service. We maintain complete traceability from source to delivery, conduct regular supplier audits, and can arrange for third-party testing when needed. All products come with certificates of analysis, and we maintain detailed records for full accountability.'
    },
    {
      question: 'Do you work with both large and small manufacturers?',
      answer: 'Yes! We serve everyone from artisan bakeries to large-scale food manufacturers. Our flexible approach means we can handle orders ranging from specialty ingredients for small batches to full truck loads for major production runs. Every client receives the same level of personalized service and attention to detail.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20" role="banner">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
          }}
          role="img"
          aria-label="Customer service representative helping clients"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Get answers to common questions about our ingredient sourcing services.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white" aria-labelledby="faqs-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faqs-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from food manufacturers about our sourcing services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
                {openIndex === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-gray-50" role="region" aria-labelledby="help-heading">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 id="help-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our ingredient experts are here to help with any specific questions about sourcing, 
            logistics, or custom requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">
                Speak with our team for immediate answers to your ingredient sourcing questions.
              </p>
              <a 
                href="tel:+1-555-MAX-FOOD" 
                className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                1-555-MAX-FOOD
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-4">
                Get detailed answers and quotes for your specific ingredient requirements.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;