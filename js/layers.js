addLayer("l", {
    name: "lime", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D9D9D9",
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            name: "Lime Doubler",
            description: "Double Limes",
            cost: 50,
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        12: {
            name: "Lime Tripler",
            description: "Triple Limes",
            cost: 115,
            unlocked() {if (hasUpgrade('l', 11)) {return true} else {return false}},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
    },
})
