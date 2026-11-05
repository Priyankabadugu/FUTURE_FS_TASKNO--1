import {
  PortfolioProfile,
  EducationItem,
  SkillCategory,
  Project,
  ExperienceItem,
  CertificationItem,
  AchievementItem,
} from '../types/portfolio';

// Default profile image
import userPhoto from '../assets/images/priyanka_user_photo_1793893953912.jpg';

export const initialProfile: PortfolioProfile = {
  name: 'Priyanka Badugu',
  title: 'Full Stack Web Developer & Computer Science Student',
  subTitle: '3rd-Year B.Tech in Computer Science & Data Science (CS & DS)',
  shortBio:
    'Passionate 3rd-year B.Tech student specializing in Computer Science and Data Science with a core focus on Full Stack Web Development. I engineer responsive, scalable web applications with React, TypeScript, Node.js, and modern databases, merging clean UI/UX with data-backed engineering.',
  fullBio: [
    "Hello! I am Priyanka Badugu, an aspiring Software Engineer and dedicated 3rd-year B.Tech Computer Science and Data Science student. I have an enduring fascination for creating intuitive, high-performance web applications that solve real-world challenges.",
    "My technical journey bridges the creative elegance of modern frontend technologies (React.js, Next.js, Tailwind CSS, TypeScript) with the robust architectural foundations of backend systems and databases (Node.js, Express, MongoDB, PostgreSQL, SQL).",
    "Additionally, my specialized background in Data Science gives me a unique advantage: I understand how to gather, preprocess, analyze, and visualize complex datasets using Python, Pandas, and Scikit-Learn, allowing me to build smart, data-driven web products.",
    "I am constantly solving algorithmic challenges on LeetCode and HackerRank, collaborating in open source, and actively seeking internship opportunities where I can contribute to high-impact production software."
  ],
  email: 'priyankabadugu242@gmail.com',
  phone: '+91 98765 43210',
  location: 'Hyderabad, India (Open to Relocation & Remote)',
  availability: 'Available for Summer 2025/2026 Internships & SDE Roles',
  avatarUrl: userPhoto,
  socials: {
    github: 'https://github.com/priyankabadugu',
    linkedin: 'https://linkedin.com/in/priyankabadugu',
    email: 'mailto:priyankabadugu242@gmail.com',
    leetcode: 'https://leetcode.com/u/priyankabadugu/',
    twitter: 'https://x.com/priyankabadugu',
  },
  stats: [
    { label: 'Academic Standing', value: '3rd Year', detail: 'B.Tech CSE (Data Science)' },
    { label: 'Cumulative CGPA', value: '8.85 / 10', detail: 'Consistently in Top 5%' },
    { label: 'Projects Built', value: '15+', detail: 'Full Stack & ML Applications' },
    { label: 'Problems Solved', value: '500+', detail: 'LeetCode, GFG & HackerRank' },
  ],
};

export const educationData: EducationItem[] = [
  {
    id: 'edu-btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering (Data Science)',
    institution: 'VNR Vignana Jyothi Institute of Engineering & Technology (Affiliated / Autonomous)',
    location: 'Hyderabad, India',
    duration: '2022 – 2026 (Expected Graduation: May 2026)',
    grade: '8.85 / 10.0',
    gradeLabel: 'CGPA',
    isCurrent: true,
    courses: [
      'Data Structures & Algorithms',
      'Web Technologies & Frameworks',
      'Database Management Systems (DBMS)',
      'Object-Oriented Programming (Java/C++)',
      'Machine Learning & Data Mining',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering & Agile',
    ],
    description:
      'Currently in 3rd Year (6th Semester). Active participant in hackathons, coding workshops, and core technical student chapters. Maintaining consistent academic distinction with rigorous coursework in both systems programming and data analytics.',
  },
  {
    id: 'edu-inter',
    degree: 'Intermediate / Senior Secondary (Class XII)',
    field: 'Mathematics, Physics & Chemistry (MPC)',
    institution: 'Sri Chaitanya Junior College',
    location: 'Telangana, India',
    duration: '2020 – 2022',
    grade: '96.4%',
    gradeLabel: 'Percentage',
    courses: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Computer Basics'],
    description:
      'Graduated with distinction with 96.4% aggregate. Built strong analytical foundations in discrete mathematics, calculus, and scientific problem-solving.',
  },
  {
    id: 'edu-ssc',
    degree: 'Secondary School Certificate (Class X - SSC)',
    field: 'General High School Sciences & Mathematics',
    institution: 'St. Ann’s High School',
    location: 'Telangana, India',
    duration: '2019 – 2020',
    grade: '10.0 / 10.0',
    gradeLabel: 'GPA',
    courses: ['Mathematics', 'Science', 'Social Studies', 'English', 'Computer Fundamentals'],
    description:
      'Achieved a perfect 10.0 GPA (Grade A1). Awarded Academic Excellence Medal and represented the school in regional science & quiz competitions.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90, category: 'Frontend', experience: '2+ yrs' },
      { name: 'TypeScript', level: 85, category: 'Frontend', experience: '1.5+ yrs' },
      { name: 'JavaScript (ES6+)', level: 92, category: 'Frontend', experience: '3 yrs' },
      { name: 'Tailwind CSS', level: 92, category: 'Frontend', experience: '2 yrs' },
      { name: 'HTML5 & CSS3', level: 95, category: 'Frontend', experience: '3 yrs' },
      { name: 'Redux Toolkit', level: 80, category: 'Frontend', experience: '1+ yr' },
      { name: 'Next.js', level: 75, category: 'Frontend', experience: '1 yr' },
      { name: 'Responsive UI/UX', level: 94, category: 'Frontend', experience: '2+ yrs' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85, category: 'Backend', experience: '2 yrs' },
      { name: 'Express.js', level: 88, category: 'Backend', experience: '2 yrs' },
      { name: 'RESTful APIs', level: 90, category: 'Backend', experience: '2 yrs' },
      { name: 'JWT & Auth', level: 82, category: 'Backend', experience: '1.5 yrs' },
      { name: 'Middleware & Routing', level: 86, category: 'Backend', experience: '2 yrs' },
      { name: 'API Integration', level: 90, category: 'Backend', experience: '2 yrs' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, category: 'Language', experience: '3 yrs' },
      { name: 'Java', level: 82, category: 'Language', experience: '2 yrs' },
      { name: 'C++', level: 80, category: 'Language', experience: '2 yrs' },
      { name: 'C', level: 85, category: 'Language', experience: '2 yrs' },
      { name: 'SQL', level: 88, category: 'Language', experience: '2+ yrs' },
    ],
  },
  {
    title: 'Databases & Data Science',
    skills: [
      { name: 'MongoDB', level: 85, category: 'Database', experience: '2 yrs' },
      { name: 'MySQL', level: 86, category: 'Database', experience: '2 yrs' },
      { name: 'PostgreSQL', level: 78, category: 'Database', experience: '1 yr' },
      { name: 'Pandas & NumPy', level: 85, category: 'Data Science', experience: '2 yrs' },
      { name: 'Scikit-Learn', level: 80, category: 'Data Science', experience: '1.5 yrs' },
      { name: 'Data Visualization', level: 84, category: 'Data Science', experience: '2 yrs' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90, category: 'Tools', experience: '3 yrs' },
      { name: 'VS Code', level: 95, category: 'Tools', experience: '3 yrs' },
      { name: 'Postman', level: 88, category: 'Tools', experience: '2 yrs' },
      { name: 'Vite', level: 90, category: 'Tools', experience: '2 yrs' },
      { name: 'Vercel / Netlify', level: 85, category: 'Tools', experience: '2 yrs' },
      { name: 'Linux / Bash', level: 78, category: 'Tools', experience: '1.5 yrs' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'devhub',
    title: 'DevHub — Full-Stack Developer Community & Code Collab',
    category: 'Full Stack',
    shortDescription:
      'A collaborative web platform where developers publish technical articles, share live code snippets, and participate in discussion threads.',
    longDescription:
      'DevHub was engineered to provide developers with a unified space for community learning and code collaboration. It features a full Markdown editor with live preview, syntax highlighting, thread upvoting, comment trees, and tag filtering.',
    highlights: [
      'Built with React, Node.js, Express, MongoDB, and Tailwind CSS.',
      'Implemented JWT-based authentication, user profiles, and bookmarking.',
      'Integrated real-time live notification polling and instant search with debouncing.',
      'Responsive design achieving 98/100 Lighthouse performance score.',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    githubUrl: 'https://github.com/priyankabadugu/devhub-platform',
    liveUrl: 'https://devhub-collab.vercel.app',
    featured: true,
    status: 'Completed',
  },
  {
    id: 'datasense',
    title: 'DataSense — Customer Churn Predictive Analytics Dashboard',
    category: 'Data Science',
    shortDescription:
      'An intelligent analytics web application combining machine learning models with interactive business intelligence charts.',
    longDescription:
      'Leveraging my Data Science curriculum, DataSense predicts customer churn probability based on historical customer usage patterns. Users can upload custom CSV datasets or test individual customer parameters to get real-time risk scores and actionable retention recommendations.',
    highlights: [
      'Trained Random Forest & XGBoost classifiers using Scikit-Learn with 91.4% accuracy.',
      'Created a Flask/REST backend that serves model predictions in under 120ms.',
      'Frontend built in React with Chart.js visualization for feature importance matrices.',
      'Includes sample data explorer, correlation heatmap, and automated PDF summary generation.',
    ],
    techStack: ['Python', 'Scikit-Learn', 'Flask', 'React', 'Pandas', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/priyankabadugu/datasense-analytics',
    liveUrl: 'https://datasense-ml.vercel.app',
    featured: true,
    status: 'Completed',
  },
  {
    id: 'shopwave',
    title: 'ShopWave — Modern Responsive E-Commerce Platform',
    category: 'Frontend',
    shortDescription:
      'Feature-packed online shopping portal with fast product search, category filters, animated cart drawer, and responsive checkout.',
    longDescription:
      'A high-performance modern e-commerce storefront created with TypeScript and React. Offers instant client-side filtering by category, price, and customer rating, alongside persistent shopping cart state synced to localStorage.',
    highlights: [
      'Architected state management using Redux Toolkit for seamless cart operations.',
      'Designed a sleek dark/light adaptive UI with fluid Tailwind CSS transitions.',
      'Implemented simulated Stripe checkout flow with coupon code verification and invoice generation.',
      'Lazy-loaded product galleries and optimized responsive images.',
    ],
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/priyankabadugu/shopwave-ecommerce',
    liveUrl: 'https://shopwave-store.vercel.app',
    featured: true,
    status: 'Completed',
  },
  {
    id: 'taskpulse',
    title: 'TaskPulse — Agile Sprint Kanban & Productivity Suite',
    category: 'Frontend',
    shortDescription:
      'Intuitive project management web app featuring drag-and-drop task boards, priority matrix, deadline reminders, and task analytics.',
    longDescription:
      'Designed for engineering student teams and sprint planning. Allows members to organize backlog items, move cards between To Do, In Progress, Review, and Done states, and visualize sprint velocity through interactive progress bars.',
    highlights: [
      'Interactive drag-and-drop board powered by custom state algorithms and smooth animations.',
      'Supports priority labels (High, Medium, Low), due-date countdowns, and search filter.',
      'Persistent storage with automatic JSON backup import/export.',
      'Minimalist dark navy aesthetic tailored for developers.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    githubUrl: 'https://github.com/priyankabadugu/taskpulse-kanban',
    liveUrl: 'https://taskpulse-app.vercel.app',
    featured: false,
    status: 'Completed',
  },
  {
    id: 'edunexus',
    title: 'EduNexus — Interactive Learning Portal & Assessment Engine',
    category: 'Full Stack',
    shortDescription:
      'E-learning portal providing modular computer science lessons, interactive quizzes, automated grading, and digital certificates.',
    longDescription:
      'A comprehensive educational platform built for CS students. Features structured chapter reading, timed assessments with instant explanation modals, progress tracking percentage, and downloadable accomplishment certificates.',
    highlights: [
      'Full-stack architecture with Express REST APIs and MongoDB for question bank storage.',
      'Automated scoring algorithm with instant graphical feedback on topic strengths and weaknesses.',
      'Role-based features for student learners and instructor quiz creators.',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/priyankabadugu/edunexus-portal',
    liveUrl: 'https://edunexus-learning.vercel.app',
    featured: false,
    status: 'Completed',
  },
  {
    id: 'weathercast',
    title: 'WeatherCast AI — Atmospheric & Air Quality Monitor',
    category: 'Web App',
    shortDescription:
      'Weather forecast application providing real-time conditions, 7-day meteorological trends, and air quality index (AQI) tracking.',
    longDescription:
      'A sleek meteorological web dashboard consuming OpenWeather API and AQICN data. Automatically detects user location and delivers 24-hour temperature trends, humidity, wind velocity, UV index ratings, and health advisories.',
    highlights: [
      'Clean glassmorphic interface with dynamic weather background gradients based on local time and weather condition.',
      'Interactive historical charts and city bookmarking feature.',
      'Lightweight and high-efficiency API response caching.',
    ],
    techStack: ['React', 'OpenWeather API', 'Tailwind CSS', 'Chart.js', 'Vite'],
    githubUrl: 'https://github.com/priyankabadugu/weathercast-app',
    liveUrl: 'https://weathercast-live.vercel.app',
    featured: false,
    status: 'Completed',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-web-dev',
    role: 'Web Development Intern',
    company: 'TechInnovate Solutions',
    department: 'Frontend Engineering Group',
    location: 'Hyderabad, India (Hybrid)',
    period: 'May 2024 – July 2024 (3 Months)',
    type: 'Internship',
    summary:
      'Contributed as a Frontend Web Development Intern, working alongside senior developers to build responsive web portals and modernize client UI components.',
    bulletPoints: [
      'Architected and implemented 12+ reusable React UI components with Tailwind CSS, accelerating team sprint velocity by 25%.',
      'Integrated RESTful API endpoints for user authentication, profile settings, and dynamic data tables.',
      'Optimized front-end rendering performance and image loading, reducing First Contentful Paint (FCP) by 35%.',
      'Actively participated in Agile Scrum ceremonies, Git code reviews, and cross-browser testing across mobile and desktop devices.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'REST APIs', 'Git', 'GitHub', 'Postman'],
  },
  {
    id: 'exp-ds-intern',
    role: 'Data Science & Machine Learning Trainee',
    company: 'Center for AI & Data Intelligence Lab',
    department: 'Department of Computer Science',
    location: 'Hyderabad, India',
    period: 'December 2023 – February 2024 (3 Months)',
    type: 'Academic Research & Project Training',
    summary:
      'Worked on real-world dataset analytics, data preprocessing pipelines, and exploratory data analysis for supervised learning applications.',
    bulletPoints: [
      'Preprocessed and normalized raw structured datasets exceeding 45,000+ data points using Python, Pandas, and NumPy.',
      'Conducted Exploratory Data Analysis (EDA) and built correlation visualizations using Matplotlib and Seaborn to identify key predictive trends.',
      'Trained classification models (Logistic Regression, Decision Trees, Random Forest) with Scikit-Learn, obtaining an 88.5% validation score.',
      'Documented technical methodology and presented findings at the institutional undergraduate technical showcase.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Jupyter Notebook'],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-meta',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (via Coursera)',
    issueDate: 'October 2024',
    credentialId: 'META-FE-984214',
    verificationUrl: 'https://coursera.org/verify/meta-frontend-developer',
    skillsCovered: ['React.js', 'JavaScript (Advanced)', 'HTML5 & Modern CSS', 'Version Control (Git)', 'UI/UX Principles', 'Testing with Jest'],
  },
  {
    id: 'cert-python-ds',
    title: 'Python for Data Science and Machine Learning Bootcamp',
    issuer: 'Udemy / Tech Academy',
    issueDate: 'July 2024',
    credentialId: 'UC-7821-DSML-2024',
    verificationUrl: 'https://udemy.com/certificate/UC-7821-DSML-2024',
    skillsCovered: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Data Visualization', 'Linear & Logistic Regression', 'Model Evaluation'],
  },
  {
    id: 'cert-web-bootcamp',
    title: 'The Complete 2024 Web Development Bootcamp',
    issuer: 'The App Brewery / Angela Yu',
    issueDate: 'March 2024',
    credentialId: 'UC-9124-FULLSTACK',
    verificationUrl: 'https://udemy.com/certificate/UC-9124-FULLSTACK',
    skillsCovered: ['Full Stack Development', 'Node.js', 'Express.js', 'MongoDB & Mongoose', 'RESTful API Architecture', 'React'],
  },
  {
    id: 'cert-sql',
    title: 'Database Management Systems & SQL Specialist (5-Star)',
    issuer: 'HackerRank & Oracle Academy',
    issueDate: 'January 2024',
    credentialId: 'HR-SQL-GOLD-5S',
    verificationUrl: 'https://hackerrank.com/certificates/priyankabadugu_sql',
    skillsCovered: ['Complex SQL Queries', 'Joins & Subqueries', 'Database Normalization', 'Relational Schema Design', 'MySQL'],
  },
  {
    id: 'cert-aws',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS Academy)',
    issueDate: 'November 2023',
    credentialId: 'AWS-ACAD-CF-6190',
    verificationUrl: 'https://aws.amazon.com/verification',
    skillsCovered: ['Cloud Computing Concepts', 'AWS EC2 & S3', 'VPC & Networking', 'Cloud Security & IAM', 'Serverless Basics'],
  },
  {
    id: 'cert-postman',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    issueDate: 'August 2023',
    credentialId: 'POSTMAN-EXPERT-4491',
    verificationUrl: 'https://badgr.com/public/assertions/postman-student-expert',
    skillsCovered: ['REST API Requests', 'Testing & Assertions', 'Environment Variables', 'API Documentation', 'Collection Runner'],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Academic Distinction — Top 5% Cohort',
    event: 'Department of Computer Science & Engineering',
    description: 'Ranked in the top 5% of B.Tech CSE (Data Science) students with a continuous cumulative CGPA of 8.85 / 10.0.',
    date: '2022 – Present',
    badge: 'Academic Honor',
  },
  {
    id: 'ach-2',
    title: '500+ Algorithmic Challenges Solved',
    event: 'LeetCode, HackerRank & GeeksforGeeks',
    description: 'Solved over 500+ problems in Data Structures & Algorithms (Array, Trees, Graphs, Dynamic Programming) with 5-Star badges in Python and SQL.',
    date: '2023 – 2025',
    badge: 'Competitive Coding',
  },
  {
    id: 'ach-3',
    title: 'Finalist — Campus Innovate Hackathon 2024',
    event: 'Annual Technical Symposium',
    description: 'Designed and presented a real-time web portal for automated student feedback processing and anomaly detection.',
    date: 'March 2024',
    badge: 'Hackathon Finalist',
  },
  {
    id: 'ach-4',
    title: 'Active Technical Committee Member',
    event: 'Computer Society of India (CSI) & GDG Campus',
    description: 'Organized hands-on Git/GitHub workshops and peer coding sessions for 100+ junior engineering students.',
    date: '2023 – Present',
    badge: 'Leadership & Community',
  },
];
