'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  pulsePhase: number
  pulseSpeed: number
}

interface ConstellationBackgroundProps {
  className?: string
  nodeCount?: number
  connectionDistance?: number
  interactive?: boolean
}

// Helper to get computed RGB color from CSS variable
function getComputedRGB(): { r: number; g: number; b: number } {
  if (typeof window === 'undefined') return { r: 59, g: 130, b: 246 }
  
  const temp = document.createElement('div')
  temp.style.color = 'hsl(var(--primary))'
  temp.style.display = 'none'
  document.body.appendChild(temp)
  const computed = getComputedStyle(temp).color
  document.body.removeChild(temp)
  
  const match = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (match) {
    return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) }
  }
  return { r: 59, g: 130, b: 246 }
}

export function ConstellationBackground({
  className = '',
  nodeCount = 50,
  connectionDistance = 150,
  interactive = true,
}: ConstellationBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number | null>(null)
  const dimensionsRef = useRef({ width: 0, height: 0 })
  const colorRef = useRef({ r: 59, g: 130, b: 246 })
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag and get theme color
  useEffect(() => {
    setIsClient(true)
    colorRef.current = getComputedRGB()
    
    // Update color on theme change
    const observer = new MutationObserver(() => {
      colorRef.current = getComputedRGB()
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    })
    
    return () => observer.disconnect()
  }, [])

  // Initialize nodes
  const initNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }
    nodesRef.current = nodes
  }, [nodeCount])

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = dimensionsRef.current
    if (width === 0 || height === 0) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    ctx.clearRect(0, 0, width, height)

    const nodes = nodesRef.current
    const mouse = mouseRef.current
    const { r, g, b } = colorRef.current

    // Update and draw nodes
    nodes.forEach((node, i) => {
      // Update position
      node.x += node.vx
      node.y += node.vy

      // Bounce off edges with padding
      const padding = 50
      if (node.x < padding || node.x > width - padding) {
        node.vx *= -1
        node.x = Math.max(padding, Math.min(width - padding, node.x))
      }
      if (node.y < padding || node.y > height - padding) {
        node.vy *= -1
        node.y = Math.max(padding, Math.min(height - padding, node.y))
      }

      // Mouse interaction - subtle attraction
      if (interactive) {
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.02
          node.vx += (dx / dist) * force
          node.vy += (dy / dist) * force
        }
      }

      // Apply velocity limits
      const maxVel = 0.8
      node.vx = Math.max(-maxVel, Math.min(maxVel, node.vx))
      node.vy = Math.max(-maxVel, Math.min(maxVel, node.vy))

      // Damping
      node.vx *= 0.99
      node.vy *= 0.99

      // Pulse animation
      node.pulsePhase += node.pulseSpeed
      const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.3
      const currentRadius = node.radius * pulseScale
      const currentOpacity = node.opacity * (0.7 + Math.sin(node.pulsePhase) * 0.3)

      // Draw connections to nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j]
        const connDx = other.x - node.x
        const connDy = other.y - node.y
        const distance = Math.sqrt(connDx * connDx + connDy * connDy)

        if (distance < connectionDistance) {
          const lineOpacity = (1 - distance / connectionDistance) * 0.4
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Draw connection to mouse if close
      if (interactive && mouse.x > 0 && mouse.y > 0) {
        const mouseDx = mouse.x - node.x
        const mouseDy = mouse.y - node.y
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)
        
        if (mouseDist < connectionDistance * 1.5) {
          const lineOpacity = (1 - mouseDist / (connectionDistance * 1.5)) * 0.6
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Draw node with glow
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, currentRadius * 4
      )
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.4})`)
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
      
      ctx.beginPath()
      ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Core node
      ctx.beginPath()
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`
      ctx.fill()
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [connectionDistance, interactive])

  // Handle resize
  useEffect(() => {
    if (!isClient) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const rect = parent.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(dpr, dpr)
      }
      
      dimensionsRef.current = { width: rect.width, height: rect.height }
      
      // Reinitialize nodes on significant resize
      if (nodesRef.current.length === 0) {
        initNodes(rect.width, rect.height)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [initNodes, isClient])

  // Handle mouse movement
  useEffect(() => {
    if (!interactive || !isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [interactive, isClient])

  // Start animation
  useEffect(() => {
    if (!isClient) return
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, isClient])

  if (!isClient) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className={`absolute inset-0 ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  )
}
