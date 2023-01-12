setInterval(() => {
    document.getElementById("clock").innerHTML = (new Date())
        .toLocaleString(undefined, {dateStyle: "full", timeStyle: "medium"});
}, 1000);