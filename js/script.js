const counter = document.querySelector(".counter");
let temp = 0;
const btns = document.querySelectorAll(".btn-click");


btns.forEach(btn => {
    btn.addEventListener("click",(e) => {
        if(e.target.id === "increase"){
            temp += 1;
        }else if(e.target.id === "reset"){
            temp = 0;
        }
        else{
            temp -= 1;
        }
        if(temp > 0){
            counter.style.color = "#14b858";
        }else if(temp === 0){
            counter.style.color = "#000"
        }
        else{
            counter.style.color = "#e43c2b";
        }
        counter.innerHTML = temp;
    })
})
