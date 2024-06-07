

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


function checkWinner(cpuChoice, userChoice){
	winner = -1;
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

function gameLoop(userChoice){
		console.log(" Round : " + round);
		let cpuChoice = createCpuChoice();

		console.log("You played " + userChoice);
		console.log("CPU played "+ cpuChoice);
		userActionDisplay.textContent = userChoice;	
		cpuActionDisplay.textContent = cpuChoice;	
		let roundWinner = checkWinner(cpuChoice, userChoice);
		switch (roundWinner){
			case -1:
				console.log("DRAW");
				break;
			case 0:
				console.log("YOU LOSE");
				cpuScore.textContent =Number(cpuScore.textContent) + 1;
				break;
			case 1:
				console.log("YOU WIN");
				userScore.textContent =Number(userScore.textContent) + 1;
				break;
		}
		round += 1;
		if (userScore.textContent == ftMode){
			alert("you win");
			switchmenu("mainmenu");
		} else if (cpuScore.textContent == ftMode){
			alert("You lose");
			switchmenu("mainmenu");
		}
}



// ---- UI DISPLAY DEBUG ----
function switchmenu(displaymode, gamemode){
	const mainMenu = document.querySelector(".main_menu");
	const gameUI = document.querySelector(".game");
	console.log("switchingmenu")
	switch(displaymode){
		case "game":
			mainMenu.classList.add("hidden");
			gameUI.classList.remove("hidden");
			ftMode = gamemode;
			break;
		case "mainmenu":
			mainMenu.classList.remove("hidden");
			gameUI.classList.add("hidden");
			ftMode = 0;
			userScore.textContent = 0;
			cpuScore.textContent = 0;
			break;
	}
}
let ftMode = -1;
const mainMenuChoice = document.querySelectorAll(".main_menu__mode");
mainMenuChoice.forEach(modeOption => {
	modeOption.addEventListener("click", (e)=> {
		switchmenu("game", e.target.id);
	});
});

const userScore = document.querySelector("#score_user");
const cpuScore = document.querySelector("#score_cpu");
const userActionDisplay = document.querySelector("#action_user");
const cpuActionDisplay = document.querySelector("#action_cpu");
let round = 1;
let userChoice = "";
const userOptions = document.querySelectorAll(".game__choice_options");
userOptions.forEach(userOption => {
	userOption.addEventListener("click", (e) => {
		userChoice = e.target.id;
		console.log("ftmode", userChoice);
		gameLoop(userChoice);
	});
});
