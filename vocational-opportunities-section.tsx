"use client"

import { useState } from "react"
import { Heart, Star, ArrowRight, Search, Filter, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const vocationalAreas = [
  {
    id: "creative",
    name: "Criatividade & Design",
    icon: "🎨",
    description: "Explore sua criatividade em design, arte e comunicação visual",
    opportunities: 847,
    avgSalary: "R$ 3.500 - R$ 8.000",
    growth: "+45%",
    skills: ["Design Gráfico", "UX/UI", "Ilustração", "Branding", "Fotografia"],
    featured: [
      {
        title: "Designer UX/UI Remoto",
        company: "TechStart Brasil",
        location: "100% Remoto",
        salary: "R$ 4.500 - R$ 7.000",
        type: "CLT",
        tags: ["Figma", "Prototipagem", "Research"],
        urgent: true,
      },
      {
        title: "Ilustradora Freelancer",
        company: "Agência Criativa",
        location: "Híbrido - SP",
        salary: "R$ 80/hora",
        type: "Freelancer",
        tags: ["Ilustração Digital", "Adobe", "Storytelling"],
        urgent: false,
      },
    ],
  },
  {
    id: "technology",
    name: "Tecnologia & Inovação",
    icon: "💻",
    description: "Desenvolva sua carreira em programação, dados e tecnologia",
    opportunities: 1234,
    avgSalary: "R$ 4.000 - R$ 12.000",
    growth: "+67%",
    skills: ["Programação", "Análise de Dados", "Cloud", "IA", "Cybersecurity"],
    featured: [
      {
        title: "Desenvolvedora Frontend",
        company: "Startup Inovadora",
        location: "100% Remoto",
        salary: "R$ 6.000 - R$ 10.000",
        type: "CLT",
        tags: ["React", "TypeScript", "Next.js"],
        urgent: true,
      },
      {
        title: "Analista de Dados Jr",
        company: "E-commerce Nacional",
        location: "Remoto",
        salary: "R$ 4.500 - R$ 6.500",
        type: "CLT",
        tags: ["Python", "SQL", "Power BI"],
        urgent: false,
      },
    ],
  },
  {
    id: "business",
    name: "Negócios & Empreendedorismo",
    icon: "📈",
    description: "Lidere projetos, gerencie equipes e desenvolva estratégias",
    opportunities: 623,
    avgSalary: "R$ 3.000 - R$ 15.000",
    growth: "+38%",
    skills: ["Gestão", "Marketing", "Vendas", "Estratégia", "Liderança"],
    featured: [
      {
        title: "Gerente de Projetos",
        company: "Consultoria Digital",
        location: "Híbrido - RJ",
        salary: "R$ 7.000 - R$ 12.000",
        type: "CLT",
        tags: ["Scrum", "Agile", "Liderança"],
        urgent: false,
      },
      {
        title: "Consultora de Marketing",
        company: "Agência Boutique",
        location: "100% Remoto",
        salary: "R$ 5.000 - R$ 9.000",
        type: "PJ",
        tags: ["Digital Marketing", "SEO", "Analytics"],
        urgent: true,
      },
    ],
  },
  {
    id: "education",
    name: "Educação & Desenvolvimento",
    icon: "📚",
    description: "Ensine, treine e desenvolva pessoas e organizações",
    opportunities: 456,
    avgSalary: "R$ 2.500 - R$ 8.000",
    growth: "+52%",
    skills: ["Ensino", "Treinamento", "Coaching", "Conteúdo", "Mentoria"],
    featured: [
      {
        title: "Instrutora Online",
        company: "Plataforma EAD",
        location: "100% Remoto",
        salary: "R$ 3.500 - R$ 6.000",
        type: "PJ",
        tags: ["Criação de Curso", "Didática", "Vídeo"],
        urgent: false,
      },
      {
        title: "Coach de Carreira",
        company: "Consultoria RH",
        location: "Remoto",
        salary: "R$ 4.000 - R$ 8.000",
        type: "Freelancer",
        tags: ["Coaching", "Desenvolvimento", "Mentoria"],
        urgent: true,
      },
    ],
  },
]

const vocationalTests = [
  {
    name: "Descoberta Vocacional Completa",
    duration: "15 min",
    questions: 45,
    description: "Identifique suas principais vocações e áreas de interesse",
    completed: 12847,
    rating: 4.9,
  },
  {
    name: "Perfil de Habilidades Digitais",
    duration: "10 min",
    questions: 30,
    description: "Avalie suas competências para o trabalho remoto",
    completed: 8934,
    rating: 4.8,
  },
  {
    name: "Teste de Personalidade Profissional",
    duration: "12 min",
    questions: 36,
    description: "Descubra seu estilo de trabalho e ambiente ideal",
    completed: 15623,
    rating: 4.9,
  },
]

export default function VocationalOpportunitiesSection() {
  const [activeArea, setActiveArea] = useState("creative")
  const [searchTerm, setSearchTerm] = useState("")

  const activeVocationalArea = vocationalAreas.find((area) => area.id === activeArea)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
            Elemento Vocacional Principal
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Descubra Sua <span className="text-purple-600">Verdadeira Vocação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Mais que um emprego, encontre sua missão. Conectamos mulheres às oportunidades que alinham com suas
            habilidades naturais, interesses genuínos e aspirações pessoais.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3.2K+</div>
              <div className="text-sm text-gray-600">Oportunidades Ativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">89%</div>
              <div className="text-sm text-gray-600">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15K+</div>
              <div className="text-sm text-gray-600">Mulheres Conectadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">R$ 6.8K</div>
              <div className="text-sm text-gray-600">Salário Médio</div>
            </div>
          </div>
        </div>

        {/* Vocational Discovery Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">🎯 Descubra Sua Vocação em 15 Minutos</h3>
                  <p className="text-xl text-purple-100 mb-8">
                    Nossa IA analisa suas respostas e conecta você com oportunidades que realmente fazem sentido para
                    seu perfil único.
                  </p>

                  <div className="space-y-4 mb-8">
                    {vocationalTests.map((test, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                      >
                        <div>
                          <div className="font-semibold">{test.name}</div>
                          <div className="text-sm text-purple-200">
                            {test.duration} • {test.questions} perguntas
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm ml-1">{test.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg">
                    Começar Descoberta Vocacional
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                    <h4 className="text-xl font-semibold mb-6">Últimas Descobertas</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🎨</span>
                        </div>
                        <div>
                          <div className="font-medium">Maria descobriu: Design UX</div>
                          <div className="text-sm text-purple-200">Conectada com 3 oportunidades</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">💻</span>
                        </div>
                        <div>
                          <div className="font-medium">Ana descobriu: Análise de Dados</div>
                          <div className="text-sm text-purple-200">Iniciou curso especializado</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">📈</span>
                        </div>
                        <div>
                          <div className="font-medium">Julia descobriu: Marketing Digital</div>
                          <div className="text-sm text-purple-200">Aumentou renda em 150%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vocational Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Áreas Vocacionais em Destaque</h3>

          <Tabs value={activeArea} onValueChange={setActiveArea} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-gray-100 p-2 rounded-xl">
              {vocationalAreas.map((area) => (
                <TabsTrigger
                  key={area.id}
                  value={area.id}
                  className="flex items-center space-x-2 p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <span className="text-2xl">{area.icon}</span>
                  <span className="hidden sm:block font-medium">{area.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {vocationalAreas.map((area) => (
              <TabsContent key={area.id} value={area.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Area Info */}
                  <div className="lg:col-span-1">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3">
                          <span className="text-3xl">{area.icon}</span>
                          <span>{area.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{area.description}</p>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Oportunidades</span>
                            <span className="font-semibold text-purple-600">{area.opportunities}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Faixa Salarial</span>
                            <span className="font-semibold">{area.avgSalary}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Crescimento</span>
                            <span className="font-semibold text-green-600">{area.growth}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Habilidades Principais</h4>
                          <div className="flex flex-wrap gap-2">
                            {area.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Explorar Área
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Featured Opportunities */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-semibold">Oportunidades em Destaque</h4>
                      <Button variant="outline" size="sm">
                        Ver Todas ({area.opportunities})
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {area.featured.map((opportunity, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <div className="flex items-center space-x-2 mb-2">
                                  <h5 className="font-semibold text-lg">{opportunity.title}</h5>
                                  {opportunity.urgent && (
                                    <Badge variant="destructive" className="text-xs">
                                      Urgente
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-gray-600 font-medium">{opportunity.company}</p>
                              </div>
                              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                Candidatar
                              </Button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-600">{opportunity.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <DollarSign className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-600">{opportunity.salary}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-600">{opportunity.type}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {opportunity.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Search and Filter */}
        <div className="mb-16">
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Encontre Sua Oportunidade Ideal</h3>

              <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                <div className="flex-1">
                  <Input
                    placeholder="Buscar por cargo, empresa ou habilidade..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
                <Button variant="outline" className="h-12 px-6">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <Badge variant="secondary" className="cursor-pointer hover:bg-purple-100">
                  100% Remoto
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-purple-100">
                  Meio Período
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-purple-100">
                  Freelancer
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-purple-100">
                  Iniciante
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-purple-100">
                  Sem Experiência
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Histórias de Transformação Vocacional</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Conheça mulheres que descobriram sua verdadeira vocação e transformaram suas vidas profissionais
          </p>

          <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg">
            Ver Histórias Inspiradoras
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
