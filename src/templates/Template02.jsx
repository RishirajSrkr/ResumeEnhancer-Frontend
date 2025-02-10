import React, { useContext, useEffect } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { IoMail, IoCall, IoLogoGithub } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { IoLocation, IoCalendar, IoRocket, IoSchool, IoLaptop } from "react-icons/io5";


const ATSTemplate = () => {
  const { enhancedResumeData: data } = useContext(ResumeContext);

  const handleSaveAsPdf = () => {
    window.print();
  };


  return (

    <div className="w-[210mm] min-h-[297mm] mx-auto bg-white p-10 shadow-lg print:shadow-none font-serif">
      <header className="space-y-2 mb-4 border-b pb-4">

      <h1 className="text-2xl font-bold tracking-tight text-gray-900">{data.name}</h1>

        <div className="flex flex-wrap gap-3 text-xs text-gray-600">
          {data.contact.email && (
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors target='_blank">
              <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <IoMail size={14} />
              </span>
              {data.contact.email}
            </a>
          )}

          {data.contact.github && (
            <a href={data.contact.github} className="flex items-center gap-1.5  hover:text-blue-600" target='_blank'>
              <span className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <IoLogoGithub size={14} />
              </span>
              {data.contact.github}
            </a>
          )}

          {data.contact.phone && (
            <span className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <IoCall size={14} />
              </span>
              {data.contact.phone}
            </span>
          )}

        </div>

        <p className="text-gray-600 text-xs leading-snug">{data.objective}</p>

      </header>

      <section className="mb-4">
        <h2 className="text-base font-bold mb-2 text-gray-800 flex items-center gap-1.5 pb-1 border-b">
          <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
            <IoLaptop size={14} />
          </span>
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {data.skills.map((skill, index) => (
            <span key={index} className="px-2 py-0.5 bg-gray-50 text-gray-700 rounded text-xs border border-gray-100">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {
        data.workExperience && <section className="mb-4">
          <h2 className="text-base font-bold mb-2 text-gray-800 flex items-center gap-1.5 pb-1 border-b">
            <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <IoCalendar size={14} />
            </span>
            Professional Experience
          </h2>
          <div className="space-y-3">
            {data.workExperience?.map((exp, index) => (
              <div key={index} className="p-2 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">{exp.title}</h3>
                    <p className="text-xs text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <ul className="list-disc ml-4 text-gray-600 space-y-0.5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-xs leading-tight">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      }



      <section className="mb-4">
        <h2 className="text-base font-bold mb-2 text-gray-800 flex items-center gap-1.5 pb-1 border-b">
          <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
            <IoRocket size={14} />
          </span>
          Technical Projects
        </h2>
        <div className="grid gap-3">
          {data.projects.map((project, index) => (
            <div key={index} className="p-2 rounded-lg border border-gray-100">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-sm text-gray-900">{project.title}</h3>
                <div className="flex gap-1.5">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                      <FaExternalLinkAlt size={10} />
                      Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full">
                      <FaGithub size={10} />
                      Source
                    </a>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-1 leading-tight">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech_stack.map((tech, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-bold mb-2 text-gray-800 flex items-center gap-1.5 pb-1 border-b">
          <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-500">
            <IoSchool size={14} />
          </span>
          Education
        </h2>
        <div className="p-2 rounded-lg border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-sm text-gray-900">
                {data.education.degree} {data.education.branch && `in ${data.education.branch}`}
              </h3>
              <p className="text-xs text-gray-600">{data.education.institution}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-gray-900">{data.education.year}</p>
              {data.education.cgpa && <p className="text-xs text-gray-600">CGPA: {data.education.cgpa}</p>}
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={() => window.print()}
        className="mt-4 px-4 py-1.5 fixed bottom-20 left-1/2 -translate-x-1/2 bg-blue-600 shadow-2xl shadow-blue-950 text-white text-sm rounded hover:bg-blue-700 transition-colors print:hidden">
        Save as PDF
      </button>
    </div>
  );
};

export default ATSTemplate;