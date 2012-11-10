var EventEmitter = require("events").EventEmitter
    , extend = require("xtend")

module.exports = point

function point(position) {
    if (position) {
        if (typeof position.x === "number") {
            self.x = position.x
        }

        if (typeof position.y === "number") {
            self.y = position.y
        }
    }

    extend(self, EventEmitter.prototype)

    return self

    function self(update) {
        if (typeof update === "function") {
            self.on("change", function () {
                valid(self) && update(self)
            })
            return valid(self) && update(self)
        }

        if (typeof update.x === "number") {
            self.x = update.x
        }

        if (typeof update.y === "number") {
            self.y = update.y
        }

        self.emit("change")
    }
}

function valid(point) {
    if (typeof point.x === "number" &&
        typeof point.y === "number" &&
        !isNaN(point.x) && !isNaN(point.y)
    ) {
        return true
    }
}
