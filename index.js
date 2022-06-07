score = 0;
turn = 0;
reset = true;

while (turn <= 100 && score <290) {
    turn ++
    if (turn % 2 === 0) {
        score += 5
    }
        else {
    score +=3
}
if(reset && score === 125) {
    score = 25;
    reset = false;
}
console.log(score, turn);
}