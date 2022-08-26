let crossesSet = [];
let x = 'player'
let y = 'enemy'
let gameWon = false;


// Responsible for clicking
const Game = () => {

    window.onclick = e => {
        let getTablerow = document.getElementById(e.target.id);
        if (getTablerow.childNodes.length !== 1) {
            let icon = document.createTextNode("x");
            getTablerow.appendChild(icon);
            crossesSet.push(e.target.id);
            console.log(crossesSet);


            AI();
            checkWinningConditionMet(x, y);

        }
    }
}

Game();

//randomely sets o's
const AI = () => {

let enemy = document.createTextNode('o');
    if (CrossesSet = true) {
        let randomeStartEntry = Math.floor(Math.random() * 9);
        console.log(randomeStartEntry);
            if(randomeStartEntry === 0 && document.getElementById('1').childNodes.length === 0) {
                document.getElementById('1').appendChild(enemy);
            }
            else if(randomeStartEntry === 1 && document.getElementById('2').childNodes.length === 0 ||
                    document.getElementById('1').childNodes.length === 1 &&
                    document.getElementById('2').childNodes.length === 0
            ) {
                    document.getElementById('2').appendChild(enemy);
            }
            else if(randomeStartEntry === 2 && document.getElementById('3').childNodes.length === 0 ||
                document.getElementById('2').childNodes.length === 1 &&
                document.getElementById('3').childNodes.length === 0
            ) {
                document.getElementById('3').appendChild(enemy);
            }
            else if(randomeStartEntry === 3 && document.getElementById('4').childNodes.length === 0 ||
                document.getElementById('3').childNodes.length === 1 &&
                document.getElementById('4').childNodes.length === 0
            ) {
                document.getElementById('4').appendChild(enemy);
            }
            else if(randomeStartEntry === 4 && document.getElementById('5').childNodes.length === 0 ||
                document.getElementById('4').childNodes.length === 1 &&
                document.getElementById('5').childNodes.length === 0
            ) {
                document.getElementById('5').appendChild(enemy);
            }
            else if(randomeStartEntry === 5 && document.getElementById('6').childNodes.length === 0 ||
                document.getElementById('5').childNodes.length === 1 &&
                document.getElementById('6').childNodes.length === 0
            ) {
                document.getElementById('6').appendChild(enemy);
            }
            else if(randomeStartEntry === 6 && document.getElementById('7').childNodes.length === 0 ||
                document.getElementById('6').childNodes.length === 1 &&
                document.getElementById('7').childNodes.length === 0
            ) {
                document.getElementById('7').appendChild(enemy);
            }
            else if(randomeStartEntry === 7 && document.getElementById('8').childNodes.length === 0 ||
                document.getElementById('7').childNodes.length === 1 &&
                document.getElementById('8').childNodes.length === 0
            ) {
                document.getElementById('8').appendChild(enemy);
            }
            else if(randomeStartEntry === 8 && document.getElementById('9').childNodes.length === 0 ||
                document.getElementById('8').childNodes.length === 1 &&
                document.getElementById('9').childNodes.length === 0
            ) {
                document.getElementById('9').appendChild(enemy);
            }

            }

    }
//checks if the player or the computer won
const checkWinningConditionMet = (human, enemy) => {
    let enemyArray = [];
    let playerArray = [];

    if (window.onclick = true) {
        let getLengthOfTables = document.getElementsByTagName('td');
        console.log(getLengthOfTables);
        for (let i = 0; i < 9; i++) {
            if (getLengthOfTables[i].textContent.includes('x')) {
                if (getLengthOfTables[i].hasChildNodes()) {
                    console.log(getLengthOfTables[i])
                    playerArray.push(getLengthOfTables[i].id);

                    conditionCheck(playerArray, human);
                }
            }
                if (getLengthOfTables[i].textContent.includes('o')) {
                    if (getLengthOfTables[i].hasChildNodes()) {
                        console.log(getLengthOfTables[i])
                        enemyArray.push(getLengthOfTables[i].id);
                        conditionCheck(enemyArray, enemy);
                    }
                }
            }

    }
}

// includes the conditions for winning
const conditionCheck = (array, player) => {
    let trueArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (array.includes('1') && array.includes('2') && array.includes('3') ||
        array.includes('1') && array.includes('5') && array.includes('9') ||
        array.includes('1') && array.includes('4') && array.includes('7') ||
        array.includes('2') && array.includes('5') && array.includes('8') ||
        array.includes('3') && array.includes('6') && array.includes('9') ||
        array.includes('3') && array.includes('5') && array.includes('7') ||
        array.includes('4') && array.includes('5') && array.includes('6') ||
        array.includes('7') && array.includes('5') && array.includes('3') ||
        array.includes('7') && array.includes('8') && array.includes('9')
    ) {
        console.log(`${player} Wins`)
        gameWon = true;
        return;

    } else if (gameWon === false) {
        Game();
    }
    if (gameWon === false) {
        for (let i = 0; i < 9; i++) {
            if (document.getElementsByTagName('td')[i].hasChildNodes()) {
                trueArray[i] = true;
                console.log(trueArray);
                if (trueArray.every(element => element === true)) {
                    console.log('tie');
                }
            }
        }
    }
}

