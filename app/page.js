export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Complexo RJ"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Complexo RJ
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Soluções profissionais e serviços integrados para atender suas necessidades com excelência e segurança.
          </p>
        </div>
      </div>

      {/* Serviços Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Serviços</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nossos Serviços Profissionais
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Oferecemos uma ampla gama de serviços profissionais para atender suas necessidades.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Serviço 1',
                  description: 'Descrição detalhada do serviço 1 e seus benefícios.',
                },
                {
                  title: 'Serviço 2',
                  description: 'Descrição detalhada do serviço 2 e seus benefícios.',
                },
                {
                  title: 'Serviço 3',
                  description: 'Descrição detalhada do serviço 3 e seus benefícios.',
                },
                {
                  title: 'Serviço 4',
                  description: 'Descrição detalhada do serviço 4 e seus benefícios.',
                },
              ].map((service) => (
                <div key={service.title} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Pronto para começar?</span>
            <span className="block">Entre em contato conosco hoje.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Nossa equipe está pronta para atender suas necessidades com excelência e profissionalismo.
          </p>
          <a
            href="/contato"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
} 