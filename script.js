var delayInMilliseconds = 4000;
var randomNumb = parseInt(Math.random() * 11);
var main = document.querySelector("main");

setTimeout(function delay() {
    main.innerHTML = `
    <section>
        <h1>Digite um número entre 0 e 10</h1>

        <input type="number">
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
    const userAttempt = document.querySelector("input").value;

    if (userAttempt == randomNumb) {
        console.log(`ACERTOU userNumb: ${userAttempt} randomNumb: ${randomNumb}`)

        main.id = "green-bg";
        main.innerHTML = `
        <section>
            <h1 class="white-text">Você acertou!</h1>
            <h1 class="white-text">${userAttempt}</h1>
            <h2 class="white-text">foi o número sorteado</h1>
        </section>
        <footer>
            <p class="white-text">feito com</p>
            <img src="images/white-heart-icon.svg" alt="ícone de coração">
            <p class="white-text">por Luiz</p>
        </footer>`
    } else {
        console.log(`ERROU userNumb: ${userAttempt} randomNumb: ${randomNumb}`)
    }
}