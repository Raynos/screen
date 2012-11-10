var EventEmitter = require("events").EventEmitter
    , extend = require("xtend")

    , point = require("./point")

/*global screen:true*/
module.exports = screen

function screen(center, width, height) {
    var list = []

    center.on("change", function () {
        list.forEach(function (tuple) {
            calculate.apply(null, tuple)
        })
    })

    var s = new EventEmitter()
    s.list = list
    s.center = center
    s.width = width
    s.height = height
    s.add = add
    return s

    function add(absolute) {
        var relative = point()

        list.push([relative, absolute])

        absolute.on("change", function () {
            calculate(relative, absolute)
        })

        calculate(relative, absolute)

        return relative
    }

    function calculate(relative, absolute) {
        relative.x = absolute.x - center.x + (width / 2)
        relative.y = absolute.y - center.y + (height / 2)
        relative.emit("change")

        if (0 < relative.x &&
            relative.x < width &&
            0 < relative.y &&
            relative.y < height
        ) {
            relative.emit("visible")
            relative.state = "visible"
        } else {
            relative.emit("offscreen")
            relative.state = "offscreen"
        }
    }
}
