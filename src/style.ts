import { LinearGradient, RadialGradient, StyleOptions } from './types'

export function setStyle(ctx: CanvasRenderingContext2D, style: StyleOptions) {
  const { stroke, fill } = style
  if (stroke) {
    ctx.strokeStyle = isLinearGradient(stroke)
      ? buildLinearGradient(ctx, stroke)
      : isRadialGradient(stroke)
      ? buildRadialGradient(ctx, stroke)
      : stroke
  }

  if (fill) {
    ctx.fillStyle = isLinearGradient(fill)
      ? buildLinearGradient(ctx, fill)
      : isRadialGradient(fill)
      ? buildRadialGradient(ctx, fill)
      : fill
  }
}

export function drawStyle(ctx: CanvasRenderingContext2D, style: StyleOptions, path?: Path2D) {
  const { stroke, fill, strokeWidth, opacity, blend } = style

  if (typeof opacity === 'number') ctx.globalAlpha = opacity
  if (typeof blend === 'string') ctx.globalCompositeOperation = blend
  if (typeof strokeWidth === 'number') ctx.lineWidth = strokeWidth
  if (stroke) path ? ctx.stroke(path) : ctx.stroke()
  if (fill) path ? ctx.fill(path) : ctx.fill()
}

function isLinearGradient(x: any): x is LinearGradient {
  return typeof x === 'object' && 'gradient' in x && x.gradient === 'linear'
}
function isRadialGradient(x: any): x is RadialGradient {
  return typeof x === 'object' && 'gradient' in x && x.gradient === 'radial'
}

function buildLinearGradient(
  ctx: CanvasRenderingContext2D,
  gradient: LinearGradient
): CanvasGradient {
  const { x0 = 0, y0 = 0, x1 = 0, y1 = 0, stops } = gradient
  const canvasGradient = ctx.createLinearGradient(x0, y0, x1, y1)

  stops.forEach(stop => canvasGradient.addColorStop(...stop))

  return canvasGradient
}
function buildRadialGradient(
  ctx: CanvasRenderingContext2D,
  gradient: RadialGradient
): CanvasGradient {
  const { x0 = 0, y0 = 0, x1 = 0, y1 = 0, r0 = 0, r1 = 0, stops } = gradient
  const canvasGradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)

  stops.forEach(stop => canvasGradient.addColorStop(...stop))

  return canvasGradient
}
