const canvas = document.getElementById("function_plot")
const ctx = canvas.getContext("2d");

function line(x1, y1, x2, y2, lineWidth) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "black";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawText(text, x, y, maxWidth) {
    ctx.font = "8pt Arial";
    ctx.strokeText(text, x, y, maxWidth);
}

function drawCircle(x, y, radios, startAngle, endAngle) {
    ctx.moveTo(x, y);
    ctx.arc(x, y, radios, startAngle, endAngle, false);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawGraph(){
    line(70, 140, 330, 140, 2) //x
    line(200, 10, 200, 270, 2) //y

    line(80, 135, 80, 145, 2) //-R(80, 140) (x)
    line(140, 135, 140, 145, 2) //-R/2(140, 140) (x)
    line(320, 135, 320, 145, 2) //R(320, 140) (x)
    line(260, 135, 260, 145, 2) //R/2(260, 140) (x)

    drawText("-R", 75, 157, 10); //x
    drawText("-R/2", 135, 157, 20) //x
    drawText("R/2", 265, 157, 20) //x
    drawText("R", 315, 157, 10) //x

    line(195, 20, 205, 20, 2) //R(200, 20) (y)
    line(195, 80, 205, 80, 2) //R/2(200, 80) (y)
    line(195, 260, 205, 260, 2) //-R(200, 260) (y)
    line(195, 200, 205, 200) //-R/2(200, 200) (y)

    drawText("R", 212, 25, 10) //y
    drawText("R/2", 212, 85, 20) //y
    drawText("-R/2", 212, 205, 20) //y
    drawText("-R", 212, 265, 10) //y

    line(80, 140, 200, 260, 2) //линия во 3 координатной четверти

    line(200, 260, 320, 260)//Прямоугольник в 4 координатной четверти
    line(320, 140, 320, 260)

    drawCircle(200, 140, 120, Math.PI, 3*Math.PI/2) //Дуга окружности во 2 четверти
}

drawGraph();

let clearCanvas = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGraph()
}

function addDot(x, y, r, matched) {
    ctx.fillStyle = matched ? "green" : "red";
    ctx.fillRect(200 + (x * 120) / r, 140 - (y * 120) / r, 2, 2);
    localStorage.setItem("r", r)
}
