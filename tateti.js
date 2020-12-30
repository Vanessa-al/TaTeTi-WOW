let accumulatore = 0;
const clickFirstRow = [];
const clickSecondRow = [];
const clickThirdRow = [];
let accumulatoreFirstPlayer = 0;
let accumulatoreSecondPlayer = 0;
let winnerPlayer = false;
let firstPlayerWins = 0;
let secondPlayerWins = 0;




function start() {
    document.getElementById("scoreFirstPlayer").innerHTML = "0"
    document.getElementById("scoreSecondPlayer").innerHTML = "0"
    document.getElementById("firstCharacter").innerHTML = sessionStorage.getItem("nameFirstCharacter")
    document.getElementById("secondCharacter").innerHTML = sessionStorage.getItem("nameSecondCharacter")

}


const Button = (id) => {

    document.getElementById(id).type = "image"

    if (accumulatore < 9) {
        row(id);
    }

}

const row = (id) => {

    const firstCharacter = sessionStorage.getItem("firstPlayer");
    const secondChracter = sessionStorage.getItem("secondPlayer");

    if (id <= 3) {
        if (accumulatore % 2 == 0 && clickFirstRow[id - 1] != "First" && clickFirstRow[id - 1] != "Second") {
            document.getElementById(id).src = firstCharacter
            clickFirstRow[id - 1] = "First";
            accumulatore++;
        } else if (accumulatore % 2 != 0 && clickFirstRow[id - 1] != "Second" && clickFirstRow[id - 1] != "First") {
            document.getElementById(id).src = secondChracter
            clickFirstRow[id - 1] = "Second";
            accumulatore++;
        }
    } else if (id <= 6) {
        if (accumulatore % 2 == 0 && clickSecondRow[id - 4] != "First" && clickSecondRow[id - 4] != "Second") {
            document.getElementById(id).src = firstCharacter
            clickSecondRow[id - 4] = "First";
            accumulatore++;


        } else if (accumulatore % 2 != 0 && clickSecondRow[id - 4] != "Second" && clickSecondRow[id - 4] != "First") {
            document.getElementById(id).src = secondChracter
            clickSecondRow[id - 4] = "Second";
            accumulatore++;
        }
    } else {
        if (accumulatore % 2 == 0 && clickThirdRow[id - 7] != "First" && clickThirdRow[id - 7] != "Second") {
            document.getElementById(id).src = firstCharacter
            clickThirdRow[id - 7] = "First";
            accumulatore++;

        } else if (accumulatore % 2 != 0 && clickThirdRow[id - 7] != "Second" && clickThirdRow[id - 7] != "First") {
            document.getElementById(id).src = secondChracter
            clickThirdRow[id - 7] = "Second";
            accumulatore++;
        }
    }



    threeInLine(id);
    if (winnerPlayer != true) {
        threeInVerticalLine(id);
        if (winnerPlayer != true) {
            threeInDiagonale(id)
        }

    }

    if (accumulatore == 9 && winnerPlayer != true) {
        document.getElementById("result").innerHTML = "TIE"
    }


}




const threeInLine = (id) => {

    if (id <= 3) {
        for (let i = 0; i < clickFirstRow.length; i++) {
            if (clickFirstRow[i] == "First") {
                accumulatoreFirstPlayer++;
            } else if (clickFirstRow[i] == "Second") {
                accumulatoreSecondPlayer++;
            }
        }
    } else if (id <= 6) {

        for (let i = 0; i < clickSecondRow.length; i++) {
            if (clickSecondRow[i] == "First") {
                accumulatoreFirstPlayer++;
            } else if (clickSecondRow[i] == "Second") {
                accumulatoreSecondPlayer++;
            }
        }
    } else {
        for (let i = 0; i < clickThirdRow.length; i++) {
            if (clickThirdRow[i] == "First") {
                accumulatoreFirstPlayer++;
            } else if (clickThirdRow[i] == "Second") {
                accumulatoreSecondPlayer++;
            }
        }
    }



    winner(id);

}



const threeInVerticalLine = (id) => {



    if (id == 1 || id == 4 || id == 7) {

        if (clickFirstRow[0] == "First" && clickSecondRow[0] == "First" && clickThirdRow[0] == "First") {
            accumulatoreFirstPlayer = 3;
        } else if (clickFirstRow[0] == "Second" && clickSecondRow[0] == "Second" && clickThirdRow[0] == "Second") {
            accumulatoreSecondPlayer = 3;
        }
    } else if (id == 2 || id == 5 || id == 8) {
        if (clickFirstRow[1] == "First" && clickSecondRow[1] == "First" && clickThirdRow[1] == "First") {
            accumulatoreFirstPlayer = 3;
        } else if (clickFirstRow[1] == "Second" && clickSecondRow[1] == "Second" && clickThirdRow[1] == "Second") {
            accumulatoreSecondPlayer = 3;
        }
    } else {
        if (clickFirstRow[2] == "First" && clickSecondRow[2] == "First" && clickThirdRow[2] == "First") {
            accumulatoreFirstPlayer = 3;
        } else if (clickFirstRow[2] == "Second" && clickSecondRow[2] == "Second" && clickThirdRow[2] == "Second") {
            accumulatoreSecondPlayer = 3;
        }
    }



    winner();

}

const threeInDiagonale = (id) => {

    if (id == 1 || id == 5 || id == 9) {

        if (clickFirstRow[0] == "First" && clickSecondRow[1] == "First" && clickThirdRow[2] == "First") {
            accumulatoreFirstPlayer = 3;
        } else if (clickFirstRow[0] == "Second" && clickSecondRow[1] == "Second" && clickThirdRow[2] == "Second") {
            accumulatoreSecondPlayer = 3;
        }
    } else if (id == 3 || id == 5 || id == 7) {
        if (clickFirstRow[2] == "First" && clickSecondRow[1] == "First" && clickThirdRow[0] == "First") {
            accumulatoreFirstPlayer = 3;
        } else if (clickFirstRow[2] == "Second" && clickSecondRow[1] == "Second" && clickThirdRow[0] == "Second") {
            accumulatoreSecondPlayer = 3;
        }
    }

    winner();

}


const winner = () => {

    if (accumulatoreFirstPlayer == 3) {
        firstPlayerWins++;
        document.getElementById("scoreFirstPlayer").innerHTML = firstPlayerWins
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i).disabled = true

        }
        winnerPlayer = true;
        document.getElementById("result").innerHTML = `Winner ${sessionStorage.getItem('nameFirstCharacter')}`

    } else if (accumulatoreSecondPlayer == 3) {
        secondPlayerWins++;
        document.getElementById("scoreSecondPlayer").innerHTML = secondPlayerWins
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i).disabled = true

        }
        winnerPlayer = true;
        document.getElementById("result").innerHTML = `Winner ${sessionStorage.getItem('nameSecondCharacter')}`

    } else {
        accumulatoreFirstPlayer = 0;
        accumulatoreSecondPlayer = 0;
    }



}

const reset = () => {

    winnerPlayer = false;

    for (let j = 1; j <= 9; j++) {

        document.getElementById(j).type = "button"
        document.getElementById(j).disabled = false;

    }

    for (let j = 1; j <= 3; j++) {
        clickFirstRow[j - 1] = "";
        clickSecondRow[j - 1] = "";
        clickThirdRow[j - 1] = "";

    }


    accumulatore = 0;
    accumulatoreFirstPlayer = 0;
    accumulatoreSecondPlayer = 0;
    document.getElementById("result").innerHTML = ""





}

const panelSelection = () => {

    window.location.replace("index.html");

}


window.onload = start;
