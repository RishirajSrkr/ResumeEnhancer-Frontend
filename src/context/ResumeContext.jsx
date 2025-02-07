import { createContext, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utilities/getFromLocalStorage";

const LOCAL_STORAGE_KEY = "enhancedResumeData";

const dummyData = {
    name: "John Doe",
    contact: {
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
    },
    objective: "Aspiring software developer passionate about creating efficient and scalable web applications, with a strong foundation in full-stack development.",
    projects: [
        {
            title: "E-Commerce Platform",
            link: "https://demo-ecommerce.com",
            githubLink: "https://github.com/johndoe/ecommerce-platform",
            description: "Developed a full-stack e-commerce platform with user authentication, product listing, and a payment gateway integration.",
            tech_stack: ["React JS, Node JS, Express, Mongo DB, JWT"]

        },
        {
            title: "Real-Time Chat Application",
            link: "https://chatapp-demo.com",
            githubLink: "https://github.com/johndoe/chat-app",
            description: "Implemented a real-time chat application with WebSocket for seamless communication, including text and image sharing.",
            tech_stack: ["React JS, Node JS, Express, Mongo DB, JWT"]
        },
    ],
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "MongoDB", "Express.js", "Git", "REST APIs"],

    experience: [
        {
            title: "Web Developer Intern",
            company: "Tech Solutions",
            period: "Jun 2023 - Dec 2023",
            details: [
                "Built and maintained responsive web applications using React and Node.js.",
                "Collaborated with the design team to improve UI/UX.",
                "Integrated third-party APIs to enhance application functionality.",
            ],
        },
    ],
    education: {
        degree: "Bachelor of Technology",
        branch: "Computer Science and Engineering",
        institution: "Tech University",
        year: "2021 - 2024",
        CGPA: "9.00"

    },
};



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