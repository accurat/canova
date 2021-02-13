import React from 'react'
import {
  draw,
  rect,
  rectCorners,
  rectCenter,
  group,
  circle,
  linearGradient,
  radialGradient,
  path,
  ellipse,
} from '../../../src'

export const App = () => {
  const ref = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const gradient1 = radialGradient({ x0: 190, y0: 200, x1: 210, y1: 200, r0: 4, r1: 40 }, [
      [0, 'purple'],
      [0.5, 'blue'],
      [1, 'red'],
    ])

    const gradient2 = linearGradient({ y0: -10, x1: 140 }, [
      [0, 'red'],
      [0.5, 'pink'],
      [1, 'grey'],
    ])

    const gradient3 = linearGradient({ x0: 100, x1: 180, y1: 100 }, [
      [0, 'orange'],
      [1, 'cyan'],
    ])

    draw(
      canvas,
      group({ x: 20, y: 100 }, [
        rect(0, 0, 100, 10, { fill: 'red' }),
        group({ x: 200, y: 200 }, [
          circle(200, 200, 40, { fill: gradient1 }),
          rect(0, 10, 10, 40, { fill: 'orange' }),
          circle(0, 10, 10, { fill: 'green' }),
        ]),
        group({ x: 120, y: 20 }, [
          circle(0, 0, 20, { fill: 'red', opacity: 0.4 }),
          rect(0, 10, 40, 40, { fill: 'orange' }),
          rect(0, 0, 140, 300, { stroke: gradient2, strokeWidth: 10 }),
          path('M100 -30 h 80 v 80 h -50 Z', {
            blend: 'xor',
            strokeWidth: 4,
            fill: gradient3,
          }),
        ]),
      ])
    )

    draw(
      canvas,
      ['#f00', '#0f0', '#00f'].map((color, i) =>
        ellipse(400, 300, 50, 55, {
          fill: color,
          strokeWidth: 10,
          blend: 'lighter',
          rotate: i * Math.PI * (2 / 3),
        })
      )
    )

    draw(
      canvas,
      group({ x: 500, y: 100 }, [
        rect(0, 0, 300, 300, { stroke: 'black', opacity: 1 }),
        rect(20, 20, 110, 110, { fill: 'red', opacity: 0.4 }),
        rectCorners(20, 20, 110, 110, { fill: 'blue', opacity: 0.4 }),
        rectCenter(20, 20, 110, 110, { fill: 'green', opacity: 0.4 }),
        circle(20, 20, 3, { fill: 'red' }),
      ])
    )
  }, [])

  return <canvas ref={ref} width={1000} height={1000} />
}
