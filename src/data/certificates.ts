import type { CertificateItem } from '../types';
import { getAssetUrl } from '../utils/asset';

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
    image: getAssetUrl('/assets/projects/cert-fullstack.svg'),
    badge: 'Full Stack'
  },
  {
    id: 'cert-microsoft-learn',
    title: {
      en: 'Microsoft Learn Achievements & Applied Skills Badges',
      th: 'เกียรติบัตรและความสำเร็จ Microsoft Learn (Applied Skills & Badges)'
    },
    issuer: 'Microsoft Learn',
    date: '2024 - 2026',
    credentialId: 'MS-LEARN-ACHIEVEMENTS',
    verifyUrl: 'https://learn.microsoft.com/th-th/users/me/achievements#badges-section',
    image: getAssetUrl('/assets/projects/cert-dotnet.svg'),
    badge: 'Microsoft Badges'
  },
  {
    id: 'cert-aws-genai',
    title: {
      en: 'AWS Academy Graduate - Generative AI Foundations',
      th: 'AWS Academy Graduate - Generative AI Foundations'
    },
    issuer: 'Amazon Web Services (AWS Training & Certification)',
    date: '2024',
    credentialId: 'AWS-GENAI-FOUNDATIONS',
    verifyUrl: 'https://aws.amazon.com/training/',
    image: getAssetUrl('/assets/projects/chatbot-preview.svg'),
    badge: 'Cloud & AI'
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
    image: getAssetUrl('/assets/projects/cert-graphics.svg'),
    badge: 'Digital Assets'
  }
];
