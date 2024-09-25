import frontendIcon from "../assets/images/frontend-icon.png"
import backendIcon from "../assets/images/backend-icon.png"
import toolscon from "../assets/images/tools-icon.png"
import softSkillsIcon from "../assets/images/soft-skills-icon.png"
export const SKILLS = [
    {
        title: "Frontend",
        icon: frontendIcon,
        skills: [
            {skill: "HTML5", percentage: "80%"},
            {skill: "Javascript", percentage: "90%"},
            {skill: "CSS3", percentage: "75%"},
            {skill: "ReactJS", percentage: "80%"},
        ]
    },
    {
        title: "Backend",
        icon: backendIcon,
        skills: [
            {skill: "NodeJs", percentage: "75%"},
            {skill: "ExpressJs", percentage: "80%"},
        ]
    },
    {
        title: "Tools",
        icon: toolscon,
        skills: [
            {skill: "Git & Github", percentage: "85%"},
            {skill: "VS Code", percentage: "75%"},
            {skill: "Responsive Design", percentage: "70%"},
        ]
    },
    {
        title: "Soft Skills",
        icon: softSkillsIcon,
        skills: [
            {skill: "Problem Solving", percentage: "80%"},
            {skill: "Collaboration", percentage: "85%"},
            {skill: "Attention to Detail", percentage: "75%"},
            {skill: "Teamwork", percentage: "80%"},
        ]
    },
]

export const WORK_EXPERIENCE = [
    {
        title: "Junior Software Engineer",
        date: "Aug 2023 - Sep 2024",
        responsibilities: [
            "Developed a customer-facing web application view pages for reports with some added filters based on modern UX/UI principles that increased user experience by 40%.",
            "Implemented HTML email templates utilizing SendGrid for various functionalities including OTP generation, password recovery, registration, and login processes.",
            "Optimized the backend schema and controller to reduce duplicate data which improved database interaction speed by 30%, also resulting in faster data retrieval times.",
            "Implemented JWT- token based authentication mechanism in the backend to improve application security and reduced unauthorized access incidents by 50%.",            
        ]
    },
    {
        title: "MERN Stack Developer Intern",
        date: "Apr 2023 - Aug 2023",
        responsibilities: [
            "Developed an Online Course Platform using the MERN stack (MongoDB, Express, React, Node.js), featuring a dynamic landing page and comprehensive course listings.",
            "Implemented an Admin Dashboard with role-based access control for managing course content.",
            "Created RESTful APIs for course management, user authentication, and admin operations using Express and Node.js.",
            "Integrated MongoDB for storing course details, user profiles, and admin information with Mongoose for schema modeling and data validation. ",            
        ]
    },
]

//SMART

// Designed a Responsive User Interface using React and Bootstrap, ensuring a seamless experience across various devices. 

// Enhanced UI/UX with search and filter options for courses, detailed course pages, and a visually appealing landing page. 

// Utilized React Hooks for state management and Axios for efficient API communication between frontend and backend. 


//MONTBLEU

// Implemented role-based authentication using the JWT token for different roles and implemented role management in the backend. 

// Integrated RESTful APIs and improved data fetching speeds by 12%. 

// Optimized API performance by designing and implementing MSSQL stored procedures, resulting in faster data retrieval and processing. 