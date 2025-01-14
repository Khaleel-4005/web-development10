// document.addEventListener("DOMContentLoaded", function () {
//     const signInBtn = document.querySelector(".sign-in-btn");
//     signInBtn.addEventListener("click", function (event) {
//         event.preventDefault();
//         alert("Sign in functionality is not implemented yet.");
//     });

//     const googleBtn = document.querySelector(".google-btn");
//     googleBtn.addEventListener("click", function () {
//         alert("Google login functionality is not implemented yet.");
//     });
// });











document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== "") {
        const list = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.innerHTML = `${task} <span onclick="removeTask(this)">❌</span>`;
        list.appendChild(li);
        input.value = "";
    } else {
        alert('Please enter a task!');
    }
}

function removeTask(span) {
    const li = span.parentElement;
    li.remove();
}
