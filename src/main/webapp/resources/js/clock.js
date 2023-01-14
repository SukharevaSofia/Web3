setInterval(() => {
    document.getElementById("clock").innerHTML = (new Date())
        .toLocaleString("ru-RU", { dateStyle: "medium", timeStyle: "medium" });
}, 1000);
