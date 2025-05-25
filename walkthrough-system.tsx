"use client"

import { useState, useEffect, useRef } from "react"
import { X, ArrowLeft, ArrowRight, Play, Pause, RotateCcw, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface WalkthroughStep {
  id: string
  title: string
  description: string
  target: string
  position: "top" | "bottom" | "left" | "right"
  action?: "click" | "hover" | "scroll"
  demo?: {
    type: "typing" | "animation" | "highlight"
    content: string
  }
}

interface WalkthroughTour {
  id: string
  name: string
  description: string
  duration: string
  steps: WalkthroughStep[]
  category: "beginner" | "intermediate" | "advanced"
}

const tours: WalkthroughTour[] = [
  {
    id: "getting-started",
    name: "Primeiros Passos",
    description: "Conheça a interface e funcionalidades básicas",
    duration: "3 min",
    category: "beginner",
    steps: [
      {
        id: "welcome",
        title: "Bem-vinda à SuperWoman! 🎉",
        description:
          "Vamos fazer um tour rápido para você conhecer todas as funcionalidades incríveis que temos para você.",
        target: "dashboard-header",
        position: "bottom",
      },
      {
        id: "navigation",
        title: "Menu de Navegação",
        description:
          "Aqui você encontra todas as seções principais: Dashboard, Chat com IA, Comunidade e suas Automações.",
        target: "main-navigation",
        position: "bottom",
        action: "hover",
      },
      {
        id: "modules",
        title: "Seus Módulos Especializados",
        description:
          "Estes são seus três super poderes: Social Media Agent, Assistente Virtual e Exploradora de Oportunidades.",
        target: "modules-section",
        position: "top",
      },
      {
        id: "social-media",
        title: "Social Media Agent",
        description:
          "Automatize sua presença nas redes sociais com IA que cria conteúdo, agenda posts e analisa performance.",
        target: "social-media-module",
        position: "right",
        demo: {
          type: "typing",
          content: "Criando post sobre empreendedorismo feminino...",
        },
      },
      {
        id: "virtual-assistant",
        title: "Assistente Virtual",
        description: "Seu assistente pessoal que cuida do atendimento, gestão de leads e automação de tarefas.",
        target: "virtual-assistant-module",
        position: "top",
        demo: {
          type: "animation",
          content: "Respondendo cliente automaticamente...",
        },
      },
      {
        id: "opportunity-explorer",
        title: "Exploradora de Oportunidades",
        description: "Descubra nichos lucrativos e oportunidades de negócio com inteligência de mercado.",
        target: "opportunity-module",
        position: "left",
        demo: {
          type: "highlight",
          content: "Analisando tendências de mercado...",
        },
      },
    ],
  },
  {
    id: "social-media-deep",
    name: "Social Media Avançado",
    description: "Domine todas as funcionalidades do Social Media Agent",
    duration: "5 min",
    category: "intermediate",
    steps: [
      {
        id: "content-creation",
        title: "Criação de Conteúdo com IA",
        description: "Aprenda a usar nossa IA para criar posts únicos e envolventes para seu público.",
        target: "content-creator",
        position: "bottom",
        demo: {
          type: "typing",
          content: "Gerando post sobre dicas de produtividade...",
        },
      },
      {
        id: "scheduling",
        title: "Agendamento Inteligente",
        description: "Configure horários otimizados baseados no comportamento da sua audiência.",
        target: "scheduler",
        position: "top",
      },
      {
        id: "analytics",
        title: "Análise de Performance",
        description: "Monitore métricas importantes e otimize sua estratégia com dados reais.",
        target: "analytics-panel",
        position: "left",
      },
    ],
  },
  {
    id: "automation-mastery",
    name: "Automação Completa",
    description: "Configure automações avançadas para seu negócio",
    duration: "7 min",
    category: "advanced",
    steps: [
      {
        id: "workflow-setup",
        title: "Configuração de Fluxos",
        description: "Crie fluxos automatizados que conectam todas as suas ferramentas.",
        target: "workflow-builder",
        position: "bottom",
      },
      {
        id: "triggers",
        title: "Gatilhos Inteligentes",
        description: "Configure quando e como suas automações devem ser executadas.",
        target: "triggers-panel",
        position: "right",
      },
      {
        id: "integrations",
        title: "Integrações Avançadas",
        description: "Conecte com suas ferramentas favoritas para máxima eficiência.",
        target: "integrations-hub",
        position: "top",
      },
    ],
  },
]

interface WalkthroughSystemProps {
  isOpen: boolean
  onClose: () => void
  selectedTour?: string
}

export default function WalkthroughSystem({ isOpen, onClose, selectedTour }: WalkthroughSystemProps) {
  const [currentTour, setCurrentTour] = useState<WalkthroughTour | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (selectedTour) {
      const tour = tours.find((t) => t.id === selectedTour)
      if (tour) {
        setCurrentTour(tour)
        setCurrentStep(0)
        setIsPlaying(true)
      }
    }
  }, [selectedTour])

  useEffect(() => {
    if (isPlaying && currentTour) {
      intervalRef.current = setInterval(() => {
        if (currentStep < currentTour.steps.length - 1) {
          nextStep()
        } else {
          setIsPlaying(false)
        }
      }, 4000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, currentStep, currentTour])

  const nextStep = () => {
    if (currentTour && currentStep < currentTour.steps.length - 1) {
      const currentStepId = currentTour.steps[currentStep].id
      setCompletedSteps((prev) => [...prev, currentStepId])
      setCurrentStep(currentStep + 1)
      setShowDemo(false)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setShowDemo(false)
    }
  }

  const selectTour = (tour: WalkthroughTour) => {
    setCurrentTour(tour)
    setCurrentStep(0)
    setCompletedSteps([])
    setIsPlaying(false)
    setShowDemo(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const restartTour = () => {
    setCurrentStep(0)
    setCompletedSteps([])
    setIsPlaying(true)
    setShowDemo(false)
  }

  const completeTour = () => {
    if (currentTour) {
      const allStepIds = currentTour.steps.map((step) => step.id)
      setCompletedSteps(allStepIds)
      setIsPlaying(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-4 flex items-center justify-center">
        <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
          {!currentTour ? (
            // Tour Selection
            <div>
              <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div>
                  <h2 className="text-2xl font-bold">Walkthrough Guiado</h2>
                  <p className="text-purple-100">Escolha um tour para começar sua jornada</p>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tours.map((tour) => (
                    <Card
                      key={tour.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-2 hover:border-purple-300"
                      onClick={() => selectTour(tour)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            variant={
                              tour.category === "beginner"
                                ? "default"
                                : tour.category === "intermediate"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {tour.category === "beginner"
                              ? "Iniciante"
                              : tour.category === "intermediate"
                                ? "Intermediário"
                                : "Avançado"}
                          </Badge>
                          <span className="text-sm text-gray-500">{tour.duration}</span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tour.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{tour.description}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{tour.steps.length} etapas</span>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            Começar Tour
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">💡 Dica</h3>
                  <p className="text-gray-600 text-sm">
                    Recomendamos começar com "Primeiros Passos" se esta é sua primeira vez na plataforma. Você pode
                    pausar e retomar qualquer tour a qualquer momento.
                  </p>
                </div>
              </CardContent>
            </div>
          ) : (
            // Active Tour
            <div>
              <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentTour(null)}
                    className="text-white hover:bg-white/20"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div>
                    <h3 className="font-semibold">{currentTour.name}</h3>
                    <p className="text-sm text-purple-100">
                      Etapa {currentStep + 1} de {currentTour.steps.length}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={togglePlayPause} className="text-white hover:bg-white/20">
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={restartTour} className="text-white hover:bg-white/20">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <Progress value={(currentStep / currentTour.steps.length) * 100} className="mb-6" />

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{currentTour.steps[currentStep].title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{currentTour.steps[currentStep].description}</p>
                </div>

                {/* Demo Section */}
                {currentTour.steps[currentStep].demo && (
                  <Card className="mb-6 border-2 border-purple-200 bg-purple-50">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-purple-900">Demonstração Interativa</h4>
                        <Button
                          size="sm"
                          onClick={() => setShowDemo(!showDemo)}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          {showDemo ? "Ocultar" : "Ver Demo"}
                        </Button>
                      </div>

                      {showDemo && (
                        <div className="bg-white rounded-lg p-4 border">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-500 ml-2">SuperWoman Demo</span>
                          </div>

                          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                            <div className="flex items-center space-x-2">
                              <span>$</span>
                              <span className="animate-pulse">{currentTour.steps[currentStep].demo?.content}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Anterior</span>
                  </Button>

                  <div className="flex items-center space-x-2">
                    {currentTour.steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentStep
                            ? "bg-purple-600"
                            : completedSteps.includes(currentTour.steps[index].id)
                              ? "bg-green-500"
                              : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {currentStep === currentTour.steps.length - 1 ? (
                    <Button
                      onClick={completeTour}
                      className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Concluir Tour</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={nextStep}
                      className="bg-purple-600 hover:bg-purple-700 flex items-center space-x-2"
                    >
                      <span>Próximo</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Ações rápidas:</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? "Pausar" : "Reproduzir"} Auto
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setCurrentTour(null)}>
                        Trocar Tour
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
