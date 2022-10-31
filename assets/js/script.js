let navbar = document.getElementById("navbar");
console.log(navbar);
let btn = document.querySelector(".btn-burger");
console.log(btn);
let ul = document.querySelector(".ul");
console.log(ul);

function maFonction() {
    let ul = document.querySelector(".ul");
    if (ul.style.display === "none") {
        ul.style.display = "block";
    }
    else {
        ul.style.display = "none";
    }
}

