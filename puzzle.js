//Software Engineering Assignment
//To make puzzle funtional using js
var bt1 
var bt2 
var bt3 
var bt4 
var bt5 
var bt6 
var bt7 
var bt8 
var bt9 
//values
function getValue(){
	bt1 = document.getElementById('btn1').value
	bt2 = document.getElementById('btn2').value
	bt3 = document.getElementById('btn3').value
	bt4 = document.getElementById('btn4').value
	bt5 = document.getElementById('btn5').value
	bt6 = document.getElementById('btn6').value
	bt7 = document.getElementById('btn7').value
	bt8 = document.getElementById('btn8').value
	bt9 = document.getElementById('btn9').value
}//end

//btn1 start
function btn1() {
	getValue();
	if(bt2 == " ")
	{
		document.getElementById('btn2').value = bt1
		document.getElementById('btn1').value = " "
	}
	else if(bt4 == " ")
	{
		document.getElementById('btn4').value = bt1
		document.getElementById('btn1').value = " "
	}
	gameOver()
}//btn1 end

//btn2 start
function btn2(){
	getValue();
	if(bt1 == " ")
	{
		document.getElementById('btn1').value = bt2
		document.getElementById('btn2').value = " "
	}
	else if(bt3 == " ")
	{
		document.getElementById('btn3').value = bt2
		document.getElementById('btn2').value = " "
	}
	else if(bt5 == " ")
	{
		document.getElementById('btn5').value = bt2
		document.getElementById('btn2').value = " "
	}
	gameOver()
}//btn2 end

//btn3 start
function btn3(){
	getValue();
	if(bt2 == " ")
	{
		document.getElementById('btn2').value = bt3
		document.getElementById('btn3').value = " "
	}
	else if(bt6 == " ")
	{
		document.getElementById('btn6').value = bt3
		document.getElementById('btn3').value = " "
	}
	gameOver()
}//btn3 end

//btn4 start
function btn4(){
	getValue();
	if(bt1 == " ")
	{
		document.getElementById('btn1').value = bt4
		document.getElementById('btn4').value = " "
	}
	else if(bt7 == " ")
	{
		document.getElementById('btn7').value = bt4
		document.getElementById('btn4').value = " "
	}
	else if(bt5 == " ")
	{
		document.getElementById('btn5').value = bt4
		document.getElementById('btn4').value = " "
	}
	gameOver()
}//btn4 end

//btn5 start
function btn5(){
	getValue();
	if(bt2 == " ")
	{
		document.getElementById('btn2').value = bt5
		document.getElementById('btn5').value = " "
	}
	else if(bt4 == " ")
	{
		document.getElementById('btn4').value = bt5
		document.getElementById('btn5').value = " "
	}
	else if(bt6 == " ")
	{
		document.getElementById('btn6').value = bt5
		document.getElementById('btn5').value = " "
	}
	else if(bt8 == " ")
	{
		document.getElementById('btn8').value = bt5
		document.getElementById('btn5').value = " "
	}
	gameOver()
}//btn5 end

//btn6 start
function btn6(){
	getValue();	
	if(bt3 == " ")
	{
		document.getElementById('btn3').value = bt6
		document.getElementById('btn6').value = " "
	}
	else if(bt5 == " ")
	{
		document.getElementById('btn5').value = bt6
		document.getElementById('btn6').value = " "
	}
	else if(bt9 == " ")
	{
		document.getElementById('btn9').value = bt6
		document.getElementById('btn6').value = " "
	}
	gameOver()
}//btn6 end

//btn7 start
function btn7(){
	getValue();
	if(bt4 == " ")
	{
		document.getElementById('btn4').value = bt7
		document.getElementById('btn7').value = " "
	}
	else if(bt8 == " ")
	{
		document.getElementById('btn8').value = bt7
		document.getElementById('btn7').value = " "
	}
	gameOver()
}//btn7 end

//btn8 start
function btn8(){
	getValue();
	if(bt7 == " ")
	{
		document.getElementById('btn7').value = bt8
		document.getElementById('btn8').value = " "
	}
	else if(bt5 == " ")
	{
		document.getElementById('btn5').value = bt8
		document.getElementById('btn8').value = " "
	}
	else if(bt9 == " ")
	{
		document.getElementById('btn9').value = bt8
		document.getElementById('btn8').value = " "
	}
	gameOver()
}//btn8 end

//btn9 start
function btn9(){
	getValue()
	if(bt6 == " ")
	{
		document.getElementById('btn6').value = bt9
		document.getElementById('btn9').value = " "
	}
	else if(bt8 == " ")
	{
		document.getElementById('btn8').value = bt9
		document.getElementById('btn9').value = " "
	}
	gameOver()
}//btn9 end

//when puzzle completed give winning message
function gameOver(){
    getValue();
	if(bt1==1 && bt2==2 && bt3==3 && bt4==4 && bt5==5 && bt6==6 && bt7==7 && bt8==8 && bt9==" ")
	{ 
    	document.write("YOU WIN");
    	//alert("YOU WIN");
    	//document.getElementById('output').innerHTML="<h3><mark>YOU WIN</mark></h3>"
	}
}
