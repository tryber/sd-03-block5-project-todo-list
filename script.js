/* let pegaCor = document.querySelectorAll(".color");
for (let i = 0; i < pegaCor.length; i++) {
    pegaCor[i].addEventListener("click", function() {
        document.querySelector(".selected").classList.remove("selected");
        pegaCor[i].classList.add("selected");
    });
}

let pegaPixel = document.querySelectorAll(".pixel");
for (let i = 0; i < pegaPixel.length; i++) {
    pegaPixel[i].addEventListener("click", function(){
        let escolheCor = document.querySelector(".selected");
        pegaPixel[i].style.backgroundColor = escolheCor.id;
    });
}

let apagaTudo = document.getElementById("clear-board");
apagaTudo.addEventListener("click", function(){
    let pegaPixel = document.querySelectorAll(".pixel");
    for(i=0; i < pegaPixel.length; i++){
        
        pegaPixel[i].style.backgroundColor = "white";
    }
}); */