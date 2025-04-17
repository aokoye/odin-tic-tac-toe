const gameBoard = ['1a', '2a', '3a', '1b', '2b', '2c', '3a', '3b', '3c']
let turn = 1

const reset = gameBoard.splice(0, 9, '1a', '2a', '3a', '1b', '2b', '2c', '3a', '3b', '3c')

function game(player, choice) {
    function board() {
        document.getElementById('game').innerHTML = 
        '<div class="row1">' +
        '<div class="top left" id="1a"></div>' +
        '<div class="top mid" id="2a"></div>' +
        '<div class="top right" id="3a"></div>' +
        '</div>' +
        '<div class="row2">' +
        '<div class="center left" id="1b"></div>' +
        '<div class="center mid" id="2b"></div>' +
        '<div class="center right" id="3b"></div>' +
        '</div>'+
        '<div class="row3">' +
        '<div class="bottom left" id="1c"></div>' +
        '<div class="bottom mid" id="2c"></div>' +
        '<div class="bottom right" id="3c"></div>' +
        '</div>'
    }

    board()

    console.log(gameBoard.includes(choice))
    console.log(player.name + ' chose ' + choice)

    if (gameBoard.includes(choice) == true){
        player.choices.push(choice)
        square = gameBoard.indexOf(choice)
        gameBoard[square] = player.marker
        console.log(gameBoard)
    } else {
        console.log('That square was already chosen! Choose a different square ' + player.name + '.')
    }

    //turns
    if(turn % 2 == 0) {
        ++turn
        currentPlayer = player2
    } else {
        ++turn
        currentPlayer = player1
    }

    console.log(turn)

    //win logic
    let win1 = ['1a', '2a', '3a'];
    let win2 = ['1b', '2b', '3b'];
    let win3 = ['1c', '2c', '3c'];
    let win4 = ['1a', '1b', '1c'];
    let win5 = ['2a', '2b', '2c'];
    let win6 = ['3a', '3b', '3c'];
    let win7 = ['1a', '2b', '3c'];
    let win8 = ['3a', '2b', '1c'];

    const checker = (arr, target) => target.every(v => arr.includes(v));
    const playedBoxes = player.choices

    if (checker(player.choices, win1) === true) {
        console.log(player.name + ' won!')
    } else if (checker(playedBoxes, win2) === true) {
        console.log(player.name + ' won!')
    } else if (checker(playedBoxes, win3) === true) {
        console.log()
    } else if (checker(playedBoxes, win4) === true) {
        console.log(player.name + ' won!')
    } else if (checker(playedBoxes, win5) === true) {
        console.log(player.name + ' won!')
    } else if (checker(playedBoxes, win6) === true) {
        console.log()
    } else if (checker(playedBoxes, win7) === true) {
        console.log(player.name + ' won!')
    } else if (checker(playedBoxes, win8) === true) {
        console.log(player.name + ' won!')
    } else {
        console.log('keep playing!')}
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

let currentPlayer = player1

console.log(player1)
console.log(player2)

game(currentPlayer, '1b')
console.log(currentPlayer)
game(currentPlayer, '1b')
console.log(currentPlayer)
game(currentPlayer, '3a')
console.log(currentPlayer)
game(currentPlayer, '1c')
console.log(currentPlayer)
game(currentPlayer, '2a')
console.log(currentPlayer)
game(currentPlayer, '3c')
console.log(currentPlayer)
game(currentPlayer, '1a')
console.log(currentPlayer)
