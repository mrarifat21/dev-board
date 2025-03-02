let date = new Date();

document.getElementById("date").innerText = date.toDateString();

const buttons = document.getElementsByClassName("complete");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    alert("Board updated Successfully");
    let taskNumber = parseInt(document.getElementById("task-number").innerText);
    taskNumber = taskNumber - 1;
    document.getElementById("task-number").innerText = taskNumber;
    if (taskNumber === 0) {
      alert("Congrates!!! You have completed all the current task");
    }

    let completeTask = parseInt(
      document.getElementById("complete-task").innerText
    );
    completeTask = completeTask + 1;
    document.getElementById("complete-task").innerText = completeTask;
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? "0" + m : m;
    let time = h + ":" + m + ":" + s + " " + ampm;
    const title =
      buttons[i].parentElement.parentElement.querySelector("h2").innerText;
    const p = document.createElement("p");
    p.classList.add("bg-[#F4F7FF]", "m-3");
    p.innerText = `
    You have Complete The Task ${title} at ${time}
    `;
    const activityContainer = document.getElementById("activity-container");
    activityContainer.appendChild(p);

    buttons[i].style.pointerEvents = "none";
    buttons[i].style.opacity = "0.5";
  });
}

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("activity-container").innerHTML = " ";
});

document.getElementById("Discover").addEventListener("click", function () {
  window.location.href = "./pages/blog.html";
});
