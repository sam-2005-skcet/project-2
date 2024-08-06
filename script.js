const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'player';
    }
    return 'computer';
}

function displayResult(player, computer, winner) {
    let resultMessage;
    if (winner === 'draw') {
        resultMessage = `It's a draw! You both chose ${player}.`;
    } else if (winner === 'player') {
        resultMessage = `You win! ${capitalizeFirstLetter(player)} beats ${computer}.`;
    } else {
        resultMessage = `You lose! ${capitalizeFirstLetter(computer)} beats ${player}.`;
    }
    resultText.textContent = resultMessage;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
