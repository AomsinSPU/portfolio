import type { CertificateItem } from '../types';

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-fullstack-dev',
    title: {
      en: 'Full-Stack Software Development & Modern Web Architecture',
      th: 'การพัฒนาซอฟต์แวร์ฟูลสแต็กและสถาปัตยกรรมเว็บสมัยใหม่'
    },
    issuer: 'Sripatum University & Tech Innovation Center',
    date: '2024',
    credentialId: 'SPU-FSD-2024-8821',
    verifyUrl: 'https://github.com/AomsinSPU',
    image: '/assets/projects/cert-fullstack.svg',
    badge: 'Full Stack'
  },
  {
    id: 'cert-dotnet-core',
    title: {
      en: 'Enterprise Application Development with ASP.NET Core & C#',
      th: 'การพัฒนาแอปพลิเคชันระดับองค์กรด้วย ASP.NET Core และ C#'
    },
    issuer: 'Microsoft Learn / Advanced Software Track',
    date: '2024',
    credentialId: 'MS-NET-991204',
    verifyUrl: 'https://github.com/AomsinSPU',
    image: '/assets/projects/cert-dotnet.svg',
    badge: 'Backend & C#'
  },
  {
    id: 'cert-database-sql',
    title: {
      en: 'Relational Database Architecture & SQL Performance Tuning',
      th: 'สถาปัตยกรรมฐานข้อมูลเชิงสัมพันธ์และการเพิ่มประสิทธิภาพคำสั่ง SQL'
    },
    issuer: 'Data Engineering Academy',
    date: '2023',
    credentialId: 'DB-SQL-77301',
    verifyUrl: 'https://github.com/AomsinSPU',
    image: '/assets/projects/cert-db.svg',
    badge: 'Database'
  },
  {
    id: 'cert-digital-graphics',
    title: {
      en: 'Outstanding Achievement in Digital Graphics & Asset Modeling',
      th: 'ผลงานดีเด่นด้านดิจิทัลกราฟิกและการสร้างโมเดล 3D'
    },
    issuer: 'Siam Technological College',
    date: '2023',
    credentialId: 'SIAMTECH-DG-3720',
    verifyUrl: 'https://github.com/AomsinSPU',
    image: '/assets/projects/cert-graphics.svg',
    badge: 'Digital Assets'
  }
];
