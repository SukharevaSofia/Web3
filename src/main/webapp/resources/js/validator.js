const xButton = document.getElementById("j_idt9:input_x")
rButton = document.getElementById("j_idt9:input_R")
yButton = document.getElementById("j_idt9:input_y")
submit = document.getElementById("j_idt9:send_button")
submit.addEventListener("click", onsubmit);


function onsubmit() {
    let x = validateX()
    let y = validateY()
    let r = checkR()
    let array = [x, y, r]
    if (!x.status || !y.status || !r.status) {
        let errorString = ""
        array.forEach(function (input) {
            if (!input.status) {
                errorString += input.errorMessage + "\n"
            }
        })
        alert(errorString)
    } else {
        chooseGraph(x.val, y.val, r.val)
    }

    return false;
}

function validateX() {
    let xVal = xButton.value.replace(",", ".")
    if (!isNaN(xVal) && xVal !== "") {
        return checkX(Number.parseFloat(xVal).toFixed(3))
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "X должен быть представлен числом"
        }
    }
}

function validateY() {
    let yVal = yButton.value.replace(",", ".")
    if (!isNaN(yVal) && yVal !== "") {
        return checkY(Number.parseFloat(yVal).toFixed(3))
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "Y должен быть представлен числом"
        }
    }
}

function checkY(yVal) {
    if (yVal >= -5 && yVal <= 3) {
        return {
            status: true,
            val: yVal,
            errorMessage: ""
        }
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "Число Y должно быть в промежутке от -5 до 3"
        }
    }

}

function checkX(xVal) {
    if (xVal >= -3 && xVal <= 3) {
        return {
            status: true,
            val: xVal,
            errorMessage: ""
        }
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "Число X должно быть в промежутке от -3 до 3"
        }
    }

}

const checkR = function () {
    let rVal = rButton.value.replace(",", ".")
    if (!isNaN(rVal) && rVal !== "") {
        return {
            status: true,
            val: Number.parseFloat(rVal).toFixed(3),
            errorMessage: ""
        }
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "R должен быть представлен числом"
        }
    }
}

let validateData = function (x, y, r) {
    return (x <= 0 && y >= 0 && x >= (-r) && y <= (r / 2))
        || (x >= 0 && y <= 0 && (x * x + y * y) <= (r * r))
        || (x <= 0 && y <= 0 && y >= -x - r);
}

let chooseGraph = function (x, y, r) {
    const previousR = localStorage.getItem("r")
    if (parseFloat(previousR) !== parseFloat(r)) {
        clearCanvas()
        parseTable(parseFloat(r))
    }
    let match = validateData(x, y, r)
    addDot(x, y, r, match)
}
