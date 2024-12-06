let username = document.getElementById('username');
let userNum = document.getElementById('userNum');
let pcNum = document.getElementById('pcNum');
let score = document.getElementById('score');

setTimeout(() => {
     username.innerHTML = prompt("Enter username:");
}, 100);

function randomNum() {
    let randNum = Math.floor(Math.random() * 10) + 1;
    
    return randNum;
}

let restartBtn = document.getElementById('restart');
let gameRes = document.getElementById('result');
let generate = document.getElementById('btn');

let userScore = 0;
let pcScore = 0;
let maxWins = 3;

generate.addEventListener('click', () => {
    if (userScore < maxWins && pcScore < maxWins) {
        let userPoint = randomNum();
        let pcPoint = randomNum();
        
        userNum.innerHTML = userPoint;
        pcNum.innerHTML = pcPoint;
        console.log(pcPoint);

        if (userPoint > pcPoint) {
            userScore++;
        } else if (pcPoint > userPoint) {
            pcScore++;
        }
    
        score.innerHTML = `${userScore} : ${pcScore}`;
    
        setTimeout(() => {
            if (userScore == maxWins) {
                gameRes.innerHTML = 'Congratulations! You won.';

                gameRes.style.visibility = 'visible';
                gameRes.style.opacity = 1;
            } else if (pcScore == maxWins) {
                gameRes.innerHTML = 'Computer won';

                gameRes.style.visibility = 'visible';
                gameRes.style.opacity = 1;
            }
        }, 10);
    }
});

function resetGame() {
    userScore = 0;
    pcScore = 0;
    score.innerHTML = `${userScore} : ${pcScore}`;

    userNum.innerHTML = '0';
    pcNum.innerHTML = '0';

    gameRes.style.visibility = 'hidden';
    gameRes.style.opacity = 0;
}

restartBtn.addEventListener('click', () => {
    setTimeout(() => {
        username.innerHTML = prompt("Enter username:");
    }, 100);
    resetGame();
});