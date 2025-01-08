"use client"
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const Tracing = () => {

    const { scrollYProgress } = useScroll()

  return (
    <div>
      <motion.div className="beam-gradient"
      style={{scaleY: scrollYProgress, height: "100%", position: "fixed", transformOrigin: "top" , width: "2px",}}>

      </motion.div>
    </div>
  )
}

export default Tracing
