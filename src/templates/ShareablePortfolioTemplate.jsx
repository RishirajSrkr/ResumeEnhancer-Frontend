import React, { useContext, useEffect, useState } from 'react';
import { getResume } from '../utilities/getResumeFromDb';
import { Mail, Github, Linkedin, Globe, ExternalLink, Award, Briefcase, GraduationCap, Code, ArrowRight, Terminal } from 'lucide-react';
import { useParams } from 'react-router';
import { ResumeContext } from '../context/ResumeContext';
import { motion } from 'framer-motion';

const ShareablePortfolioTemplate = () => {
  const { username } = useParams();
  const { enhancedResumeData: data } = useContext(ResumeContext);
  const [fetchedResumeData, setFetchedResumeData] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      if (username) {
        try {
          const fetchedData = await getResume(username);
          setFetchedResumeData(fetchedData.resumeData || null);
        } catch (error) {
          console.error('Error fetching resume data:', error);
        }
      } else {
        setFetchedResumeData(data);
      }
    };
    fetchResume();
  }, [username, data]);

  if (!fetchedResumeData) {
    return (
      <div className='w-full min-h-screen flex items-center justify-center bg-gray-900'>
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-48 bg-gray-800 rounded"></div>
          <div className="h-4 w-32 bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden md:px-60">
      <div className="fixed inset-0 grid-pattern opacity-20"></div>
      
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90rem] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch"
          >
            {/* Terminal-like intro */}
            <div className="gradient-border w-full lg:w-3/5">
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm font-mono">portfolio.sh</span>
                </div>
                <div className="font-mono space-y-2">
                  <p className="text-green-400">$ whoami</p>
                  <p className="text-blue-300 text-xl sm:text-2xl font-bold break-words">{fetchedResumeData?.name}</p>
                  <p className="text-green-400 mt-4">$ cat description.txt</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{fetchedResumeData?.objective}</p>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="w-full lg:w-2/5 flex flex-col gap-3 sm:gap-2 md:translate-y-4">
              {fetchedResumeData?.contact.email && (
                <motion.a
                  href={`mailto:${fetchedResumeData?.contact.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border"
                >
                  <div className="px-4 sm:px-6 py-3 flex items-center gap-3 overflow-hidden">
                    <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                    <span className="text-sm truncate">{fetchedResumeData?.contact.email}</span>
                  </div>
                </motion.a>
              )}
              {fetchedResumeData?.contact.github && (
                <motion.a
                  href={fetchedResumeData?.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border"
                >
                  <div className="px-4 sm:px-6 py-3 flex items-center gap-3">
                    <Github className="w-5 h-5 flex-shrink-0 text-blue-400" />
                    <span className="text-sm">GitHub Profile</span>
                  </div>
                </motion.a>
              )}
              {fetchedResumeData?.contact.linkedin && (
                <motion.a
                  href={fetchedResumeData?.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border"
                >
                  <div className="px-4 sm:px-6 py-3 flex items-center gap-3">
                    <Linkedin className="w-5 h-5 flex-shrink-0 text-blue-400" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </div>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
        {/* Skills Section */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-glow">Technical Stack</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(fetchedResumeData?.skillsByCategory || {}).map(([category, skills]) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border h-full"
                >
                  <div className="p-4 sm:p-5 h-full">
                    <h3 className="text-blue-400 font-mono mb-3 sm:mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(skills) && skills.map(skill => (
                        <span
                          key={skill}
                          className="px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs sm:text-sm font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-glow">Experience</h2>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {fetchedResumeData?.workExperience?.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="gradient-border"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-gray-400 mt-1">
                          <Globe className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{exp.company}</span>
                          {exp.location && (
                            <>
                              <span className="text-gray-600 hidden sm:inline">•</span>
                              <span className="text-sm block sm:inline">{exp.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-blue-400 font-mono">{exp.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-gray-300 group"
                        >
                          <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-glow">Projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {fetchedResumeData?.projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="gradient-border h-full"
                >
                  <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <div className="flex gap-3 flex-shrink-0">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs sm:text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold text-glow">Education</h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="gradient-border"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {fetchedResumeData?.education.degree}{' '}
                      {fetchedResumeData?.education.branch && (
                        <span className="text-gray-400 block sm:inline">in {fetchedResumeData?.education.branch}</span>
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{fetchedResumeData?.education.institution}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-blue-400 font-mono">{fetchedResumeData?.education.year}</span>
                    {fetchedResumeData?.education.cgpa && (
                      <p className="text-gray-400 text-sm mt-1">CGPA: {fetchedResumeData.education.cgpa}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ShareablePortfolioTemplate;