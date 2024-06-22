let humanScore =0;
let computerScore =0;
function getComputerChoice(){
    let randomChoiceNum = Math.floor(Math.random()*3+1);
    let actualComputerChoice = "this didn't work";
    if(randomChoiceNum===1){
        actualComputerChoice="Rock";
    }
    else if(randomChoiceNum===2)
    {
        actualComputerChoice="Paper";
    }
    else if(randomChoiceNum===3){
        actualComputerChoice="scissors";
    }
    return actualComputerChoice;
}

function getHumanChoice(){
    let humanPrompt = prompt("Choose Rock Paper or Scissors:");
    function capital(text){
        let firstLetter= text.slice(0,1);
        let afterFirstLetter= text.slice(1);
        return firstLetter.toUpperCase()+afterFirstLetter.toLowerCase();
    }
    let humanPromptCapitelized = capital(humanPrompt);
    function checkPrompt(){
    if (humanPromptCapitelized==="Rock" || humanPromptCapitelized==="Paper" || humanPromptCapitelized==="Scissors"){
        return humanPromptCapitelized;

    }else{
        humanPrompt= prompt("you chose wrong try again:");
        humanPromptCapitelized = capital(humanPrompt);   
        checkPrompt();
    }}
    checkPrompt()
    return humanPromptCapitelized;
}
function playRound(humanChoice,computerChoice){
    if((humanChoice==="Paper"&&computerChoice==="Rock")||(humanChoice==="Rock"&&computerChoice==="Scissors")||(humanChoice==="Scissors"&&computerChoice==="Paper")){
        console.log(humanChoice+" beats "+computerChoice+" you won!");
        humanScore= humanScore+1;
}else if(humanChoice===computerChoice){
    console.log("its a tie!")
}
else{
    console.log(computerChoice+" beats "+humanChoice+" you lose!");
    computerScore= computerScore+1;
}
}
function playGame(){
    let humanSelection = "human choice";
    let computerSelection = "computer choice";
    for(let count=1;count <= 5; count++){
        console.log("Round "+count+ " score: "+ humanScore+" "+computerScore);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
       
 }
    if (computerScore > humanScore){
        console.log("Computer won the game!");
    }else if (computerScore < humanScore){
        console.log("You won the game!");
    }else{
        console.log("Computer and Human tied the game!");
    }
    computerScore=0;
    humanScore=0;  
}