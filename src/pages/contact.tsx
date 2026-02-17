import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    email: '',
    phone: '',
    message: '',
    privacyConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'network-error' | null>(null);

  const submitUrl = 'https://readdy.ai/api/form/d4cnb9u820p5j87gafa0';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const params = new URLSearchParams();
      params.append('firstName', formData.firstName);
      params.append('lastName', formData.lastName);
      params.append('firstNameKana', formData.firstNameKana);
      params.append('lastNameKana', formData.lastNameKana);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('message', formData.message);
      params.append('privacyConsent', formData.privacyConsent.toString());

      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          firstNameKana: '',
          lastNameKana: '',
          email: '',
          phone: '',
          message: '',
          privacyConsent: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('network-error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const thClass = 'bg-amber-900 text-white p-4 text-left align-top text-sm font-normal whitespace-nowrap w-36';
  const inputClass = 'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 text-sm';

  return (
    <div className="min-h-screen bg-white font-sans-jp">
      <Header />

      {/* Hero */}
      <div className="bg-green-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif-jp mb-1">{t('contactPage.heroTitle')}</h2>
          <p className="text-sm tracking-widest opacity-80">{t('contactPage.heroSubtitle')}</p>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Form */}
          <div className="flex-1">
            <div className="mb-8">
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('contactPage.intro1')}<br />
                {t('contactPage.intro2')}<br />
                {t('contactPage.intro3')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-0">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {/* Name */}
                  <tr className="border border-gray-300">
                    <th className={thClass}>
                      {t('contactPage.formName')}
                      <span className="ml-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded">
                        {t('contactPage.required')}
                      </span>
                    </th>
                    <td className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <span className="text-xs text-gray-500 mb-1 block">{t('contactPage.formNameSei')}</span>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className={inputClass}
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-gray-500 mb-1 block">{t('contactPage.formNameMei')}</span>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Furigana */}
                  <tr className="border border-gray-300 border-t-0">
                    <th className={thClass}>{t('contactPage.formFurigana')}</th>
                    <td className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <span className="text-xs text-gray-500 mb-1 block">{t('contactPage.formFuriganaSei')}</span>
                          <input
                            type="text"
                            name="lastNameKana"
                            value={formData.lastNameKana}
                            onChange={handleInputChange}
                            className={inputClass}
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-gray-500 mb-1 block">{t('contactPage.formFuriganaMei')}</span>
                          <input
                            type="text"
                            name="firstNameKana"
                            value={formData.firstNameKana}
                            onChange={handleInputChange}
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Email */}
                  <tr className="border border-gray-300 border-t-0">
                    <th className={thClass}>
                      {t('contactPage.formEmail')}
                      <span className="ml-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded">
                        {t('contactPage.required')}
                      </span>
                    </th>
                    <td className="p-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={inputClass}
                      />
                    </td>
                  </tr>

                  {/* Phone */}
                  <tr className="border border-gray-300 border-t-0">
                    <th className={thClass}>{t('contactPage.formPhone')}</th>
                    <td className="p-4">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </td>
                  </tr>

                  {/* Message */}
                  <tr className="border border-gray-300 border-t-0">
                    <th className={thClass}>
                      {t('contactPage.formMessage')}
                      <span className="ml-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded">
                        {t('contactPage.required')}
                      </span>
                    </th>
                    <td className="p-4">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        maxLength={500}
                        rows={8}
                        placeholder={t('contactPage.formMessagePlaceholder')}
                        className={`${inputClass} resize-vertical`}
                      />
                      <div className="text-xs text-gray-400 mt-1 text-right">
                        {formData.message.length}/500{t('contactPage.formMessageCount')}
                      </div>
                    </td>
                  </tr>

                  {/* Privacy */}
                  <tr className="border border-gray-300 border-t-0">
                    <th className={thClass}>
                      {t('contactPage.formPrivacy')}
                      <span className="ml-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded">
                        {t('contactPage.required')}
                      </span>
                    </th>
                    <td className="p-4">
                      <div className="bg-gray-50 p-4 rounded mb-4 max-h-56 overflow-y-auto text-xs text-gray-700 leading-relaxed space-y-3">
                        <p>{t('contactPage.privacyText1')}</p>
                        <p className="font-bold">{t('contactPage.privacyH1')}</p>
                        <p>{t('contactPage.privacyP1')}</p>
                        <p className="font-bold">{t('contactPage.privacyH2')}</p>
                        <p>{t('contactPage.privacyP2')}</p>
                        <p className="font-bold">{t('contactPage.privacyH3')}</p>
                        <p>{t('contactPage.privacyP3')}</p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>{t('contactPage.privacyList1')}</li>
                          <li>{t('contactPage.privacyList2')}</li>
                          <li>{t('contactPage.privacyList3')}</li>
                        </ul>
                        <p className="font-bold">{t('contactPage.privacyH4')}</p>
                        <p>{t('contactPage.privacyP4')}</p>
                        <p className="font-bold">{t('contactPage.privacyH5')}</p>
                        <p>{t('contactPage.privacyP5')}</p>
                        <p className="font-bold">{t('contactPage.privacyH6')}</p>
                        <p>{t('contactPage.privacyP6')}</p>
                        <p className="font-bold">{t('contactPage.privacyH7')}</p>
                        <p>
                          {t('contactPage.privacyP7')}<br />
                          {t('contactPage.privacyCompany')}<br />
                          {t('contactPage.privacyPostal')}<br />
                          {t('contactPage.privacyAddress')}<br />
                          {t('contactPage.privacyTel')}
                        </p>
                      </div>
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name="privacyConsent"
                          checked={formData.privacyConsent}
                          onChange={handleInputChange}
                          required
                          className="h-4 w-4 text-green-600 border-gray-300 rounded"
                        />
                        {t('contactPage.formPrivacyAgree')}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.privacyConsent}
                  className="bg-green-800 text-white px-12 py-3 rounded hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? t('contactPage.submitting') : t('contactPage.submit')}
                </button>
              </div>

              {submitStatus && (
                <div className={`mt-4 text-center p-4 rounded text-sm ${
                  submitStatus === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus === 'success' && t('contactPage.submitSuccess')}
                  {submitStatus === 'error' && t('contactPage.submitError')}
                  {submitStatus === 'network-error' && t('contactPage.submitErrorNetwork')}
                </div>
              )}
            </form>
          </div>

          {/* Info sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="border border-gray-200 rounded p-6">
              <h3 className="font-serif-jp text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-200">
                {t('contactPage.infoTitle')}
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <i className="ri-phone-line text-green-700 text-lg mt-0.5"></i>
                  <div>
                    <div className="font-bold text-gray-800">{t('contactPage.infoPhone')}</div>
                    <div className="text-xs text-gray-500 mt-1">{t('contactPage.infoHours')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-mail-line text-green-700 text-lg mt-0.5"></i>
                  <div>
                    <div className="font-bold text-gray-800">{t('contactPage.infoEmail')}</div>
                    <div className="text-xs text-gray-500 mt-1">{t('contactPage.infoEmailSub')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom contact banner */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif-jp text-3xl text-gray-800 mb-1">{t('home.contact.heading')}</h2>
            <p className="text-sm text-gray-500 tracking-widest">{t('home.contact.subtitle')}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_tel_contact.png"
                  alt="tel"
                  className="h-6"
                />
                <span className="text-2xl font-bold text-gray-800">{t('home.contact.phone')}</span>
              </div>
              <p className="text-sm text-gray-600">{t('home.contact.businessHours')}</p>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors text-sm"
              >
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_mail_contact.png"
                  alt="mail"
                  className="h-5"
                />
                {t('home.contact.emailButton')}
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://maruyasu19.thebase.in/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg"
                alt={t('home.contact.onlineStoreAlt')}
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
