import React from 'react';
import { Mail, Phone, Github, MapPin, ArrowUpRight } from 'lucide-react';

const ModernTemplate = ({ data }) => (
  <div className="w-full p-10 print:p-0 font-['Inter',system-ui,-apple-system,sans-serif]">
    <div className="w-[210mm] min-h-[297mm] mx-auto bg-white px-10 py-8 border print:p-8 print:shadow-none">
      {/* Header */}
      <header className="mb-4">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">{data.name}</h1>
        <div className="flex flex-wrap gap-4 text-sm border-b pb-3 text-gray-700">
          {data.contact.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              {data.contact.phone}
            </span>
          )}
          {data.contact.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {data.contact.location}
            </span>
          )}
          {data.contact.email && (
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-1 hover:text-gray-900">
              <Mail className="w-3.5 h-3.5" />
              {data.contact.email}
            </a>
          )}
          {data.contact.github && (
            <a href={data.contact.github} className="flex items-center gap-1 hover:text-gray-900">
              <Github className="w-3.5 h-3.5" />
              Github
            </a>
          )}
        </div>
      </header>

      {/* Objective */}
      {data.objective && (
        <section className="mb-4 pb-2 border-b">
          <h2 className="text-base font-semibold mb-1.5 uppercase tracking-wide text-gray-900">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">{data.objective}</p>
        </section>
      )}

      {/* Skills */}
      <section className="mb-4 pb-2 border-b">
        <h2 className="text-base font-semibold mb-1.5 uppercase tracking-wide text-gray-900">Technical Skills</h2>
        <div className="space-y-1">
          {Object.entries(data.skillsByCategory || {}).map(([category, skills]) => (
            <div key={category} className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">{category}: </span>
              {Array.isArray(skills) ? skills.join(', ') : skills}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-4 pb-2 border-b">
        <h2 className="text-base font-semibold mb-1.5 uppercase tracking-wide text-gray-900">Technical Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="mb-3 last:mb-0">
            <div className="flex justify-between mb-1">
              <h3 className="font-medium text-sm text-gray-900">{project.title}</h3>
              <div className="flex gap-3">
                {project.githubLink && (
                  <a href={project.githubLink} className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>View</span>
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm mb-1 text-gray-700">{project.description}</p>
            <ul className="list-disc ml-4 text-sm space-y-0.5 text-gray-700">
              {project.highlights?.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
            {project.technologies && (
              <p className="text-sm mt-1 text-gray-700">
                <span className="font-medium text-gray-900">Tech Stack: </span>
                {project.technologies.join(', ')}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Experience */}
      {data.workExperience?.length > 0 && (
        <section className="mb-4 pb-2 border-b">
          <h2 className="text-base font-semibold mb-1.5 uppercase tracking-wide text-gray-900">Internship Experience</h2>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="mb-2.5 last:mb-0">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium text-sm text-gray-900">{exp.title}</h3>
                <span className="text-sm text-gray-600">{exp.duration}</span>
              </div>
              <p className="text-sm mb-1 text-gray-700">{exp.company}, {exp.location}</p>
              <ul className="list-disc ml-4 text-sm space-y-0.5 text-gray-700">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      <section className="mb-4 pb-2 border-b">
        <h2 className="text-base font-semibold mb-1.5 uppercase tracking-wide text-gray-900">Education</h2>
        <div>
          <div className="flex justify-between">
            <h3 className="font-medium text-sm text-gray-900">
              {data.education.degree}{data.education.branch && ` in ${data.education.branch}`}
            </h3>
            <p className="text-sm text-gray-700">{data.education.year}</p>
          </div>
          <p className="text-sm text-gray-700">{data.education.institution}</p>
          {data.education.cgpa && (
            <p className="text-sm text-gray-700">CGPA: {data.education.cgpa}</p>
          )}
        </div>
      </section>

      {/* Certificates */}
      {data.certificates?.length > 0 && (
        <section className="mb-4 pb-2 border-b">
          <h2 className="text-base font-semibold mb-1.5 uppercase tracking-wide text-gray-900">Certifications</h2>
          <ul className="text-sm space-y-0.5 text-gray-700">
            {data.certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  </div>
);

export default ModernTemplate;