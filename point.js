var EventEmitter = require("events").EventEmitter
    , extend = require("xtend")

module.exports = point

function point(state) {
    if (state) {
        self.x = state.x
        self.y = state.y
    }

    extend(self, EventEmitter.prototype)

    return self

    function self(state) {
        if (typeof state === "function") {
            self.on("change", function () {
                state(self)
            })
            return state(self)
        }

        self.x = state.x
        self.y = state.y

        self.emit("change")
    }
}
