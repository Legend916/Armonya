// let active = document.getElementsByClassName('active');
let rows = document.getElementsByClassName('row');
let rightButton = document.getElementById('rightButton');
let x = 0;
let y = 0;



function logKey(e) {
    console.log(` ${e.code}`);
    const activeElement = document.getElementsByClassName('active')[0];
    switch (e.code) {
        case "ArrowLeft":
            if (activeElement.previousElementSibling != null) {
                activeElement.classList.remove("active");
                activeElement.previousElementSibling.classList.add("active");
                x--;
            }
            break;
        case "ArrowRight":
            if (activeElement.nextElementSibling != null) {
                activeElement.classList.remove("active");
                activeElement.nextElementSibling.classList.add("active");
                x++;
            }
            break;
        case "ArrowDown":
            if (activeElement.parentElement.nextElementSibling != null) {
                activeElement.classList.remove("active");
                activeElement.parentElement.nextElementSibling.children[x].classList.add("active");
            }
            break;
        case "ArrowUp":
            if (activeElement.parentElement.previousElementSibling != null) {
                activeElement.classList.remove("active");
                activeElement.parentElement.previousElementSibling.children[x].classList.add("active");
            }

    }
    console.log(x);
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('keydown', logKey);
});