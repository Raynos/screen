var EventEmitter = require("events").EventEmitter
    , extend = require("xtend")

module.exports = point

function point(position) {
    if (position) {
        self.x = position.x
        self.y = position.y
    }

    extend(self, EventEmitter.prototype)

    return self

    function self(update) {
        if (typeof update === "function") {
            self.on("change", function () {
                update(self)
            })
            return update(self)
        }

        if (update.x) {
            self.x = update.x
        }

        if (update.y) {
            self.y = update.y
        }

        self.emit("change")
    }
}
