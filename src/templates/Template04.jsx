import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { 
  TbMail, 
  TbPhone, 
  TbBrandGithub, 
  TbBrandLinkedin,
  TbExternalLink,
  TbCode,
  TbSchool,
  TbBriefcase,
  TbTrophy,
  TbUser,
  TbBuildingSkyscraper,
  TbCalendar
} from 'react-icons/tb';

const CreativeTemplate = () => {
  const { enhancedResumeData: data } = useContext(ResumeContext);

  const handleSaveAsPdf = () => {
    window.print();
  };

  return (
    <>
      <div className="w-[210mm] h-[297mm] bg-white mx-auto shadow-lg relative print:shadow-none">
        {/* Header with diagonal design */}
        <div className="relative h-44 bg-purple-700 overflow-hidden">
          <div className="absolute inset-0 bg-purple-600 transform -skew-y-6 origin-top-left"></div>
          <div className="relative z-10 p-8 text-white">
            <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
            <div className="flex flex-wrap gap-6 text-base">
              <div className="flex items-center gap-2">
                <TbMail className="text-purple-200" size={18} />
                <a href={`mailto:${data.contact.email}`} className="hover:text-purple-200">
                  {data.contact.email}
                </a>
              </div>
              {data.contact.phone && (
                <div className="flex items-center gap-2">
                  <TbPhone className="text-purple-200" size={18} />
                  {data.contact.phone}
                </div>
              )}
              {data.contact.linkedin && (
                <div className="flex items-center gap-2">
                  <TbBrandLinkedin className="text-purple-200" size={18} />
                  <a 
                    href={data.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-200"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Summary */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <TbUser className="text-purple-600 text-lg" />
              <h2 className="text-lg font-semibold text-gray-800">Professional Summary</h2>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">{data.objective}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-1 space-y-6">
              {/* Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TbCode className="text-purple-600 text-lg" />
                  <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TbSchool className="text-purple-600 text-lg" />
                  <h2 className="text-lg font-semibold text-gray-800">Education</h2>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-medium text-gray-800 text-base">
                    {data.education.degree} {data.education.branch && `in ${data.education.branch}`}
                  </div>
                  <div className="text-sm text-gray-600">{data.education.institution}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {data.education.year}
                    {data.education.cgpa && (
                      <div className="mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full inline-block">
                        CGPA: {data.education.cgpa}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              {data.achievements?.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TbTrophy className="text-purple-600 text-lg" />
                    <h2 className="text-lg font-semibold text-gray-800">Achievements</h2>
                  </div>
                  <ul className="space-y-2">
                    {data.achievements.slice(0, 4).map((achievement, index) => (
                      <li 
                        key={index}
                        className="bg-purple-50 p-3 rounded-lg text-sm text-gray-700"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="col-span-2 space-y-6">
              {/* Projects */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TbCode className="text-purple-600 text-lg" />
                  <h2 className="text-lg font-semibold text-gray-800">Technical Projects</h2>
                </div>
                <div className="space-y-4">
                  {data.projects.slice(0, 3).map((project, index) => (
                    <div 
                      key={index} 
                      className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800 text-base">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-700"
                            >
                              <TbExternalLink size={18} />
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-gray-800"
                            >
                              <TbBrandGithub size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-sm px-2 py-1 bg-white text-purple-600 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              {data.workExperience?.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TbBriefcase className="text-purple-600 text-lg" />
                    <h2 className="text-lg font-semibold text-gray-800">Professional Experience</h2>
                  </div>
                  <div className="space-y-4">
                    {data.workExperience.map((exp, index) => (
                      <div 
                        key={index} 
                        className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400"
                      >
                        <div className="flex justify-between mb-2">
                          <div>
                            <div className="font-medium text-gray-800 text-base flex items-center gap-2">
                              <TbBuildingSkyscraper className="text-purple-500" size={16} />
                              {exp.title} at {exp.company}
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                              <TbCalendar className="text-purple-500" size={16} />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          {exp.responsibilities.slice(0, 3).map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 text-center print:hidden">
        <button
          onClick={handleSaveAsPdf}
          className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Save as PDF
        </button>
      </div>
    </>
  );
};

export default CreativeTemplate;