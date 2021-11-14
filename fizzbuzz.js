window.confirm("FizzBuzz is a children's game in which two number are chosen (e.g. 3 and 5) and a series of numbers are enumerated. When a number is a multiple of one number, the speaker with say 'Fizz' instead, and when it is a multiple of the other, the speaker will say 'Buzz.' When the number is a multiple of both, the speaker says 'Fizz Buzz.' You will be prompted to select the two numbers for this game, as well as the upper and lowers boundaries of the range of numbers.")

var num1 = parseInt(window.prompt("Enter a number","3"))
var num2 = parseInt(window.prompt("Enter another number","5"))
var num3 = parseInt(window.prompt("What is the bottom of the range?","1"))
var num4 = parseInt(window.prompt("What is the top of the range?","100"))

/*The declaration variables above (ignoring that imputs are variable by the brwser inputs) and 
the console.logs below are the most relevant portions--though we could just ignore declarations
of variables altogether and just input the numbers directly--of the core of what the FizzBuzz
game is supposed to accomplish. The rest of this is just seeing what else I can add to it.*/

for (var i = num3; i <=num4; i++)   {
    if ((i % (num1 * num2) == 0)) {
        document.write("<p>FizzBuzz</p>");
    }
    else if (i % num1 ==0) {
        document.write("<p>Fizz</p>")
    }
    else if (i % num2 ==0) {
        document.write("<p>Buzz</p>")
    }
    else {
        document.write("<p>"+i+"</p>");
    }
    if ((i % (num1 * num2) == 0)) {
        console.log("FizzBuzz");
    }
    else if (i % num1 ==0) {
        console.log("Fizz")
    }
    else if (i % num2 ==0) {
        console.log("Buzz")
    }
    else {
        console.log(i);
    }
}