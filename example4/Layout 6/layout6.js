// const items = document.querySelectorAll('.api-slider .list-slider .item');

// items.forEach(item  => {
//     item.addEventListener('click', function(){
        
//         console.log("Item clicked:", this); // Debugging

//         // Remove .opacity from all items and add .non-opacity
//         items.forEach((el) => {
//             el.classList.remove("opacity");
//             el.classList.add("non-opacity");
//         });

//         // Add .opacity to the clicked item and remove .non-opacity
//         this.classList.add("opacity");
//         this.classList.remove("non-opacity");

//         document.querySelectorAll(".item .bullet").forEach(bullet => {
//             bullet.classList.remove("bullet-active");
//         });

//         document.querySelectorAll(".item .sub-bullet, .item .active").forEach(subBullet => {
//             subBullet.classList.remove("active");
//             subBullet.classList.add("sub-bullet");
//         });

//         const bullet = this.querySelector(".bullet");
//         const subBullet = this.querySelector(".sub-bullet");
    
//         if (bullet) bullet.classList.add("bullet-active");
//         if (subBullet) {
//             subBullet.classList.add("active");
//             subBullet.classList.remove("sub-bullet");
//         }
//     });
// });
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 226}px)`;
}

items.forEach((item, i) => {
    item.addEventListener("click", function() {
       
        items.forEach(el => el.classList.replace("opacity", "non-opacity"));
        this.classList.replace("non-opacity", "opacity");

        
        document.querySelectorAll(".bullet").forEach(b => b.classList.remove("bullet-active"));
        document.querySelectorAll(".sub-bullet").forEach(sb => sb.classList.remove("active"));

        
        this.querySelector(".bullet").classList.add("bullet-active");
        this.querySelector(".sub-bullet").classList.add("active");
        showSlide(i);
        console.log(i);
    });
});




