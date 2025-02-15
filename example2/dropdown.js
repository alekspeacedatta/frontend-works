const optionLang = document.querySelector(".select-lang"),
      optionBtn = optionLang.querySelector(".select-btn"),
      options = optionLang.querySelectorAll(".option"),
      sBtn_text = optionLang.querySelector(".sBtn-text");

options.forEach(Option => {
    Option.addEventListener("click", ()=>{
        let selectedoption = option.querySelector(".option-text").innerText;
        console.log(selectedoption)
    })
})