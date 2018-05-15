// JavaScript Document
function d(val) {
	document.getElementById("d").value=val;
}
function v(val) {
	document.getElementById("d").value += val;
}

function e() {
	try{
		d(eval(document.getElementById("d").value));
	}
	catch(er) {
		d("Error");
		
	}
	
}

function absolute() {
	// evaluate the current equation
 	e();
	var x = document.getElementById("d").value;
	// use Math.abs()
	 x=Math.abs(x);
	
	 
	// update the display
	d(x);
}
 