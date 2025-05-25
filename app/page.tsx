import WalkthroughTrigger from "../walkthrough-trigger"

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Simulated Dashboard Header */}
        <div id="dashboard-header" className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard SuperWoman</h1>
          <p className="text-gray-600">Bem-vinda de volta! Vamos continuar transformando seu negócio.</p>
        </div>

        {/* Simulated Navigation */}
        <nav id="main-navigation" className="mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex space-x-6">
            <a href="#" className="text-purple-600 font-semibold">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Chat IA
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Comunidade
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Automações
            </a>
          </div>
        </nav>

        {/* Walkthrough Trigger Component */}
        <WalkthroughTrigger />

        {/* Simulated Modules Section */}
        <div id="modules-section" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div id="social-media-module" className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Social Media Agent</h3>
            <p className="text-gray-600 text-sm">Automatize sua presença nas redes sociais</p>
          </div>

          <div id="virtual-assistant-module" className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Assistente Virtual</h3>
            <p className="text-gray-600 text-sm">Automatize atendimento e gestão de leads</p>
          </div>

          <div id="opportunity-module" className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Exploradora de Oportunidades</h3>
            <p className="text-gray-600 text-sm">Descubra nichos e oportunidades de mercado</p>
          </div>
        </div>
      </div>
    </main>
  )
}
