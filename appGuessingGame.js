const max=prompt("enter the maximum number");

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("Guess the Number");

while(true){
    if(guess=="guit")
    {
        console.log("user Quit");
        break;
    }
    if(guess==random)
    {
        console.log("you are right!! congrats!! random number was",random);
        break;
    }
    else if(guess<random)
    {
        guess = prompt("Hint : Your guess was too small .Plese Try Again!!");
    }
    else
    {
        guess = prompt("Hint : Your guess was too large .Please Try Again!!");
    }
    // else
    // {
    //     guess = prompt("your guess was wrong, Please try again!!");
    // }
}