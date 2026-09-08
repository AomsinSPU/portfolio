import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolio';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
  general?: string;
}

export const Contact: React.FC = () => {
  const { t, loc } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = true;
      newErrors.general = t('contact.form.errorEmail');
    }
    if (!formData.subject.trim()) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      if (!newErrors.general) {
        newErrors.general = t('contact.form.errorRequired');
      }
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      let dispatched = false;

      // 1. If Formspree or custom webhook endpoint is configured
      if (endpoint && endpoint.startsWith('http')) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _replyto: formData.email,
          }),
        });
        if (res.ok) dispatched = true;
      }
      // 2. If Web3Forms free API key is configured
      else if (web3formsKey && web3formsKey.length > 5) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: `${formData.name} (Portfolio)`,
            to_email: personalInfo.email,
          }),
        });
        const data = await res.json();
        if (data.success) dispatched = true;
      }

      if (dispatched) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Trigger Celebration Confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
          });
        } catch (err) {
          // Safe fallback
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission could not be completed.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      setErrors({
        general: t('contact.form.errorRequired') || 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={t('contact.badge')}
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card hoverEffect={false} className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Direct Contact Channels
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">
                      {t('contact.info.email.label')}
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary-500 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">
                      {t('contact.info.phone.label')}
                    </span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary-500 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">
                      {t('contact.info.location.label')}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {loc(personalInfo.location)}
                    </span>
                  </div>
                </div>

                {/* Military Exemption */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">
                      {t('contact.info.military.label')}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {loc(personalInfo.militaryStatus)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links Box */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="secondary" size="sm" className="w-full" icon={<GithubIcon className="w-4 h-4" />}>
                    GitHub
                  </Button>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="secondary" size="sm" className="w-full" icon={<LinkedinIcon className="w-4 h-4" />}>
                    LinkedIn
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="p-6 sm:p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl">
              {/* Direct Dispatch Indicator Badge */}
              <div className="mb-5 flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <Badge variant="cyan" size="sm" icon={<Mail className="w-3.5 h-3.5" />}>
                  {t('contact.form.directInboxNote')}
                </Badge>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t('contact.form.successTitle')}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
                    {t('contact.form.successMsg')}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* General Error Alert */}
                  {errors.general && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.general}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('contact.form.name.label')} *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t('contact.form.name.placeholder')}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/20'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('contact.form.email.label')} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t('contact.form.email.placeholder')}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/20'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('contact.form.subject.label')} *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t('contact.form.subject.placeholder')}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/20'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('contact.form.message.label')} *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact.form.message.placeholder')}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/20'
                      }`}
                    />
                  </div>

                  {/* Action Buttons: Instant Submit */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
