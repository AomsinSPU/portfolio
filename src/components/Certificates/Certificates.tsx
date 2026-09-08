import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ZoomIn, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { certificatesData } from '../../data/certificates';
import { CertificateItem } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

export const Certificates: React.FC = () => {
  const { t, loc } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('certificates.badge')}
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title={t('certificates.title')}
          subtitle={t('certificates.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className="flex"
            >
              <Card
                hoverEffect
                className="p-0 overflow-hidden flex flex-col justify-between w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 group"
              >
                <div>
                  {/* Thumbnail */}
                  <div
                    className="relative h-44 bg-slate-950 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={loc(cert.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="p-2 rounded-full bg-slate-900/80 text-white backdrop-blur-sm">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <Badge variant="cyan" size="sm">
                        {cert.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="text-[11px] font-mono text-primary-600 dark:text-primary-400 font-semibold mb-1">
                      {cert.issuer} • {cert.date}
                    </div>
                    <h3
                      className="text-sm font-bold text-slate-900 dark:text-white leading-snug cursor-pointer hover:text-primary-500 transition-colors"
                      onClick={() => setSelectedCert(cert)}
                    >
                      {loc(cert.title)}
                    </h3>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  {cert.credentialId ? (
                    <span className="text-[10px] font-mono text-slate-400">
                      ID: {cert.credentialId}
                    </span>
                  ) : <span />}

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 inline-flex items-center gap-1"
                  >
                    {t('certificates.preview')}
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Zoom Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert ? loc(selectedCert.title) : ''}
        maxWidth="2xl"
      >
        {selectedCert && (
          <div className="space-y-4 text-center">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950">
              <img
                src={selectedCert.image}
                alt={loc(selectedCert.title)}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {selectedCert.issuer}
                </p>
                {selectedCert.credentialId && (
                  <p className="text-xs font-mono text-slate-500">
                    Credential ID: {selectedCert.credentialId}
                  </p>
                )}
              </div>

              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="sm" icon={<ShieldCheck className="w-4 h-4" />}>
                    {t('certificates.verify')}
                  </Button>
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
