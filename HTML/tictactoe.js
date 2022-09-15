let crossesSet = [];
let x = 'player'
let y = 'enemy'
let gameWon = false;


// Responsible for clicking
function Game() {

    window.onclick = element => {
        let getTablerow = document.getElementById(element.target.id);
        if (getTablerow.childNodes.length !== 1) {
            let icon = document.createTextNode("x");
            getTablerow.appendChild(icon);
            crossesSet.push(element.target.id);
            console.log(crossesSet);
            AI();
            checkWinningConditionMet(x, y);

        }
    }
}

Game();

//else if > switches, this kinda seems to work but i don't even know why
function AI() {

    let enemy = document.createTextNode('o');
    if (crossesSet) {
        let randomeStartEntry = Math.floor(Math.random() * 8);
        console.log(randomeStartEntry);
        switch (randomeStartEntry){
            case 0: if (document.getElementById('2').childNodes.length === 0 ||
            document.getElementById('1').childNodes.length === 1 &&
            document.getElementById('2').childNodes.length === 0){
                document.getElementById('2').appendChild(enemy);
                break;}
            else{
                randomeStartEntry = 1;
                console.log('40, rse1 ')
            }


            case 1: if (document.getElementById('3').childNodes.length === 0 ||
            document.getElementById('2').childNodes.length === 1 &&
            document.getElementById('3').childNodes.length === 0){
                document.getElementById('3').appendChild(enemy);
                break;}
            else{
                randomeStartEntry = 2;
                console.log('50, rse2 ')

            }
            case 2: if (document.getElementById('4').childNodes.length === 0 ||
            document.getElementById('3').childNodes.length === 1 &&
            document.getElementById('4').childNodes.length === 0){
                document.getElementById('4').appendChild(enemy);
                break;}
            else{
                randomeStartEntry = 3;
                console.log('60, rse3 ')
            }


            case 3: if (document.getElementById('5').childNodes.length === 0 ||
            document.getElementById('4').childNodes.length === 1 &&
            document.getElementById('5').childNodes.length === 0){
                document.getElementById('5').appendChild(enemy);
                break;}
            else{
                randomeStartEntry = 4;
                console.log('70, rse4 ')
            }


            case 4: if (document.getElementById('6').childNodes.length === 0 ||
            document.getElementById('5').childNodes.length === 1 &&
            document.getElementById('6').childNodes.length === 0){
                document.getElementById('6').appendChild(enemy);
                break;}
            else{
                randomeStartEntry = 5;
                console.log('80, rse5 ')
            }

            case 5: if (document.getElementById('7').childNodes.length === 0 ||
            document.getElementById('6').childNodes.length === 1 &&
            document.getElementById('7').childNodes.length === 0){
                document.getElementById('7').appendChild(enemy);
                break;}
            else{
                randomeStartEntry = 6;
                console.log('90, rse6 ')
            }


            case 6: if (document.getElementById('8').childNodes.length === 0 ||
            document.getElementById('7').childNodes.length === 1 &&
            document.getElementById('8').childNodes.length === 0) {
                document.getElementById('8').appendChild(enemy);
            break;}
            else{
                randomeStartEntry = 7;
                console.log('100, rse7 ')
            }

            case 7:  if (document.getElementById('9').childNodes.length === 0 ||
            document.getElementById('8').childNodes.length === 1 &&
            document.getElementById('9').childNodes.length === 0){
                document.getElementById('9').appendChild(enemy);
                break;}
            else{
                randomeStartEntry = 8;
                console.log('110, rse8 ')
            }

            case 8:  if (document.getElementById('1').childNodes.length === 0 ||
                document.getElementById('9').childNodes.length === 1 &&
                document.getElementById('1').childNodes.length === 0){
                document.getElementById('1').appendChild(enemy);
                break;}

            else{
                randomeStartEntry = 0;
                console.log('120, rse0 ')
            }


        }


}
}

//checks if the player or the computer won
function checkWinningConditionMet(human, enemy) {
    let enemyArray = [];
    let playerArray = [];

    if (window.onclick) {
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
function conditionCheck(array, player) {
    let trueArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const winningCondition = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 5, 3], [7, 8, 9]];
    console.log(winningCondition[1][1]);
    for (let i = 0; i < 9; i++) {
        let j = 0;
        if (array.includes(`${winningCondition[i][j]}`) && array.includes(`${winningCondition[i][j + 1]}`) && array.includes(`${winningCondition[i][j + 2]}`)) {
            console.log(`${player} Wins`)
            gameWon = true;
            if (document.getElementById('winningMessage').hasChildNodes() === false) {
                let winningMessage = document.createTextNode(`${player} wins`)
                document.getElementById('winningMessage').append(winningMessage);
            }
        } else if (gameWon === false) {
            Game();
        }
        if (!gameWon) {
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
}
