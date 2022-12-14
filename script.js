var delayInMilliseconds = 2000;
var randomNumb = parseInt(Math.random() * 11);
var main = document.querySelector("main");
var index = 0;

setTimeout(function delay() {
    main.innerHTML = `
    <section>
        <h1 class="title">Digite um número entre 0 e 10</h1>

        <div class="inputs">
            <input class="wrong-attempts" id="circle-3" type="number"disabled="">
            <input class="wrong-attempts" id="circle-2" type="number" disabled="">
            <input class="wrong-attempts" id="circle-1" type="number" disabled="">
            <input class="userAttempt" type="number" autofocus>
        </div>
        
        <button onClick="check()">
            <p>enviar</p>
            <img src="/images/arrow-icon.svg" alt="ícone seta">
        </button>

        <div class="attempts">
            <img src="/images/open-icon.svg" alt="tentativa aberta">
            <img src="/images/closet-icon.svg" alt="tentativa fechada">
            <img src="/images/closet-icon.svg" alt="tentativa fechada"><img src="/images/closet-icon.svg" alt="tentativa fechada">
        </div>
    </section>

    <footer>
        <p>feito com</p>
        <img src="images/heart-icon.svg" alt="ícone de coração">
        <p>por Luiz</p>
    </footer>`
}, delayInMilliseconds)

function check() {
    index++;
    var userAttempt = document.querySelector(".userAttempt").value;
    document.querySelector(".userAttempt").focus();

    if (userAttempt == randomNumb) {
        main.id = "green-bg";
        main.innerHTML = `
        <section>
            <h1 class="white-text">Você acertou!</h1>
            <h1 class="white-text">${randomNumb}</h1>
            <h2 class="white-text">foi o número sorteado</h1>
            <button id="back-button" onClick="window.location.reload()">
                <p>voltar</p>
            </button>
        </section>
        <footer>
            <p class="white-text">feito com</p>
            <img src="images/white-heart-icon.svg" alt="ícone de coração">
            <p class="white-text">por Luiz</p>
        </footer>`
    } else {
        switch (index) {
            case 1:
                check1();
                break;

            case 2:
                check2();
                break;

            case 3:
                check3();
                break;

            case 4:
                loss();
                break;
        }
    }
}

function check1() {
    var circle0 = document.querySelector(".userAttempt");
    circle0.style.backgroundColor = "#4285F4";

    var button = document.querySelector("button");
    button.style.backgroundColor = "#4285F4";

    var circle1 = document.querySelector("#circle-1");
    circle1.style.backgroundColor = "#34A852";

    var attempts = document.querySelector(".attempts").innerHTML = `
        <img src="/images/wrong-icon.svg" alt="tentativa errada">
        <img src="/images/open-icon.svg" alt="tentativa fechada">
        <img src="/images/closet-icon.svg" alt="tentativa fechada">
        <img src="/images/closet-icon.svg" alt="tentativa fechada">
        `
    var title = document.querySelector(".title");
    var userAttempt = document.querySelector(".userAttempt").value;
    if (userAttempt > randomNumb) {
        title.innerHTML = "Um pouco menos"
    } else {
        title.innerHTML = "Um pouco mais"
    }
    document.querySelector(".userAttempt").value = "";
}

function check2() {
    var circle0 = document.querySelector(".userAttempt");
    circle0.style.backgroundColor = "#FABB05";

    var button = document.querySelector("button");
    button.style.backgroundColor = "#FABB05";

    var circle1 = document.querySelector("#circle-1");
    circle1.style.backgroundColor = "#4285F4";
    var circle2 = document.querySelector("#circle-2");
    circle2.style.backgroundColor = "#34A852";

    var attempts = document.querySelector(".attempts").innerHTML = `
        <img src="/images/wrong-icon.svg" alt="tentativa errada">
        <img src="/images/wrong-icon.svg" alt="tentativa errada">
        <img src="/images/open-icon.svg" alt="tentativa aberta">
        <img src="/images/closet-icon.svg" alt="tentativa fechada">
        `

    var title = document.querySelector(".title");
    var userAttempt = document.querySelector(".userAttempt").value;
    if (userAttempt > randomNumb) {
        title.innerHTML = "Um pouco menos"
    } else {
        title.innerHTML = "Um pouco mais"
    }

    document.querySelector(".userAttempt").value = "";
}

function check3() {
    var circle0 = document.querySelector(".userAttempt");
    circle0.style.backgroundColor = "#EA4335";

    var button = document.querySelector("button");
    button.style.backgroundColor = "#EA4335";

    var circle1 = document.querySelector("#circle-1");
    circle1.style.backgroundColor = "#FABB05";
    var circle2 = document.querySelector("#circle-2");
    circle2.style.backgroundColor = "#4285F4";
    var circle3 = document.querySelector("#circle-3");
    circle3.style.backgroundColor = "#34A852";

    var attempts = document.querySelector(".attempts").innerHTML = `
        <img src="/images/wrong-icon.svg" alt="tentativa errada">
        <img src="/images/wrong-icon.svg" alt="tentativa errada">
        <img src="/images/wrong-icon.svg" alt="tentativa errada">
        <img src="/images/open-icon.svg" alt="tentativa aberta">
        `

    var title = document.querySelector(".title");
    var userAttempt = document.querySelector(".userAttempt").value;
    if (userAttempt > randomNumb) {
        title.innerHTML = "Um pouco menos"
    } else {
        title.innerHTML = "Um pouco mais"
    }

    document.querySelector(".userAttempt").value = "";
}

function loss() {
    main.id = "red-bg";
    main.innerHTML = `
        <section>
            <h1 class="white-text">Você errou!</h1>
            <h1 class="white-text">${randomNumb}</h1>
            <h2 class="white-text">foi o número sorteado</h1>
            <button id="back-button" onClick="window.location.reload()">
                <p>voltar</p>
            </button>
        </section>
        <footer>
            <p class="white-text">feito com</p>
            <img src="images/white-heart-icon.svg" alt="ícone de coração">
            <p class="white-text">por Luiz</p>
        </footer>`
}