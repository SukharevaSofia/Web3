function parseTable(rVal = 0) {
    const x = document.querySelectorAll(".x-result"),
        y = document.querySelectorAll(".y-result"),
        r = document.querySelectorAll(".r-result"),
        hit = document.querySelectorAll(".match-result")

    let x_mass = []
    let y_mass = []
    let r_mass = []
    let hit_mass = []

    x.forEach(function (input) {
        x_mass.push(parseFloat(input.textContent))
    })
    y.forEach(function (input) {
        y_mass.push(parseFloat(input.textContent))
    })
    r.forEach(function (input) {
        r_mass.push(parseFloat(input.textContent))
    })
    hit.forEach(function (input) {
        let val = input.textContent
        hit_mass.push(val === "Точка попала в область")
    })

    for (let i = 0; i < x_mass.length; i++) {
        if (r_mass[i] === rVal) {
            addDot(x_mass[i], y_mass[i], r_mass[i], hit_mass[i])
        }
    }

}


parseTable(parseFloat(localStorage.getItem("r")))
