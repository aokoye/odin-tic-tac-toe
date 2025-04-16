const gameBoard = ['1a', '2a', '3a', '1b', '2b', '2c', '3a', '3b', '3c']
const reset = gameBoard.splice(0, 9, '1a', '2a', '3a', '1b', '2b', '2c', '3a', '3b', '3c')

function game(player, choice) {
//    let gameBoard = ['1a', '2a', '3a', '1b', '2b', '2c', '3a', '3b', '3c']

    console.log(gameBoard.includes(choice))
    console.log(player.name + ' chose ' + choice)

    if(gameBoard.includes(choice) == true){
        player.choices.push(choice)
        square = gameBoard.indexOf(choice)
        gameBoard[square] = "chosen"
        console.log(gameBoard)
    } else {
        console.log('That square was already chosen! Choose a different square ' + player.name + '.')
    }

//win logic
    let win1 = ['1a', '2a', '3a'];
    let win2 = ['1b', '2b', '3b'];
    let win3 = ['1c', '2c', '3c'];
    let win4 = ['1a', '1b', '1c'];
    let win5 = ['2a', '2b', '2c'];
    let win6 = ['3a', '3b', '3c'];
    let win7 = ['1a', '2b', '3c'];
    let win8 = ['3a', '2b', '1c'];

    let checker = (arr, target) => target.every(v => arr.includes(v));
}

const createPlayer = ({name, marker}) => ({
    name,
    marker,
    choices: []
})

const player1 = createPlayer({
    name: 'Jake',
    marker: 'O'
})

const player2 = createPlayer({
    name: 'Amy',
    marker: ' X'
})

console.log(player1)
console.log(player2)

game(player1, '1b')
console.log(player1)
game(player2, '1b')
console.log(player2)
game(player1, '3a')
console.log(player1)
game(player2, '1a')
console.log(player2)
// const green = game();
// green(player1, '1b');