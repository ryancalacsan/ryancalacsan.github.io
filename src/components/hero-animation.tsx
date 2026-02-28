'use client'

import { motion, useReducedMotion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

interface HeroStaggerProps {
  children: React.ReactNode
  delay?: number
  y?: number
}

export function HeroStagger({ children, delay = 0, y = 30 }: HeroStaggerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  )
}

export function HeroNameLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={shouldReduceMotion ? false : { y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease,
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}
