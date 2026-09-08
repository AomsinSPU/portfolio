import type { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Languages
  {
    name: 'C#',
    category: 'languages',
    tag: 'Backend & Enterprise',
    description: {
      en: 'Primary language for enterprise backends with ASP.NET Core MVC, LINQ, strong OOP patterns, and Pomelo EF Core.',
      th: 'ภาษาหลักสำหรับระบบหลังบ้านระดับองค์กรด้วย ASP.NET Core MVC, LINQ, OOP และ Pomelo EF Core'
    },
    experience: { en: 'Badminton Booking System', th: 'ระบบจองสนามแบดมินตัน' }
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'languages',
    tag: 'Core Web & Node.js',
    description: {
      en: 'Modern asynchronous JavaScript, closures, promises, async/await, and event-driven backend engineering.',
      th: 'การพัฒนาจาวาสคริปต์สมัยใหม่ Asynchronous, Promises, Async/Await และ Event Loop'
    },
    experience: { en: 'Daily Usage & Node APIs', th: 'ใช้งานเป็นประจำและทำ Node APIs' }
  },
  {
    name: 'TypeScript',
    category: 'languages',
    tag: 'Type Safety',
    description: {
      en: 'Strong static typing, generics, interfaces, and strict component contracts for robust scalable web apps.',
      th: 'การเขียนโค้ดแบบ Type-Safe, Generics และ Interfaces เพื่อลดรันไทม์บั๊กในระบบสเกลใหญ่'
    },
    experience: { en: 'Modern Portfolio & Apps', th: 'เทคโนโลยีปัจจุบันและพอร์ตโฟลิโอ' }
  },
  {
    name: 'SQL (MySQL & T-SQL)',
    category: 'languages',
    tag: 'Relational DB',
    description: {
      en: 'Complex relational querying, indexing, foreign keys, schema normalization, and conflict-free range checks.',
      th: 'การเขียนคำสั่งสืบค้นข้อมูลเชิงสัมพันธ์ Indexing, Foreign Keys, Normalization และคิวรีตรวจจับเวลาชนกัน'
    },
    experience: { en: 'Core Across All Systems', th: 'ฐานข้อมูลหลักในทุกโปรเจกต์' }
  },
  {
    name: 'HTML5 & CSS3',
    category: 'languages',
    tag: 'UI Foundation',
    description: {
      en: 'Semantic markup, accessibility (a11y), responsive layouts with Flexbox, CSS Grid, and modern CSS variables.',
      th: 'โครงสร้าง Semantic HTML ที่ถูกต้องตามมาตรฐาน Accessibility และ Responsive Layouts'
    },
    experience: { en: 'Foundational Standard', th: 'ทักษะพื้นฐานมาตรฐาน' }
  },

  // Frameworks & Libraries
  {
    name: 'ASP.NET Core MVC',
    category: 'frameworks',
    tag: 'Enterprise Full-Stack',
    description: {
      en: 'Server-side MVC architecture, Pomelo Entity Framework Core, Razor Views, dependency injection, and BCrypt security.',
      th: 'สถาปัตยกรรม MVC ฝั่งเซิร์ฟเวอร์, Pomelo EF Core, Razor Views, Dependency Injection และระบบความปลอดภัย'
    },
    experience: { en: 'Badminton Booking System', th: 'ระบบจองสนามแบดมินตัน' }
  },
  {
    name: 'Node.js & Express.js',
    category: 'frameworks',
    tag: 'RESTful Backend',
    description: {
      en: 'High-performance RESTful APIs, modular router controllers, middleware chains, Multer file pipelines, and CORS.',
      th: 'การสร้าง REST APIs ประสิทธิภาพสูง, มิดเดิลแวร์, Multer อัปโหลดไฟล์, และระบบความปลอดภัย CORS'
    },
    experience: { en: 'KickHub, Chatbot & WMS', th: 'KickHub, AI Chatbot และ WMS' }
  },
  {
    name: 'React.js',
    category: 'frameworks',
    tag: 'Frontend SPA',
    description: {
      en: 'Component-driven UI, custom hooks, context state management, responsive designs, and client-side routing.',
      th: 'การสร้าง UI แบบ Component-Driven, Custom Hooks, Context State และ Responsive Design'
    },
    experience: { en: 'Portfolio, Chatbot & WMS', th: 'พอร์ตโฟลิโอ, แชตบอต และ WMS' }
  },
  {
    name: 'Tailwind CSS',
    category: 'frameworks',
    tag: 'Modern Styling',
    description: {
      en: 'Utility-first styling, design system tokens, fluid responsiveness, dark mode theming, and micro-interactions.',
      th: 'การออกแบบ UI สไตล์ Utility-First รองรับ Dark/Light Mode และ Responsive ทุกขนาดหน้าจอ'
    },
    experience: { en: 'Active Production UI', th: 'พัฒนาหน้า UI จริง' }
  },
  {
    name: 'Bootstrap',
    category: 'frameworks',
    tag: 'Responsive UI',
    description: {
      en: 'Rapid responsive grid layouts, modular modal dialogs, and clean UI components for server-rendered web views.',
      th: 'การสร้าง Grid Layouts, Modals และ UI Components สำหรับมุมมองเว็บที่เรนเดอร์จากเซิร์ฟเวอร์'
    },
    experience: { en: 'Badminton Booking System', th: 'ระบบจองสนามแบดมินตัน' }
  },

  // Databases & Storage
  {
    name: 'MySQL',
    category: 'databases',
    tag: 'Relational DB',
    description: {
      en: 'Relational schema design, foreign key constraints, ACID transactions, and Pomelo EF Core integration.',
      th: 'การออกแบบตาราง Foreign Keys ความสัมพันธ์ระหว่างตาราง ทรานแซกชัน ACID และเชื่อมต่อ Pomelo EF Core'
    },
    experience: { en: 'BadmintonNaJa & WMS', th: 'ระบบแบดมินตัน & WMS' }
  },
  {
    name: 'MongoDB & Mongoose',
    category: 'databases',
    tag: 'NoSQL Document',
    description: {
      en: 'Flexible document schemas, nested subdocuments, high-velocity matchmaking lobby feeds, and Mongoose ODM.',
      th: 'การจัดเก็บข้อมูลแบบ Document, ซับด็อกคิวเมนต์, ฟีดห้องแมตช์กีฬา และจัดการผ่าน Mongoose ODM'
    },
    experience: { en: 'KickHub Matchmaking System', th: 'ระบบ KickHub นัดแมตช์กีฬา' }
  },
  {
    name: 'Vector Embeddings / Knowledge Base',
    category: 'databases',
    tag: 'AI Vector Store',
    description: {
      en: 'Vectorization of agricultural domain literature, semantic similarity search, and prompt context augmentation.',
      th: 'การแปลงข้อมูลพืชเศรษฐกิจเป็นเวกเตอร์ การค้นหาความหมายคล้ายคลึง (Semantic Search) สำหรับ RAG'
    },
    experience: { en: 'Economic Crops Chatbot', th: 'แชตบอตพืชเศรษฐกิจ AI' }
  },
  {
    name: 'MS SQL Server',
    category: 'databases',
    tag: 'Enterprise SQL',
    description: {
      en: 'Enterprise relational data modeling, transactional ACID integrity, indexing strategies, and stored procedures.',
      th: 'การจัดการข้อมูลองค์กร ความถูกต้องระดับ ACID และการทำดัชนีข้อมูลเพื่อการค้นหาความเร็วสูง'
    },
    experience: { en: 'Academic & Architecture', th: 'สถาปัตยกรรมระบบ' }
  },

  // Tools, Security & AI Systems
  {
    name: 'Ollama & Local LLM (qwen2.5:7b)',
    category: 'tools',
    tag: 'Local AI & RAG',
    description: {
      en: 'Hosting and orchestrating open-source Large Language Models locally, prompt engineering, and RAG grounding.',
      th: 'การติดตั้งและรัน LLM บนเครื่องเซิร์ฟเวอร์, ออกแบบ System Prompt และเชื่อมต่อ RAG ลดภาพหลอน'
    },
    experience: { en: 'Economic Crops Chatbot', th: 'แชตบอตพืชเศรษฐกิจ AI' }
  },
  {
    name: 'OAuth 2.0 & Passport.js',
    category: 'tools',
    tag: 'Third-Party Auth',
    description: {
      en: 'Social identity integration (Google OAuth, Apple Sign-In), session serialization, and token verification.',
      th: 'การเชื่อมต่อล็อกอินบุคคลที่สาม (Google & Apple Sign-In) ผ่าน Passport.js และตรวจสอบ Token'
    },
    experience: { en: 'KickHub Matchmaking API', th: 'ระบบ KickHub API' }
  },
  {
    name: 'JWT & BCrypt Security',
    category: 'tools',
    tag: 'Auth & Encryption',
    description: {
      en: 'Stateless JSON Web Tokens with expiry lifecycles, salted password hashing, and role-based route guards.',
      th: 'การทำ Stateless JWT Token, เข้ารหัสผ่านด้วย Salted BCrypt และระบบ Route Guard ตามสิทธิ์'
    },
    experience: { en: 'Badminton & KickHub', th: 'ระบบแบดมินตัน & KickHub' }
  },
  {
    name: 'Swagger (OpenAPI)',
    category: 'tools',
    tag: 'API Documentation',
    description: {
      en: 'Interactive REST API contract specifications (/api-docs), request/response schemas, and endpoint testing.',
      th: 'การจัดทำเอกสารและทดสอบ REST API แบบ Interactive (/api-docs) ตามมาตรฐาน OpenAPI'
    },
    experience: { en: 'KickHub Backend API', th: 'ระบบ KickHub Backend' }
  },
  {
    name: 'Cloudflare Tunnel (cloudflared)',
    category: 'tools',
    tag: 'DevOps & Ingress',
    description: {
      en: 'Zero-trust remote tunneling, secure ingress publishing, and SSL termination without exposing public IP ports.',
      th: 'การสร้างอุโมงค์เชื่อมต่อแบบ Zero-Trust เพื่อเผยแพร่เว็บและบริการ AI สู่ภายนอกอย่างปลอดภัย'
    },
    experience: { en: 'Chatbot Deployment', th: 'การ Deploy แชตบอต AI' }
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    tag: 'Version Control',
    description: {
      en: 'Git branch workflows, pull requests, semantic commits, merge conflict resolution, and collaborative reviews.',
      th: 'การควบคุมเวอร์ชันโค้ด Branching Strategy, Pull Requests, Semantic Commits และการทำงานเป็นทีม'
    },
    experience: { en: 'Essential Daily Standard', th: 'มาตรฐานการทำงานประจำวัน' }
  },
  {
    name: 'Postman',
    category: 'tools',
    tag: 'API Testing',
    description: {
      en: 'Automated API endpoint verification, environment variables, authentication header simulation, and payload testing.',
      th: 'การทดสอบ Endpoint จำลอง Headers, Environment และตรวจเช็ค Payload ก่อนส่งต่อหน้าบ้าน'
    },
    experience: { en: 'API Testing Workflow', th: 'ขั้นตอนการทดสอบ API' }
  },
  {
    name: 'Docker Fundamentals',
    category: 'tools',
    tag: 'Containerization',
    description: {
      en: 'Container isolation concepts, writing Dockerfiles, and multi-container development with Docker Compose.',
      th: 'การจำลองสภาพแวดล้อมระบบด้วยคอนเทนเนอร์ และเขียน Dockerfile / Docker Compose พื้นฐาน'
    },
    experience: { en: 'Microservices Learning', th: 'กำลังศึกษาและต่อยอด' }
  }
];
