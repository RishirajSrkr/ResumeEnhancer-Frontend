import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Globe, SquareArrowOutUpRight } from 'lucide-react';
import { div } from 'framer-motion/client';

const ATSTemplate = ( {data}) => {

  return (


    <div className='w-full  p-12 print:p-0'>
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-white px-12 py-8  border  print:shadow-none font-sans text-gray-900">
        {/* Header Section - Centered */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{data.name}</h1>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            {data.contact.email && (
              <a href={`mailto:${data.contact.email}`} className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                {data.contact.email}
              </a>
            )}
            {data.contact.phone && (
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                {data.contact.phone}
              </span>
            )}
            {data.contact.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {data.contact.location}
              </span>
            )}
            {data.contact.github && (
              <a href={data.contact.github} className="flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {data.contact.linkedin && (
              <a href={data.contact.linkedin} className="flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
          </div>
        </header>

        {/* Professional Summary */}
        {data.objective && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-gray-800">{data.objective}</p>
          </section>
        )}

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-1 text-sm">
            {Object.entries(data.skillsByCategory || {}).map(([category, skills]) => (
              <div key={category} className="flex items-start">
                <span className="font-bold text-gray-700 w-60">{category}:</span>
                <span className="text-gray-800 flex-1">
                  {Array.isArray(skills) ? skills.map((skill, index) => (
                    <React.Fragment key={skill}>
                      <span className="font-medium">{skill}</span>
                      {index < skills.length - 1 && <span className="text-gray-400 mx-1.5">•</span>}
                    </React.Fragment>
                  )) : skills}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        {data.workExperience && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300">Professional Experience</h2>
            <div className="space-y-4">
              {data.workExperience.map((exp, index) => (
                <div key={index}>
                  <div className="mb-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                      <Globe className="w-2.5 h-2.5" />
                      <span className="italic font-medium">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                    <ul className="list-disc ml-4 space-y-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-gray-800 leading-relaxed">
                          {item.split(/\b/).map((word, j) => {
                            const isImportant = /^(developed|designed|implemented|managed|led|created|optimized|improved|reduced|increased|achieved|deployed|architected|built|scaled|mentored)\b/i.test(word);
                            return isImportant ?
                              <span key={j} className="font-medium">{word}</span> :
                              <span key={j}>{word}</span>
                          })}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300">Technical Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-base font-bold text-gray-900">{project.title}</h3>
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 flex items-center gap-1">
                        <Github className="w-2.5 h-2.5" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 flex items-center gap-1">
                        <SquareArrowOutUpRight className="w-2.5 h-2.5" />
                        <span className="text-sm">View</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-800 mb-2">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-50 text-sm font-medium text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-300">Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-base font-bold text-gray-900">
                {data.education.degree} {data.education.branch && <span className="italic">{`in ${data.education.branch}`}</span>}
              </h3>
              <span className="text-sm text-gray-600">{data.education.year}</span>
            </div>
            <p className="text-sm text-gray-800 italic mb-1">{data.education.institution}</p>
            {data.education.cgpa && (
              <p className="text-sm text-gray-700">CGPA: <span className="font-medium">{data.education.cgpa}</span></p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ATSTemplate;