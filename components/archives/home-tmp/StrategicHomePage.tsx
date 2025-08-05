'use client'

import React from 'react'
import PerspectiveShift from './strategic/PerspectiveShift'
import CoreQuestion from './strategic/CoreQuestion'
import PhilosophyApproach from './strategic/PhilosophyApproach'
import OurSolutions from './strategic/OurSolutions'
import TrustResults from './strategic/TrustResults'
import NextStep from './strategic/NextStep'

export default function StrategicHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <PerspectiveShift />
      <CoreQuestion />
      <PhilosophyApproach />
      <OurSolutions />
      <TrustResults />
      <NextStep />
    </div>
  )
}