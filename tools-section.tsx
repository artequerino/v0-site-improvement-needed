"use client"

import { useState } from "react"
import { Bot, Target, MessageSquare, CheckCircle, ArrowRight, Play, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tools = [
  {
    id: "social-media",
    name: "Social Media Agent",
    subtitle: "IA para Redes Sociais",
    icon: MessageSquare,
    color: "from-blue-500 to-purple-600",
    description: "Automatize sua presença digital com IA que cria conteúdo, agenda posts e analisa performance.",
    features: [
      "Geração automática de conteúdo",
      "Agendamento inteligente",
      "Análise de engajamento",
      "Hashtags otimizadas",
      "Stories automáticos",
      "Relatórios detalhados",
    ],
    benefits: [
      { metric: "5x", label: "Mais engajamento" },
      { metric: "80%", label: "Menos tempo gasto" },
      { metric: "300%", label: "Mais seguidores" },
    ],
    demo: {
      title: "Veja a IA criando conteúdo em tempo real",
      description: "Nossa IA analisa seu nicho e cria posts únicos e envolventes",
    },
  },
  {
    id: "virtual-assistant",
    name: "Assistente Virtual",
    subtitle: "Automação Completa",
    icon: Bot,
    color: "from-green-500 to-teal-600",
    description: "Automatize tarefas repetitivas, gerencie clientes e otimize seu fluxo de trabalho.",
    features: [
      "Atendimento automatizado",
      "Gestão de leads",
      "Agendamento automático",
      "Follow-up inteligente",
      "Integração com CRM",
      "Chatbot personalizado",
    ],
    benefits: [
      { metric: "24/7", label: "Atendimento ativo" },
      { metric: "70%", label: "Redução de tarefas" },
      { metric: "150%", label: "Mais conversões" },
    ],
    demo: {
      title: "Assistente respondendo clientes automaticamente",
      description: "Veja como nossa IA cuida dos seus clientes enquanto você foca no estratégico",
    },
  },
  {
    id: "opportunity-explorer",
    name: "Exploradora de Oportunidades",
    subtitle: "Inteligência de Mercado",
    icon: Target,
    color: "from-orange-500 to-red-600",
    description: "Descubra nichos lucrativos, analise concorrência e encontre oportunidades de negócio.",
    features: [
      "Análise de mercado em tempo real",
      "Identificação de nichos",
      "Monitoramento de concorrentes",
      "Tendências de mercado",
      "Oportunidades de parcerias",
      "Relatórios de viabilidade",
    ],
    benefits: [
      { metric: "10x", label: "Mais oportunidades" },
      { metric: "90%", label: "Precisão nas análises" },
      { metric: "200%", label: "ROI médio" },
    ],
    demo: {
      title: "IA encontrando nichos lucrativos",
      description: "Descubra oportunidades que seus concorrentes ainda não viram",
    },
  },
]

const integrations = [
  { name: "Instagram", logo: "📱" },
  { name: "Facebook", logo: "📘" },
  { name: "LinkedIn", logo: "💼" },
  { name: "WhatsApp", logo: "💬" },
  { name: "Email", logo: "📧" },
  { name: "CRM", logo: "📊" },
]

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState("social-media")
  const [isPlaying, setIsPlaying] = useState<string | null>(null)

  const activeTool = tools.find((tool) => tool.id === activeTab)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
            Ferramentas Poderosas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Suas <span className="text-purple-600">Super Ferramentas</span> de IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três módulos especializados que trabalham juntos para transformar seu negócio digital
          </p>
        </div>

        {/* Tools Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 bg-white p-2 rounded-xl shadow-lg">
            {tools.map((tool) => (
              <TabsTrigger
                key={tool.id}
                value={tool.id}
                className="flex items-center space-x-3 p-4 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                <tool.icon className="h-5 w-5" />
                <div className="text-left hidden sm:block">
                  <div className="font-semibold">{tool.name}</div>
                  <div className="text-xs opacity-70">{tool.subtitle}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {tools.map((tool) => (
            <TabsContent key={tool.id} value={tool.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Tool Info */}
                <div>
                  <div
                    className={`inline-flex items-center space-x-3 p-3 rounded-full bg-gradient-to-r ${tool.color} text-white mb-6`}
                  >
                    <tool.icon className="h-6 w-6" />
                    <span className="font-semibold">{tool.name}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{tool.subtitle}</h3>
                  <p className="text-lg text-gray-600 mb-8">{tool.description}</p>

                  {/* Benefits */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {tool.benefits.map((benefit, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}
                        >
                          {benefit.metric}
                        </div>
                        <div className="text-sm text-gray-600">{benefit.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`bg-gradient-to-r ${tool.color} hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Experimentar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Demo/Preview */}
                <div className="relative">
                  <Card className="overflow-hidden shadow-2xl border-0">
                    <CardHeader className={`bg-gradient-to-r ${tool.color} text-white p-6`}>
                      <CardTitle className="flex items-center space-x-3">
                        <Play className="h-5 w-5" />
                        <span>Demo Interativa</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
                        <button
                          onClick={() => setIsPlaying(isPlaying === tool.id ? null : tool.id)}
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                        >
                          {isPlaying === tool.id ? (
                            <div className="w-6 h-6 bg-gray-800 rounded"></div>
                          ) : (
                            <div className="w-0 h-0 border-l-[20px] border-l-gray-800 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                          )}
                        </button>

                        {isPlaying === tool.id && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-white text-center p-6">
                              <Sparkles className="h-12 w-12 mx-auto mb-4 animate-pulse" />
                              <h4 className="text-xl font-semibold mb-2">{tool.demo.title}</h4>
                              <p className="text-gray-300">{tool.demo.description}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-6 bg-white">
                        <h4 className="font-semibold text-gray-900 mb-2">{tool.demo.title}</h4>
                        <p className="text-gray-600 text-sm">{tool.demo.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Integration Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Integração Total</h3>
                <p className="text-gray-300 text-lg">Conecte todas as suas ferramentas favoritas em um só lugar</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2">{integration.logo}</div>
                    <div className="text-sm font-medium">{integration.name}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-4">
                  + 50 integrações disponíveis
                </Badge>
                <p className="text-gray-300">Conecte com suas ferramentas existentes sem complicação</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Compare os Módulos</h3>

          <Card className="overflow-hidden shadow-xl border-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-semibold text-gray-900">Funcionalidade</th>
                    <th className="text-center p-6 font-semibold text-blue-600">Social Media</th>
                    <th className="text-center p-6 font-semibold text-green-600">Assistente Virtual</th>
                    <th className="text-center p-6 font-semibold text-orange-600">Exploradora</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-6 font-medium">Automação de Conteúdo</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 bg-gray-200 rounded mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 bg-gray-200 rounded mx-auto"></div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-6 font-medium">Atendimento ao Cliente</td>
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 bg-gray-200 rounded mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 bg-gray-200 rounded mx-auto"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Análise de Mercado</td>
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 bg-gray-200 rounded mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 bg-gray-200 rounded mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-6 font-medium">Relatórios Avançados</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Pronta para Começar?</h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Escolha seu módulo ou combine todos para resultados ainda mais poderosos
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg">
                  Começar Teste Grátis
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  Agendar Demonstração
                </Button>
              </div>

              <p className="text-sm text-purple-200 mt-4">✨ 7 dias grátis • Sem cartão de crédito • Suporte 24/7</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
