import React from 'react'
import draw, { rect, group, circle, linearGradient, radialGradient, path } from '../../../src'

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
        rect({ x: 0, y: 0, width: 100, height: 10, fill: 'red' }),
        group({ x: 200, y: 200 }, [
          circle({ cx: 200, cy: 200, r: 40, fill: gradient1 }),
          rect({ x: 0, y: 10, width: 10, height: 40, fill: 'orange' }),
          circle({ cx: 0, cy: 10, r: 10, fill: 'green' }),
        ]),
        group({ x: 120, y: 20 }, [
          circle({ r: 20, fill: 'red', opacity: 0.4 }),
          rect({ y: 10, width: 40, height: 40, fill: 'orange' }),
          rect({ width: 140, height: 300, stroke: gradient2, strokeWidth: 10 }),
          path({
            d: 'M100 -30 h 80 v 80 h -50 Z',
            blend: 'xor',
            strokeWidth: 4,
            fill: gradient3,
          }),
        ]),
      ])
    )
  }, [])

  return <canvas ref={ref} width={1000} height={1000} />
}
