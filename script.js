const gameBoard = ['1a', '2a', '3a', '1b', '2b', '3b', '1c', '2c', '3c']
let turn = 0


function board() {
    document.getElementById('game').innerHTML = 
    '<form id="newNames">' +
    'Player 1: <input id="name1" type="text" name="name1" value=""><br>' +
    'Player 2: <input id="name2" type="text" name="name2" value=""><br><br>' +
    '<input id="submit" type="submit" value="Submit">' +
    '</form>' +
    '<h3 id="results"></h3>'+
    '<div class="row1">' +
    '<div class="squares top left" id="1a"></div>' +
    '<div class="squares top mid" id="2a"></div>' +
    '<div class="squares top right" id="3a"></div>' +
    '</div>' +
    '<div class="row2">' +
    '<div class="squares center left" id="1b"></div>' +
    '<div class="squares center mid" id="2b"></div>' +
    '<div class="squares center right" id="3b"></div>' +
    '</div>'+
    '<div class="row3">' +
    '<div class="squares bottom left" id="1c"></div>' +
    '<div class="squares bottom mid" id="2c"></div>' +
    '<div class="squares bottom right" id="3c"></div>' +
    '</div>' +
    '<div><button id="reset">Reset</button></div>'
}

board()

function game(player, choice) {
    

    console.log(gameBoard.includes(choice))
    console.log(player.name + ' chose ' + choice)

    if (gameBoard.includes(choice) == true){
        player.choices.push(choice)
        square = gameBoard.indexOf(choice)
        gameBoard[square] = player.marker
        document.getElementById(choice).innerHTML = player.marker;
        console.log(gameBoard)
    } else {
        console.log('That square was already chosen! Choose a different square ' + player.name + '.')
    }

    //turns
    if(turn % 2 == 0) {
        ++turn
        currentPlayer = player2
        console.log(player.choices)
        console.log (player2.name)
    } else {
        ++turn
        currentPlayer = player1
        console.log(currentPlayer.choices)
        console.log(player1.name)
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

    function containsOnly(array1, array2){
        return array2.every(elem => array1.includes(elem))
    }

    if (checker(player.choices, win1) === true) {
        document.getElementById("results").innerHTML = player.name + ' won!'
    } else if (checker(playedBoxes, win2) === true) {
        document.getElementById("results").innerHTML = player.name + ' won!'
    } else if (checker(playedBoxes, win3) === true) {
        console.log()
    } else if (checker(playedBoxes, win4) === true) {
        document.getElementById("results").innerHTML = player.name + ' won!'
    } else if (checker(playedBoxes, win5) === true) {
        document.getElementById("results").innerHTML = player.name + ' won!'
    } else if (checker(playedBoxes, win6) === true) {
        console.log()
    } else if (checker(playedBoxes, win7) === true) {
        document.getElementById("results").innerHTML = player.name + ' won!'
    } else if (checker(playedBoxes, win8) === true) {
        document.getElementById("results").innerHTML = player.name + ' won!'
    } else if (containsOnly(['o', 'x'], gameBoard) === true){
        document.getElementById("results").innerHTML = 'There is a tie!'
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
    marker: 'o'
})

const player2 = createPlayer({
    name: 'Amy',
    marker: 'x'
})

let currentPlayer = player1

//Naming players
document.getElementById("submit").addEventListener("click", newNames);
function newNames(){
    event.preventDefault()
    let x = document.getElementById("newNames")
    player1.name = x.elements[0].value
    player2.name = x.elements[1].value

    console.log(x.elements[0].value)
    console.log(x.elements[1].value)
}

//clicking
document.getElementById('1a').addEventListener("click", box1a);
function box1a() {
    game(currentPlayer, '1a')
    console.log(currentPlayer)
//   document.getElementById('1a').innerHTML = currentPlayer.marker;
}

document.getElementById('2a').addEventListener("click", box2a);
function box2a() {
    game(currentPlayer, '2a')
}

document.getElementById("3a").addEventListener("click", box3a);
function box3a() {
    game(currentPlayer, "3a")
}

document.getElementById("1b").addEventListener("click", box1b);
function box1b() {
    game(currentPlayer, "1b")
}

document.getElementById("2b").addEventListener("click", box2b);
function box2b() {
    game(currentPlayer, "2b")
}

document.getElementById("3b").addEventListener("click", box3b);
function box3b() {
    game(currentPlayer, "3b")
}

document.getElementById("1c").addEventListener("click", box1c);
function box1c() {
    game(currentPlayer, "1c")
}

document.getElementById("2c").addEventListener("click", box2c);
function box2c() {
    game(currentPlayer, "2c")
}

document.getElementById("3c").addEventListener("click", box3c);
function box3c() {
    game(currentPlayer, "3c")
}

//change player names


//reset game
const button = document.querySelector("#reset");
button.addEventListener("click", (event) => {
    turn = 0
    gameBoard.splice(0, 9, '1a', '2a', '3a', '1b', '2b', '3b', '1c', '2c', '3c')
    player1.choices = []
    player2.choices = []

    document.querySelectorAll(".squares").forEach(item => item.textContent = '')
    document.getElementById("results").innerHTML = ''
    
    // newBoard()
    console.log(gameBoard)
    console.log(player1)
    console.log(player2)
});