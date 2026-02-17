import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-white font-sans-jp">
      <Header />

      {/* Hero */}
      <div className="bg-green-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif-jp mb-1">{t('aboutPage.heroTitle')}</h2>
          <p className="text-sm tracking-widest opacity-80">{t('aboutPage.heroSubtitle')}</p>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-5xl mx-auto px-4 py-14">

        {/* Company Overview Table */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-serif-jp text-3xl text-gray-800 mb-1">{t('aboutPage.companyHeading')}</h2>
            <p className="text-sm text-gray-500 tracking-widest">{t('aboutPage.companySubtitle')}</p>
          </div>

          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr className="border border-gray-300">
                <th className="bg-amber-900 text-white p-4 text-left align-top font-normal whitespace-nowrap w-36">
                  {t('aboutPage.tableName')}
                </th>
                <td className="p-4 text-gray-800 border-l border-gray-300">
                  {t('aboutPage.tableNameValue')}
                </td>
              </tr>
              <tr className="border border-gray-300 border-t-0">
                <th className="bg-amber-900 text-white p-4 text-left align-top font-normal whitespace-nowrap">
                  {t('aboutPage.tableAddress')}
                </th>
                <td className="p-4 text-gray-800 border-l border-gray-300">
                  {t('aboutPage.tableAddressValue')}
                </td>
              </tr>
              <tr className="border border-gray-300 border-t-0">
                <th className="bg-amber-900 text-white p-4 text-left align-top font-normal whitespace-nowrap">
                  {t('aboutPage.tableHours')}
                </th>
                <td className="p-4 text-gray-800 border-l border-gray-300">
                  {t('aboutPage.tableHoursValue')}
                </td>
              </tr>
              <tr className="border border-gray-300 border-t-0">
                <th className="bg-amber-900 text-white p-4 text-left align-top font-normal whitespace-nowrap">
                  {t('aboutPage.tableClosed')}
                </th>
                <td className="p-4 text-gray-800 border-l border-gray-300">
                  {t('aboutPage.tableClosedValue')}
                </td>
              </tr>
              <tr className="border border-gray-300 border-t-0">
                <th className="bg-amber-900 text-white p-4 text-left align-top font-normal whitespace-nowrap">
                  {t('aboutPage.tableTel')}
                </th>
                <td className="p-4 border-l border-gray-300">
                  <a href="tel:06-6713-8308" className="text-green-800 hover:text-green-600 font-bold">
                    06-6713-8308
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Company Images */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="overflow-hidden rounded">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img01.jpg"
                alt={t('aboutPage.img1Alt')}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img02.jpg"
                alt={t('aboutPage.img2Alt')}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Access Map */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-serif-jp text-3xl text-gray-800 mb-1">{t('aboutPage.mapHeading')}</h2>
            <p className="text-sm text-gray-500 tracking-widest">{t('aboutPage.mapSubtitle')}</p>
          </div>

          <div className="overflow-hidden rounded border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.339800821062!2d135.523265!3d34.646243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9994b3754dd912f!2z5Li45a6J5rSL5YKY77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1649917843683!5m2!1sja!2sjp"
              width="100%"
              height="400"
              className="border-0 block"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </div>

      {/* Contact Banner */}
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
