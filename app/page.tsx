import TestimonialsSection from "../testimonials-section"
import ToolsSection from "../tools-section"
import WalkthroughTrigger from "../walkthrough-trigger"
import VocationalOpportunitiesSection from "../vocational-opportunities-section"
import HeroSection from "../hero-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Primary Feature: Vocational Opportunities */}
      <VocationalOpportunitiesSection />

      {/* Supporting Tools */}
      <ToolsSection />

      {/* Social Proof */}
      <TestimonialsSection />

      {/* Walkthrough System */}
      <WalkthroughTrigger />
    </main>
  )
}
