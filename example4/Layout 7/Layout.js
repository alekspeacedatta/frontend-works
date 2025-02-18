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
            MENU.style.color = "#414cff";
            document.querySelector(".arrow").style.rotate = "180deg"
            BURGERMENU.style.transform = `translateY(${0}px)`
            SECTIONONE.style.transform = `translateY(${660}px)`
            FOOTER.style.transform = `translateY(${660}px)`
            gsap.from(".menu", { opacity: 0, scale: 1.2, duration: 1.5, ease: "power2.out" });

            clikcIndex++;
        }
        else if(clikcIndex > 0 ){
            MENU.style.backgroundColor = "#414cff";
            MENU.style.padding = "auto";
            MENU.style.borderRadius = "0";
            MENU.style.color = "white";
            BURGERMENU.style.position = "absolute"
            document.querySelector(".arrow").style.rotate = "-180deg"
            BURGERMENU.style.transform = `translateY(-${765}px)`
            SECTIONONE.style.transform = `translateY(${0}px)`
            FOOTER.style.transform = `translateY(${0}px)`

            clikcIndex--;
        }
})


gsap.from(".boxT",{ opacity: 0, y: 50, duration: 2, ease: "power2.out"});
gsap.from(".boxB", { opacity: 0, y: 50, duration: 2, ease: "power2.out"});
gsap.from(".ht-el", { opacity: 0, x: 50, duration: 2, ease: "power2.out"})
gsap.from(".links", { opacity: 0, x: -50, duration: 2, ease: "power2.out" })
gsap.from(".hc-el", { opacity: 0,  duration: 1.5, ease: "power2.out" })

