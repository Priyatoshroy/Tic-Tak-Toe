let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContain = document.querySelector(".msg-container");


turnO = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>
    {
        //console.log("box was clicked");
        if(turnO) {     //turnO === true iska matlab hai
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disablebox= () =>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const enablebox= () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}

const showWinner = (Winner) =>{
    msg.innerText = `Winner is ${Winner}`;
    msgContain.classList.remove("hide");
    disablebox();
};

const checkWinner = () =>{
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1 );
                showWinner(pos1);
            }
        }
    }
};

const resetBtn = () =>{
    turnO = true;
    enablebox();
    msgContain.classList.add("hide");
}

newGame.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn);