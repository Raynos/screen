# screen

Create a screen to track relative positions

## Example

```js
/*global screen:true*/
var screen = require("screen")
    , point = require("screen/point")

    , center = point({ x: 10, y: 10 })
    , one = point({ x: 12, y: 12 })
    , two = point({ x: 8, y: 8 })

var world = screen(center, 20, 20)
    , relativeOne = world.add(one)
    , relativeTwo = world.add(two)

relativeOne(function (point) {
    console.log("one x", point.x, "y", point.y)
    // one x 12 y 12
    // one x 7 y 7
    // one x 10 y 10
})

relativeTwo(function (point) {
    console.log("two x", point.x, "y", point.y)
    // two x 8 y 8
    // two x 3 y 3
})

// move to 15, 15
center({ x: 15, y: 15 })

// move one to 15, 15
one({ x: 15, y: 15 })
```

## Installation

`npm install screen`

## Contributors

 - Raynos

## MIT Licenced
