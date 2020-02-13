const first = document.getElementById("first");
const third = document.getElementById("third");



const parallaxY = (element, distance, speed) => {
     const item = document.getElementById(element);
     item.style.transform = `translateY(${distance * speed}px)`;
 }
const parallaxX = (element, distance, speed) => {
     const item = document.getElementById(element);
     item.style.transform = `translateX(${distance * speed}px)`;
 }

 window.addEventListener("scroll", function() {
     parallaxY("first-title", window.scrollY, 0.3);
     parallaxY("first-subtitle", window.scrollY, -0.3);
     
     parallaxY("austin-col", window.scrollY, -0.3);

     parallaxY("me-col", window.scrollY, 0.35);
     
     parallaxY("second-title-col", window.scrollY, -0.9 );

 });



