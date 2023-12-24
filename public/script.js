const button = document.getElementById("btn");

button.addEventListener("click", function() {
    if (document.querySelector("#wrapper input").value.length == 0) {
        alert("Todo List tidak boleh kosong")
    }
})