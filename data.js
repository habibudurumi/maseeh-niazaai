import { BsPen, BsPrescription, BsServer, BsWordpress } from "react-icons/bs"
import { FaPhoneAlt, FaEnvelope, FaAward, FaCss3, FaFigma, FaGit, FaGithub, FaGraduationCap, FaHtml5, FaJs, FaLaravel, FaPhp, FaPython, FaReact } from "react-icons/fa"
import { SiBootstrap, SiNextdotjs, SiNodedotjs, SiTailwindcss } from "react-icons/si"

//menu

export const links = [
   
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'projects',
        path: '/projects',
    },
    {
        name: 'freelance',
        path: '/freelance',
    },
    {
        name: 'contact',
        path: '/contact',
    }
];

// services contents

export const services = [
  {
    num: "01",
    title: 'Web Development',
    description: "As a developer I leverage the latest technologies and industry best practices to bring your ideas to life. Whether you're in need of a responsive website, a powerful web application, or a seamless e-commerce platform, I am dedicated to delivering solutions that not only meet but exceed your expectations.",
    href: '',
    icon: <BsServer/>
  },
  {
    num: "02",
    title: 'UI/UX Design',
    description: "As a developer I leverage the latest technologies and industry best practices to bring your ideas to life. Whether you're in need of a responsive website, a powerful web application, or a seamless e-commerce platform, I am dedicated to delivering solutions that not only meet but exceed your expectations.",
    href: '',
    icon: <BsPen/>
  },
  {
    num: "03",
    title: 'WordPress',
    description: "Transform your WordPress site into a visually stunning masterpiece with our dedicated web design services. Our designers are adept at creating bespoke themes and layouts that not only align with your brand identity but also enhance the user experience. From choosing the right color schemes to crafting intuitive navigation, we focus on the details that make your WordPress site stand out.",
    href: '',
    icon:<BsWordpress/>
  },
  {
    num: "04",
    title: 'Web Consultation',
    description: "Navigate the complexities of the digital landscape with our expert web consultation services. I provide personalized advice tailored to your unique goals. Whether you're looking to revamp your existing website, optimize for search engines, or explore new avenues for online growth.",
    href: '',
    icon: <BsPrescription/>
  },
]

// project content
export const projects = [
  {
    name: "laboratory management system",
    category: "Medical Industry",
    year: "2018",
    client: "LAB NEXIS",
    description: 'The Laboratory Management Information System (LIMS) is tailored to streamline the intricacies of laboratory operations. This comprehensive system efficiently manages Standard Operating Procedures (SOPs) and oversees payment and receptionist tasks. It excels in facilitating the seamless booking of test reservations, including normal and package reservations, while also adeptly handling contract management, patient information, and medical tests. The system goes a step further by managing antibiotics and cultures, ensuring precise sample collection management, and enabling batch operations. Integration with PCR machines enhances efficiency, and robust reporting and live analytics capabilities provide real-time insights into laboratory activities. The Laboratory Management Information System stands as a pivotal tool in elevating the precision and efficiency of laboratory processes.',
    image: '/assets/projects/lab/login_page.JPG',
    images: ["/assets/projects/lab/login_page.JPG", "/assets/projects/lab/packages.JPG", "/assets/projects/lab/reservation.JPG", "/assets/projects/lab/sample_collection.JPG", "/assets/projects/lab/scanning%20sample.JPG"],
    slug: "laboratory-management-system"
  },
  {
    name: "package inforamation system",
    category: "Cartboard Making Industry",
    client: "Baheer Group",
    description: 'Elevate your logistics efficiency with our comprehensive Package Management Information System. Seamlessly integrating customer order processing, cardboard calculation, order placement, and robust job and payment management, our system is the cornerstone of streamlined packaging operations. Accurate cardboard calculations ensure cost-effective packaging solutions, while the user-friendly interface simplifies order placement for swift and error-free transactions. Tailor orders to diverse customer needs, enhancing satisfaction and loyalty. The system empowers businesses with dynamic cardboard calculations, optimizing packaging costs in real-time. An intuitive interface ensures seamless order placement, minimizing errors and accelerating transaction times. Comprehensive job management features optimize workflow, ensuring timely order fulfillment and reducing operational bottlenecks. Robust payment management guarantees secure and seamless transactions, fostering trust and reliability.',
    image: '/assets/projects/pkg/LOGIN%20PAGE.JPG',
    images: ["/assets/projects/pkg/customer_list.PNG","/assets/projects/pkg/customer_list.PNG","/assets/projects/pkg/main_dashboard_small.png","/assets/projects/pkg/pkg-design-dashboard.JPG", "/assets/projects/pkg/pkg-production-dashboard.PNG"],
    slug: 'package-inforamtion-system'
  },
  {
    name: "esawad educational platform",
    category: "Education",
    client: "Haris Quraishi",
    description: "Esawad Educational Platform emerged as a strategic response to the educational disruptions caused by the pandemic, aiming to facilitate continuous learning from the safety of one's home. The platform is intricately designed to deliver a seamless and comprehensive remote learning experience, focusing on accessibility and interactivity. Esawad Educational Platform represents an innovative approach to educational technology, providing a secure, engaging, and effective online learning environment for both students and educators.",
    image: '/assets/projects/esward/login.JPG',
    images:["/assets/projects/esward/authorization.JPG","/assets/projects/esward/course%20dashboard.JPG","/assets/projects/esward/course-list.JPG", "/assets/projects/esward/impacts-section.JPG", "/assets/projects/esward/services.JPG", "/assets/projects/esward/website_1.JPG", "/assets/projects/esward/website_2.JPG", "/assets/projects/esward/why_section.JPG"],
    slug: 'esawad-educational-platform'
  },
  {
    name: "press management system",
    category: "Press Industry",
    client: "Baheer Group",
    description: "Printing Press Management Information System or PMIS is a state-of-the-art and cutting edge Management Information System, a comprehensive solution seamlessly integrating key features for optimal efficiency. From centralized Customer & Order Management to real-time Product Order Calculation and Management, our system ensures a streamlined workflow. Automated Product and Customer Follow-Up mechanisms enhance client relationships, while robust support for Standard Operating Procedures (SOP) guarantees adherence to industry standards. Track and manage product designs, oversee the entire production lifecycle with Production Support, and optimize inventory with Warehouse Management. Ensure data security through Authentication & Authorization controls, and extend functionalities with Quality Control Integration, Supplier Relationship Management, and Real-Time Analytics for informed decision-making. With mobile accessibility, stay connected to your printing press operations on the go. Elevate your productivity, quality, and customer satisfaction with our Printing Press Management Information System.",
    image: '/assets/projects/basheer%20grp/hr_login.PNG',
    images: ['/assets/projects/basheer%20grp/1%20-%20printing%20press%20management%20system.PNG', '/public/assets/projects/basheer%20grp/2-%20production%20management%20system.PNG', "/assets/projects/basheer%20grp/6.%20baheer%20dashboard%20-%20pp.PNG", '/assets/projects/basheer%20grp/pp_design_dashboard.JPG', "/assets/projects/basheer%20grp/pp_stock.JPG"],
    slug:"press-management-system"
  },
  {
    name: "compToner shop",
    category: "Branding, Online Shop",
    client: "CompuToner Shop",
    description: "The Computer and Printer Online Shop Store Management System optimizes retail operations for computer and printer products. It features a user-friendly platform for online ordering, secure payment processing, and real-time inventory management. Customers can create personalized accounts, track orders, and provide feedback. The system supports promotions, discounts, and analytics for informed decision-making. With streamlined processes for returns and refunds, it ensures a seamless online shopping experience.",
    image: '/assets/projects/computer/compuToner.JPG',
    images:["/assets/projects/computer/compuToner.JPG","/assets/projects/computer/products.JPG"],
    slug: 'computoner-shop'
  },
  {
    name: "Hr Management System",
    category: "Applicable to all industries",
    client: "Baheer Group",
    description: "Introducing the sophisticated Human Resource Management Information System, meticulously designed to elevate your workforce management. Featuring an intuitive Analytics Dashboard for data-driven insights, the system seamlessly navigates the recruitment lifecycle with robust Recruitment Management functionalities, encompassing applicant tracking, long-lists, short-lists, hiring processes, and reserve-lists. Efficient Employee Management capabilities include ID card generation, appraisals, overtime tracking, and clearance processes. With integrated Attendance & Shift Management, along with Finger Print Attendance Machine API, precise time tracking becomes seamless. Manage payrolls, employee security, loans, fines, and advance salary requests effortlessly, while also handling taxi fare and bonuses. Access various insightful reports, visualize organizational structures with Organization Charts, and explore additional features tailored to meet the diverse needs of your HR operations. Experience unparalleled efficiency and precision in HR management with the comprehensive Human Resource Management Information System.",
    image: '/assets/projects/basheer grp/pp_stock.JPG',
    images:["/assets/projects/basheer%20grp/4.%20human%20resource%20dashboard.PNG", "/assets/projects/basheer%20grp/5.%20human%20resource%20employee%20list.PNG",'/assets/projects/basheer%20grp/attendanceJPG.JPG',"/assets/projects/basheer%20grp/candidate.JPG"],
    slug: 'hr-management-system'
  },
]

// resume
export const about = {
  title: 'About Me',
  description: "I am Maseeh Niazaai, In an ever-evolving Software Development Industry, I am committed to staying at the forefront of developments. I prioritize professional development and am constantly exploring new ways to enhance my skills. Whether through attending conferences, pursuing certifications, or engaging in hands-on projects, I am dedicated to the pursuit of knowledge.",
  info: [
    {fieldName: 'Name', fieldValue:'Niazaai Maseeh'},
    {fieldName: 'Phone', fieldValue:'+93792781462'},
    {fieldName: 'Experience', fieldValue:'7+ years'},
    {fieldName: 'Nationality', fieldValue:'Afghan'},
    {fieldName: 'Email', fieldValue:'maseeh@niazaai.com'},
    {fieldName: 'Freelance', fieldValue:'available'},
    {fieldName: 'Language', fieldValue:'English, Afghan, Arabic'},
    {fieldName: 'Github', fieldValue:'Niazaai Maseeh'},
  ]
}

export const experience = {
  icon: <FaAward />,
  title: 'my experience',
  items: [
    {
    company: "Baheer Group",
    Postion: 'Senior Full Stack Developer',
    duration: "Oct 2021 - Present",
    description: "Worked on the complete software development process, from requirement gathering to deployment. Debugged, refactored, and maintained software systems, applying changes with consideration for security, accessibility, best practices, and scalability. Developed new software according to organizational needs, created information security policies, and adhered to programming standards. Upgraded both back-end and front-end systems, connected devices via API, and wrote effective APIs. Created diagrams like ERD, user flow, and SOPs using Figma, deployed systems, and took organizational data backups to the cloud."
    },
    {
    company: "ADRAS",
    Postion: 'Web Developer',
    duration: "Nov 2018 – Aug 2021",
    description: "Diagnosed software faults using professional methods and maintained existing systems to ensure functionality. Planned and defined scope for new systems, analyzed requirements, and prepared SRS documents. Created conceptual database designs and ER diagrams using Microsoft Visio and EdrawMax, normalized diagrams, and implemented them in MySQL. Worked closely with UI/UX designers and collaborated on system logic, coding, and functionality for both new and existing systems. Helped build working models to allow users to visualize and evaluate the final system."
    },
    {
    company: "Katib University",
    Postion: 'Join ACM Programming Contest Bootcamp',
    duration: "2018",
    description: "I attended the competitive programming and exemplified by my participation in the ACM (Association for Computing Machinery) Programming Contest in 2018. During this prestigious competition, I demonstrated my problem-solving abilities, algorithmic proficiency, and a keen understanding of complex data structures."
    },


  ]
  
}

export const education = {
  icon: <FaGraduationCap />,
  title: 'my education',
  description: "I am Maseeh Niazaai, In an ever-evolving Software Development Industry, I am committed to staying at the forefront of developments. I prioritize professional development and am constantly exploring new ways to enhance my skills. Whether through attending conferences, pursuing certifications, or engaging in hands-on projects, I am dedicated to the pursuit of knowledge. smile",
  items: [
    {
    institution: "Udemy",
    certification: 'Fullstack Web Development',
    duration: "2023"
    },
    {
    institution: "CodeCademy",
    certification: 'Front-End Web Development',
    duration: "2022"
    },
    {
    institution: "FreeCodeCamp",
    certification: 'Programming Course',
    duration: "2020 - 2021"
    },
    {
    institution: "Tech Institute",
    certification: 'Certified Web Developer',
    duration: "2019"
    },
    {
    institution: "Design School",
    certification: 'Diploma in Graphics Design',
    duration: "2016 - 2019"
    },
    {
    institution: "University Degree",
    certification: 'Computer Science',
    duration: "2014 - 2016"
    },
    
  ]
  
}

export const skills = {
  title: 'my skills',
  description: 'I am Maseeh Niazaai, In an ever-evolving Software Development Industry, I am committed to staying at the forefront of developments. I prioritize professional development and am constantly exploring new ways to enhance my skills. Whether through attending conferences, pursuing certifications, or engaging in hands-on projects, I am dedicated to the pursuit of knowledge. smile',
  skillList: [
    
    { icon: <FaHtml5 />, name: 'html 5' },
    { icon: <FaCss3 />, name: 'css 3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'react.js' },
    { icon: <SiNextdotjs />, name: 'next.js' },
    { icon: <SiTailwindcss />, name: 'TailwindCss' },
    { icon: <SiBootstrap />, name: 'Bootstrap' },
    { icon: <SiNodedotjs />, name: 'node.js' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaGit />, name: 'Git' },
    { icon: <FaGithub />, name: 'Github' },
    { icon: <FaLaravel />, name: 'Laravel' },
  ],
  skillSet: [
    {name: "Programming Language", skillList:'Python, Javascript, PHP'},
    {name: "Data Analysis Tools", skillList:"Pandas, NumPy, Matplotlib, Seaborn"},
    { name: "Machine Learning", skillList: "Scikit-learn, TensorFlow, Keras, Supervised, Unsupervised, Learning, Neural Networks, Deep Learning" },
    {name: "Data Science", skillList:"Data Manipulation, Exploratory Data Analysis (EDA), Statistical Analysis, Hypothesis Testing"},
    {name: "Visualization", skillList:"Power BI, Tableau, Plotly Dash, Matplotlib, ggplot2"},
    {name: "Big Data", skillList:"Hadoop Ecosystem, Spark, SQL for Big Data, Distributed Computing"},
    {name: "AI Techniques", skillList:"Natural Language Processing, Computer Vision, Time Series Forecasting, Predictive Modeling, Clustering"},
    {name: "Cloud Platforms", skillList:"AWS for Big Data, Google Cloud, AI Solutions"},
    {name: "Frameworks", skillList:"Laravel, CodeIgniter, Django"},
    {name: "Database", skillList:"Redis, MySQL, SQL Server"},
    {name: "Frontend", skillList:"HTML, CSS, Bootstrap5, ReactJs"},
    {name: "Technical/General Skills", skillList:"Web Hosting and Domain Registration Linux OS, API Integration and REST API, Ajax & Fetch API, Geospatial Integration & Google Earth, NoSQL (MongoDB), Figma, GIT and GITHUB version control, Materialize CSS & Tailwind CSS"},
    
  ]
}

//contact

export const info = [
  { icon: <FaPhoneAlt />, title: "phone", description: <a href="tel:+93792781462">+93 792 78 1462</a> },
  { icon: <FaEnvelope />, title: "Email", description: <a href="maito:maseeh@niazaai.com">maseeh@niazaai.com</a> },
 
];