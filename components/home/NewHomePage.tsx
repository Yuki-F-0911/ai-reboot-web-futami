'use client'

import React from 'react'
import HeroSection from './sections/HeroSection'
import ProblemSection from './sections/ProblemSection'
import SolutionSection from './sections/SolutionSection'
import ServiceSection from './sections/ServiceSection'
import StorySection from './sections/StorySection'
import TrustSection from './sections/TrustSection'
import CTASection from './sections/CTASection'

export default function NewHomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServiceSection />
      <StorySection />
      <TrustSection />
      <CTASection />
    </div>
  )
}