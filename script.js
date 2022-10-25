var delayInMilliseconds = 4000;
var numeroSecreto = parseInt(Math.random() * 11)

setTimeout(function delay() {
    var selecionaDiv = document.getElementById("main")
    selecionaDiv.innerHTML = `<div class="container-top-2">
    <h1 class="text" id="texto">Digite um número entre 0 e 10</h1>
</div>

<div id="container-center">
    <div class="left-circle-0" id="bcircle-0"></div>
    <div class="big-circle" id="bcircle-1">
        <input type="number" class='numbers' id="numb-1">
    </div>
    <div class="buttom">
        <button class="buttom" id="buttom-green" onclick="deuCerto()">
            <p class="buttom-text">enviar</p>
            <img src="iconArrow.svg" class="icon-arrow">
        </button>
    </div>
</div>

<div id="container-down-2">
    <img src="icon-Open.svg" class="attempts" id="open">
    <img src="icon-Closet.svg" class="attempts" id="closet">
    <img src="icon-Closet.svg" class="attempts" id="closet">
    <img src="icon-Closet.svg" class="attempts" id="closet">
</div>`
}, delayInMilliseconds);

function deuCerto() {
    var selecionaTexto = parseInt(document.getElementById("numb-1").value);
    var stringTexto = document.getElementById("texto");
    if (selecionaTexto == numeroSecreto) {
        deuBom();
    }
    else {
        if (selecionaTexto > numeroSecreto) {
            stringTexto.innerHTML = "Um pouco menos"
            enviar();
        }
        else{
            stringTexto.innerHTML = "Um pouco mais"
            enviar();
        }
    }
}

function enviar() {
    var mudaCircle = document.getElementById("container-center");
    var mudaAttempts = document.getElementById("container-down-2");

    mudaCircle.innerHTML = ` 
    <div class="left-circle-0" id="bcircle-1"></div>
    <div class="big-circle" id="bcircle-2">
    <input type="number" class='numbers' id="numb-2">
</div>
<div class="buttom">
    <button class="buttom" id="buttom-blue" onclick="teste2()">
        <p class="buttom-text">enviar</p>
        <img src="iconArrow.svg" class="icon-arrow">
    </button>
</div>`

    mudaAttempts.innerHTML = `<img src="icon-Wrong.svg" class="attempts" id="open">
    <img src="icon-Open.svg" class="attempts" id="closet">
    <img src="icon-Closet.svg" class="attempts" id="closet">
    <img src="icon-Closet.svg" class="attempts" id="closet">`
}

function teste2() {
    var selecionaTexto = parseInt(document.getElementById("numb-2").value);
    var stringTexto = document.getElementById("texto");
    if (selecionaTexto == numeroSecreto) {
        deuBom();
    }
    else {
        if (selecionaTexto > numeroSecreto) {
            stringTexto.innerHTML = "Um pouco menos"
            enviar2();
        }
        else{
            stringTexto.innerHTML = "Um pouco mais"
            enviar2();
        }
    }
}

function enviar2() {
    var mudaCircle = document.getElementById("container-center");
    var mudaAttempts = document.getElementById("container-down-2");

    mudaCircle.innerHTML = ` 
    <div class="left-circle-0" id="bcircle-1"></div>
    <div class="left-circle-0" id="bcircle-2"></div>
    <div class="big-circle" id="bcircle-3">
    <input type="number" class='numbers' id="numb-3">
</div>
<div class="buttom">
    <button class="buttom" id="buttom-orange" onclick="teste3()">
        <p class="buttom-text">enviar</p>
        <img src="iconArrow.svg" class="icon-arrow">
    </button>
</div>`

    mudaAttempts.innerHTML = `<img src="icon-Wrong.svg" class="attempts" id="open">
    <img src="icon-Wrong.svg" class="attempts" id="closet">
    <img src="icon-Open.svg" class="attempts" id="closet">
    <img src="icon-Closet.svg" class="attempts" id="closet">`
}

function teste3() {
    var selecionaTexto = parseInt(document.getElementById("numb-3").value);
    var stringTexto = document.getElementById("texto");
    if (selecionaTexto == numeroSecreto) {
        deuBom();
    }
    else {
        if (selecionaTexto > numeroSecreto) {
            stringTexto.innerHTML = "Um pouco menos"
            enviar3();
        }
        else{
            stringTexto.innerHTML = "Um pouco mais"
            enviar3();
        }
    }
}


function enviar3() {
    var mudaCircle = document.getElementById("container-center");
    var mudaAttempts = document.getElementById("container-down-2");

    mudaCircle.innerHTML = ` 
    <div class="left-circle-0" id="bcircle-1"></div>
    <div class="left-circle-0" id="bcircle-2"></div>
    <div class="left-circle-0" id="bcircle-3"></div>
    <div class="big-circle" id="bcircle-4">
    <input type="number" class='numbers' id="numb-4">
</div>
<div class="buttom">
    <button class="buttom" id="buttom-red" onclick="teste4()">
        <p class="buttom-text">enviar</p>
        <img src="iconArrow.svg" class="icon-arrow">
    </button>
</div>`

    mudaAttempts.innerHTML = `<img src="icon-Wrong.svg" class="attempts" id="open">
    <img src="icon-Wrong.svg" class="attempts" id="closet">
    <img src="icon-Wrong.svg" class="attempts" id="closet">
    <img src="icon-Open.svg" class="attempts" id="closet">`
}

function teste4() {
    var selecionaTexto = parseInt(document.getElementById("numb-4").value);
    var stringTexto = document.getElementById("texto");
    if (selecionaTexto == numeroSecreto) {
        deuBom();
    }
    else {
        deuRuim()
        }
    }


function deuBom() {
    var selecionaDivBody = document.getElementById("body")
    selecionaDivBody.classList.add("animate__animated", "animate__fadeIn");
    selecionaDivBody.innerHTML = `
    <main id="main" class="yes">
    <div class="container-top-3">
        <h1 class="text-final">Você acertou!</h1>
    </div>

    <div id="container-center-3" >
        <h1 class="text-final">${numeroSecreto}</h1>
    </div>

    <div class="container-down-3">
        <h1 class="text-final-2">foi o número sorteado</h1>
    </div>
</main>
</body>
<footer>
<div class="container-footer yes">
    <p class="footer-text white">feito com </p>
    <img src="iconCoracaoWhite.svg" alt="icon-coracao" id="icon-coracao">
    <p class="footer-text white" id="footer-text-name"> por Luiz</p>
</div>
</footer>`
}

function deuRuim() {
    var selecionaDivBody = document.getElementById("body")
    selecionaDivBody.classList.add("animate__animated", "animate__fadeIn");
    selecionaDivBody.innerHTML = `
    <main id="main" class="no">
    <div class="container-top-3">
        <h1 class="text-final">Você errou!</h1>
    </div>

    <div id="container-center-3" >
        <h1 class="text-final">${numeroSecreto}</h1>
    </div>

    <div class="container-down-3">
        <h1 class="text-final-2">foi o número sorteado</h1>
    </div>
</main>
</body>
<footer>
<div class="container-footer no">
    <p class="footer-text white">feito com </p>
    <img src="iconCoracaoWhite.svg" alt="icon-coracao" id="icon-coracao">
    <p class="footer-text white" id="footer-text-name"> por Luiz</p>
</div>
</footer>`
}