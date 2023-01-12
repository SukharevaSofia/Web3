document.getElementById("function_plot").onmouseup = function (event) {
    let r = checkR()
    if (r.status) {
        const x = (r.val * (event.offsetX - 200) / 120).toFixed(3);
        const y = (r.val * (140 - event.offsetY) / 120).toFixed(3);
        document.getElementById("j_idt44:hidden-x").value = x
        document.getElementById("j_idt44:hidden-y").value = y
        document.getElementById("j_idt44:hidden-r").value = r.val
        document.getElementById("j_idt44:hidden-form").click()

        chooseGraph(x, y, r.val)
    } else {
        alert("Выберете число R")
    }

}