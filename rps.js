

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
		if (userScore.textContent == 5){
			alert("you win");
			location.reload();
		} else if (cpuScore.textContent == 5){
			alert("You lose");
			location.reload();
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
		gameLoop(userChoice);
	});
});
