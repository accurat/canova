import { drawStyle, setStyle } from './style'
import {
  CircleElement,
  DrawElement,
  DrawNode,
  GroupElement,
  PathElement,
  RectElement,
  EllipseElement,
} from './types'

// cache
const PI = Math.PI
const TWO_PI = PI * 2

export function draw(canvas: HTMLCanvasElement, el: DrawNode | DrawNode[]): void
export function draw(context: CanvasRenderingContext2D, el: DrawNode | DrawNode[]): void
export function draw(c: HTMLCanvasElement | CanvasRenderingContext2D, el: DrawNode | DrawNode[]) {
  const ctx = c instanceof CanvasRenderingContext2D ? c : c.getContext('2d')!
  drawNode(ctx, el)
}

function drawNode(ctx: CanvasRenderingContext2D, el: DrawNode | DrawNode[]) {
  ctx.save()

  if (el === false) {
    // skip
  } else if (Array.isArray(el)) {
    el.forEach(e => drawNode(ctx, e))
  } else if ('type' in el) {
    drawElement(ctx, el)
  } else if (typeof el === 'function') {
    el(ctx)
  } else {
    throw new Error(`Recived unexpected element ${JSON.stringify(el)}`)
  }

  ctx.restore()
}

function drawElement(ctx: CanvasRenderingContext2D, element: DrawElement) {
  // prettier-ignore
  switch (element.type) {
    case  'circle':  drawCircle(ctx, element);  break;
    case 'ellipse':  drawEllipse(ctx, element); break;
    case    'rect':  drawRect(ctx, element);    break;
    case   'group':  drawGroup(ctx, element);   break;
    case    'path':  drawPath(ctx, element);    break;
    default:
      throw new Error(`Element type not recognized. Type: ${((element as any).type)}`);
  }
}

function drawGroup(ctx: CanvasRenderingContext2D, el: GroupElement) {
  const { x = 0, y = 0 } = el
  ctx.translate(x, y)
  drawNode(ctx, el.children)
}

function drawCircle(ctx: CanvasRenderingContext2D, circle: CircleElement) {
  const { cx = 0, cy = 0, r = 1 } = circle

  setStyle(ctx, circle)

  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, TWO_PI)

  drawStyle(ctx, circle)
}

function drawEllipse(ctx: CanvasRenderingContext2D, ellipse: EllipseElement) {
  const { cx = 0, cy = 0, rx = 1, ry = 1, rotate = 0 } = ellipse

  setStyle(ctx, ellipse)

  ctx.beginPath()
  ctx.ellipse(cx, cy, rx, ry, rotate, 0, TWO_PI)

  drawStyle(ctx, ellipse)
}

function drawRect(ctx: CanvasRenderingContext2D, rect: RectElement) {
  const { x = 0, y = 0, width = 1, height = 1 } = rect

  setStyle(ctx, rect)

  ctx.beginPath()
  ctx.rect(x, y, width, height)

  drawStyle(ctx, rect)
}

export function drawPath(ctx: CanvasRenderingContext2D, pathElement: PathElement) {
  setStyle(ctx, pathElement)

  // Path2D is not supported by IE.
  // https://caniuse.com/?search=path2d
  // Parse string?
  const pathObj = new Path2D(pathElement.d)

  drawStyle(ctx, pathElement, pathObj)
}
