import {
  CircleElement,
  CircleOptions,
  DrawNode,
  EllipseElement,
  EllipseOptions,
  GradientStop,
  GroupElement,
  GroupOptions,
  LinearGradient,
  LinearGradientOptions,
  PathElement,
  PathOptions,
  RadialGradient,
  RadialGradientOptions,
  RectElement,
  RectOptions,
} from './types'

export function rect(options: RectOptions): RectElement {
  return { type: 'rect', ...options }
}

export function circle(options: CircleOptions): CircleElement {
  return { type: 'circle', ...options }
}

export function ellipse(options: EllipseOptions): EllipseElement {
  return { type: 'ellipse', ...options }
}

export function group(options: GroupOptions, children: DrawNode[]): GroupElement {
  return { type: 'group', ...options, children }
}

export function linearGradient(
  options: LinearGradientOptions,
  stops: GradientStop[]
): LinearGradient {
  return { gradient: 'linear', ...options, stops }
}

export function radialGradient(
  options: RadialGradientOptions,
  stops: GradientStop[]
): RadialGradient {
  return { gradient: 'radial', ...options, stops }
}

export function path(options: PathOptions): PathElement {
  return { type: 'path', ...options }
}
