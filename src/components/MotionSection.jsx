import { forwardRef } from "react"
import { motion } from "framer-motion"

const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

const MotionSection = forwardRef(function MotionSection(
  { children, animation = "fadeUp", className = "", id, ...props },
  ref
) {
  const variants = presets[animation]

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.section>
  )
})

export default MotionSection
