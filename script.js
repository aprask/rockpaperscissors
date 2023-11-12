const comp_choice = document.getElementById("computer-choice");
const usr_choice = document.getElementById("user-choice");
const result = document.getElementById("result");

const possible_choices = document.querySelectorAll("button");
let selected_choice;
let selected_comp_choice;
let calc_result;

possible_choices.forEach(possible_choice => possible_choice.addEventListener('click', (e) => {
    selected_choice = e.target.id;
    usr_choice.innerHTML = selected_choice;
	generate_comp_choice();
	get_result();
}))

function generate_comp_choice(){
	const random_num = Math.floor(Math.random() * possible_choices.length) + 1;
	console.log(random_num);
	if (random_num == 1)
	{
		selected_comp_choice = 'rock';
	}
	else if (random_num == 2)
	{
		selected_comp_choice = 'paper';
	}
	else if (random_num == 3)
	{
		selected_comp_choice = 'scissors';
	}
	comp_choice.innerHTML = selected_comp_choice;
	
}

function get_result(){
	if (selected_comp_choice === selected_choice)
	{
		calc_result = "draw"; 
	}
	else if(selected_comp_choice === "rock" && selected_choice == "paper")
	{
		calc_result = "you lost";
	}
	else if(selected_comp_choice === "rock" && selected_choice == "scissors")
	{
		calc_result = "you lost";
	}
	else if(selected_comp_choice === "paper" && selected_choice == "rock")
	{
		calc_result = "you won";
	}
	else if(selected_comp_choice === "scissors" && selected_choice == "rock")
	{
		calc_result = "you won";
	}
	else if(selected_comp_choice === "scissors" && selected_choice == "paper")
	{
		calc_result = "you lost";
	}
	else if(selected_comp_choice === "paper" && selected_choice == "scissors")
	{
		calc_result = "you won";
	}
	result.innerHTML = calc_result;
}