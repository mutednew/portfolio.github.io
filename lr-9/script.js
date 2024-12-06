let cards = [
    {src: 'image/game-card/6.png', value: 6},
    {src: 'image/game-card/7.png', value: 7},
    {src: 'image/game-card/8.png', value: 8},
    {src: 'image/game-card/9.png', value: 9},
    {src: 'image/game-card/10.png', value: 10},
    {src: 'image/game-card/J.png', value: 2},
    {src: 'image/game-card/Q.png', value: 3},
    {src: 'image/game-card/K.png', value: 4},
    {src: 'image/game-card/T.png', value: 11},
];

setTimeout(() => {
    let username = prompt('Enter username:');
    
    if (username) {
        document.getElementById('username').innerHTML = username;
    } else {
        document.getElementById('username').innerHTML = 'Player';
    }
}, 100);
    
function getRandomCard() {
    let randIndex = Math.floor(Math.random() * cards.length);
    return cards[randIndex];
}

let generate = document.getElementById('btn');
let userNum = document.getElementById('userNum');
let pcNum = document.getElementById('pcNum');
let tries = document.getElementById('tries');
let result = document.getElementById('result');
let restart = document.getElementById('restart');

let userPoints = 0;
let pcPoints = 0;
let currentTry = 0;
const totalRounds = 3;

function startGame() {
    if (currentTry < totalRounds) {
        let userCard = getRandomCard();
        let pcCard = getRandomCard();

        userPoints += userCard.value;
        pcPoints += pcCard.value;

        userNum.innerHTML = userPoints;
        pcNum.innerHTML = pcPoints;
        document.getElementById('userCard').src = userCard.src;
        document.getElementById('pcCard').src = pcCard.src;

        currentTry++;
        tries.innerHTML = `Try ${currentTry} of ${totalRounds}`;

        if (currentTry === totalRounds) {
            endGame();
        }
    }
}

function endGame() {
    if (userPoints > 21 && pcPoints > 21) {
        result.innerHTML = 'Both lose!';
    } else if (userPoints > 21) {
        result.innerHTML = 'Computer Wins!';
    } else if (pcPoints > 21) {
        result.innerHTML = 'You Win!';
    } else if (userPoints > pcPoints) {
        result.innerHTML = 'You Win!';
    } else if (pcPoints > userPoints) {
        result.innerHTML = 'Computer Wins!';
    } else {
        result.innerHTML = 'It\'s a draw';
    }
}

function resetGame() {
    userPoints = 0;
    pcPoints = 0;
    currentTry = 0;
    userNum.innerHTML = '0';
    pcNum.innerHTML = '0';
    document.getElementById('userCard').src = '';
    document.getElementById('pcCard').src = '';
    tries.innerHTML = `Try 0 of ${totalRounds}`;
    result.innerHTML = '';
}

generate.addEventListener('click', () => {
    startGame();
});

restart.addEventListener('click', () => {
    resetGame();
});