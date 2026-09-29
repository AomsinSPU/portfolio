import type { CertificateItem } from '../types';
import { getAssetUrl } from '../utils/asset';

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-ms-github',
    title: {
      en: 'GitHub Fundamentals - Administration Basics & Product Features',
      th: 'พื้นฐาน GitHub - การดูแลระบบเบื้องต้นและการจัดการฟีเจอร์ระดับองค์กร'
    },
    issuer: 'Microsoft Learn',
    date: 'March 2025',
    credentialId: 'w2fu8c8n',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/mrsarannithisombatsakun-7713/achievements',
    pdfUrl: getAssetUrl('/assets/certificates/ms-learn-github.pdf'),
    image: getAssetUrl('/assets/certificates/cert-github.svg'),
    badge: 'GitHub & CI/CD'
  },
  {
    id: 'cert-ms-react',
    title: {
      en: 'Creating Your First Web Apps with React',
      th: 'การสร้างเว็บแอปพลิเคชันด้วย React (Components, Props & State)'
    },
    issuer: 'Microsoft Learn',
    date: 'March 2025',
    credentialId: 'jus4js7t',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/mrsarannithisombatsakun-7713/achievements',
    pdfUrl: getAssetUrl('/assets/certificates/ms-learn-react.pdf'),
    image: getAssetUrl('/assets/certificates/cert-react.svg'),
    badge: 'React Frontend'
  },
  {
    id: 'cert-ms-azure',
    title: {
      en: 'Microsoft Azure Fundamentals: Describe Cloud Concepts',
      th: 'พื้นฐาน Microsoft Azure - การประมวลผลและสถาปัตยกรรมบริการคลาวด์'
    },
    issuer: 'Microsoft Learn',
    date: 'March 2025',
    credentialId: 'apavptq7',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/mrsarannithisombatsakun-7713/achievements',
    pdfUrl: getAssetUrl('/assets/certificates/ms-learn-azure.pdf'),
    image: getAssetUrl('/assets/certificates/cert-azure.svg'),
    badge: 'Azure Cloud'
  },
  {
    id: 'cert-aws-genai',
    title: {
      en: 'AWS Academy Graduate - Generative AI Foundations',
      th: 'AWS Academy Graduate - พื้นฐานเทคโนโลยี Generative AI (12 Hours)'
    },
    issuer: 'Amazon Web Services (AWS Training & Certification)',
    date: 'September 2026',
    credentialId: '62510974-026e',
    verifyUrl: 'https://www.credly.com/badges/62510974-026e-4b27-89e7-1cb0b54fd14f',
    pdfUrl: getAssetUrl('/assets/certificates/aws-genai-academy.pdf'),
    image: getAssetUrl('/assets/certificates/cert-aws.svg'),
    badge: 'Generative AI'
  },
  {
    id: 'cert-digital-graphics',
    title: {
      en: 'High Vocational Certificate in Digital Graphics (Outstanding GPAX 3.72)',
      th: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาดิจิทัลกราฟิก (เกรดเฉลี่ย 3.72)'
    },
    issuer: 'Siam Technological College',
    date: '2023',
    credentialId: 'SIAMTECH-DG-3720',
    verifyUrl: 'https://github.com/AomsinSPU',
    image: getAssetUrl('/assets/projects/cert-graphics.svg'),
    badge: 'Digital Assets'
  }
];
