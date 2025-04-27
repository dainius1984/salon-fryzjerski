import React from 'react';

const QualitySection = () => {
  // Sample features to highlight quality
  const qualityFeatures = [
    {
      title: "Profesjonalizm",
      description: "Nasz zespół to doświadczeni styliści fryzur, regularnie uczestniczący w szkoleniach, by być na bieżąco z najnowszymi trendami.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Najwyższa jakość",
      description: "Używamy wyłącznie profesjonalnych kosmetyków renomowanych marek, dbając o zdrowie i piękno Twoich włosów.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Indywidualne podejście",
      description: "Każda klientka i klient są dla nas wyjątkowi. Dopasowujemy fryzurę do Twojego stylu, kształtu twarzy i osobowości.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Przyjazna atmosfera",
      description: "Wizyta u fryzjera powinna być przyjemnością. Zadbamy, byś czuł się komfortowo w miłej i relaksującej atmosferze.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Dlaczego warto nas wybrać?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            W salonie fryzjerskim "u Małgosi" dbamy nie tylko o piękno Twoich włosów, ale też o wyjątkowe doświadczenie podczas każdej wizyty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-purple-800 mb-6">Twoje zadowolenie jest naszym priorytetem</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Od ponad 15 lat spełniamy oczekiwania najbardziej wymagających klientów. Zaufaj naszemu doświadczeniu i dołącz do grona zadowolonych klientów.
          </p>
          <a href="/galeria" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-md">
            Zobacz nasze realizacje
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualitySection; 