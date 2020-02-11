const first = document.getElementById("first");
const third = document.getElementById("third");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    
    first.style.backgroundPositionY = offset * 1.05 + "px";
})