// UI Components Types
export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  className?: string
  disabled?: boolean
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: string
}

// Effect Components Types
export interface NoiseGlitchProps {
  intensity?: number
  active?: boolean
}

export interface ParticleProps {
  x: number
  y: number
  vx?: number
  vy?: number
  size?: number
  life?: number
  maxLife?: number
  opacity?: number
  color?: string
  hue?: number
}

export interface EffectBaseProps {
  intensity?: number
  active?: boolean
  className?: string
}

// Onboarding Types
export interface OnboardingFlowProps {
  onComplete: () => void
}

export interface PersonalityQuizProps {
  onComplete: (answers: string[]) => void
}

export interface NameInputProps {
  onComplete: (name: string) => void
}

// Layout Types
export interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'scale'
  delay?: number
  className?: string
}