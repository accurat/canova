import {
  CircleElement,
  DrawElement,
  DrawNode,
  EllipseElement,
  GradientStop,
  GroupElement,
  LinearGradient,
  LinearGradientOptions,
  PathElement,
  RadialGradient,
  RadialGradientOptions,
  RectElement,
} from './types'

type Options<Element extends DrawElement, Keys extends keyof Element> = Omit<Element, 'type' | Keys>

export type RectOptions = Options<RectElement, 'x' | 'y' | 'width' | 'height'>
export function rect(
  x: number,
  y: number,
  width: number,
  height: number,
  options: RectOptions = {}
): RectElement {
  return { type: 'rect', ...options, x, y, width, height }
}

export function rectCorners(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options: RectOptions = {}
): RectElement {
  const x = Math.min(x1, x2)
  const y = Math.min(y1, y2)
  const width = Math.abs(x2 - x1)
  const height = Math.abs(y2 - y1)
  return rect(x, y, width, height, options)
}
export function rectCenter(
  cx: number,
  cy: number,
  width: number,
  height: number,
  options: RectOptions = {}
): RectElement {
  const x = cx - width / 2
  const y = cy - height / 2
  return rect(x, y, width, height, options)
}

type CircleOptions = Options<CircleElement, 'cx' | 'cy' | 'r'>
export function circle(
  cx: number,
  cy: number,
  r: number,
  options: CircleOptions = {}
): CircleElement {
  return { type: 'circle', ...options, cx, cy, r }
}

type EllipseOptions = Options<EllipseElement, 'cx' | 'cy' | 'rx' | 'ry'>
export function ellipse(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  options: EllipseOptions = {}
): EllipseElement {
  return { type: 'ellipse', ...options, cx, cy, rx, ry }
}

type GroupOptions = Options<GroupElement, 'children'>
export function group(options: GroupOptions, children: DrawNode[]): GroupElement {
  return { type: 'group', ...options, children }
}

type PathOptions = Options<PathElement, 'd'>
export function path(d: PathElement['d'], options: PathOptions = {}): PathElement {
  return { type: 'path', ...options, d }
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
