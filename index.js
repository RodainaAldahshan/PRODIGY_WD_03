let turn='x';
let statustext=  document.querySelector('#statustext');
let cells =[];
let gameMode;
let gameActive = false;
function startGame(mode){
    gameMode=mode;
    document.getElementById('modetext').style.display = 'none';
    document.getElementById("AI-player").style.display='none';
    document.getElementById("Two-players").style.display='none';
    document.getElementById("cells").style.display='grid';
    statustext.innerHTML = "Player X's turn";
    

    console.log('Game mode selected:', mode);
    cells=[];
    for (let i = 1; i < 10; i++) {
        cells[i] = document.getElementById(i); 
        cells[i].innerHTML = ''; 
        cells[i].style.background = ''; 
    }
    gameActive = true;
}
function checkDraw() {
    if(gameActive){
    let filledCells = cells.every(cell => cell.innerHTML !== '');
    if (filledCells) {
        statustext.innerHTML = "It's a draw!";
        gameActive = false; 
        setTimeout(() => location.reload(), 2000); 
       
    }
}
}
function computerMove() {
    if (!gameActive) return;
    let emptyCells = [];
    for (let i = 1; i < 10; i++) {
        if (cells[i].innerHTML === '') {
            emptyCells.push(i); 
        }
    }
    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]; 
    cells[randomCell].innerHTML = 'O'; 
    turn = 'x'; 
    statustext.innerHTML = "Player X's turn";
    winner(); 
    checkDraw();
}


function endgame( n1,n2,n3){
    statustext.innerHTML=   `${cells[n1].innerHTML} Is The Winner!!`;
    document.getElementById(n1).style.background = "#a1959b";
    document.getElementById(n2).style.background = "#a1959b";
    document.getElementById( n3).style.background = "#a1959b";
    gameActive = false;

    setInterval(function(){statustext.innerHTML +='.'},1000);
    setTimeout(function(){location.reload()},2000);
}
function winner(){
    if(gameActive){
    for (let i=1 ; i<10 ; i++)
    {
        cells[i] = document.getElementById(i);
    }
    if (cells[1].innerHTML !== '' && cells[1].innerHTML === cells[2].innerHTML && cells[1].innerHTML === cells[3].innerHTML) {
        endgame(1, 2, 3);
    } else if (cells[4].innerHTML !== '' && cells[4].innerHTML === cells[5].innerHTML && cells[4].innerHTML === cells[6].innerHTML) {
        endgame(4, 5, 6);
    } else if (cells[7].innerHTML !== '' && cells[7].innerHTML === cells[8].innerHTML && cells[7].innerHTML === cells[9].innerHTML) {
        endgame(7, 8, 9);
    } else if (cells[1].innerHTML !== '' && cells[1].innerHTML === cells[4].innerHTML && cells[1].innerHTML === cells[7].innerHTML) {
        endgame(1, 4, 7);
    } else if (cells[2].innerHTML !== '' && cells[2].innerHTML === cells[5].innerHTML && cells[2].innerHTML === cells[8].innerHTML) {
        endgame(2, 5, 8);
    } else if (cells[3].innerHTML !== '' && cells[3].innerHTML === cells[6].innerHTML && cells[3].innerHTML === cells[9].innerHTML) {
        endgame(3, 6, 9);
    } else if (cells[1].innerHTML !== '' && cells[1].innerHTML === cells[5].innerHTML && cells[1].innerHTML === cells[9].innerHTML) {
        endgame(1, 5, 9);
    } else if (cells[3].innerHTML !== '' && cells[3].innerHTML === cells[5].innerHTML && cells[3].innerHTML === cells[7].innerHTML) {
        endgame(3, 5, 7);
    }
    else {
        checkDraw();
    }
   
}      
}     

function game(id) {
    let elem = document.getElementById(id);
    if (gameActive && elem.innerHTML === '') {
        if (turn === 'x') {
            elem.innerHTML = 'X';
            turn = 'o';
            statustext.innerHTML = "Player O's turn";
            if (gameMode === 'computer') {
                setTimeout(computerMove, 500);
            }
        } else if (turn === 'o') {
            elem.innerHTML = 'O';
            turn = 'x';
            statustext.innerHTML = "Player X's turn";
        }
        winner();
    }
}


