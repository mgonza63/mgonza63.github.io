// const first = document.getElementById("first");
// const third = document.getElementById("third");



// const parallaxY = (element, distance, speed) => {
//     const item = document.getElementById(element);
//     item.style.transform = `translateY(${distance * speed}px)`;
// }
// const parallaxX = (element, distance, speed) => {
//     const item = document.getElementById(element);
//     item.style.transform = `translateX(${distance * speed}px)`;
// }

// window.addEventListener("scroll", function() {
//     parallaxY("first-title", window.scrollY, 0.3);
//     parallaxY("first-subtitle", window.scrollY, -0.3);

//     parallaxY("me-pic", window.scrollY, -0.5);
//     parallaxX("me-pic", window.scrollY, 0.6);

//     parallaxY("austin-pic", window.scrollY, -0.7);
//     parallaxX("austin-pic", window.scrollY, -0.2);
// });

var images = document.getElementsByClassName('austin'); 

new simpleParallax(images, {
    scale: 1.5,
	orientation: 'right'
});


