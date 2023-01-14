document.getElementById("function_plot").onmouseup = function (event) {
    let r = checkR()
    if (r.status) {
        const x = (r.val * (event.offsetX - 200) / 120).toFixed(3);
        const y = (r.val * (140 - event.offsetY) / 120).toFixed(3);
        document.getElementsByClassName("hiddenX")[0].value = x
        document.getElementsByClassName("hiddenY")[0].value = y
        document.getElementsByClassName("hiddenR")[0].value = r.val
        document.getElementsByClassName("hiddenSend")[0].click()

        chooseGraph(x, y, r.val)
    } else {
        alert("Выберете число R")
    }
}
