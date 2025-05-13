let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");;
let msg=document.querySelector("#msg");
let turnO= true;//playerX,playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
];
const resetGame=()=>{
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        //console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            box.style.color = "green";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color = "blue";
            turnO=true;

        }
        box.disabled=true;
        checkWinner();
        
});
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
 const checkWinner=()=>{
    for( let pattern of winPatterns){//pattern check hoga
        //console.log(pattern[0],pattern[1],pattern[2]);//index
    
        //console.log(boxes [pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);//boxes or ander ki value
        let pos1val=boxes[pattern[0]].innerText;//individually
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&& pos2val!=""&& pos2val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                //console.log("winner",pos1val);
                showWinner(pos1val);
                
            }
            
            }
        }
    
        
        };

        

    

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
 
 




