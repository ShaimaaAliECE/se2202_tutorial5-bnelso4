let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
   let cellList =  document.querySelectorAll("td");
   for(i=0;i<cellList.length;i++)
   {
       let currentCell = cellList[i];
        let btn = document.createElement("button");
       btn.innerHTML = "[ ]";
       currentCell.appendChild(btn);
   }
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard     
    
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}


// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    
   
   
    
    

    
    buttonInQuestion = event.path[1].firstElementChild
    
    buttonInQuestion.innerHTML = "["+nextPlayer+"]";
    if(nextPlayer=="X")
    {
        nextPlayer="O";
    }
    else
    {
        nextPlayer="X";
    }
    event.target.disabled = "disabled";
    let nextPlayerDisplay =document.getElementById("next-lbl");
    nextPlayerDisplay.innerHTML=nextPlayer;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOverDisplayElement = document.getElementById('game-over-lbl');
        gameOverDisplayElement.innerHTML= "Game Over";
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 

}

function isGameOver()
{
    
    for(i=0;i<btns.length;i++)
    {
        if(btns[i].disabled)
        {}
        else 
        {
            return false;
        }
    }
    return true;
        // This function returns true if all the buttons are disabled and false otherwise 
   
}
