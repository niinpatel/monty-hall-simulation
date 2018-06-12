function playMontyHall(toSwitch) {

    let carIsIn = Math.floor(Math.random() * 3);

    let doorSelected = Math.floor(Math.random() * 3);

    let revealedDoor = [0,1,2].find((door) => door !== carIsIn && door !== doorSelected);

    if(toSwitch){
        return carIsIn === [0,1,2].find((door) => door !== doorSelected && door !== revealedDoor)
    }
    else {
        return carIsIn === doorSelected
    }

}

function simulateGame(num, toSwitch) {

    let gamesWon = 0;

    for(let i = 0; i < num; i++){
        gamesWon += playMontyHall(toSwitch)
    }

    return gamesWon
}


console.log(simulateGame(1000, toSwitch = true));  // close to 666

console.log(simulateGame(1000, toSwitch = false));  // close to 333




