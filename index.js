// Code your solutions in this file
let writeCards = function(name, event) {
    let arrayOfThanks = []
    for (let i = 0; i < name.length; i++) {
    arrayOfThanks.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
}
return arrayOfThanks;
}

let countDown = function(numberCount) {
    while(numberCount > 0) {
        console.log(numberCount);
        numberCount -= 1;
    }
    console.log(numberCount)
}