import type { DocumentInfo } from '../types';
import { getAssetUrl } from '../utils/asset';

export const personalInfo = {
  name: 'Saral Nithisombatsakul',
  thaiName: 'สรัล นิธิสมบัติสกุล',
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
  email: 'saral.nit@spumail.net',
  phone: '080-597-0938',
  location: {
    en: '154/53 Itsaraphap Rd., Bangkok, Thailand',
    th: '154/53 ถนนอิสรภาพ แขวงวัดท่าพระ เขตบางกอกใหญ่ กรุงเทพฯ 10600'
  },
  github: 'https://github.com/AomsinSPU',
  githubUsername: 'AomsinSPU',
  linkedin: 'https://linkedin.com/in/saral-nithisombatsakul-a9042432b',
  linkedinUsername: 'saral-nithisombatsakul',
  profileImage: getAssetUrl('/assets/profile.jpg'),
  militaryStatus: {
    en: 'Exempted (Completed Military Service Screening)',
    th: 'ได้รับการยกเว้นแล้ว (ผ่านการตรวจเลือกทหารเรียบร้อยแล้ว)'
  },
  languages: [
    { name: { en: 'Thai', th: 'ไทย' }, level: { en: 'Native Speaker', th: 'ภาษาแม่' } },
    { name: { en: 'English', th: 'อังกฤษ' }, level: { en: 'Basic / Technical Proficiency', th: 'ระดับพื้นฐานเพื่อการทำงาน' } }
  ]
};

export const documentOptions: Record<'resume' | 'cv', DocumentInfo> = {
  resume: {
    type: 'resume',
    title: {
      en: 'Software Developer Resume (Thai)',
      th: 'เรซูเม่ตำแหน่ง Software Developer (ฉบับภาษาไทย)'
    },
    subtitle: {
      en: 'Modern Two-Column Layout with Profile, Skills, Projects & References',
      th: 'ดีไซน์ 2 คอลัมน์ทันสมัย พร้อมทักษะ, โปรเจกต์, ประสบการณ์ และบุคคลอ้างอิง'
    },
    description: {
      en: 'Structured 1-page modern executive resume highlighting React.js, Node.js, ASP.NET Core, AWS GenAI certification, Badminton Booking System, and references.',
      th: 'เรซูเม่ฉบับย่อ 1 หน้า ออกแบบสไตล์โมเดิร์น 2 คอลัมน์ ไฮไลต์ทักษะ Full-Stack (React, Node.js, ASP.NET Core), ใบรับรอง AWS GenAI, ระบบจองสนามแบดมินตัน และบุคคลอ้างอิง'
    },
    highlights: {
      en: [
        'Modern 2-column layout format with clear executive styling',
        'Direct focus on Full-Stack / Backend software development roles',
        'AWS Academy Graduate - Generative AI Foundations included',
        'Verified academic GPAX (3.82), youth council & formal references'
      ],
      th: [
        'โครงสร้างเรซูเม่ 2 คอลัมน์ ดีไซน์ทันสมัยตามมาตรฐานสากล',
        'โฟกัสตำแหน่ง Full-Stack หรือ Backend Developer และ AI Engineer โดยตรง',
        'มีใบรับรอง AWS Academy Graduate - Generative AI Foundations',
        'ระบุประวัติการศึกษา (GPAX 3.82), กิจกรรมนอกหลักสูตร และบุคคลอ้างอิงครบถ้วน'
      ]
    },
    pdfUrl: getAssetUrl('/assets/resume-thai.pdf'),
    filename: 'สรัล_นิธิสมบัติสกุล_Resume_TH.pdf',
    lastUpdated: 'กันยายน 2569'
  },
  cv: {
    type: 'cv',
    title: {
      en: 'Comprehensive Curriculum Vitae (CV Thai)',
      th: 'ประวัติฉบับเต็ม (CV ฉบับภาษาไทย)'
    },
    subtitle: {
      en: 'Detailed Professional Track Record, Work History & Full Architecture Stack',
      th: 'ประวัติวิชาชีพฉบับสมบูรณ์ ประสบการณ์ทำงานจริง และสถาปัตยกรรมระบบ'
    },
    description: {
      en: 'Comprehensive professional CV detailing work experience at Trump shop (3D Design), AIA (Data entry), and 4 Mangkon (Graphic Design), alongside complete tech stack breakdown and academic GPAX (3.82).',
      th: 'ประวัติการทำงานฉบับละเอียด บันทึกประสบการณ์จริงที่ Trump shop (ออกแบบโมเดล 3D), AIA (Data entry) และ 4 มังกร (Graphic Designer) พร้อมแจกแจงทักษะเชิงลึกครบถ้วน'
    },
    highlights: {
      en: [
        'Complete work history (Trump shop 3D, AIA Data Entry, 4 Mangkon Graphic)',
        'In-depth breakdown of Languages, Frameworks, Databases & Methodologies',
        'Academic credentials: Siamtech High Vocational (3.72) & SPU Computer Science (3.82)',
        'Formal and standardized presentation for enterprise recruitment'
      ],
      th: [
        'บันทึกประวัติการทำงานจริงอย่างละเอียด (Trump shop 3D, AIA Data Entry, 4 มังกร)',
        'แจกแจงทักษะเทคนิคเชิงลึกครบทั้ง Languages, Frameworks, Databases และ Tools',
        'ข้อมูลการศึกษา ปวส. สยามเทค (3.72) และ ป.ตรี มหาวิทยาลัยศรีปทุม (3.82)',
        'รูปแบบเอกสารทางการ เหมาะสำหรับการยื่นสมัครงานและองค์กรชั้นนำ'
      ]
    },
    pdfUrl: getAssetUrl('/assets/cv-thai.pdf'),
    filename: 'สรัล_นิธิสมบัติสกุล_CV_TH.pdf',
    lastUpdated: 'กันยายน 2569'
  }
};
