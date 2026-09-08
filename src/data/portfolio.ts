import type { DocumentInfo } from '../types';

export const personalInfo = {
  name: 'Saral Nithisombatsakul',
  thaiName: 'ศรัล นิธิสมบัติสกุล',
  nickname: 'Aomsin',
  thaiNickname: 'ออมสิน',
  role: {
    en: 'Full-Stack Developer',
    th: 'นักพัฒนา Full-Stack'
  },
  specialization: {
    en: 'Software Innovation & Scalable Web Architectures',
    th: 'นวัตกรรมซอฟต์แวร์ และสถาปัตยกรรมเว็บสเกลใหญ่'
  },
  email: 'neoneonsa22@gmail.com',
  phone: '+66 80 597 0938',
  location: {
    en: 'Bangkok, Thailand',
    th: 'กรุงเทพมหานคร, ประเทศไทย'
  },
  github: 'https://github.com/AomsinSPU',
  githubUsername: 'AomsinSPU',
  linkedin: 'https://linkedin.com/in/saral-nithisombatsakul-a9042432b',
  linkedinUsername: 'saral-nithisombatsakul',
  profileImage: '/assets/profile.jpg',
  militaryStatus: {
    en: 'Exempted (Completed Military Service Screening)',
    th: 'ได้รับการยกเว้นแล้ว (ผ่านการตรวจเลือกทหารเรียบร้อยแล้ว)'
  },
  languages: [
    { name: { en: 'Thai', th: 'ไทย' }, level: { en: 'Native Speaker', th: 'ภาษาแม่' } },
    { name: { en: 'English', th: 'อังกฤษ' }, level: { en: 'Technical / Working Proficiency', th: 'ระดับใช้งานเพื่อการทำงาน & เอกสารเทคนิค' } }
  ]
};

export const documentOptions: Record<'resume' | 'cv', DocumentInfo> = {
  resume: {
    type: 'resume',
    title: {
      en: 'Software Developer Resume',
      th: 'เรซูเม่ตำแหน่ง Software Developer'
    },
    subtitle: {
      en: '1-Page Concise Overview for Tech Recruiters & Hiring Managers',
      th: 'ฉบับย่อ 1 หน้า ออกแบบเพื่อ Recruiter และ Hiring Manager'
    },
    description: {
      en: 'High-impact summary highlighting Full-Stack skills (React, Node.js, ASP.NET Core), key production-level projects, work history, and academic GPAX (3.82).',
      th: 'สรุปจุดเด่นด้านทักษะ Full-Stack (React, Node.js, .NET), โปรเจกต์สำคัญ, ประสบการณ์การทำงาน และผลการเรียน GPAX 3.82'
    },
    highlights: {
      en: [
        'Single-page ATS-optimized format',
        'Direct focus on Full-Stack / Backend software development roles',
        'Summarized key metrics (GPAX 3.82, WMS & Booking systems, Nitori Logistics & 3D Freelance)',
        'Compact technical stack breakdown'
      ],
      th: [
        'ฟอร์แมต 1 หน้ากระดาษ เหมาะสำหรับการสแกนของระบบรับสมัครงาน',
        'โฟกัสตำแหน่ง Full-Stack / Backend Developer โดยตรง',
        'สรุปข้อมูลเชิงสถิติ (GPAX 3.82, ระบบ WMS, จองสนาม, ประสบการณ์ Nitori & 3D)',
        'กระชับ ชัดเจน พร้อมสำหรับการสัมภาษณ์งาน'
      ]
    },
    pdfUrl: '/assets/resume.pdf',
    filename: 'Saral_Nithisombatsakul_Resume.pdf',
    lastUpdated: 'September 2026'
  },
  cv: {
    type: 'cv',
    title: {
      en: 'Comprehensive Curriculum Vitae (CV)',
      th: 'ประวัติฉบับเต็ม (Curriculum Vitae)'
    },
    subtitle: {
      en: 'Detailed Academic, Technical Systems & Cross-Domain Portfolio',
      th: 'ประวัติการศึกษา โครงการเชิงวิศวกรรมซอฟต์แวร์ และผลงานครบทุกมิติ'
    },
    description: {
      en: 'Complete academic profile detailing Software Innovation coursework at SPU, High Vocational Certificate in Digital Graphics at Siamtech, full architecture breakdowns, and freelance asset engineering.',
      th: 'ประวัติวิชาการฉบับสมบูรณ์ รายวิชาเฉพาะทางนวัตกรรมซอฟต์แวร์ มหาวิทยาลัยศรีปทุม, ปวส. ดิจิทัลกราฟิก วิทยาลัยเทคโนโลยีสยาม, และรายละเอียดสถาปัตยกรรมระบบทั้งหมด'
    },
    highlights: {
      en: [
        'Comprehensive multi-page academic & engineering track record',
        'In-depth system schemas and hybrid database design documentation',
        'Academic coursework breakdowns (Data Structures, OOP, Software Architecture)',
        'Complete freelance and data entry verification history'
      ],
      th: [
        'บันทึกประวัติการศึกษาและวิศวกรรมซอฟต์แวร์อย่างละเอียด',
        'คำอธิบายสถาปัตยกรรมระบบและฐานข้อมูลไฮบริด (SQL + NoSQL)',
        'แจกแจงรายวิชาหลัก (Data Structures, OOP, Software Architecture)',
        'ประวัติการออกแบบโมเดล 3D ดิจิทัลและงานตรวจสอบข้อมูลองค์กร'
      ]
    },
    pdfUrl: '/assets/resume.pdf', // Can be used as CV / Resume base
    filename: 'Saral_Nithisombatsakul_CV.pdf',
    lastUpdated: 'September 2026'
  }
};
