// gsap.from(".nav3", { y: -30, opacity: 0, duration: 2, ease: "power2.out" })
// gsap.from(".nav2", { y: -30, opacity: 0, duration: 2, ease: "power2.out" })
// gsap.from(".nav", { y: 20, opacity: 0, duration: 1, ease: "power2.out" })

// gsap.from(".img", { y:30, opacity: 0, duration: 2, ease: "power2.out" })
// gsap.from(".box-el1", { opacity: 0, y: 50, duration: 1, stagger: 0.3  })
// gsap.from(".box-el2", { opacity: 0, y: 50, duration: 1, stagger: 0.3  })

// gsap.from(".text2-el", { opacity: 0, y: 50, duration: 1, stagger: 0.3, scrollTrigger: {
//     trigger: ".text2-el",
//     start: "top 85%", 
//     toggleActions: "play none none none"
// }  })
// gsap.from(".img2", { y:30, opacity: 0, duration: 2, scrollTrigger: {
//     trigger: ".img2",
//     start: "top 85%", 
//     toggleActions: "play none none none"
// }   })
// gsap.from(".text3-el", { opacity: 0, y: 50, duration: 1, stagger: 0.3, scrollTrigger: {
//     trigger: ".text3-el",
//     start: "top 85%", 
//     toggleActions: "play none none none"
// }  })
// gsap.from(".img3", { y:30, opacity: 0, duration: 2, scrollTrigger: {
//     trigger: ".img3",
//     start: "top 85%", 
//     toggleActions: "play none none none"
// }   })
// const img = document.querySelector('.image-container .img');
//         const cursor = document.querySelector('.custom-cursor');
        
//         // When the mouse enters the image
//         img.addEventListener('mouseenter', () => {
//             cursor.style.opacity = '1';  // Show custom cursor when entering the image
//             document.body.style.cursor = 'none';  // Remove the default cursor
//         });

//         // When the mouse leaves the image
//         img.addEventListener('mouseleave', () => {
//             cursor.style.opacity = '0';  // Hide custom cursor when leaving the image
//             document.body.style.cursor = 'default';  // Reset to default cursor outside the image
//         });

//         // Move the custom cursor around
//         document.addEventListener('mousemove', (e) => {
//             cursor.style.left = e.pageX + 'px';
//             cursor.style.top = e.pageY + 'px';
//         });

//         img.addEventListener('mousemove', (e) => {
//             let x = (e.offsetX / img.offsetWidth - 0.5) * 10;
//             let y = (e.offsetY / img.offsetHeight - 0.5) * 10;
//             gsap.to(img, { x: x, y: y, scale: 1.03, duration: 0.5 });
//         });

//         img.addEventListener('mouseleave', () => {
//             gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.5 });
// });
// const img2 = document.querySelector('.image-container .img2');
//         const cursor2 = document.querySelector('.custom-cursor2');
        
//         // When the mouse enters the image
//         img2.addEventListener('mouseenter', () => {
//             cursor2.style.opacity = '1';  // Show custom cursor when entering the image
//             document.body.style.cursor = 'none';  // Remove the default cursor
//         });

//         // When the mouse leaves the image
//         img2.addEventListener('mouseleave', () => {
//             cursor2.style.opacity = '0';  // Hide custom cursor when leaving the image
//             document.body.style.cursor = 'default';  // Reset to default cursor outside the image
//         });

//         // Move the custom cursor around
//         document.addEventListener('mousemove', (e) => {
//             cursor2.style.left = e.pageX + 'px';
//             cursor2.style.top = e.pageY + 'px';
//         });

//         img2.addEventListener('mousemove', (e) => {
//             let x = (e.offsetX / img2.offsetWidth - 0.5) * 10;
//             let y = (e.offsetY / img2.offsetHeight - 0.5) * 10;
//             gsap.to(img2, { x: x, y: y, scale: 1.03, duration: 0.5 });
//         });

//         img2.addEventListener('mouseleave', () => {
//             gsap.to(img2, { x: 0, y: 0, scale: 1, duration: 0.5 });
// });
// const img3 = document.querySelector('.image-container .img3');
//         const cursor3 = document.querySelector('.custom-cursor3');
        
//         // When the mouse enters the image
//         img3.addEventListener('mouseenter', () => {
//             cursor3.style.opacity = '1';  // Show custom cursor when entering the image
//             document.body.style.cursor = 'none';  // Remove the default cursor
//         });

//         // When the mouse leaves the image
//         img3.addEventListener('mouseleave', () => {
//             cursor3.style.opacity = '0';  // Hide custom cursor when leaving the image
//             document.body.style.cursor = 'default';  // Reset to default cursor outside the image
//         });

//         // Move the custom cursor around
//         document.addEventListener('mousemove', (e) => {
//             cursor3.style.left = e.pageX + 'px';
//             cursor3.style.top = e.pageY + 'px';
//         });

//         img3.addEventListener('mousemove', (e) => {
//             let x = (e.offsetX / img.offsetWidth - 0.5) * 10;
//             let y = (e.offsetY / img.offsetHeight - 0.5) * 10;
//             gsap.to(img3, { x: x, y: y, scale: 1.03, duration: 0.5 });
//         });

//         img3.addEventListener('mouseleave', () => {
//             gsap.to(img3, { x: 0, y: 0, scale: 1, duration: 0.5 });
// });

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
const MENU = document.querySelector(".menu");
const BURGERMENU = document.querySelector(".burger-menu");
const SECTIONONE = document.querySelector(".section-one");
let clikcIndex = 0

    MENU.addEventListener("click", () => {
        if(clikcIndex === 0){
            BURGERMENU.style.transform = `translateY(${0}px)`
            SECTIONONE.style.transform = `translateY(${400}px)`
            gsap.from(".menu", { opacity: 0, scale: 1.2, duration: 1.5, ease: "power2.out" });

            clikcIndex++;
        }
        else if(clikcIndex > 0 ){
            BURGERMENU.style.position = "absolute"
            BURGERMENU.style.transform = `translateY(-${520}px)`
            SECTIONONE.style.transform = `translateY(${0}px)`

            clikcIndex--;
        }
})
// General animations for navigation and elements
const elements = [
    { selector: ".nav3", y: -30, duration: 2 },
    { selector: ".hc-el", y: -30, duration: 2 },
    { selector: ".nav2", y: -30, duration: 2 },
    { selector: ".nav", y: 20, duration: 1 },
    { selector: ".img", y: 30, duration: 2 },
    { selector: ".box-el1", y: 50, duration: 1, stagger: 0.3 },
    { selector: ".box-el2", y: 50, duration: 1, stagger: 0.3 }
];

elements.forEach(el => {
    gsap.from(el.selector, {
        opacity: 0,
        y: el.y,
        duration: el.duration,
        stagger: el.stagger || 0,
        ease: "power2.out"
    });
});

// Scroll-based animations
const scrollElements = [".text2-el", ".img2", ".text3-el", ".img3"];
scrollElements.forEach(selector => {
    gsap.from(selector, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: selector,
            start: "top 100%",
            toggleActions: "play none none none"
        }
    });
});

// Custom cursor logic
const setupCustomCursor = (imgClass, cursorClass) => {
    const img = document.querySelector(imgClass);
    const cursor = document.querySelector(cursorClass);

    if (!img) return;

    img.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
        document.body.style.cursor = "none";
    });

    img.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
        document.body.style.cursor = "default";
    });
 
    img.addEventListener("mousemove", (e) => {
        let x = (e.offsetX / img.offsetWidth - 0.5) * 10;
        let y = (e.offsetY / img.offsetHeight - 0.5) * 10;
        gsap.to(img, { x, y, scale: 1.03, duration: 0.5 });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.5 });
    });
};

// Initialize custom cursors
setupCustomCursor(".img", ".custom-cursor");
setupCustomCursor(".img2", ".custom-cursor2");
setupCustomCursor(".img3", ".custom-cursor3");
