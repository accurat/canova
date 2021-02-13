# Canova

```
npm install canova
```

# Example

```js
import { draw, circle, rect } from 'canova'

draw(canvas, [
  circle(10, 10, 30, { fill: 'red' }),
  rect(10, 10, 30, 30, { fill: 'blue' }),
  rect(30, 10, 20, 30, { stroke: 'green', opacity: 0.3 }),
])
```
