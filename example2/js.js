const optionLang = document.querySelector(".select-lang"),
      selectBtn = optionLang.querySelector(".select-btn"),
      selectBtnIcon = selectBtn.querySelector(".language-icon"),
      options = optionLang.querySelectorAll(".option"),
      sBtn_text = optionLang.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionLang.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedText = option.querySelector(".option-text").innerText;
        let selectedIconSrc = option.querySelector(".language-icon").getAttribute("src");
        
        // Update the main button text and icon
        sBtn_text.innerText = selectedText;
        selectBtnIcon.setAttribute("src", selectedIconSrc);
        
        optionLang.classList.remove("active");
    });
});

var popup = document.getElementById("contactPopup");
var showFormBtn = document.getElementById("showFormBtn");
var closeBtn = document.getElementById("closeBtn");

function showSideBar(){
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = 'flex'
}
function hideSideBar(){
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = 'none'
}
showFormBtn.onclick = function() {
  popup.style.display = "flex"; 
}
closeBtn.onclick = function() {
  popup.style.display = "none";  
}
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
document.getElementById("contactForm").onsubmit = function(event) {
  event.preventDefault(); 
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);

  popup.style.display = "none";
}

