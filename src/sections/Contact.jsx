import { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
        <div className="overflow-hidden" id="contact">
        <div className="container py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Side - Contact Information */}
            <div className="relative">
                <div className="max-w-[28rem]">
                <h2 className="h2 mb-6">Contact Us</h2>
                <p className="body-1 text-n-2 mb-8 leading-relaxed">
                    Ready to transform your ideas into reality? We're here to help you build exceptional software solutions that scale globally.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-color-1 to-color-5 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                        <h6 className="h6 text-white mb-2">Let's Discuss Your Project</h6>
                        <p className="body-2 text-n-4">
                        Share your vision and we'll help you bring it to life with cutting-edge technology and expert craftsmanship.
                        </p>
                    </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-color-2 to-color-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                        <h6 className="h6 text-white mb-2">Global Scale Solutions</h6>
                        <p className="body-2 text-n-4">
                        From startups to enterprise, we design and build software that grows with your business needs.
                        </p>
                    </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-color-3 to-color-4 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                        <h6 className="h6 text-white mb-2">Expert Partnership</h6>
                        <p className="body-2 text-n-4">
                        Work directly with our experienced team from discovery to delivery and beyond.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-n-2 mb-3">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-n-6/50 rounded-lg text-white placeholder-n-4 focus:outline-none focus:ring-2 focus:ring-color-1/50 focus:bg-n-6 transition-all duration-300"
                        placeholder="John Doe"
                    />
                    </div>
                    
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-n-2 mb-3">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-n-6/50 rounded-lg text-white placeholder-n-4 focus:outline-none focus:ring-2 focus:ring-color-1/50 focus:bg-n-6 transition-all duration-300"
                        placeholder="john@company.com"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-n-2 mb-3">
                    Company/Organization
                    </label>
                    <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-n-6/50 rounded-lg text-white placeholder-n-4 focus:outline-none focus:ring-2 focus:ring-color-1/50 focus:bg-n-6 transition-all duration-300"
                    placeholder="Your Company"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-n-2 mb-3">
                    Project Details *
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-n-6/50 rounded-lg text-white placeholder-n-4 focus:outline-none focus:ring-2 focus:ring-color-1/50 focus:bg-n-6 transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your project goals, timeline, and how we can help bring your vision to life..."
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full sm:w-auto">
                    Submit
                    </Button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
  );
};

export default Contact;
