const quarto1 = document.getElementById("quarto01");
const quarto2 = document.getElementById("quarto02");
const banheiro1 = document.getElementById("banheiro01");
const lavanderia = document.getElementById("lavanderia");
const cozinha = document.getElementById("cozinha");
const salaDeEstar = document.getElementById("salaDeEstar");
const banheiro02 = document.getElementById("banheiro02");
function circuito1(){
    const circuito1 = document.getElementById("c1");
    if(quarto1.style.backgroundColor != "red" && quarto2.style.backgroundColor != "red"){
        quarto1.style.backgroundColor = "red";
        quarto2.style.backgroundColor = "red";
        circuito1.innerHTML = "Ligar";
    }else{
        quarto1.style.backgroundColor = "burlywood";
        quarto2.style.backgroundColor = "burlywood";
        circuito1.innerHTML = "Desligar";
    }
}

function circuito2(){
    const circuito2 = document.getElementById("c2");
    if(banheiro1.style.backgroundColor != "red" && cozinha.style.backgroundColor != "red" && lavanderia.style.backgroundColor != "red"){
        banheiro1.style.backgroundColor = "red";
        cozinha.style.backgroundColor = "red";
        lavanderia.style.backgroundColor = "red";
        circuito2.innerHTML = "Ligar";
    }else{
        banheiro1.style.backgroundColor = "burlywood";
        cozinha.style.backgroundColor = "burlywood";
        lavanderia.style.backgroundColor = "burlywood";
        circuito2.innerHTML = "Desligar";
    }
}

function circuito3(){
    const circuito3 = document.getElementById("c3");
    if(salaDeEstar.style.backgroundColor != "red" && banheiro02.style.backgroundColor != "red"){
        salaDeEstar.style.backgroundColor = "red";
        banheiro02.style.backgroundColor = "red";
        circuito3.innerHTML = "Ligar";
    }else{
        salaDeEstar.style.backgroundColor = "burlywood";
        banheiro02.style.backgroundColor = "burlywood";
        circuito3.innerHTML = "Desligar";
    }
}