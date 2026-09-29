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
        'Architected comprehensive full-stack course projects (Badminton Court Scheduler, Sports Matchmaker, AI Crop Advisor)',
        'Served as technical lead across multiple software project development sprints'
      ],
      th: [
        'รักษาผลการเรียนระดับยอดเยี่ยมต่อเนื่องด้วยเกรดเฉลี่ยสะสม 3.82',
        'เป็นผู้พัฒนาหลักในโครงการซอฟต์แวร์ระบบจองสนามแบดมินตัน, KickHub และระบบ AI แนะนำพืชเศรษฐกิจ',
        'นำเสนอโครงงานวิศวกรรมซอฟต์แวร์ที่เน้นการใช้งานได้จริงในระดับภาคธุรกิจ'
      ]
    }
  }
];
