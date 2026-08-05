import { motion } from 'framer-motion'

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function FadeInSection({ children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, style, ...props }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerItemVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}
