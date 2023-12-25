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
                <i class='bx bxs-message-square-x'></i>
                </button>
                <button class="reload">
                <i class='bx bx-recycle'></i>
                </button>
             </div>
             `;
    };

    const buttonDelete = document.querySelectorAll(".delete");
    buttonDelete.forEach(function(el) {
        el.addEventListener("click", function(e) {
            this.parentNode.remove();
        })
    })

    const reload = document.querySelectorAll(".reload");
    for (let b = 0; b < reload.length; b++) {
        reload[b].addEventListener("click", function() {
            reload[b].parentElement.style.textDecoration = "line-through"
        })

        document.querySelector("#wrapper input").value = "";
    }

    document.querySelector("#wrapper input").value = "";

});