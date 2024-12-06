let inputBlock = document.createElement('div');
let ball = document.createElement('div');
let input = document.createElement('input');
let answer = document.createElement('h2');

inputBlock.classList.add('question');
ball.classList.add('ball');
input.classList.add('input-field');
answer.classList.add('answer');

input.placeholder = "Ask your question";

document.body.appendChild(inputBlock);
document.body.appendChild(ball);
ball.appendChild(answer);
inputBlock.appendChild(input);

let answerArr = ['Yes', 'No', 'Maybe', 'There are doubts', 'Good chances', 'Ask later'];

ball.addEventListener('click', () =>{
    let randIndex = Math.floor(Math.random() * answerArr.length);
    let randAnswer = answerArr[randIndex];

    ball.classList.remove('shake');

    setTimeout(() => {
        ball.classList.add('shake');
    }, 10); 

    if (!input.value || !input.value.includes('?')) {
        answer.innerHTML = "Error";
    } else {
        answer.innerHTML = randAnswer;
    }
});
