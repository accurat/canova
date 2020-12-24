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

export interface GroupOptions {
  x?: number
  y?: number
}
export interface GroupElement extends GroupOptions {
  type: 'group'
  children: DrawNode[]
}

export interface CircleOptions extends StyleOptions {
  cx?: number
  cy?: number
  r?: number
}

export interface CircleElement extends CircleOptions {
  type: 'circle'
}

export interface EllipseOptions extends StyleOptions {
  cx?: number
  cy?: number
  rx?: number
  ry?: number
  rotate?: number
}

export interface EllipseElement extends EllipseOptions {
  type: 'ellipse'
}

export interface RectOptions extends StyleOptions {
  x?: number
  y?: number
  width?: number
  height?: number
}

export interface RectElement extends RectOptions {
  type: 'rect'
}

export interface PathOptions extends StyleOptions {
  d: string
}

export interface PathElement extends PathOptions {
  type: 'path'
}

export type DrawElement = RectElement | GroupElement | CircleElement | PathElement | EllipseElement

export type DrawNode = DrawElement | ((ctx: CanvasRenderingContext2D) => void) | false
