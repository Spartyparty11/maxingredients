import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md w-full">
          <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-24 overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
          }}
          role="img"
          aria-label="Professional business meeting"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Talk to an Ingredient Expert
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Ready to source your next ingredient? Get in touch for personalized service and competitive quotes.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              
              <h2 id="contact-heading" className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Get Started Today
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours with a customized quote 
                and solution for your ingredient needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="Your full name"
                      aria-describedby="name-help"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-vertical hover:border-gray-400"
                    placeholder="Tell us about your ingredient requirements, quantities, delivery timeline, or any specific questions..."
                  ></textarea>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Privacy Note:</strong> We respect your privacy and will never share your information 
                    with third parties. Your details are used solely to provide you with ingredient sourcing services.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-3 rounded-xl shadow-lg">
                      <Phone className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
                      <a 
                        href="tel:+1-555-MAX-FOOD" 
                        className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 font-semibold"
                      >
                        1-555-MAX-FOOD (1-555-629-3663)
                      </a>
                      <p className="text-sm text-gray-500 mt-2">
                        Monday - Friday, 8AM - 6PM CST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl shadow-lg">
                      <Mail className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
                      <a 
                        href="mailto:info@maxingredients.com" 
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-semibold"
                      >
                        info@maxingredients.com
                      </a>
                      <p className="text-sm text-gray-500 mt-2">
                        We typically respond within 4 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl shadow-lg">
                      <MapPin className="h-6 w-6 text-orange-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Location</h4>
                      <p className="text-gray-600 font-medium">
                        Chicago, Illinois<br />
                        Serving food manufacturers nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl shadow-lg">
                      <Clock className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h4>
                      <div className="text-gray-600 space-y-1 font-medium">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM CST</p>
                        <p>Saturday: 9:00 AM - 2:00 PM CST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200 shadow-lg relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200 to-transparent rounded-bl-full opacity-50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Quick Response Promise</h3>
                  <p className="text-emerald-700 leading-relaxed font-medium">
                  We understand that timing is critical in food manufacturing. That's why we commit 
                  to responding to all inquiries within 24 hours, and often much sooner. For urgent 
                  requests, don't hesitate to call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;