let add = document.querySelector(".add");
let options = document.querySelector(".options");
let input = document.querySelector("#input");
let click = document.querySelector("#clickBtn");
let result = document.querySelector("#result");

add.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "") {
    alert("Please Enter Something...");
  } else {
    options.classList.add("active");
    options.innerHTML += `
        <div class="list">
          <span class="list_item">
          ${document.querySelector("#input").value}
          </span>
          <button class="delete">
          <i class="far fa-trash-alt"></i>
          </button>
        </div>
        `;

    input.value = "";
    let current_lists = document.querySelectorAll(".delete");
    for (let i = 0; i < current_lists.length; i++) {
      current_lists[i].onclick = function () {
        this.parentNode.remove();
        let lists = document.querySelectorAll(".list");
        if (lists.length == 0) {
          options.classList.remove("active");
        }
      };
    }
  }
});

