console.log("hello world");


function createCpuChoice(){
	let randNum = Math.floor(Math.random() * 3);	
	if (randNum === 0){
		return "rock";
	} else if (randNum === 1 ){
		return "paper";
	}else {
		return "scissors";
	}
}

function getUserChoice(){
	let UserInput = "";
	let action = ["rock","paper", "scissors"];
	UserInput = prompt("What's your next move ? ( Rock, Paper, Scissors)");
	UserInput = UserInput.toLowerCase();
	if (action.includes(UserInput) == true){
		return UserInput;
	}else{
		return "";
	}
}

function checkWinner(cpuChoice, userChoice){
	winner = -1
	if (userChoice === "rock"){
		switch (cpuChoice){
			case 'rock':
				winner = -1;
				break;
			case 'paper':
				winner = 0;
				break;
			case 'scissors':
				winner = 1;
				break;
		}
	}else if (userChoice === "paper"){
		switch (cpuChoice){
			case 'rock':
				winner = 1;
				break;
			case 'paper':
				winner = -1;
				break;
			case 'scissors':
				winner = 0;
				break;
		}
	}else {
		switch (cpuChoice){
			case 'rock':
				winner = 0;
				break;
			case 'paper':
				winner = 1;
				break;
			case 'scissors':
				winner = -1;
				break;
		}
	}
	return winner;
}

function gameLoop(){
	let userScore = 0;
	let cpuScore = 0;
	let round = 1;
	let keepGoing = true;
	while(keepGoing){
		console.log(" user : " + userScore);
		console.log(" cpu : " + cpuScore);
		console.log(" Round : " + round);
		let cpuChoice = createCpuChoice();
		let userChoice = "";
		while(userChoice === ""){
			userChoice = getUserChoice();
		}
		console.log("You played " + userChoice);
		console.log("CPU played "+ cpuChoice);
		let roundWinner = checkWinner(cpuChoice, userChoice);
		switch (roundWinner){
			case -1:
				console.log("DRAW");
				break;
			case 0:
				console.log("YOU LOSE");
				cpuScore += 1;
				break;
			case 1:
				console.log("YOU WIN");
				userScore += 1;
				break;
		}
		round += 1;
	}
}

let menu_displayed = 0;

// ---- UI DISPLAY DEBUG ----
function switchmenu(){
	const mainMenu = document.querySelector(".main_menu");
	const gameUI = document.querySelector(".game");
	if (menu_displayed === 0){
		mainMenu.classList.add("hidden");
		gameUI.classList.remove("hidden");
		menu_displayed = 1;
	} else if (menu_displayed === 1){
		mainMenu.classList.remove("hidden");
		gameUI.classList.add("hidden");
		menu_displayed = 0;
	}
}
