let max=prompt("Enter Maximum Limit for guess:");
console.log("Guess Range is 1 to "+max);
let r=Math.floor(Math.random()*max)+1;
console.log(r);
let guess=prompt(`Guess the Number from 1 to ${max}:`);
while(true)
    {
        if(guess=="quit")
            {
                console.log("Quitting!");
                break;
            }
            if(guess==r)
                {
                    console.log("Correct!! number is :"+r);
                    break;
                }else if(guess>r){
                    console.log("Larger than Random Number!");
                    guess=prompt(`Larger Number || Guess the Number from 1 to ${max}:`);
                }else{
                    console.log("Smaller than Random Number!");
                    guess=prompt(`Smaller Number || Guess the Number from 1 to ${max}:`);
                }
}