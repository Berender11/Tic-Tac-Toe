let tiles = document.querySelectorAll(".btn");
let reset = document.querySelector("#rst-btn");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let winContainer = document.querySelector(".win-container");

let turnX = true;
let count = 0;

let winComb = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const enableBtn = () =>{
    for (let tile of tiles) {
        tile.disabled = false;
        tile.innerText = "";
    }
};

const disableBtn = () =>{
    for (let tile of tiles) {
        tile.disabled = true;
    }
};

tiles.forEach((tile) =>{
    tile.addEventListener("click", () =>{
        if (turnX) {
            tile.innerText = "X";
            turnX = false;
            
        } else {
            tile.innerText = "O";
            turnX = true;
            
        }
        tile.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
    
});

const checkWinner = () => {
    for (let combo of winComb) {
        let pos1Val = tiles[combo[0]].innerText;
        let pos2Val = tiles[combo[1]].innerText;
        let pos3Val = tiles[combo[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos1Val === pos3Val){
                showWinner(pos1Val);
            }
           
        } 
    }
};

const gameDraw = () =>{
    msg.innerText = `Game is a Draw`;
    winContainer.classList.remove("hide");
    disableBtn();
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation Winner is ${winner}`;
    winContainer.classList.remove("hide");
    disableBtn();
}

const  resetButton = () =>{
    turnX = true;
    enableBtn();
    winContainer.classList.add("hide");
};

reset.addEventListener("click",resetButton);
newGame.addEventListener("click",resetButton);