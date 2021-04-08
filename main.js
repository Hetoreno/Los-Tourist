/* Location picture sort */
const button = document.querySelectorAll(".list li");
const list = document.querySelectorAll(".itembox");

button.forEach((event) =>{
    event.addEventListener("click", ()=> {
        
        for (let i=0; i< button.length; i++){
            button[i].classList.remove("active");
        }
        event.classList.add("active");

        list.forEach((current)=>{
            current.style.display="none";
            let pictures = event.textContent.toLowerCase();
            if(current.getAttribute("data-att")===pictures || pictures === "all"){
                current.style.display="block";
            }
        })
    })
});

/* Back to top arrow */
const arrow = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 800){
        arrow.classList.add("active");
    } else {
        arrow.classList.remove("active");
    }
});