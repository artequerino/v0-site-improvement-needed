"use client"

import { ArrowRight, Play, Heart, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
                🚀 Plataforma de Empoderamento Feminino
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Descubra Sua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Verdadeira Vocação
                </span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Mais que um emprego, encontre sua missão. A SuperWoman conecta mulheres às oportunidades que alinham com
                suas habilidades naturais, interesses genuínos e aspirações pessoais.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Heart className="h-6 w-6 text-pink-400" />
                <div>
                  <div className="font-semibold">Descoberta Vocacional</div>
                  <div className="text-sm text-purple-200">IA personalizada</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Target className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Oportunidades Reais</div>
                  <div className="text-sm text-purple-200">3.2K+ vagas ativas</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Users className="h-6 w-6 text-green-400" />
                <div>
                  <div className="font-semibold">Comunidade</div>
                  <div className="text-sm text-purple-200">15K+ mulheres</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg">
                Descobrir Minha Vocação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`User ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="font-semibold">+15.000 mulheres</div>
                <div className="text-sm text-purple-200">já descobriram sua vocação</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">🎯 Teste Vocacional Rápido</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span>Qual sua maior motivação?</span>
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">✓</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span>Como você prefere trabalhar?</span>
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">✓</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/20 rounded-lg border-2 border-yellow-400">
                    <span>Quais são seus talentos naturais?</span>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sua vocação: Design & Criatividade</div>
                      <div className="text-sm opacity-90">847 oportunidades encontradas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
