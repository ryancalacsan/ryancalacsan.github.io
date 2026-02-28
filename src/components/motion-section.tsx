'use client'

import { motion, useReducedMotion, type TargetAndTransition } from 'motion/react'

type AnimationPreset = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'scaleUp'

const presets: Record<AnimationPreset, { initial: TargetAndTransition; whileInView: TargetAndTransition }> = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
}

interface MotionSectionProps {
  children: React.ReactNode
  animation?: AnimationPreset
  className?: string
  id?: string
  delay?: number
}

export function MotionSection({
  children,
  animation = 'fadeUp',
  className,
  id,
  delay = 0,
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const preset = presets[animation]

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : preset.initial}
      whileInView={preset.whileInView}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.section>
  )
}
