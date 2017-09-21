# Hangman-game
hangman game
var can_play = true;
var words = new Array("SOURCECODESTER", "ARTICLE", "BLOG", "TUTORIALS", "PROGRAMMING", "CODES");
 
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;
 
function selectLetter(l)
{
if (can_play == false)
{
return;
}
 
if (used_letters.indexOf(l) != -1)
{
return;
}
 
used_letters += l;
document.game.usedLetters.value = used_letters;
 
if (to_guess.indexOf(l) != -1)
{
 // correct letter guess
pos = 0;
temp_mask = display_word;
 
while (to_guess.indexOf(l, pos) != -1)
{
pos = to_guess.indexOf(l, pos);			
end = pos + 1;
 
start_text = temp_mask.substring(0, pos);
end_text = temp_mask.substring(end, temp_mask.length);
 
temp_mask = start_text + l + end_text;
pos = end;
}
 
display_word = temp_mask;
document.game.displayWord.value = display_word;
 
if (display_word.indexOf("#") == -1)
{
// won
alert("Well done, you have won!");
can_play = false;
}
}
else
{
// incortect letter guess
wrong_guesses += 1;
eval("document.hm.src=\"hm" + wrong_guesses + ".gif\"");
 
if (wrong_guesses == 10)
{
// lost
alert("Sorry, you have lost!");
can_play = false;
}
}
}
 
function reset()
{
selectWord();
document.game.usedLetters.value = "";
used_letters = "";
wrong_guesses = 0;
document.hm.src="hmstart.gif";
}
 
function selectWord()
{
can_play = true;
random_number = Math.round(Math.random() * (words.length - 1));
to_guess = words[random_number];
//document.game.theWord.value = to_guess;
 
// display masked word
masked_word = createMask(to_guess);
document.game.displayWord.value = masked_word;
display_word = masked_word;
}
 
function createMask(m)
{
mask = "";
word_lenght = m.length;
 
for (i = 0; i < word_lenght; i ++)
{
mask += "#";
}
return mask;
}
<!DOCTYPE html>
<html lang="en-us">

<head>

  <meta charset="UTF-8">
  <title>Bootstrap Demo</title>

  <!-- Bootstrap CDN -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
  <script type="text/javascript" src="./assets/javascript/game.js"></script>
  </head>
  <body>
  <onLoad="reset(); return true;">
 
<center>
<h2> Hangman</h2>
 
<p>
	<img src="hangman.jpg" height="125px" width="75px" name="hm">
</p>
 
<form name="game">
	<p style="font-weight:bold; font-size:18px;">
		Display Word: &nbsp;&nbsp;&nbsp;<input type="text" style="cursor:no-drop; width:200px; font-size:18px;" name="displayWord" disabled />
		<br />
		<br />
		Used Letters: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" style="cursor:no-drop; width:200px; font-size:18px;" name="usedLetters" disabled />
	</p>
</form>
 
<p style="font-weight:bold; font-size:18px;">
 
<label>Choose a letter:</label>
 
<br />
<br />
 
<a href="javascript:selectLetter('A');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="A"></a>
<a href="javascript:selectLetter('B');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="B"></a>
<a href="javascript:selectLetter('C');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="C"></a>
<a href="javascript:selectLetter('D');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="D"></a>
<a href="javascript:selectLetter('E');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="E"></a>
<a href="javascript:selectLetter('F');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="F"></a>
<a href="javascript:selectLetter('G');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="G"></a>
<a href="javascript:selectLetter('H');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="H"></a>
<a href="javascript:selectLetter('I');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="I"></a>
<a href="javascript:selectLetter('J');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="J"></a>
<br />
<br />
<a href="javascript:selectLetter('K');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="K"></a>
<a href="javascript:selectLetter('L');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="L"></a>
<a href="javascript:selectLetter('M');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="M"></a>
<a href="javascript:selectLetter('N');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="N"></a>
<a href="javascript:selectLetter('O');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="O"></a>
<a href="javascript:selectLetter('P');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="P"></a>
<a href="javascript:selectLetter('Q');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="Q"></a>
<a href="javascript:selectLetter('R');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="R"></a>
<a href="javascript:selectLetter('S');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="S"></a>

<br />
<br />

<a href="javascript:selectLetter('T');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="T"></a>
<a href="javascript:selectLetter('U');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="U"></a>
<a href="javascript:selectLetter('V');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="W"></a>
<a href="javascript:selectLetter('X');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="X"></a>
<a href="javascript:selectLetter('Y');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="Y"></a>
<a href="javascript:selectLetter('Z');"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="Z"></a>

</p>
 
<br />
 
<p>
<a href="javascript:reset()"><input type="button" style="cursor:pointer; margin-left: 10px; font-size:18px;" value="Start game / Reset game"></a>
</p>
</center>
 
</body>

