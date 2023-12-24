const button = document.getElementById("btn");

button.addEventListener("click", function() {
    if (document.querySelector("#wrapper input").value.length == 0) {
        alert("Todo List tidak boleh kosong")
    } else {
        document.getElementById("task").innerHTML +=
            `<div class="tasks">
                <span id="taskname">
                 ${document.querySelector('#wrapper input').value}
                </span>
                <button class="delete">
                <i class='bx bx-message-square-x'></i>
                </button>
             </div>
             `;
    }

    const buttonDelete = document.querySelectorAll(".delete");

    for (let i = 0; i < buttonDelete.length; i++) {

        // const element = array[index];
        // buttonDelete[i].onclick = function() {
        //         this.parentNode.remove();
        //     }

        buttonDelete[i].addEventListener("click", function() {
            this.parentNode.remove();
        })
    }

    const tasks = document.querySelectorAll(".tasks");

    for (let a = 0; a < tasks.length; a++) {
        tasks[a].addEventListener("click", function() {
            this.classList.toggle("complete");
        })
    }

    document.querySelector("#wrapper input").value = "";


});