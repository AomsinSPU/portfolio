import type { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'spu',
    institution: {
      en: 'Sripatum University (SPU)',
      th: 'มหาวิทยาลัยศรีปทุม (SPU)'
    },
    degree: {
      en: 'Bachelor of Science (B.Sc.) in Computer Science and Software Innovation',
      th: 'วิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมซอฟต์แวร์'
    },
    major: {
      en: 'Specialization: Software Full Stack Development (Day Program)',
      th: 'กลุ่มวิชาเฉพาะ: การพัฒนาซอฟต์แวร์แบบฟูลสแต็ก (ภาคปกติ)'
    },
    period: {
      en: '2023 – Expected Graduation: 2027',
      th: '2023 – คาดว่าจะสำเร็จการศึกษาปี 2027'
    },
    gpax: '3.82 / 4.00',
    status: {
      en: 'Currently Enrolled (Senior Division - High Honors Standing)',
      th: 'กำลังศึกษา (ผลการเรียนดีเด่น เกียรตินิยมอันดับ 1)'
    },
    highlightCoursework: {
      en: [
        'Full Stack Web Development (React, Node.js, Express)',
        'Object-Oriented Programming & Design Patterns (C# & OOP)',
        'Relational Database Management Systems & SQL Modeling',
        'Data Structures and Algorithmic Complexity',
        'Software Architecture & System Engineering',
        'Network Systems & Cloud Infrastructure Basics'
      ],
      th: [
        'การพัฒนาเว็บแอปพลิเคชันแบบฟูลสแต็ก (Full Stack Web Development)',
        'การโปรแกรมเชิงวัตถุและรูปแบบการออกแบบ (OOP & Design Patterns)',
        'ระบบบริหารจัดการฐานข้อมูลและการสร้างโมเดลข้อมูล (DBMS & SQL)',
        'โครงสร้างข้อมูลและวิเคราะห์ขั้นตอนวิธี (Data Structures & Algorithms)',
        'สถาปัตยกรรมซอฟต์แวร์และวิศวกรรมระบบ (Software Architecture)',
        'ระบบเครือข่ายและระบบคลาวด์เบื้องต้น (Network & Cloud Basics)'
      ]
    },
    achievements: {
      en: [
        'Maintained top-tier academic performance with GPAX 3.82',
        'Architected comprehensive full-stack course projects (WMS, Badminton Court Scheduler, Sports Matchmaker)',
        'Served as technical lead across multiple software project development sprints'
      ],
      th: [
        'รักษาผลการเรียนระดับยอดเยี่ยมต่อเนื่องด้วยเกรดเฉลี่ยสะสม 3.82',
        'เป็นผู้พัฒนาหลักในโครงการซอฟต์แวร์ระบบจำลองคลังสินค้า และระบบจองสนาม',
        'นำเสนอโครงงานวิศวกรรมซอฟต์แวร์ที่เน้นการใช้งานได้จริงในระดับภาคธุรกิจ'
      ]
    }
  },
  {
    id: 'siamtech',
    institution: {
      en: 'Siam Technological College (Siamtech)',
      th: 'วิทยาลัยเทคโนโลยีสยาม (สยามเทค)'
    },
    degree: {
      en: 'High Vocational Certificate (ปวส.) in Digital Graphics',
      th: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาวิชาดิจิทัลกราฟิก'
    },
    major: {
      en: 'Digital Media, Visual Communication & 3D Interactive Assets',
      th: 'สื่อดิจิทัล การออกแบบกราฟิกเพื่อการสื่อสาร และการสร้างโมเดล 3D'
    },
    period: {
      en: 'Graduated: March 2023',
      th: 'สำเร็จการศึกษา: มีนาคม 2023'
    },
    gpax: '3.72 / 4.00',
    status: {
      en: 'Graduated with High Distinction',
      th: 'สำเร็จการศึกษาด้วยผลการเรียนดีเยี่ยม'
    },
    highlightCoursework: {
      en: [
        '3D Modeling & Digital Asset Pipeline',
        'Visual Design Principles & Typography Hierarchy',
        'User Interface Design & Interactive Digital Media',
        'Digital Photography, Lighting & Texture Mapping'
      ],
      th: [
        'การขึ้นโมเดล 3D และไปป์ไลน์การจัดการดิจิทัลแอสเซท',
        'หลักการออกแบบภาพและลำดับขั้นทางตัวอักษร (Typography)',
        'การออกแบบส่วนติดต่อผู้ใช้ (UI Design) และสื่อดิจิทัลอินเตอร์แอคทีฟ',
        'การจัดแสง การสร้างเท็กซ์เจอร์ และองค์ประกอบภาพ'
      ]
    },
    achievements: {
      en: [
        'Graduated with excellent standing (GPAX 3.72)',
        'Built solid aesthetic and UI/UX instincts that elevate modern web frontends',
        'Successfully completed practical digital asset freelance commissions during studies'
      ],
      th: [
        'สำเร็จการศึกษาด้วยเกรดเฉลี่ย 3.72',
        'วางรากฐานความเข้าใจด้าน UI/UX และศิลปะที่นำมาต่อยอดการทำหน้าบ้านเว็บให้สวยงาม',
        'สร้างสรรค์ผลงาน 3D ให้กับลูกค้าระดับออนไลน์ในระหว่างศึกษา'
      ]
    }
  }
];
