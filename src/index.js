const repeats = 3;
export const brainGamesStart = (brainGame, name) => {
    for (let i = 0; i < repeats; i += 1) {
        if (brainGame(name) === 0) {
            return 0;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

export const brainCalc = (calc, username) => {
    for (let i = 0; i < repeats; i += 1) {
        if (calc(username) === 0) {
            return 0;
        }
    }
    console.log(`Congratulations, ${username}!`);
}

export const brainnod = (nod, username) => {
    for (let i = 0; i < repeats; i += 1) {
        if (nod(username) === 0) {
            return 0;
        }
    }
    console.log(`Congratulations, ${username}!`);
}