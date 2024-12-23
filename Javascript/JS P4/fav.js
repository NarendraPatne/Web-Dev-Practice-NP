let movie="Alien";
let guess=prompt("Guess my Favourite Movie:");
while(guess!=movie)
{
    guess=prompt("Wrong!! Try again :)");
}
console.log(`Wow! You guessed it Right. How would you rate ${movie}?`);
let r=prompt("Enter Rating :");
console.log(`${r} Nice! I will rate it 8.9`);