const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () =>{
            const openItem = document.querySelector('.accordion-header.active');
            if(openItem && openItem !== header){
                openItem.classList.remove('active');
                openItem.nextElementSibling.style.maxHeight = null;
            }
            header.classList.toggle('active');  
            const content = header.nextElementSibling;
            if (header.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        })
    })