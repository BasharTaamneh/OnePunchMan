var userName = "bashar";

console.log("hi this is bashar here, lets start coding ^_^");

alert("hello teacher assistant ^_^ this is " + userName)

document.write("<p style='color:red;'> this is " + userName
  + " from java script ^_^ </p>")

var userAnswer = prompt("do you like anime ? ");

console.log(userAnswer);

var answer = "yes";

var disanswer = "no";

if (userAnswer == answer) {
  alert("you chose the best story")
}
 else if (userAnswer == disanswer) {
  alert("ok cheke out the serial story you will like it ^_^ ")
}
else {
  alert("rong answer !")


  function confirm(y = '') {
    let x;
    do {
      x = prompt(y);
    } while (!/y(es)?|no?/i.test(x));
    return /y(es)?/i.test(x);
  }
    confirm("Mark a correct answer please");
}

var n = prompt("how many punch men you want to see ?")
var punmen = function () {
  var output = Number;
  var i = 0;
  while (i < n) {
    output += "<img src='https://i.pinimg.com/originals/0d/94/4d/0d944dc6b54ca7c06a5f0b85e0e770a3.jpg' />"
    console.log(i, output)
    i++;
  }
  return output;
}
var res = punmen();
document.write(res);

