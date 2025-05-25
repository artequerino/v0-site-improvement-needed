"use client"

import { useState } from "react"
import { HelpCircle, Play, BookOpen, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import WalkthroughSystem from "./walkthrough-system"

export default function WalkthroughTrigger() {
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState<string>()

  const quickTours = [
    {
      id: "getting-started",
      name: "Primeiros Passos",
      icon: Play,
      color: "bg-green-500",
      description: "Tour básico de 3 minutos",
    },
    {
      id: "social-media-deep",
      name: "Social Media",
      icon: BookOpen,
      color: "bg-blue-500",
      description: "Funcionalidades avançadas",
    },
    {
      id: "automation-mastery",
      name: "Automação",
      icon: Zap,
      color: "bg-purple-500",
      description: "Configurações avançadas",
    },
  ]

  const startTour = (tourId?: string) => {
    setSelectedTour(tourId)
    setIsWalkthroughOpen(true)
  }

  return (
    <>
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => startTour()}
          className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
          size="lg"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Quick Tour Cards */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Tours Guiados</h3>
            <p className="text-gray-600">Aprenda a usar a plataforma com nossos tours interativos</p>
          </div>
          <Button onClick={() => startTour()} variant="outline" className="flex items-center space-x-2">
            <Play className="h-4 w-4" />
            <span>Ver Todos os Tours</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickTours.map((tour) => (
            <Card
              key={tour.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-purple-300 group"
              onClick={() => startTour(tour.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`p-3 rounded-full ${tour.color} text-white group-hover:scale-110 transition-transform duration-200`}
                  >
                    <tour.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{tour.name}</h4>
                    <p className="text-sm text-gray-600">{tour.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    Tour Interativo
                  </Badge>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 group-hover:scale-105 transition-transform duration-200"
                  >
                    Iniciar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Walkthrough System */}
      <WalkthroughSystem
        isOpen={isWalkthroughOpen}
        onClose={() => setIsWalkthroughOpen(false)}
        selectedTour={selectedTour}
      />
    </>
  )
}
