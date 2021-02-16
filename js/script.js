const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
const toggleClose = document.querySelector(".toggle-close");

menu.addEventListener("click", function () {
    toggle.classList.add("active");
})

toggleClose.addEventListener("click", function () {
    toggle.classList.remove("active");
})