import { createContext, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utilities/getFromLocalStorage";

const LOCAL_STORAGE_KEY = "enhancedResumeData";

const dummyData = {
    "name": "RISHIRAJ SARKAR",
    "contact": {
      "email": "rishirajsarkar.jpg@gmail.com",
      "phone": "+91 9775139179",
      "github": "https://github.com/RishirajSrkr",
      "linkedin": null
    },
    "objective": "Aspiring Junior Java Developer with hands-on experience in Java, Spring Boot, RESTful API Development, and Microservices. Seeking to contribute to scalable software solutions in the Insurance & Healthcare, technology, and Banking industry within a dynamic organization. Familiar with Kubernetes and Maven.",
    "skillsByCategory": {
      "Programming Languages": [
        "Java",
        "JavaScript",
        "SQL"
      ],
      "Frameworks & Technologies": [
        "Spring Boot",
        "RESTful APIs",
        "Microservices",
        "Kubernetes",
        "Maven"
      ],
      "Databases": [
        "MySQL",
        "MongoDB",
        "Redis"
      ],
      "Testing & DevOps": [
        "JUnit",
        "Git",
        "Docker",
        "AWS"
      ]
    },
    "projects": [
      {
        "title": "BitByBit - E-Learning Platform",
        "description": "Developed a feature-rich e-learning platform for coding students, incorporating course creation, enrollment, and voting systems. Implemented role-based JWT authentication for secure user access. Designed Redis-based voting cooldowns to simulate high-traffic scenarios and optimized MongoDB queries to enhance API response times. Showcased skills in backend API Automation.",
        "tech_stack": [
          "Spring Boot",
          "React.js",
          "MongoDB",
          "Redis",
          "JWT"
        ],
        "link": "https://rishiraj-bitbybit.netlify.app/",
        "githubLink": null
      },
      {
        "title": "Real-Time Messaging Feature",
        "description": "Developed a real-time messaging system enabling instant text and image communication using WebSocket-based bi-directional communication. Designed a scalable MongoDB schema for message persistence and rapid retrieval. Tested and ensured system reliability under simulated concurrent user scenarios, demonstrating API development skills.",
        "tech_stack": [
          "React.js",
          "Node.js",
          "WebSockets",
          "MongoDB"
        ],
        "link": "https://www.loom.com/share/1199ec233d024f2bab1dffc73250f0cb?sid=e426a349-85cc-40b9-9414-0d607875f277",
        "githubLink": null
      }
    ],
    "workExperience": [
      {
        "title": "Junior Java Developer - Intern",
        "company": "Texvo Developer",
        "duration": "Aug 2024 - Oct 2024",
        "responsibilities": [
          "Gained practical experience in Spring Boot, Spring Security, Hibernate, and RESTful API development, contributing to the development of Java-based applications.",
          "Utilized Redis for caching strategies and JUnit for rigorous unit testing, ensuring high-quality code and application performance.",
          "Contributed to back-end development and system optimization, participating in code reviews and troubleshooting activities."
        ]
      }
    ],
    "education": {
      "degree": "Bachelor of Technology",
      "branch": "Computer Science and Engineering",
      "institution": "Siliguri Institute of Technology",
      "year": "2021 – 2024",
      "percentage": null,
      "cgpa": 9.08
    },
    "achievements": [
      "Developed and maintained Java code using Spring Boot and Microservices architecture during internship.",
      "Implemented API automation and contributed to RESTful API development, enhancing system performance.",
      "Utilized Kubernetes and Maven for application deployment and build automation.",
      "Demonstrated excellent communication and teamwork skills in collaborative projects, contributing to high-quality solutions."
    ]
  }





const ResumeContext = createContext();


function ResumeContextProvider({ children }) {

    const initialData = getFromLocalStorage(LOCAL_STORAGE_KEY, dummyData);

    const [enhancedResumeData, setEnhancedResumeData] = useState(initialData);

    const updateResumeData = (data) => {
        setEnhancedResumeData(data);
        saveToLocalStorage(LOCAL_STORAGE_KEY, data);
    };

    return <ResumeContext.Provider value={{ enhancedResumeData, setEnhancedResumeData: updateResumeData }}>
        {children}
    </ResumeContext.Provider>
}

export { ResumeContextProvider, ResumeContext };