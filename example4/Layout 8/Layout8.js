gsap.from(".hc-el", { opacity: 0,  duration: 1.5, ease: "power2.out" })
gsap.from(".img", {opacity: 0, x: 50, duration: 2, ease: "power2.out"});
gsap.from(".ht", {opacity: 0, x: -50, duration: 2, ease: "power2.out", stagger: .3});
gsap.from(".column1-el", {opacity: 0, y: 50, duration: 2, ease: "power2.out", stagger: .3});
gsap.from(".column2-el", {opacity: 0, y: 50, duration: 2, ease: "power2.out", stagger: .3});


const MENU = document.querySelector(".menu");
const BURGERMENU = document.querySelector(".burger-menu");
const SECTIONONE = document.querySelector(".section-one");
const FOOTER = document.querySelector(".footer");
let clikcIndex = 0

    MENU.addEventListener("click", () => {
        if(clikcIndex === 0){
            MENU.style.backgroundColor = "white";
            MENU.style.padding = "10px";
            MENU.style.borderRadius = "10px";
            MENU.style.color = "#237478";
            document.querySelector(".arrow").style.rotate = "180deg"
            BURGERMENU.style.transform = `translateY(${0}px)`
            SECTIONONE.style.transform = `translateY(${130}px)`
            if (window.innerWidth <= 320) {
                SECTIONONE.style.transform = `translateY(200px)`;
            }
            FOOTER.style.transform = `translateY(${280}px)`
            gsap.from(".menu", { opacity: 0, scale: 1.2, duration: 1.5, ease: "power2.out" });

            clikcIndex++;
        }
        else if(clikcIndex > 0 ){
            MENU.style.backgroundColor = "#237478";
            MENU.style.padding = "auto";
            MENU.style.borderRadius = "0";
            MENU.style.color = "white";
            BURGERMENU.style.position = "absolute"
            document.querySelector(".arrow").style.rotate = "-180deg"
            BURGERMENU.style.transform = `translateY(-${280}px)`
            SECTIONONE.style.transform = `translateY(${0}px)`
            FOOTER.style.transform = `translateY(${0}px)`

            clikcIndex--;
        }
})