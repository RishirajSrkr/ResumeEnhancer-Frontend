import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { 
  RiMailLine, 
  RiPhoneLine, 
  RiGithubLine, 
  RiLinkedinBoxLine,
  RiExternalLinkLine,
  RiCodeSSlashLine,
  RiUserLine,
  RiBuilding4Line,
  RiCalendarLine,
  RiGraduationCapLine,
  RiMedalLine,
  RiTerminalBoxLine,
  RiBriefcase2Line
} from 'react-icons/ri';

const ModernTemplate = () => {
  const { enhancedResumeData: data } = useContext(ResumeContext);

  const handleSaveAsPdf = () => {
    window.print();
  };

  return (
    <>
      <div className="w-[210mm] h-[297mm] bg-white mx-auto shadow-lg relative print:shadow-none overflow-hidden">
        {/* Header - Compact design */}
        <div className="bg-blue-600 text-white py-6 px-8">
          <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <RiMailLine className="text-blue-200" />
              <a href={`mailto:${data.contact.email}`} className="hover:text-blue-200">
                {data.contact.email}
              </a>
            </div>
            {data.contact.phone && (
              <div className="flex items-center gap-1">
                <RiPhoneLine className="text-blue-200" />
                {data.contact.phone}
              </div>
            )}
            {data.contact.linkedin && (
              <div className="flex items-center gap-1">
                <RiLinkedinBoxLine className="text-blue-200" />
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                  LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="p-8 max-h-[calc(297mm-8rem)] overflow-y-auto">
          {/* Summary */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <RiUserLine className="text-blue-600 text-lg" />
              <h2 className="text-lg font-semibold text-gray-800">Professional Summary</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{data.objective}</p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <RiTerminalBoxLine className="text-blue-600 text-lg" />
              <h2 className="text-lg font-semibold text-gray-800">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <RiCodeSSlashLine className="text-blue-600 text-lg" />
              <h2 className="text-lg font-semibold text-gray-800">Technical Projects</h2>
            </div>
            <div className="space-y-4">
              {data.projects.slice(0, 3).map((project, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800 text-base">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600"
                        >
                          <RiExternalLinkLine size={14} />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600"
                        >
                          <RiGithubLine size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 my-1 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, i) => (
                      <span key={i} className="text-sm text-gray-500">
                        {i > 0 && "•"} {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          {data.workExperience?.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <RiBriefcase2Line className="text-blue-600 text-lg" />
                <h2 className="text-lg font-semibold text-gray-800">Professional Experience</h2>
              </div>
              <div className="space-y-4">
                {data.workExperience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <div className="flex justify-between mb-1">
                      <div>
                        <div className="font-medium text-gray-800 text-base flex items-center gap-1">
                          <RiBuilding4Line className="text-gray-500" size={14} />
                          {exp.title} at {exp.company}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <RiCalendarLine className="text-gray-500" size={14} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc pl-4 text-sm text-gray-600 mt-2 space-y-1">
                      {exp.responsibilities.slice(0, 3).map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-6">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <RiGraduationCapLine className="text-blue-600 text-lg" />
                <h2 className="text-lg font-semibold text-gray-800">Education</h2>
              </div>
              <div className="border-l-2 border-blue-200 pl-4">
                <div className="font-medium text-gray-800 text-base">
                  {data.education.degree} {data.education.branch && `in ${data.education.branch}`}
                </div>
                <div className="text-sm text-gray-600">{data.education.institution}</div>
                <div className="text-sm text-gray-500">
                  {data.education.year}
                  {data.education.cgpa && ` • CGPA: ${data.education.cgpa}`}
                </div>
              </div>
            </div>

            {/* Achievements */}
            {data.achievements?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <RiMedalLine className="text-blue-600 text-lg" />
                  <h2 className="text-lg font-semibold text-gray-800">Achievements</h2>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                    {data.achievements.slice(0, 3).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="my-4 text-center print:hidden">
        <button
          onClick={handleSaveAsPdf}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Save as PDF
        </button>
      </div>
    </>
  );
};

export default ModernTemplate;