export interface StyleOptions {
  fill?: CanvasFillStrokeStyles['fillStyle'] | LinearGradient | RadialGradient
  stroke?: CanvasFillStrokeStyles['strokeStyle'] | LinearGradient | RadialGradient
  strokeWidth?: CanvasRenderingContext2D['lineWidth']
  opacity?: CanvasRenderingContext2D['globalAlpha']
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
   */
  blend?: CanvasRenderingContext2D['globalCompositeOperation']
}

export type GradientStop = [number, string]

export interface LinearGradientOptions {
  x0?: number
  y0?: number
  x1?: number
  y1?: number
}

export interface LinearGradient extends LinearGradientOptions {
  gradient: 'linear'
  stops: GradientStop[]
}

export interface RadialGradientOptions {
  x0?: number
  y0?: number
  r0?: number
  x1?: number
  y1?: number
  r1?: number
}

export interface RadialGradient extends RadialGradientOptions {
  gradient: 'radial'
  stops: GradientStop[]
}

export interface GroupElement {
  type: 'group'
  x?: number
  y?: number
  children: DrawNode[]
}

export interface CircleElement extends StyleOptions {
  type: 'circle'
  cx?: number
  cy?: number
  r?: number
}

export interface EllipseElement extends StyleOptions {
  type: 'ellipse'
  cx?: number
  cy?: number
  rx?: number
  ry?: number
  rotate?: number
}

export interface RectElement extends StyleOptions {
  type: 'rect'
  x?: number
  y?: number
  width?: number
  height?: number
}

export interface PathElement extends StyleOptions {
  type: 'path'
  d: string
}

export type DrawElement = RectElement | GroupElement | CircleElement | PathElement | EllipseElement

export type DrawNode = DrawElement | ((ctx: CanvasRenderingContext2D) => void) | false
