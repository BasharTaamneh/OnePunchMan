var userName = "bashar";

console.log("hi this is bashar here, lets start coding ^_^");

alert("hello teacher assistant ^_^ this is " +userName)

document.write("<p style='color:red;'> this is " + userName
 + " from java script ^_^ </p>")

var userAnswer = prompt("do you like anime ? ");
console.log( userAnswer);

var answer = "yes";
var disanswer = "no";

if (userAnswer == answer )
 {

  alert("you chose the best story")
    
}else if(userAnswer == disanswer)
  {

  alert("ok cheke out the serial story you will like it ^_^ ")
  
}
else{
  alert("rong answer !")
  function confirm(y=".")
   {
  let x;
  do 
{
    x = prompt(y);
} while (!/y(es)?|no?/i.test(x));
return /y(es)?/i.test(x);
   }
confirm("Mark a correct answer please");
  }

