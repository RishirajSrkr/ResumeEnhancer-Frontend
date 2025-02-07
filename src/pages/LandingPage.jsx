import React from 'react';
import { ArrowRight, FileText, Zap, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router';

const LandingPage = () => {

    const navigate = useNavigate();

    const userImages = [
     "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
     "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
     "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-32">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full">
          <p className="text-blue-600 text-sm font-medium">AI-Powered Resume Builder</p>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Transform Your Resume with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Upload your existing resume and job description - our AI will generate a perfectly tailored resume that matches the role you want.
        </p>
        <div className="flex gap-4">
          <button onClick={() => navigate("/upload")} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium hover:border-gray-300 transition">
            View Demo
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Optimization</h3>
            <p className="text-gray-600">Our AI analyzes job descriptions and matches your experience to create the perfect resume.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ATS-Friendly Format</h3>
            <p className="text-gray-600">Ensures your resume passes through Applicant Tracking Systems with optimized formatting.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Privacy</h3>
            <p className="text-gray-600">Your data is encrypted and secure. We never share your information with third parties.</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Job Seekers</h2>
            <p className="text-gray-600">Join thousands of professionals who've landed their dream jobs</p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="flex -space-x-4">
                {userImages.map((image, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                    <img src={image} className='rounded-full object-cover w-10 h-10'/>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-semibold">10,000+ Users</p>
            </div>
            <div className="h-16 w-px bg-gray-200 mx-8"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">93%</p>
              <p className="text-gray-600">Interview Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Resume?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have already improved their chances of landing their dream job.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;