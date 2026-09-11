import type { Project } from '../types';
import { getAssetUrl } from '../utils/asset';

export const projectsData: Project[] = [
  {
    id: 'badminton-booking',
    title: {
      en: 'Badminton Court Booking & Management System (BadmitonNaJa)',
      th: 'ระบบจองสนามแบดมินตันและบริหารจัดการสนาม (BadmitonNaJa)'
    },
    category: 'fullstack',
    featured: true, // Prominently featured spotlight as requested
    shortDescription: {
      en: 'Full-stack sports facility reservation platform built with ASP.NET Core MVC, Pomelo MySQL, BCrypt auth, and zero-collision scheduling.',
      th: 'เว็บแอปพลิเคชันฟูลสแต็กสำหรับจองสนามแบดมินตัน พัฒนาด้วย ASP.NET Core MVC, MySQL, BCrypt และเอนจินป้องกันการจองเวลาซ้อน'
    },
    fullDescription: {
      en: 'A comprehensive full-stack web application engineered as part of the CSI402 Frontend & Backend Integration curriculum at Sripatum University. Features role-based workflows for General Users, Members, and Venue Owners, integrating dynamic hourly scheduling, automated promotion algorithms, payment auditing, and administrative facility pricing.',
      th: 'โครงงานวิศวกรรมเว็บแอปพลิเคชันแบบฟูลสแต็กในรายวิชา CSI402 การเชื่อมต่อโปรแกรมส่วนหน้ากับโปรแกรมส่วนหลัง มหาวิทยาลัยศรีปทุม รองรับผู้ใช้งาน 3 ระดับ (ผู้ใช้ทั่วไป, สมาชิก, เจ้าของสนาม) พร้อมระบบตรวจสอบเวลาว่างแบบเรียลไทม์ เอนจินคำนวณโปรโมชันอัตโนมัติ และแดชบอร์ดแอดมินสำหรับจัดการราคาและประเภทสนาม'
    },
    problem: {
      en: 'Physical sports venues frequently suffer from double-booking disputes, phone reservation chaos, untracked cancellations, and rigid manual ledger pricing that cannot adapt to peak/off-peak demands.',
      th: 'สนามแบดมินตันประสบปัญหาการจองเวลาซ้ำซ้อนจากการรับสายโทรศัพท์ การบันทึกลงสมุดที่ไม่เป็นระบบ การยกเลิกที่ตรวจสอบย้อนหลังไม่ได้ และไม่สามารถปรับราคาตามช่วงเวลาความต้องการของลูกค้า (Peak/Off-Peak) ได้อย่างยืดหยุ่น'
    },
    solution: {
      en: 'Constructed an end-to-end ASP.NET Core MVC architecture with Pomelo Entity Framework Core and MySQL. Designed robust collision-avoidance database queries, BCrypt password hashing, automated promo discounts, and visual administrative controls.',
      th: 'พัฒนาสถาปัตยกรรมแบบฟูลสแต็กด้วย ASP.NET Core MVC เชื่อมต่อ MySQL ผ่าน Pomelo EF Core ออกแบบคิวรีป้องกันการทับซ้อนของช่วงเวลาจอง (Time Conflict Prevention) เข้ารหัสผ่านด้วย BCrypt และสร้างระบบคิดโปรโมชันอัตโนมัติ'
    },
    features: {
      en: [
        'Interactive real-time court availability grid based on date and time slot selection',
        'Zero-collision reservation engine ensuring no simultaneous overlap for the same court',
        'Dynamic Promotion Engine: 5-hour loyalty discount, 10th-hour free perk, off-peak rates (08:00-15:00 at 100 THB/hr), Google Maps review incentive, and Sunday specials',
        'Multi-Role Authorization: General User browsing, Member booking & cancellation, Owner/Admin management',
        'Facility Management Dashboard: Add/remove courts, toggle surface types (Rubber vs Wood), set peak/off-peak pricing',
        'Complete relational schemas for users, admins, courts, bookings, payments, promotions, and cancellations'
      ],
      th: [
        'ตารางแสดงสถานะสนามว่างแบบเรียลไทม์ เลือกวันและช่วงเวลาที่ต้องการได้อย่างแม่นยำ',
        'เอนจินตรวจสอบช่วงเวลาแบบ Zero-Collision ป้องกันการจองคอร์ตเดียวกันในเวลาเดียวกัน 100%',
        'ระบบคำนวณโปรโมชันอัตโนมัติ: เล่นครบ 5 ชม. ลด 30 บ., ครบ 10 ชม. ฟรี 1 ชม., ช่วง 08:00-15:00 น. ลดเหลือ 100 บ./ชม., ส่วนลดรีวิว Google Map 20 บ., และราคาวันอาทิตย์ 140 บ.',
        'ระบบจัดการสิทธิ์ผู้ใช้งาน: ผู้ใช้ทั่วไปดูข้อมูล, สมาชิกทำการจองและยกเลิก, เจ้าของสนามบริหารจัดการ',
        'แดชบอร์ดเจ้าของสนาม: เพิ่ม-ลดคอร์ต, กำหนดประเภทพื้นสนาม (พื้นยาง / พื้นไม้), และปรับราคาตามช่วงเวลา',
        'โครงสร้างฐานข้อมูลมาตรฐาน (DFD Level 0, DFD Level 1, Data Dictionary ครบวงจร)'
      ]
    },
    technologies: ['C#', 'ASP.NET Core MVC', 'MySQL', 'Pomelo EF Core', 'BCrypt.Net', 'Bootstrap', 'JavaScript', 'RESTful Endpoints'],
    architecture: {
      client: 'ASP.NET Core MVC Razor Views with Dynamic JavaScript Court Scheduler Grid',
      apiGateway: 'Controller Routing Layer with CSRF Token Protection & Session State',
      server: 'ASP.NET Core Application Services (Account, Booking, Admin, History Controllers)',
      database: 'MySQL Relational Database via Pomelo Entity Framework Core (ACID Transactions)',
      notes: {
        en: 'Employs atomic booking queries with range-overlap checks (StartTime < ExistingEnd AND EndTime > ExistingStart) to eliminate booking collisions.',
        th: 'ใช้คำสั่ง SQL ตรวจสอบช่วงเวลาที่คาบเกี่ยวกันบนฐานข้อมูล MySQL ป้องกันการบันทึกเวลาชนกันอย่างสมบูรณ์แบบ'
      }
    },
    challenges: {
      en: 'Structuring database queries to handle complex overlapping time slot conditions and dynamic calculation of multiple promotional rules simultaneously.',
      th: 'การเขียนเงื่อนไขสืบค้น SQL ให้ตรวจสอบช่วงเวลาจองที่คาบเกี่ยวกันได้อย่างแม่นยำ พร้อมทั้งคำนวณโปรโมชันหลายเงื่อนไขซ้อนกันอย่างถูกต้อง'
    },
    learned: {
      en: 'Mastered Full-Stack ASP.NET Core MVC architecture, entity relationship modeling with Pomelo EF Core, BCrypt security hashing, and production Data Flow Diagram (DFD) design.',
      th: 'เข้าใจการเชื่อมต่อหน้าบ้าน-หลังบ้านด้วย ASP.NET Core MVC อย่างลึกซึ้ง, การใช้งาน Entity Framework Core กับ MySQL, ระบบความปลอดภัย BCrypt และการออกแบบ Data Flow Diagram (DFD)'
    },
    githubUrl: 'https://github.com/AomsinSPU',
    image: getAssetUrl('/assets/projects/badminton-home.png'),
    screenshots: [
      getAssetUrl('/assets/projects/badminton-home.png'),
      getAssetUrl('/assets/projects/badminton-booking-detail.png'),
      getAssetUrl('/assets/projects/badminton-payment.png'),
      getAssetUrl('/assets/projects/badminton-history.png'),
      getAssetUrl('/assets/projects/badminton-register.png'),
      getAssetUrl('/assets/projects/badminton-flow.jpg'),
      getAssetUrl('/assets/projects/badminton-dfd.jpg')
    ]
  },
  {
    id: 'sports-matchmaker',
    title: {
      en: 'KickHub - Sports Venue & Matchmaking Backend System',
      th: 'KickHub - ระบบแบ็กเอนด์ค้นหาสนามกีฬาและจับคู่ผู้เล่น'
    },
    category: 'backend', // Category adjusted to BACKEND as requested
    featured: false,
    shortDescription: {
      en: 'RESTful backend microservices for sports facility reservations, player matchmaking lobbies, JWT auth, and OAuth.',
      th: 'ระบบบริการแบ็กเอนด์ RESTful API สำหรับการจองสนาม จัดห้องแมตช์กีฬา และยืนยันตัวตนด้วย OAuth'
    },
    fullDescription: {
      en: 'A robust Node.js & Express backend engineered for KickHub, a social sports platform connecting local players and venues. Features token-based JWT and OAuth (Google & Apple) authentication, Mongoose/MongoDB data persistence for flexible match feeds, MySQL integration for structured venue catalogs, and automated Swagger UI documentation.',
      th: 'ระบบแบ็กเอนด์ประสิทธิภาพสูงสำหรับ KickHub พัฒนาด้วย Node.js และ Express 5 รองรับการเชื่อมต่อ OAuth (Google และ Apple Sign-In), ระบบยืนยันตัวตนด้วย JWT, การจัดการข้อมูลสนามและห้องหาเพื่อนเล่นกีฬาด้วย MongoDB (Mongoose) และ MySQL พร้อมระบบเอกสาร API อัตโนมัติด้วย Swagger'
    },
    problem: {
      en: 'Sports enthusiasts face fragmented communication when organizing pickup matches, lack verified roster tracking, and encounter unreliable booking confirmations without standardized APIs.',
      th: 'นักกีฬาและผู้เล่นทั่วไปประสบปัญหาความยุ่งยากในการนัดหมายรวมทีม ขาดระบบยืนยันจำนวนผู้เล่นที่แน่นอน และสนามกีฬาขาดระบบ API กลางที่เชื่อมต่อการจองห้องแข่งขัน'
    },
    solution: {
      en: 'Architected modular RESTful controllers and middleware handling authentication, venue listings, multi-player matchmaking posts, and reservation scheduling, documented via Swagger.',
      th: 'ออกแบบสถาปัตยกรรม Backend แบบ Modular แยก Route, Controller, และ Middleware ชัดเจน พร้อมระบบอัปโหลดรูปภาพด้วย Multer, ระบบความปลอดภัย CORS, และเอกสาร Swagger Interactive Docs'
    },
    features: {
      en: [
        'Secure multi-provider authentication (JWT, BCrypt, Google OAuth, Apple Sign-In with Passport.js)',
        'Sports Field Management API (Field.js) supporting multi-sport venue catalogs and pricing',
        'Matchmaking & Community Lobby API (Post.js) for organizing pickup games with participant slots',
        'Reservation Booking API (Reservation.js) managing booking states, timestamps, and confirmations',
        'Multer file upload pipeline for user avatars and sports venue photographs',
        'Interactive Swagger API documentation (/api-docs) for rapid frontend client integration'
      ],
      th: [
        'ระบบรักษาความปลอดภัยและการยืนยันตัวตนหลายรูปแบบ (JWT, BCrypt, Google OAuth, Apple Sign-In ผ่าน Passport.js)',
        'API จัดการข้อมูลสนาม (Field.js) รองรับการระบุประเภทกีฬา สิ่งอำนวยความสะดวก และราคา',
        'API คอมมูนิตี้และห้องแมตช์ (Post.js) สร้างห้องหาเพื่อนเล่น กำหนดจำนวนผู้เล่น และระดับฝีมือ',
        'API ระบบจองสนาม (Reservation.js) ควบคุมสถานะการจอง เวลาเริ่มต้น-สิ้นสุด และการยืนยัน',
        'ไปป์ไลน์อัปโหลดรูปภาพด้วย Multer รองรับรูปโปรไฟล์และรูปภาพสนาม',
        'ระบบเอกสาร API แบบอินเตอร์แอคทีฟด้วย Swagger (/api-docs) เพื่อการเชื่อมต่อหน้าบ้านที่รวดเร็ว'
      ]
    },
    technologies: ['Node.js', 'Express.js v5', 'MongoDB', 'Mongoose', 'MySQL', 'JWT', 'Passport.js', 'OAuth', 'Multer', 'Swagger'],
    architecture: {
      client: 'React.js Client Application & Mobile Hybrid View',
      apiGateway: 'Express Router with CORS, Body-Parser & JWT / OAuth Verification Middleware',
      server: 'Node.js Express Controllers (AuthController, FieldController, PostController, ReservationController)',
      database: 'Hybrid Persistence: MongoDB Mongoose Collections + Relational SQL Connections',
      notes: {
        en: 'Employs Mongoose document schemas for high-velocity matchmaking feeds while maintaining SQL connections for structured financial transactions.',
        th: 'ใช้ Mongoose สำหรับฟีดการจับคู่ผู้เล่นที่มีความยืดหยุ่นสูง และเชื่อมต่อ SQL สำหรับข้อมูลธุรกรรมการเงิน'
      }
    },
    challenges: {
      en: 'Implementing cross-platform OAuth workflows (Google & Apple Sign-In) alongside native JWT token lifecycles and validating complex match lobby participant states.',
      th: 'การผสานระบบ OAuth จากทั้ง Google และ Apple ให้ทำงานร่วมกับ JWT ภายในระบบเดียว และการจัดการสถานะสมาชิกในห้องแข่งขันแบบเรียลไทม์'
    },
    learned: {
      en: 'Deepened mastery of Express middleware pipelines, OAuth strategies with Passport, NoSQL data modeling with Mongoose, and enterprise API documentation using Swagger.',
      th: 'เชี่ยวชาญการสร้าง Middleware Chain ใน Express, การทำ Authentication ด้วย OAuth และ Passport, การออกแบบโมเดล NoSQL ด้วย Mongoose และการจัดทำเอกสาร API ด้วย Swagger'
    },
    githubUrl: 'https://github.com/Theeraphath/kickhub',
    image: getAssetUrl('/assets/projects/kickhub-banner.png'),
    screenshots: [
      getAssetUrl('/assets/projects/kickhub-banner.png'),
      getAssetUrl('/assets/projects/kickhub-home.png'),
      getAssetUrl('/assets/projects/kickhub-search.png'),
      getAssetUrl('/assets/projects/kickhub-login-desktop.png'),
      getAssetUrl('/assets/projects/kickhub-login-mobile.png')
    ]
  },
  {
    id: 'crop-chatbot',
    title: {
      en: 'Economic Crops Chat - AI Crop Advisor & RAG System',
      th: 'Economic Crops Chat - ระบบ AI แนะนำการปลูกพืชเศรษฐกิจในไทย (RAG)'
    },
    category: 'fullstack', // Added chatbot project as requested
    featured: false,
    shortDescription: {
      en: 'AI chatbot leveraging Retrieval-Augmented Generation (RAG) and Ollama qwen2.5:7b to recommend economic crops based on Thai soil geography.',
      th: 'แชตบอต AI อัจฉริยะผสานระบบ RAG และ Ollama qwen2.5:7b แนะนำการปลูกพืชเศรษฐกิจ 14 ชนิดตามสภาพดินและภูมิศาสตร์ไทย'
    },
    fullDescription: {
      en: 'An intelligent agricultural advisory platform engineered with Retrieval-Augmented Generation (RAG) and local LLMs (Ollama qwen2.5:7b). Empowers Thai farmers and agricultural newcomers by delivering precise, scientifically grounded crop recommendations and pest management strategies for 14 major economic crops tailored to local soil conditions and Agri-Map data.',
      th: 'แพลตฟอร์มแชตบอตผู้ช่วยทางการเกษตรอัจฉริยะ พัฒนาด้วยเทคโนโลยี Retrieval-Augmented Generation (RAG) ร่วมกับ Large Language Model (Ollama qwen2.5:7b) ช่วยให้เกษตรกรและผู้เริ่มต้นทำเกษตรสามารถเข้าถึงองค์ความรู้การปลูกพืชเศรษฐกิจหลัก 14 ชนิดของไทย วิเคราะห์ความเหมาะสมตามสภาพดินและแผนที่ Agri-Map พร้อมวิธีป้องกันศัตรูพืช'
    },
    problem: {
      en: 'Farmers and new agricultural entrepreneurs frequently incur massive financial losses by cultivating crops ill-suited to their regional soil topography and lack accessible, centralized pest prevention knowledge.',
      th: 'เกษตรกรและคนรุ่นใหม่ที่เริ่มทำเกษตรมักประสบปัญหาเลือกชนิดพืชไม่เหมาะกับสภาพดินและสภาพอากาศในพื้นที่ ส่งผลให้ผลผลิตตกต่ำ ขาดทุน และเข้าถึงข้อมูลการป้องกันกำจัดศัตรูพืชที่กระจัดกระจายได้ยาก'
    },
    solution: {
      en: 'Engineered a specialized conversational AI utilizing a verified RAG knowledge base covering 14 Thai economic crops, coupled with a responsive chat interface, Node.js backend proxy, and Cloudflare Tunnel deployment.',
      th: 'สร้างระบบ AI สนทนาที่ดึงข้อมูลเฉพาะทางจากฐานความรู้ที่ผ่านการตรวจสอบ (RAG Knowledge Base) ครอบคลุมพืชเศรษฐกิจ 14 ชนิด ผสาน Web Chat UI หน้าบ้าน, Node.js Backend และการเชื่อมต่อผ่าน Cloudflare Tunnel'
    },
    features: {
      en: [
        'Domain Knowledge Retrieval: Covers 14 key Thai economic crops (Rice, Corn, Cassava, Sugarcane, Pineapple, Rubber, Durian, Mangosteen, Longan, Oil Palm, Coconut, Rambutan, Robusta Coffee, Arabica Coffee)',
        'Soil & Geography Matching: Cross-references soil conditions (e.g. sandy loam, clay, upland terrain) with Agri-Map guidelines',
        'Integrated Pest & Disease Management: Actionable pest prevention advice tailored to specific crops',
        'RAG Pipeline: Embeddings retrieval and prompt grounding with local Ollama qwen2.5:7b model to eliminate hallucinations',
        'United Nations SDG Alignment: Supports SDG 1 (No Poverty), SDG 2 (Zero Hunger), and SDG 8 (Decent Work & Economic Growth)',
        'Secure Remote Tunneling: Deployed and shared securely via Cloudflare Tunnel (cloudflared)'
      ],
      th: [
        'ฐานข้อมูลพืชเศรษฐกิจ 14 ชนิด: ข้าว, ข้าวโพด, มันสำปะหลัง, อ้อย, สับปะรด, ยางพารา, ทุเรียน, มังคุด, ลำไย, ปาล์มน้ำมัน, มะพร้าว, เงาะ, กาแฟโรบัสต้า, กาแฟอาราบิก้า',
        'วิเคราะห์ความเหมาะสมของดินและพื้นที่: เชื่อมโยงข้อมูลสภาพดิน (ดินร่วนปนทราย, ดินเหนียว, ดินดอน) อ้างอิงแนวทาง Agri-Map',
        'แนวทางกำจัดศัตรูพืชและโรคพืช: แนะนำวิธีจัดการอย่างถูกต้องและปลอดภัยต่อสิ่งแวดล้อม',
        'สถาปัตยกรรม RAG + Ollama: ป้องกันปัญหาภาพหลอน (Hallucination) โดยอ้างอิงข้อมูลจริงก่อนส่งให้ LLM ประมวลผลคำตอบ',
        'สอดคล้องกับเป้าหมายการพัฒนาที่ยั่งยืน (UN SDGs): สนับสนุน SDG 1, SDG 2 และ SDG 8',
        'ระบบ Deployment ผ่าน Cloudflare Tunnel (cloudflared) เพื่อความปลอดภัยและการเชื่อมต่อภายนอก'
      ]
    },
    technologies: ['Ollama (qwen2.5:7b)', 'RAG Architecture', 'Vector Embeddings', 'Node.js', 'Express.js', 'React / HTML5', 'Cloudflare Tunnel'],
    architecture: {
      client: 'Web Chat Interface (Prompt Input & Streamed Markdown Bubble Responses)',
      apiGateway: 'Express REST Router with Payload Sanitization & Cloudflare Ingress Tunnel',
      server: 'Node.js Backend RAG Controller & Context Augmentation Engine',
      database: 'Vector Store Knowledge Base (Thai Economic Crop Documents & Agri-Map Guidelines) + Ollama Local LLM',
      notes: {
        en: 'Extracts user soil/region keywords, retrieves top semantic document chunks, and injects context into Ollama qwen2.5:7b for hallucination-free agricultural advice.',
        th: 'ค้นหาเวกเตอร์จากคำถามของผู้ใช้ ดึงชิ้นส่วนข้อมูลที่เกี่ยวข้องมากที่สุด แล้วส่งต่อไปเป็น Context ให้ Ollama qwen2.5:7b สรุปคำแนะนำที่ถูกต้องแม่นยำ'
      }
    },
    challenges: {
      en: 'Tuning semantic retrieval thresholds for Thai agricultural terminology and orchestrating low-latency local inference with Ollama 7B parameters.',
      th: 'การปรับค่าความแม่นยำในการค้นหาเชิงความหมาย (Semantic Search) ของคำศัพท์ทางการเกษตรภาษาไทย และการควบคุมเวลาประมวลผลของโมเดล 7B'
    },
    learned: {
      en: 'Mastered practical Retrieval-Augmented Generation (RAG) pipelines, local open-source LLM deployment with Ollama, vector search concepts, and agricultural domain modeling.',
      th: 'เข้าใจกระบวนการทำงานของ RAG อย่างถ่องแท้, การรัน Local LLM ด้วย Ollama, หลักการทำงานของ Vector Database และการนำเทคโนโลยี AI มาสร้างประโยชน์ต่อสังคม'
    },
    githubUrl: 'https://github.com/AomsinSPU',
    image: getAssetUrl('/assets/projects/chatbot-preview.svg')
  },
  {
    id: 'wms-system',
    title: {
      en: 'Warehouse Management System (WMS)',
      th: 'ระบบบริหารจัดการคลังสินค้าอัจฉริยะ (WMS)'
    },
    category: 'fullstack',
    featured: false,
    shortDescription: {
      en: 'Enterprise-grade inventory tracking, stock adjustments, and multi-location logistics reporting.',
      th: 'ระบบติดตามสต็อกสินค้าแบบเรียลไทม์ ตรวจสอบการรับ-จ่าย และรายงานสถิติคลังสินค้าหลายสาขา'
    },
    fullDescription: {
      en: 'A comprehensive web application designed for real-time inventory tracking, batch adjustments, and logistics data analytics across multiple physical warehouse zones. Built with scalable RESTful APIs and strict database integrity rules.',
      th: 'เว็บแอปพลิเคชันสำหรับบริหารและติดตามสต็อกสินค้าคงคลังแบบเรียลไทม์ การปรับยอดตามล็อตสินค้า และการวิเคราะห์ข้อมูลโลจิสติกส์ พัฒนาด้วย RESTful API ที่รองรับการสเกลและระบบฐานข้อมูลที่แม่นยำสูง'
    },
    problem: {
      en: 'Traditional manual ledger and spreadsheet inventory tracking resulted in stock discrepancies, untracked loss, and delayed shipment approvals across physical storage zones.',
      th: 'การจดบันทึกสินค้าคงคลังด้วยระบบกระดาษหรือสเปรดชีตแบบเดิมทำให้เกิดปัญหาสต็อกไม่ตรง สินค้าสูญหายโดยตรวจย้อนหลังไม่ได้ และการอนุมัติเบิกจ่ายล่าช้า'
    },
    solution: {
      en: 'Constructed an end-to-end WMS with transactional inventory auditing, automated stock threshold alerts, and standardized RESTful APIs backed by a normalized MySQL schema.',
      th: 'สร้างระบบ WMS แบบครบวงจรที่มีระบบบันทึก Audit Log ทุกธุรกรรมสต็อก การแจ้งเตือนเมื่อสินค้าใกล้หมด และเชื่อมต่อผ่าน RESTful API ด้วยฐานข้อมูล MySQL ที่ผ่านการ Normalize'
    },
    features: {
      en: [
        'Real-time inventory level tracking and automated low-stock warnings',
        'Multi-storage location mapping and shelf bin categorization',
        'Stock in/out transaction logging with complete audit trail',
        'Role-based access control for warehouse operators vs inventory supervisors',
        'Exportable stock reports and analytical movement summaries'
      ],
      th: [
        'ระบบติดตามสต็อกสินค้าแบบเรียลไทม์ พร้อมแจ้งเตือนสต็อกขั้นต่ำอัตโนมัติ',
        'ระบบจำลองผังคลังสินค้าและจัดหมวดหมู่ชั้นวาง (Shelf/Bin Mapping)',
        'บันทึกประวัติการรับเข้า-เบิกออกพร้อมประวัติ Audit Trail อย่างละเอียด',
        'ระบบจัดการสิทธิ์ผู้ใช้งาน (พนักงานคลัง vs หัวหน้าฝ่ายตรวจสอบ)',
        'รายงานสรุปยอดการเคลื่อนไหวของสินค้าและส่งออกข้อมูลเชิงวิเคราะห์'
      ]
    },
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'RESTful APIs', 'Tailwind CSS'],
    architecture: {
      client: 'React.js SPA (Vite) + Tailwind CSS Dashboard UI',
      apiGateway: 'Express REST Router with JWT Verification & Rate Limiter',
      server: 'Node.js Controller Layer with Modular Service Services',
      database: 'MySQL Relational Schema (ACID Transactions & Foreign Key Integrity)',
      notes: {
        en: 'Employs database transactions on stock deductions to prevent concurrency race conditions during simultaneous order processing.',
        th: 'ใช้ Database Transactions ในการตัดสต็อก เพื่อป้องกันปัญหาสต็อกติดลบเมื่อมีคำสั่งเบิกจ่ายพร้อมกัน'
      }
    },
    challenges: {
      en: 'Preventing race conditions when multiple warehouse clerks processed stock deductions from the same SKU at the same time.',
      th: 'การจัดการ Race Conditions เมื่อพนักงานหลายคนทำการเบิกสินค้าชิ้นเดียวกันในเสี้ยววินาทีเดียวกัน'
    },
    learned: {
      en: 'Deepened understanding of ACID transactional isolation levels, database indexing strategies, and modular Express service architecture.',
      th: 'ได้เรียนรู้เชิงลึกเกี่ยวกับการควบคุม Transaction ในฐานข้อมูล, การทำ Indexing เพื่อค้นหา SKU นับหมื่นรายการได้อย่างรวดเร็ว, และการจัดโครงสร้าง Service Layer'
    },
    githubUrl: 'https://github.com/AomsinSPU',
    image: getAssetUrl('/assets/projects/wms-preview.svg')
  }
];
