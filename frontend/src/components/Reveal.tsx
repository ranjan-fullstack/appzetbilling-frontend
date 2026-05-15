import { motion, type MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const motionProps: MotionProps = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}
