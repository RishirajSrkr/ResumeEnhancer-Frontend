import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { Mail, Phone, Github, Linkedin, Calendar, MapPin,SquareArrowOutUpRight } from 'lucide-react';

const MinimalTemplate = ({data}) => {

  return (
    <div className="w-full p-12 print:p-0">
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-white px-12 py-8 border print:p-8 print:shadow-none">
        {/* Header - Full width */}
        <header className="mb-8 pb-4 border-b">
          <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
          <div className="flex flex-wrap gap-6 text-sm">
            {data.contact.email && (
              <a href={`mailto:${data.contact.email}`} className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {data.contact.email}
              </a>
            )}
            {data.contact.phone && (
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                {data.contact.phone}
              </span>
            )}
            {data.contact.github && (
              <span className="flex items-center gap-1">
                <Github className="w-4 h-4" />
                {data.contact.github}
              </span>
            )}
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-1">

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2">Technical Skills</h2>
              <div className="border-t pt-2">
                <div className="space-y-3 text-sm">
                  {Object.entries(data.skillsByCategory || {}).map(([category, skills]) => (
                    <div key={category}>
                      <div className="font-bold mb-1">{category}</div>
                      <div className="text-sm">
                        {Array.isArray(skills) ? skills.join(' • ') : skills}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-bold mb-2">Education</h2>
              <div className="border-t pt-2">
                <h3 className="font-bold text-sm">
                  {data.education.degree}
                  {data.education.branch && ` in ${data.education.branch}`}
                </h3>
                <p className="text-sm mt-1">{data.education.institution}</p>
                <p className="text-sm">{data.education.year}</p>
                {data.education.cgpa && (
                  <p className="text-sm mt-1">CGPA: {data.education.cgpa}</p>
                )}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-2">
            {/* Professional Summary */}
            {data.objective && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-2">Professional Summary</h2>
                <div className="border-t pt-2">
                  <p className="text-sm leading-relaxed">{data.objective}</p>
                </div>
              </section>
            )}

            {/* Experience */}
            {data.workExperience && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-2">Professional Experience</h2>
                <div className="border-t pt-2">
                  {data.workExperience.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-bold text-sm">{exp.title}</h3>
                        <span className="text-sm text-gray-600 flex items-center gap-1">{exp.duration}</span>
                      </div>
                      <p className="text-sm mb-2">{exp.company} • {exp.location}</p>
                      <ul className="list-disc ml-4 text-sm space-y-1">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            <section>
              <h2 className="text-lg font-bold mb-2">Technical Projects</h2>
              <div className="border-t pt-2">
                {data.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-sm">{project.title}</h3>
                      <div className="text-sm">
                        {project.githubLink && (
                          <a href={project.githubLink} className="mr-3">Source</a>
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
                    <p className="text-sm mb-1">{project.description}</p>
                    {project.technologies && (
                      <p className="text-sm">
                        <span className="font-bold">Technologies:</span> {project.technologies.join(', ')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;