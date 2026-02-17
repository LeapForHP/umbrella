import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BraidUmbrellaPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-white font-sans-jp">
      <Header />

      {/* Hero */}
      <div className="bg-green-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif-jp mb-1">{t('braidPage.heroTitle')}</h2>
          <p className="text-sm tracking-widest opacity-80">{t('braidPage.heroSubtitle')}</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-green-700 transition-colors">
              {t('braidPage.breadcrumbHome')}
            </Link>
            <span>/</span>
            <span className="text-gray-800">{t('braidPage.breadcrumbCurrent')}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-14">

        {/* Catchphrase */}
        <div className="text-center mb-14">
          <p className="text-xl text-gray-700 font-serif-jp leading-relaxed">
            {t('braidPage.catchphrase')}
          </p>
        </div>

        <div className="space-y-20">

          {/* Section 1: image left / text right */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="overflow-hidden rounded">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img01.jpg"
                alt={t('braidPage.img1Alt')}
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-serif-jp text-green-800 border-b-2 border-green-800 pb-2 inline-block">
                {t('braidPage.sec1Heading')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {t('braidPage.sec1Body')}
              </p>
            </div>
          </div>

          {/* Section 2: text left / image right */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 md:order-1">
              <h2 className="text-2xl font-serif-jp text-green-800 border-b-2 border-green-800 pb-2 inline-block">
                {t('braidPage.sec2Heading')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {t('braidPage.sec2Body')}
              </p>
            </div>
            <div className="overflow-hidden rounded md:order-2">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img02.jpg"
                alt={t('braidPage.img2Alt')}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Center text */}
          <div className="text-center py-6 border-t border-b border-gray-200">
            <p className="text-lg text-gray-700 font-serif-jp leading-relaxed max-w-2xl mx-auto">
              {t('braidPage.centerText')}
            </p>
          </div>

          {/* Section 3: image left / text right */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="overflow-hidden rounded">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img03.png"
                alt={t('braidPage.img3Alt')}
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-serif-jp text-green-800 border-b-2 border-green-800 pb-2 inline-block">
                {t('braidPage.sec3Heading')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {t('braidPage.sec3Body')}
              </p>
            </div>
          </div>

          {/* Video section */}
          <div className="bg-gray-50 rounded p-8">
            <div className="text-center mb-8">
              <h3 className="font-serif-jp text-3xl text-gray-800 mb-1">{t('braidPage.videoHeading')}</h3>
              <p className="text-sm text-gray-500 tracking-widest">{t('braidPage.videoSubtitle')}</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="aspect-video mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Q566FYjFcA4"
                  title={t('braidPage.heroTitle')}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>

              <div className="text-center text-sm text-gray-600 space-y-1">
                <p>{t('braidPage.awardOmotenashi')}</p>
                <p>{t('braidPage.awardUtility')}</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Contact Banner */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif-jp text-3xl text-gray-800 mb-1">{t('braidPage.contactHeading')}</h2>
            <p className="text-sm text-gray-500 tracking-widest">{t('braidPage.contactSubtitle')}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_tel_contact.png"
                  alt="tel"
                  className="h-6"
                />
                <span className="text-2xl font-bold text-gray-800">{t('braidPage.contactPhone')}</span>
              </div>
              <p className="text-sm text-gray-600">{t('braidPage.contactHours')}</p>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors text-sm"
              >
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_mail_contact.png"
                  alt="mail"
                  className="h-5"
                />
                {t('braidPage.contactEmail')}
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://maruyasu19.thebase.in/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg"
                alt={t('braidPage.onlineStoreAlt')}
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BraidUmbrellaPage;
