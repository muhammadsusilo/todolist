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
                    <i class='bx bx-trash'></i>
                    </button>
                    <button class="reload">
                    <i class='bx bx-recycle'></i>
                    </button>
             </div>
             `;
    };

    const buttonDelete = document.querySelectorAll(".delete");
    for (let i = 0; i < buttonDelete.length; i++) {
        // buttonDelete[i].onclick = function() {
        //         this.parentNode.remove();
        //     }
        buttonDelete[i].addEventListener("click", function() {
            this.parentNode.remove();
        })
    }

    const reload = document.querySelectorAll(".reload");
    const tasks = document.querySelectorAll(".tasks");

    for (let b = 0; b < reload.length; b++) {
        reload[b].addEventListener("click", function() {
            tasks[b].parentElement.style.textDecoration = "line-through"
                // this.classList.toggle("complete");
        })

        document.querySelector("#wrapper input").value = "";

    }

    // melakukan garis tengah saat di klik lewat kursor
    // const tasks = document.querySelectorAll(".tasks");
    // for (let a = 0; a < tasks.length; a++) {
    //     tasks[a].addEventListener("click", function() {
    //         this.classList.toggle("complete");
    //     })
    // }

    document.querySelector("#wrapper input").value = "";

});