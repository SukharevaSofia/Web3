const xButton = document.getElementsByClassName("xSelect")[0]
const yButton = document.getElementsByClassName("ySelect")[0]
const rButtons = document.querySelectorAll('[type=radio]');
const submit = document.getElementsByClassName("send_button")[0]
submit.addEventListener("click", onsubmit);

function onsubmit() {
    let x = checkX()
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

const checkX = function () {
    let xVal = xButton.value
    if (!isNaN(xVal) && xVal !== "" && xVal != null) {
        return {
            status: true,
            val: Number.parseFloat(xVal).toFixed(3),
            errorMessage: ""
        }
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "x должен быть представлен числом"
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
            errorMessage: "Y должен быть числом :("
        }
    }
}

function checkY(yVal) {
    if (yVal >= -3 && yVal <= 5) {
        return {
            status: true,
            val: yVal,
            errorMessage: ""
        }
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "Число Y должно быть в промежутке от -3 до 5"
        }
    }

}

rButtons.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        console.log(event.target.value);
    });
})
let rButton = () => {
    let value = null;
    rButtons.forEach(
        (button) => {
            if (button.checked) {
                value = button.value;
            }
        }
    );
    return value;
};

const checkR = function () {
    if (rButton() != null) {
        return {
            status: true,
            val: rButton(),
            errorMessage: ""
        }
    } else {
        return {
            status: false,
            val: 404,
            errorMessage: "Выбирете значение R"
        }
    }
}

let validateData = function (x, y, R) {
    const xNum = parseFloat(x);
    const yNum = parseFloat(y);
    const RNum = parseFloat(R);

    if((Math.abs(xNum) <= RNum) && (Math.abs(yNum) <= RNum)){
        if((xNum > 0)&&(yNum > 0)){
            return false;
        }else if ((xNum <= 0)&&(yNum>0)){
            return ((xNum*xNum + yNum*yNum) <= (RNum*RNum));
        } else if ((xNum <= 0)&&(yNum<=0)) {
            return ((-1*(xNum + yNum)) <= RNum);
        } else return (xNum > 0) && (yNum <= 0);
    }
    return false;
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
