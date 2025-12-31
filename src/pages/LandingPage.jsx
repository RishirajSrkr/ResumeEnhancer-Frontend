import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Zap, Shield, Users, ChevronRight, CheckCircle, Star, Download } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const userImages = [
    "./images/user-image-01.jpg",
    "./images/user-image-02.jpg",
    "./images/user-image-03.jpg",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "The AI suggestions perfectly highlighted my skills for tech roles. Received 3 interview requests within a week!",
      avatar:  "./images/user-image-01.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Specialist",
      content: "Completely transformed my generic resume into a targeted application. The difference was night and day.",
      avatar:  "./images/user-image-02.jpg",
      rating: 5
    },
    {
      name: "Jessica Wright",
      role: "Project Manager",
      content: "The ATS optimization feature alone is worth it. Finally getting past those automatic filters!",
      avatar:  "./images/user-image-03.jpg",
      rating: 4
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div className="bg-blue-600 text-white rounded-lg p-2">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-blue-600">FixMyResume</span>
            </motion.div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/upload")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="w-full pt-24 pb-12 sm:pt-32 sm:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 opacity-50 rounded-bl-full -z-10"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full"
            >
              <p className="text-blue-600 text-sm font-medium flex items-center gap-2">
                AI-Powered Resume Builder
                <span className="animate-pulse">✨</span>
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Land More Interviews with AI-Enhanced Resumes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              Upload your resume and job description - our AI will analyze both and create a perfectly tailored resume that matches the specific requirements of your target role.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/upload")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
              >
                Enhance My Resume <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
              onClick={ () => {
                window.open("https://www.linkedin.com/posts/rishiraj-sarkar_tailoring-my-resume-for-every-job-application-activity-7295059754270302208-sd66?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM7fYgBHKBTkJlkvETubpEJUsuDP0tZzQY", "_blank")
              }
            }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Watch Demo <Play className="w-4 h-4" />
              </motion.button>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {userImages.map((image, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img src={image} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">10,000+</span> job seekers trust us
              </p>
            </div>
          </div>
          
          {/* Right side hero image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="./images/header-image-01.jpg" 
                  alt="AI Resume Enhancement" 
                  className="w-full rounded-lg"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">ATS-Optimized</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute top-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium">AI-Enhanced</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-white py-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "93%", label: "Interview Rate" },
              { value: "10,000+", label: "Users" },
              { value: "98%", label: "ATS Pass Rate" },
              { value: "24h", label: "Customer Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4"
              >
                <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose <span className="text-blue-600">FixMyResume</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our platform does more than just formatting - we use AI to optimize every aspect of your resume
          </motion.p>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Zap className="w-6 h-6 text-blue-600" />,
              title: "AI-Powered Optimization",
              description: "Our AI analyzes job descriptions and matches your experience to create the perfect resume for each application."
            },
            {
              icon: <FileText className="w-6 h-6 text-blue-600" />,
              title: "ATS-Friendly Format",
              description: "Ensures your resume passes through Applicant Tracking Systems with optimized formatting and keywords."
            },
            {
              icon: <Shield className="w-6 h-6 text-blue-600" />,
              title: "Data Privacy",
              description: "Your data is encrypted and secure. We never share your information with third parties."
            },
            {
              icon: <Users className="w-6 h-6 text-blue-600" />,
              title: "Industry-Specific Templates",
              description: "Choose from dozens of templates tailored to your industry and role requirements."
            },
            {
              icon: <Download className="w-6 h-6 text-blue-600" />,
              title: "Multiple Export Formats",
              description: "Download your resume as PDF, DOCX, or plain text for different application systems."
            },
            {
              icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
              title: "Skill Gap Analysis",
              description: "Identify missing skills for your target role and get suggestions to close those gaps."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Three simple steps to create your perfect resume
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-100 z-0"></div>
            
            {[
              {
                step: "01",
                title: "Upload Your Resume",
                description: "Upload your existing resume and the job description you're applying for."
              },
              {
                step: "02",
                title: "AI Enhancement",
                description: "Our AI analyzes both documents and optimizes your resume for the specific role."
              },
              {
                step: "03",
                title: "Download & Apply",
                description: "Download your tailored resume and start applying with confidence."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands of job seekers who have improved their career prospects
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="p-12 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Land Your Dream Job?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
              Join thousands of job seekers who have already improved their chances with our AI-powered resume builder.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/upload")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors relative z-10 flex items-center gap-2 mx-auto shadow-lg"
            >
              Start Enhancing My Resume
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white rounded-lg p-2">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl text-blue-600">FixMyResume</span>
              </div>
              <p className="text-gray-600 mb-4">
                AI-powered resume enhancement platform that helps job seekers land more interviews.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Enterprise</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Career Tips</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Templates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} FixMyResume. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add these to your CSS for background patterns
const Play = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default LandingPage;