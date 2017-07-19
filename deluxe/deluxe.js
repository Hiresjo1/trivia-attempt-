function score() {
	// here i'm just referencing values of the questions
	var q1 = document.forms.form.q1.value;
	var q2 = document.forms.form.q2.value;
	var q3 = document.forms.form.q3.value;
	var q4 = document.forms.form.q4.value;

    // here I am creating variables based on my game plot
	var questions = ["q1","q2","q3","q4"];

	var answers = ["C","D","B","A"];

	var points = 0;
    
    var total = 4;

    // here I am creating a loop to figure out my answers and increment my points
	for (var i = 0; i <total; i++);
	{
		if (questions[i] === answers[i])
		{
			points = points + 1;
		}
	}

var q = document.getElementById("rada");

q.style.fontSize = "40px";
q.style.textAlign = "center";
q.innerHTML = "You got" + points + "out of" + total;

return false;

}