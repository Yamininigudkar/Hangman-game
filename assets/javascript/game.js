

var maxTries=10;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','k','m','n','o','p','q','s','t','u','v','w','x','y','z'];

var computerChoices=["javascript","bootstrap","coding","application","html",'jquery'];

var computerGuess =[];
//Chose random word from the array
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var printArr1;
var printArr =[];
//Regular expression for replacing all characters with @ symbol
var regExp = /\w/g

printArr1 = computerGuess;

//replace alll characters with @
printArr = printArr1.replace(regExp,'@');

//Output array that is displayed to the user while guessing words
//Displays only the matched characters from the work
var output = [];
string ="";


//output = printArr;
  
for(var i=0;i<computerGuess.length;i++)
{
	output[i] = "@";
}
document.onkeyup = function(event) 
{

     // Determines which key was pressed.
      var userGuess = event.key;
      var userGuessElem= document.getElementById('words');
      var triesleftElem = document.getElementById('triesleft');
      var userchoiceElem = document.getElementById('userchoice');
      var x=0;

		if(alphabet.indexOf(userGuess) >-1)
		{

    	 	string = string +"," + userGuess;
    	//Replace @ in user display with the correct charatcer entered bu the user
		    for (var i=0;i<computerGuess.length;i++)  
		    {   
				if(userGuess===computerGuess[i])
				{
										
					output[i] = userGuess;
					console.log(output)
										
				}

				else if(output[i] == "@")
				{
					//Flag to depict that user enrty was incorrect
					x=1;
					console.log(userGuess)
					
				}
				
			
			}
		}
			else
			{
				alert("Enter any alphabet key")
			}

			
			
			userGuessElem.textContent = output;
			triesleftElem.textContent=maxTries;
			
			userchoiceElem.textContent=string;


			//debugger;
			var outString = "";
			outString = output.join("");
			if(outString==computerGuess)
			{
				alert("You win");
				//reset all variables
				computerGuess = null;
				printArr = null;
				printArr1 = null;
				string = null;
				computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


			}
		//Check if user entry is incorrect and reduce the number of available tries by one
		//Print remaining tries,  charcater entered by user
			if(x===1)
			{
				maxTries= maxTries-1;
				console.log(maxTries);
				

			}
			//User loses the game if exceeds maxTries
			if(maxTries===0)
			{
				alert("Game lost");
			}
	
}	




