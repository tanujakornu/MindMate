function login() {
    alert("Login Successful!");
    window.location.href = "dashboard.html";
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

window.onload = function () {
    let t = 0;
    let f = 0;

    let interval = setInterval(() => {
        if (t < 10) {
            t++;
            document.getElementById("tasks").textContent = t;
        }
        if (f < 80) {
            f += 5;
            document.getElementById("focus").textContent = f;
        }
    }, 100);
};
