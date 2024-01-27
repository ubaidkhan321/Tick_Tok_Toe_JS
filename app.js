let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let gamestart = document.querySelector("#start");
let msgcontainer = document.querySelector(".container_msg");
let msg = document.querySelector("#msg");

let turn0 = true
let winningRule = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
const resetgame = () => {
    turn0 = true
    enablebtn();
    msgcontainer.classList.add("hide");
    


 };
boxes.forEach((box) => {
    box.addEventListener("click", () => {
    
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        winnerposition();

    });

});

const showbutton = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }

}
const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}


const showwinner = (winner)=>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    showbutton();

}

const winnerposition = () => {
   
    for (let pattern of winningRule) {
       
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val != "" && pos2val!= "" && pos3val!= ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("Winner is " + pos3val)
            showwinner(pos3val)
        }

    }
     }
   
};


gamestart.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
