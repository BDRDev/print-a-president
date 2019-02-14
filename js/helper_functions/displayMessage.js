//this is going to be the file where we pass something
//depending on what we pass is what message we will display


export function displayMessage(type){

	let message;

	switch(type){

		case "login": 

		message = "Must be logged in to checkout a piece";

			$(".messages").html(message);
			break;

		case "checkedOut":

			message = "Current user has a piece checked out already";
			$(".messages").html(message);
			break;

		case "pieceCheckedOut":

			message = "That piece is currently checked out, pick another one";
			$(".messages").html(message);
			break;

		case "clear":
		
			message = "";
			$(".messages").html(message);
			break;


		case "homeScreen":

			message =
						"<div class='rule'>Choose your section</div>" + 
						"<div class='rule'>Choose your piece</div>" +
						"<div class='rule'>Check out your selection</div>" + 
						"<div class='rule'>Print Prep Mail</div>" + 
						"<div class='rule'>Post</div>";


			$(".rules").html(message);

		break;

		case "rulesClear":

			message = ""
			$(".rules").html(message);
			break;



	}


	


}