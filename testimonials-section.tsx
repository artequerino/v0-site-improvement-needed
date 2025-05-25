import { Star, Quote, TrendingUp, Users, DollarSign } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Consultora de Marketing Digital",
    company: "Silva Marketing",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Em 6 meses usando a SuperWoman, consegui aumentar minha receita em 300% e automatizar 80% dos meus processos. A plataforma mudou completamente meu negócio!",
    metrics: {
      revenue: "+300%",
      automation: "80%",
      clients: "+150",
    },
    rating: 5,
  },
  {
    id: 2,
    name: "Ana Carolina",
    role: "E-commerce Owner",
    company: "Loja Feminina AC",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Nunca pensei que conseguiria gerenciar sozinha um e-commerce de 6 dígitos. O módulo de Assistente Virtual me deu a confiança e as ferramentas que eu precisava.",
    metrics: {
      revenue: "6 dígitos",
      time: "-70%",
      growth: "+250%",
    },
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Santos",
    role: "Coach de Carreira",
    company: "Carreira em Foco",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "O Social Media Agent revolucionou minha presença online. Agora tenho conteúdo consistente todos os dias e meu engajamento aumentou 400%!",
    metrics: {
      engagement: "+400%",
      followers: "+2.5k",
      leads: "+180%",
    },
    rating: 5,
  },
]

const stats = [
  {
    number: "2.847",
    label: "Mulheres Transformadas",
    icon: Users,
  },
  {
    number: "R$ 12M+",
    label: "Receita Gerada pelas Alunas",
    icon: DollarSign,
  },
  {
    number: "89%",
    label: "Aumentaram a Receita em 90 dias",
    icon: TrendingUp,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
            Prova Social
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Histórias de <span className="text-purple-600">Transformação</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça mulheres que transformaram suas vidas e negócios com nossa plataforma
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <stat.icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden border-0 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-purple-600" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-gray-50 rounded-lg">
                  {Object.entries(testimonial.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="font-bold text-purple-600 text-sm">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key === "revenue"
                          ? "Receita"
                          : key === "automation"
                            ? "Automação"
                            : key === "clients"
                              ? "Clientes"
                              : key === "time"
                                ? "Tempo"
                                : key === "growth"
                                  ? "Crescimento"
                                  : key === "engagement"
                                    ? "Engajamento"
                                    : key === "followers"
                                      ? "Seguidores"
                                      : key === "leads"
                                        ? "Leads"
                                        : key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4 border-2 border-purple-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
                  Depoimento em Vídeo
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">"De R$ 3mil para R$ 25mil por mês"</h3>
                <p className="text-lg mb-6 text-purple-100">
                  Assista como Fernanda transformou seu negócio de consultoria usando nossos módulos especializados.
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Fernanda Costa"
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-white"
                  />
                  <div>
                    <div className="font-semibold">Fernanda Costa</div>
                    <div className="text-purple-200">Consultora Empresarial</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg">
                    <div className="w-0 h-0 border-l-[16px] border-l-purple-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  2:34 min
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Junte-se a mais de 2.800 mulheres que já transformaram seus negócios</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Começar Minha Transformação
          </button>
        </div>
      </div>
    </section>
  )
}
