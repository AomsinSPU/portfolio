import React from 'react';
import { Download, Sparkles, CheckCircle2, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, UserCheck } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { documentOptions, personalInfo } from '../../data/portfolio';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDocType: 'resume' | 'cv';
  onSelectDocType: (type: 'resume' | 'cv') => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  activeDocType,
  onSelectDocType,
}) => {
  const { t, loc, locList } = useLanguage();
  const doc = documentOptions[activeDocType];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={loc(doc.title)}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Document Type Selector Tabs inside Modal */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl">
            <button
              onClick={() => onSelectDocType('resume')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeDocType === 'resume'
                  ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('documents.resumeTab')}
            </button>
            <button
              onClick={() => onSelectDocType('cv')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeDocType === 'cv'
                  ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('documents.cvTab')}
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href={doc.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                {loc({ en: 'Open Original PDF', th: 'เปิดไฟล์ PDF ต้นฉบับ' })}
              </Button>
            </a>
            <a
              href={doc.pdfUrl}
              download={doc.filename}
              className="inline-flex"
            >
              <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                {t('documents.downloadPdf')}
              </Button>
            </a>
          </div>
        </div>

        {/* Document Highlights */}
        <div className="bg-primary-50/50 dark:bg-slate-800/50 border border-primary-100 dark:border-slate-700/60 rounded-xl p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {t('documents.highlightsTitle')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {locList(doc.highlights).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Realistic In-Browser Document Preview Sheet */}
        <div className="rounded-2xl border border-slate-300 dark:border-slate-700 shadow-2xl overflow-hidden bg-white text-slate-900 font-sans max-h-[65vh] overflow-y-auto">
          {activeDocType === 'resume' ? (
            /* ================= RESUME VIEW (2-COLUMN MODERN DARK/LIGHT) ================= */
            <div>
              {/* Header Dark Banner */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-800">
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    สรัล นิธิสมบัติสกุล
                  </h1>
                  <p className="text-sm sm:text-base font-semibold tracking-widest text-slate-300 mt-1 uppercase font-mono">
                    FULL-STACK DEVELOPER
                  </p>
                </div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl shrink-0 bg-slate-800">
                  <img
                    src={personalInfo.profileImage}
                    alt="สรัล นิธิสมบัติสกุล"
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Column (Dark Slate) */}
                <div className="md:col-span-4 bg-slate-900 text-slate-200 p-6 sm:p-7 space-y-6 border-r border-slate-800 text-xs">
                  {/* เกี่ยวกับ */}
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-700 mb-3">
                      เกี่ยวกับ
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-justify">
                      มีพื้นฐานทางวิชาการวิทยาการคอมพิวเตอร์และนวัตกรรมซอฟต์แวร์ มีความสามารถในการออกแบบพัฒนาและปรับใช้เว็บแอปพลิเคชันได้โดยใช้ React.js, Node.js และ ASP.NET Core MVC (C#) เรียนรู้ไว และสามารถทำงานร่วมกับทีมได้ดี มุ่งมั่นที่จะนำทักษะวิศวกรรมซอฟต์แวร์ที่แข็งแกร่งไปใช้ในบทบาท Full-Stack หรือ Backend Developer และ AI Engineer
                    </p>
                  </div>

                  {/* ช่องทางติดต่อ */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-slate-300">
                      <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                      <span>080-597-0938</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-300">
                      <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                      <span className="break-all">saral.nit@spumail.net</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-slate-300">
                      <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                      <span>154/53 อิสรภาพ กรุงเทพ, ไทย</span>
                    </div>
                  </div>

                  {/* ภาษา */}
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-700 mb-3">
                      ภาษา
                    </h3>
                    <ul className="space-y-1.5 text-slate-300">
                      <li className="flex items-center gap-2">• ไทย (ภาษาแม่)</li>
                      <li className="flex items-center gap-2">• อังกฤษ (พื้นฐาน)</li>
                    </ul>
                  </div>

                  {/* ความสามารถ */}
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-700 mb-3">
                      ความสามารถ
                    </h3>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• การแก้ปัญหา</li>
                      <li>• ความใส่ใจในรายละเอียด</li>
                      <li>• การทำงานเป็นทีม</li>
                      <li>• การบริหารจัดการเวลา</li>
                      <li>• การวิเคราะห์อย่างมีเหตุผล</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column (Light Content) */}
                <div className="md:col-span-8 bg-white p-6 sm:p-8 space-y-6 text-xs text-slate-800">
                  {/* ประสบการณ์ */}
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pb-1.5 border-b-2 border-slate-900 mb-3">
                      ป ร ะ ส บ ก า ร ณ์
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs sm:text-sm">
                        <span>3D Template &amp; Asset Design</span>
                        <span className="font-mono text-slate-500 font-normal">2022 – 2022</span>
                      </div>
                      <p className="font-semibold text-primary-700">Trump shop</p>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        <li>สร้างโมเดลเทมเพลต 3D และสร้างลวดลายบนโมเดล 3D</li>
                        <li>การปรับแต่งและแก้ไขแอสเซทให้เหมาะสมหรือให้สมบูรณ์มากขึ้น</li>
                        <li>ถ่ายภาพและคลิปเพื่อการโฆษณาหรือการโปรโมทในสินค้าต่าง ๆ</li>
                      </ul>
                    </div>
                  </div>

                  {/* ความสำเร็จ */}
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pb-1.5 border-b-2 border-slate-900 mb-3">
                      ค ว า ม สำ เ ร็ จ
                    </h3>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">
                        AWS Academy Graduate - Generative AI Foundations
                      </p>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Amazon Web Services Training and Certification (12 Hours)
                      </p>
                    </div>
                  </div>

                  {/* โปรเจกต์ */}
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pb-1.5 border-b-2 border-slate-900 mb-3">
                      โ ป ร เ จ ค
                    </h3>
                    <div className="space-y-1.5">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">
                        ระบบจองสนามแบดมินตันและบริหารจัดการสนาม (BadmitonNaJa)
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        <li>ตารางแสดงสถานะสนามว่างแบบเรียลไทม์ เลือกวันและช่วงเวลาที่ต้องการได้อย่างแม่นยำ</li>
                        <li>ระบบจัดการสิทธิ์ผู้ใช้งาน: ผู้ใช้ทั่วไปดูข้อมูล, สมาชิกทำการจองและยกเลิก, เจ้าของสนามบริหารจัดการ</li>
                      </ul>
                    </div>
                  </div>

                  {/* กิจกรรมนอกหลักสูตร */}
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pb-1.5 border-b-2 border-slate-900 mb-3">
                      กิ จ ก ร ร ม น อ ก ห ลั ก สู ต ร
                    </h3>
                    <div className="flex justify-between items-baseline text-slate-800">
                      <span className="font-bold">สมาชิก, สภาเด็กและเยาวชนเขตบางกอกใหญ่</span>
                      <span className="font-mono text-slate-500">2021 - 2025</span>
                    </div>
                  </div>

                  {/* การศึกษา */}
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pb-1.5 border-b-2 border-slate-900 mb-3">
                      ก า ร ศึ ก ษ า
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-baseline text-slate-900 font-bold">
                          <span>มหาวิทยาลัยศรีปทุม</span>
                          <span className="font-mono text-slate-500 font-normal">2023 - ปัจจุบัน</span>
                        </div>
                        <p className="text-slate-700">วิทยาการคอมและนวัตกรรมการพัฒนาซอฟต์แวร์ (GPAX 3.82)</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline text-slate-900 font-bold">
                          <span>วิทยาลัยเทคโนโลยีสยาม (สยามเทค)</span>
                          <span className="font-mono text-slate-500 font-normal">2021 - 2023</span>
                        </div>
                        <p className="text-slate-700">ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) ดิจิทัลกราฟิก (GPAX 3.72)</p>
                      </div>
                    </div>
                  </div>

                  {/* บุคคลอ้างอิง */}
                  <div className="pt-2 border-t border-slate-200">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pb-1.5 border-b-2 border-slate-900 mb-3">
                      บุ ค ค ล อ้ า ง อิ ง
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-slate-700">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <p className="font-bold text-slate-900 text-xs">ทรัมพ์ โชติวิไลวณิช</p>
                        <p className="text-slate-600">เจ้าของ Trump shop</p>
                        <p className="mt-1">โทร: 083-249-6546</p>
                        <p>อีเมล: trumpcho@gmail.com</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <p className="font-bold text-slate-900 text-xs">ศักดา ฟักขาว</p>
                        <p className="text-slate-600">หัวหน้าแผนกเทคโนโลยีสารสนเทศ สยามเทค</p>
                        <p className="mt-1">โทร: 061-4747974</p>
                        <p>อีเมล: sakda_f@siamtech.ac.th</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ================= CV VIEW (FULL PROFESSIONAL & WORK HISTORY) ================= */
            <div className="p-6 sm:p-10 space-y-6 text-xs text-slate-800">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-slate-900 pb-5">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                    สรัล นิธิสมบัติสกุล
                  </h1>
                  <p className="text-base font-bold text-primary-700 mt-0.5">
                    ตำแหน่ง Full-Stack Developer
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 text-xs mt-2 font-mono">
                    <span className="flex items-center gap-1">📞 080-597-0938</span>
                    <span className="flex items-center gap-1">✉️ saral.nit@spumail.net</span>
                    <span className="flex items-center gap-1">📍 154/53 ถนนอิสรภาพ แขวงวัดท่าพระ เขตบางกอกใหญ่ กรุงเทพฯ 10600</span>
                  </div>
                </div>
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-slate-300 shadow shrink-0">
                  <img
                    src={personalInfo.profileImage}
                    alt="สรัล นิธิสมบัติสกุล"
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>

              {/* บทคัดย่อ */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-justify text-slate-700 leading-relaxed">
                มีพื้นฐานทางวิชาการวิทยาการคอมพิวเตอร์และนวัตกรรมซอฟต์แวร์ มีความสามารถในการออกแบบพัฒนาและปรับใช้เว็บแอปพลิเคชันที่สามารถขยายขนาดได้โดยใช้ React.js, Node.js และ ASP.NET Core MVC (C#) มีความสามารถใช้งาน SQL และ NoSQL มีความคิดสร้างสรรค์ เรียนรู้ไว และสามารถทำงานร่วมกับทีมได้ดี มุ่งมั่นที่จะนำทักษะวิศวกรรมซอฟต์แวร์ที่แข็งแกร่งไปใช้ในบทบาท Full-Stack หรือ Backend Developer และ AI Engineer
              </div>

              {/* ทักษะ */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-3 text-slate-900">
                  ทักษะ (TECHNICAL SKILLS)
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 py-1 border-b border-slate-100">
                    <span className="sm:col-span-3 font-bold text-slate-900">Languages:</span>
                    <span className="sm:col-span-9 text-slate-700">C#, JavaScript (ES6+), SQL (T-SQL, MySQL), HTML5, CSS3</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 py-1 border-b border-slate-100">
                    <span className="sm:col-span-3 font-bold text-slate-900">Frameworks &amp; Libraries:</span>
                    <span className="sm:col-span-9 text-slate-700">React.js, Node.js, Express.js, ASP.NET Core MVC</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 py-1 border-b border-slate-100">
                    <span className="sm:col-span-3 font-bold text-slate-900">Databases:</span>
                    <span className="sm:col-span-9 text-slate-700">MS SQL Server, MySQL, NoSQL (MongoDB)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 py-1 border-b border-slate-100">
                    <span className="sm:col-span-3 font-bold text-slate-900">Tools &amp; Methodologies:</span>
                    <span className="sm:col-span-9 text-slate-700">Git/GitHub, RESTful APIs, OOP, MVC Architecture, Software Design Patterns</span>
                  </div>
                </div>
              </div>

              {/* ประสบการณ์ทำงาน */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-3 text-slate-900">
                  ประสบการณ์ทำงาน (WORK EXPERIENCE)
                </h3>
                <div className="space-y-4">
                  {/* Job 1 */}
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline font-bold text-slate-900">
                      <span>บริษัท Trump shop — Freelance 3D Template &amp; Asset Designer</span>
                      <span className="font-mono text-slate-500 font-normal text-[11px]">พฤษภาคม 2565 – ธันวาคม 2565 (รีโมท ระหว่างการศึกษา)</span>
                    </div>
                    <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-slate-700">
                      <li>สร้างโมเดลเทมเพลต 3D และสร้างลวดลายบนโมเดล 3D</li>
                      <li>การปรับแต่งและแก้ไขแอสเซทให้เหมาะสมหรือให้สมบูรณ์มากขึ้น</li>
                      <li>ถ่ายภาพและคลิปเพื่อการโฆษณาหรือการโปรโมทในสินค้าต่าง ๆ</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline font-bold text-slate-900">
                      <span>บริษัท AIA — Data entry</span>
                      <span className="font-mono text-slate-500 font-normal text-[11px]">มิถุนายน 2563 – พฤษภาคม 2564</span>
                    </div>
                    <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-slate-700">
                      <li>ประมวลผลและตรวจสอบข้อมูลประกันภัยเข้าสู่ฐานข้อมูล</li>
                      <li>ระบุและแก้ไขความไม่สอดคล้องของข้อมูล</li>
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline font-bold text-slate-900">
                      <span>บริษัท 4 มังกร — Graphic Designer</span>
                      <span className="font-mono text-slate-500 font-normal text-[11px]">ตุลาคม 2562 – ธันวาคม 2562 (ฝึกงาน ระหว่างการศึกษา)</span>
                    </div>
                    <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-slate-700">
                      <li>ออกแบบป้ายโฆษณาต่าง ๆ</li>
                      <li>ควบคุมเครื่องตัดสติกเกอร์และเครื่องตัดชิ้นงานอื่น ๆ</li>
                      <li>จัดส่งป้ายไวนิลในพื้นที่ต่าง ๆ</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* การศึกษา */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-3 text-slate-900">
                  การศึกษา (EDUCATION)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">มหาวิทยาลัยศรีปทุม</p>
                    <p className="text-slate-600 mt-0.5">คณะเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมซอฟต์แวร์</p>
                    <p className="text-[11px] font-mono text-slate-500 mt-1">ปีที่คาดว่าจะสำเร็จการศึกษา: 2570</p>
                    <p className="text-xs font-bold text-primary-700 mt-0.5">เกรดเฉลี่ยปัจจุบัน: 3.82</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">วิทยาลัยเทคโนโลยีสยาม (สยามเทค)</p>
                    <p className="text-slate-600 mt-0.5">ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาคอมพิวเตอร์กราฟิกดิจิทัล</p>
                    <p className="text-[11px] font-mono text-slate-500 mt-1">ปีที่สำเร็จการศึกษา: 2566</p>
                    <p className="text-xs font-bold text-primary-700 mt-0.5">เกรดเฉลี่ย: 3.72</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
