import React from 'react';

const ContactMap = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Google Maps Embed */}
        <div className="w-full max-w-sm mx-auto md:max-w-none">
          <div className="rounded-lg shadow-md overflow-hidden w-full h-80">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0761270182253!2d16.953019776927796!3d51.0915542430224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26e2df42afb%3A0xf8eba71141e507f1!2sOsma%C5%84czyka%208A%2C%2054-058%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1719239531018!5m2!1spl!2spl"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja salonu U Małgosi"
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-2 text-sm">
            Salon Fryzjerski "U Małgosi"
          </p>
        </div>

        {/* Opening Hours & Contact Info Summary */}
        <div>
          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            Godziny otwarcia i kontakt
          </h2>

          {/* Opening Hours */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
              Godziny otwarcia:
            </h3>
            <p className="text-gray-700">
              Pn - Pt: 10:00 - 18:00
            </p>
            <p className="text-gray-700">
              Sb: 9:00 - 14:00
            </p>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
              Dane kontaktowe:
            </h3>
            <p className="text-gray-700 mb-1">
              Salon Fryzjerski "U Małgosi"
            </p>
            <p className="text-gray-700 mb-2 flex items-center">
              ul. Osmańczyka 8 A, 54-058 Wrocław
            </p>
            <p className="text-gray-700 mb-2 flex items-center">
              +48 539 919 065
            </p>
            <a
              href="https://www.facebook.com/FryzjerkaMalgosia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-600 hover:underline flex items-center"
            >
              /FryzjerkaMalgosia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap; 