import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useMedia'

/**
 * Hero visual: a brand core with three tilted partner orbits.
 * Nodes travel the orbits, link to their neighbours, and pulses carry
 * signal between the core and the network. Canvas keeps it light;
 * it pauses off-screen and renders one still frame for reduced motion.
 */

type Node = { orbit: number; angle: number; speed: number; size: number; gold: boolean }
type Pulse = { node: number; t: number; speed: number; inbound: boolean }

const ORBITS = [
  { scale: 0.36, count: 5, speed: 0.00011, label: 'PARTNERS' },
  { scale: 0.62, count: 8, speed: -0.00007, label: 'PROGRAMS' },
  { scale: 0.9, count: 11, speed: 0.000045, label: 'CUSTOMERS' },
]
const TILT = (-16 * Math.PI) / 180
const FLATTEN = 0.4

export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let cx = 0
    let cy = 0
    let R = 0
    let raf = 0
    let running = true
    let last = performance.now()
    let spawnClock = 0
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 }

    // Deterministic pseudo-random so the layout is identical on every load.
    let seed = 7
    const rand = () => {
      seed = (seed * 16807) % 2147483647
      return seed / 2147483647
    }

    const nodes: Node[] = []
    ORBITS.forEach((o, oi) => {
      for (let i = 0; i < o.count; i++) {
        nodes.push({
          orbit: oi,
          angle: (i / o.count) * Math.PI * 2 + rand() * 0.5,
          speed: o.speed * (0.8 + rand() * 0.4),
          size: oi === 2 ? 1.6 + rand() * 1.4 : 2.2 + rand() * 1.8,
          gold: (oi === 1 && i === 2) || (oi === 2 && i === 7),
        })
      }
    })
    const pulses: Pulse[] = []
    const stars = Array.from({ length: 70 }, () => ({
      a: rand() * Math.PI * 2,
      r: 1.02 + rand() * 0.55,
      s: rand() * 1.1 + 0.3,
      p: rand() * Math.PI * 2,
    }))

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const mobile = w < 720
      cx = mobile ? w * 0.6 : w * 0.77
      cy = mobile ? Math.min(h * 0.2, 210) : h * 0.5
      R = mobile ? Math.min(w * 0.5, 300) : Math.min(w * 0.4, h * 0.62, 560)
    }

    const project = (orbit: number, angle: number, ox: number, oy: number) => {
      const rx = R * ORBITS[orbit].scale
      const ry = rx * FLATTEN
      const ex = Math.cos(angle) * rx
      const ey = Math.sin(angle) * ry
      return {
        x: cx + ox + ex * Math.cos(TILT) - ey * Math.sin(TILT),
        y: cy + oy + ex * Math.sin(TILT) + ey * Math.cos(TILT),
        depth: Math.sin(angle), // +1 in front, -1 behind
      }
    }

    const drawHex = (x: number, y: number, r: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 2
        const px = x + Math.cos(a) * r
        const py = y + Math.sin(a) * r
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    const frame = (now: number) => {
      const dt = Math.min(now - last, 50)
      last = now
      pointer.x += (pointer.tx - pointer.x) * 0.04
      pointer.y += (pointer.ty - pointer.y) * 0.04
      const ox = pointer.x * 14
      const oy = pointer.y * 10

      ctx.clearRect(0, 0, w, h)

      // Soft core glow
      const glow = ctx.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, R * 0.9)
      glow.addColorStop(0, 'rgba(40,120,255,0.22)')
      glow.addColorStop(0.45, 'rgba(21,94,239,0.07)')
      glow.addColorStop(1, 'rgba(21,94,239,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      // Distant field of points
      stars.forEach((s) => {
        const tw = 0.35 + 0.35 * Math.sin(now * 0.0012 * s.s + s.p)
        const x = cx + ox * 0.4 + Math.cos(s.a) * R * s.r
        const y = cy + oy * 0.4 + Math.sin(s.a) * R * s.r * 0.62
        ctx.fillStyle = `rgba(180,200,240,${tw * 0.5})`
        ctx.fillRect(x, y, 1.4, 1.4)
      })

      // Orbit rings
      ORBITS.forEach((o, oi) => {
        const rx = R * o.scale
        ctx.save()
        ctx.translate(cx + ox, cy + oy)
        ctx.rotate(TILT)
        ctx.beginPath()
        ctx.ellipse(0, 0, rx, rx * FLATTEN, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(143,180,255,${0.2 - oi * 0.04})`
        ctx.lineWidth = 1
        ctx.setLineDash(oi === 2 ? [2, 6] : [])
        ctx.stroke()
        ctx.restore()

        // Orbit label at a fixed angle, with a tick
        const lp = project(oi, -1.95 + oi * 0.12, ox, oy)
        ctx.fillStyle = 'rgba(213,166,43,0.9)'
        ctx.fillRect(lp.x - 2, lp.y - 2, 4, 4)
        ctx.font = '600 10px "Inter Variable", Inter, sans-serif'
        ;(ctx as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = '2px'
        ctx.fillStyle = 'rgba(180,194,218,0.75)'
        ctx.fillText(o.label, lp.x + 10, lp.y - 8)
      })

      // Advance nodes and project
      const pts = nodes.map((n) => {
        if (!reduced) n.angle += n.speed * dt
        return { ...project(n.orbit, n.angle, ox, oy), n }
      })

      // Links: core to inner orbit, neighbours across orbits
      pts.forEach((p, i) => {
        const alphaDepth = 0.5 + p.depth * 0.5
        if (p.n.orbit === 0) {
          ctx.strokeStyle = `rgba(40,120,255,${0.12 + alphaDepth * 0.28})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(cx + ox, cy + oy)
          ctx.lineTo(p.x, p.y)
          ctx.stroke()
        }
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          if (Math.abs(q.n.orbit - p.n.orbit) !== 1) continue
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          const max = R * 0.36
          if (d < max) {
            const a = (1 - d / max) * (0.1 + alphaDepth * 0.25)
            ctx.strokeStyle = `rgba(143,180,255,${a})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      })

      // Pulses travel between the core and inner/middle nodes
      if (!reduced) {
        spawnClock += dt
        if (spawnClock > 420 && pulses.length < 9) {
          spawnClock = 0
          const candidates = pts.map((p, i) => ({ p, i })).filter((c) => c.p.n.orbit < 2)
          const pick = candidates[Math.floor(rand() * candidates.length)]
          pulses.push({ node: pick.i, t: 0, speed: 0.0007 + rand() * 0.0005, inbound: rand() > 0.45 })
        }
      }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pu = pulses[k]
        pu.t += pu.speed * dt
        if (pu.t >= 1) {
          pulses.splice(k, 1)
          continue
        }
        const target = pts[pu.node]
        const t = pu.inbound ? 1 - pu.t : pu.t
        const x = cx + ox + (target.x - cx - ox) * t
        const y = cy + oy + (target.y - cy - oy) * t
        const g = ctx.createRadialGradient(x, y, 0, x, y, 9)
        g.addColorStop(0, 'rgba(255,255,255,0.95)')
        g.addColorStop(0.3, 'rgba(40,120,255,0.6)')
        g.addColorStop(1, 'rgba(40,120,255,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, 9, 0, Math.PI * 2)
        ctx.fill()
      }

      // Nodes, back to front
      pts
        .slice()
        .sort((a, b) => a.depth - b.depth)
        .forEach((p) => {
          const k = 0.55 + (p.depth + 1) * 0.3
          const r = p.n.size * k
          const color = p.n.gold ? '213,166,43' : p.n.orbit === 2 ? '143,180,255' : '40,120,255'
          if (p.n.orbit < 2 || p.n.gold) {
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5)
            g.addColorStop(0, `rgba(${color},${0.35 * k})`)
            g.addColorStop(1, `rgba(${color},0)`)
            ctx.fillStyle = g
            ctx.beginPath()
            ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2)
            ctx.fill()
          }
          ctx.fillStyle = `rgba(${color},${0.45 + k * 0.5})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
          ctx.fill()
          if (p.n.orbit === 0) {
            ctx.strokeStyle = `rgba(255,255,255,${0.25 * k})`
            ctx.beginPath()
            ctx.arc(p.x, p.y, r + 4, 0, Math.PI * 2)
            ctx.stroke()
          }
        })

      // Brand core: hexagon with a breathing ring
      const coreR = Math.max(R * 0.085, 22)
      const breathe = reduced ? 0 : (Math.sin(now * 0.0016) + 1) / 2
      ctx.save()
      drawHex(cx + ox, cy + oy, coreR * (1.7 + breathe * 0.25))
      ctx.strokeStyle = `rgba(40,120,255,${0.25 - breathe * 0.15})`
      ctx.lineWidth = 1
      ctx.stroke()
      drawHex(cx + ox, cy + oy, coreR)
      const cg = ctx.createLinearGradient(cx - coreR, cy - coreR, cx + coreR, cy + coreR)
      cg.addColorStop(0, '#1a3a6e')
      cg.addColorStop(1, '#0c1f3d')
      ctx.fillStyle = cg
      ctx.fill()
      ctx.strokeStyle = 'rgba(40,120,255,0.95)'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.fillStyle = '#D5A62B'
      ctx.fillRect(cx + ox - coreR * 0.28, cy + oy - coreR * 0.3, coreR * 0.22, coreR * 0.5)
      ctx.fillStyle = '#2878FF'
      ctx.fillRect(cx + ox + coreR * 0.04, cy + oy - coreR * 0.3, coreR * 0.22, coreR * 0.62)
      ctx.restore()

      if (running && !reduced) raf = requestAnimationFrame(frame)
    }

    const start = () => {
      cancelAnimationFrame(raf)
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }

    resize()
    start()

    const ro = new ResizeObserver(() => {
      resize()
      if (reduced) start()
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting && !document.hidden
      if (running && !reduced) start()
    })
    io.observe(canvas)

    const onVisibility = () => {
      running = !document.hidden
      if (running && !reduced) start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true })

    // Fonts may finish loading after the first still frame.
    document.fonts?.ready.then(() => reduced && start())

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [reduced])

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      role="img"
      aria-label="Animated diagram: a technology brand at the center, connected to orbits of partners, programs and customers, with signals moving between them."
    />
  )
}
