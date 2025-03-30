"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"

export default function TestAutomationHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio
      canvas.height = canvas.clientHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = []
    const connections: { source: number; target: number; strength: number }[] = []
    const NUM_NODES = 30
    const CONNECTION_DISTANCE = 150
    const COLORS = ["#7c3aed", "#3b82f6", "#10b981", "#8b5cf6"]

    // Create nodes
    for (let i = 0; i < NUM_NODES; i++) {
      nodes.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 4 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    // Create connections
    for (let i = 0; i < NUM_NODES; i++) {
      for (let j = i + 1; j < NUM_NODES; j++) {
        if (Math.random() > 0.85) {
          connections.push({
            source: i,
            target: j,
            strength: Math.random() * 0.05,
          })
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.clientWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvas.clientHeight) node.vy *= -1
      })

      // Draw connections
      ctx.lineWidth = 0.5
      connections.forEach((connection) => {
        const sourceNode = nodes[connection.source]
        const targetNode = nodes[connection.target]

        const dx = targetNode.x - sourceNode.x
        const dy = targetNode.y - sourceNode.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < CONNECTION_DISTANCE) {
          const opacity = 1 - distance / CONNECTION_DISTANCE
          ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.5})`

          ctx.beginPath()
          ctx.moveTo(sourceNode.x, sourceNode.y)
          ctx.lineTo(targetNode.x, targetNode.y)
          ctx.stroke()
        }
      })

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative h-96 w-full overflow-hidden bg-muted/30">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: "100%", height: "100%" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`${theme === "dark" ? "bg-card/80" : "bg-white/80"} backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md text-center`}
        >
          <h3 className="text-2xl font-bold mb-4">AI-Powered Test Automation</h3>
          <p className="text-muted-foreground">
            Generate, execute, and analyze test cases automatically with our cutting-edge AI technology.
          </p>
        </div>
      </div>
    </div>
  )
}

