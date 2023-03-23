const Player = (name, tool, value) => ({ name, tool, value })
const GameBoard = (() => {

    const player1 = Player("", "x", 1)
    const player2 = Player("", "o", 2)
    // let containerX = ""
    // let containero = ""
    let store = [];
    const boxes = document.getElementsByClassName("boxes")
    const btnScore = () => {
        const header = document.querySelector("header")
        const askForTool = document.createElement("button")
        // askForTool.addEventListener("click", chooseTool)
        askForTool.textContent = "weapon"
        header.appendChild(askForTool)
        const chooseTool = () => {
            header.appendChild(xbtn)
            header.appendChild(obtn)
            xbtn.value = "x"
            obtn.value = "o"
            xbtn.textContent = "player 1 is x"
            // containerX = xbtn.value
            // containero = obtn.value
            obtn.textContent = "player 2 is o"
            askForTool.style.display = "none"
        }
        const xbtn = document.createElement("button")
        const obtn = document.createElement("button")
        askForTool.addEventListener("click", chooseTool)
    }

    const createDivs = () => {
        for (let i = 1; i <= 9; i++) {
            const box = document.createElement("div")
            box.dataset.number = i
            box.classList = "boxes"
            gameBox.appendChild(box)
        }
    }
    let number = 0
    const changeBoxes = () => {
        for (let i = 0; i < 9; i++) {
            boxes[i].addEventListener("click", addText)
        }
        function evenOrOdd() {
            if (number % 2 == 0) {
                return "false"
            } return "true"
        }
        function checkName() {
            if (player1.name == "" || player2.name == "") {
                alert("enter your name honey)")
                return false
            }
        }
        function addText() {
            if (checkName() == false) {
                return false
            }
            if (number == 9) {
                defineWinner()
                return false
            }
            if (this.textContent) {
                return false;
            }
            number++
            if (evenOrOdd() == "false") {
                this.textContent = player2.tool
            }
            else if (evenOrOdd() == "true") {
                this.textContent = player1.tool
            }
            store.push(this.textContent)
            // console.log(store);
        }
    }
    const defineWinner = () => {
        const arr = [
            [], [], [], [], [], [], [], [],
        ]
        const array = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 5, 9], [3, 5, 7]
        ]
        function checker() {
            for (let b = 0; b <= 7; b++) {
                for (let i = 0; i <= 2; i++) {
                    const box = document.querySelector(`[data-number='${array[b][i]}']`)
                    arr[b].push(box.textContent)
                }
            }
            console.log(arr);
        }
        checker()
        function checkWinner() {
            let winner = ""
            for (let i = 0; i <= 7; i++) {
                const areEqual = arr[i].every(item => item === arr[i][0])
                if (areEqual == true) {
                    winner = arr[i][1]
                }
            }
            if (winner == "x") {
                console.log(player1.name, " wins");
            } else if (winner == "o") {
                console.log(player2.name, "wins");
            } else if (winner == "") {
                console.log(draw);
            }
        }
        checkWinner()
    }
    const restart = () => {
        function cleaner() {
            const boxes = document.getElementsByClassName("boxes")
            store = []
            number = 0
            player1.name = ""
            player1.name = ""
            for (let i = 0; i <= 8; i++) {
                boxes[i].textContent = ""
            }
        }
        let num = 1
        function namer() {
            if (num == 1) {
                player1.name = input.value
                num = 2
                // console.log(input.value);
                // console.log(player1.name);
            } else if (num == 2) {
                player2.name = input.value
                // console.log(input.value);
                // console.log(player2.name);

            }

        }
        const header = document.querySelector("header")
        const restartBtn = document.createElement("button")
        const input = document.createElement("input")
        const submitName = document.createElement("button")
        restartBtn.textContent = "restart"
        submitName.textContent = "submit"
        restartBtn.addEventListener("click", cleaner)
        header.appendChild(restartBtn)
        header.appendChild(input)
        header.appendChild(submitName)
        submitName.addEventListener("click", namer)
    }
    return { defineWinner, createDivs, btnScore, changeBoxes, restart }
})()
GameBoard.createDivs()
GameBoard.btnScore()
GameBoard.changeBoxes()
GameBoard.restart()