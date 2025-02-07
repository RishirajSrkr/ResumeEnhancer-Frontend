import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Template01 from './templates/template01';

const ResumePreviewDownload = () => {
    const dummyData = {
        "name": "RISHIRAJ SARKAR",
        "contact": {
          "email": "rishirajsarkar.jpg@gmail.com",
          "phone": "+91 9775139179"
        },
        "objective": "Positive, upbeat team player with knack for problem-solving and strong understanding of Java programming principles. Proficient in object-oriented programming and familiar with frameworks such as Spring and Hibernate, as well as version control systems like Git. Committed to leveraging technical skills to develop high-quality, efficient software solutions.",
        "projects": [
          {
            "title": "BitByBit",
            "description": "Developed a feature-rich e-learning platform for coding students with course creation, enrollment, and voting systems. Integrated role-based JWT authentication, Redis for voting cooldowns, and MongoDB. Built with Spring Boot backend and a React frontend for seamless user experience.",
            "link": "https://rishiraj-bitbybit.netlify.app/",
            "githubLink": "https://github.com/RishirajSrkr"
          },
          {
            "title": "Real-Time Messaging Feature",
            "description": "Developed a robust real-time messaging system, enabling instant communication through text and image sharing. Leveraged WebSockets for seamless, bi-directional communication between users, with MongoDB as the database for message persistence.",
            "link": "https://www.loom.com/share/1199ec233d024f2bab1dffc73250f0cb?sid=e426a349-85cc-40b9-9414-0d607875f277",
            "githubLink": "https://github.com/RishirajSrkr"
          }
        ],
        "skills": [
          "Java",
          "Spring Boot",
          "Spring Security",
          "RESTful APIs",
          "SQL",
          "Maven",
          "Core Java",
          "Spring MVC",
          "Kafka",
          "Docker"
        ],
        "workExperience": [
          {
            "title": "Junior Java Developer - Intern",
            "company": "Texvo Developer",
            "duration": "Jan 2024 - Jun 2024",
            "responsibilities": [
              "Gained experience in Spring Boot, Spring Security, Hibernate, and RESTful API development.",
              "Worked with Redis for caching and JUnit for unit testing.",
              "Contributed to back-end development and system optimization using these technologies.",
              "Developed high-performance Java-based applications using Core Java and Spring Boot."
            ]
          }
        ],
        "education": {
          "degree": "Bachelor of Technology in Computer Science and Engineering",
          "institution": "Siliguri Institute of Technology",
          "year": "2021-2024"
        },
        "achievements": [
          "Completed a MySQL course from Prep Insta in August 2024.",
          "Developed a feature-rich e-learning platform and a real-time messaging system.",
          "Maintained a CGPA of 9.00 in Bachelor of Technology in Computer Science and Engineering."
        ]
      }

  return (
    <div>
      <h1>Resume Preview</h1>

      {/* PDF Preview */}
      <div style={{ height: 500 }}>
        <PDFViewer width="100%" height="100%">
          <Template01 data={dummyData} />
        </PDFViewer>
      </div>

      {/* Download Link */}
      <div>
        <PDFDownloadLink
          document={<Template01 data={dummyData} />}
          fileName="resume.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download Resume PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ResumePreviewDownload;
