import React from 'react';
import { ArrowRight, FileText, Zap, Shield, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();

  const userImages = [
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col items-center text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="gradient-border inline-block mb-4 px-4 py-1 bg-blue-50/50 backdrop-blur-sm"
        >
          <p className="text-blue-600 text-sm font-medium flex items-center gap-2">
            AI-Powered Resume Builder
            <span className="animate-pulse-slow">✨</span>
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-8"
        >
          Transform Your Resume with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl px-4 sm:px-8"
        >
          Upload your existing resume and job description - our AI will generate a perfectly tailored resume that matches the role you want.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/upload")}
            className="gradient-border w-full sm:w-auto"
          >
            <div className="px-6 py-3 text-white rounded-lg font-medium flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-border w-full sm:w-auto"
          >
            <div className="px-6 py-3 bg-white rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View Demo
            </div>
          </motion.button>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {[
            {
              icon: <Zap className="w-6 h-6 text-blue-600" />,
              title: "AI-Powered Optimization",
              description: "Our AI analyzes job descriptions and matches your experience to create the perfect resume."
            },
            {
              icon: <FileText className="w-6 h-6 text-blue-600" />,
              title: "ATS-Friendly Format",
              description: "Ensures your resume passes through Applicant Tracking Systems with optimized formatting."
            },
            {
              icon: <Shield className="w-6 h-6 text-blue-600" />,
              title: "Data Privacy",
              description: "Your data is encrypted and secure. We never share your information with third parties."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="gradient-border h-full"
            >
              <div className="p-6 h-full">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-12 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Trusted by Job Seekers</h2>
            <p className="text-gray-600">Join thousands of professionals who've landed their dream jobs</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="flex -space-x-4">
                {userImages.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  >
                    <img src={image} alt="User" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 font-semibold text-sm sm:text-base">10,000+ Users</p>
            </motion.div>
            <div className="h-px w-48 sm:h-16 sm:w-px bg-gray-200 mx-8"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">93%</p>
              <p className="text-sm sm:text-base text-gray-600">Interview Success Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border"
        >
          <div className="p-6 sm:p-12 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 relative z-10">Ready to Transform Your Resume?</h2>
            <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto relative z-10">
              Join thousands of job seekers who have already improved their chances of landing their dream job.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors relative z-10 flex items-center gap-2 mx-auto text-sm sm:text-base"
            >
              Get Started Now
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;