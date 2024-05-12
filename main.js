const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector('#btnTry')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const phrases = [
    'A vida te presenteia com o dobro da paciência que você oferece a ela.',
    'Semeie amor e alegria em cada passo, e a paz florescerá em seu jardim interior.',
    'Em vez de usar a raiva para compensar suas falhas, use a razão para superá-las.',
    'Virtudes e defeitos são como as faces de uma mesma moeda: indissociáveis e complementares.',
    'A grandiosidade da torre começa com a humildade da base.',
    'Força não significa rigidez, mas sim flexibilidade para se adaptar às diferentes situações.',
    'Cuide do seu coração com o mesmo carinho que dedica aos seus cabelos, para que ele irradie beleza interior.',
    'Lembre-se: a flecha lançada, a palavra dita e a oportunidade perdida jamais retornam.',
    'A juventude não se mede em anos, mas na vibração da alma e na paixão pela vida.',
    'Assuma o controle do seu destino: plante boas ações e colha frutos recompensadores.',
    'Seus filhos são reflexos de seus exemplos. Dedique atenção à sua formação, semeando valores em seus corações.',
    'Aprenda com os bons e inspire-se em suas qualidades para se tornar a melhor versão de si mesmo.',
    'Nenhum obstáculo é grande o suficiente para apagar o brilho do sol da esperança.',
    'O bom senso ilumina o caminho, guiando-o para além do conhecimento limitado.',
    'Semear rosas exige coragem para enfrentar os espinhos, mas a recompensa é a beleza inigualável da flor.',
    'São os amigos que nos presenteiam com as mais valiosas lições, ensinando-nos a navegar pelas vicissitudes da vida.'
];

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase() {
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random() * (phrases.length));
    randomPhrase.innerText = phrases[generateRandomPhrase]

}

function buttonTry(event) {
    event.preventDefault()
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        toggleScreen()
    }
}