const Player = (name, tool, value) => ({ name, tool, value })
const GameBoard = (() => {
    const display = document.createElement("h1")
    display.id = "display"
    display.style.display = "none"
    const sidebar = document.querySelector("#sidebar")
    sidebar.appendChild(display)
    let winner = ""
    const player1 = Player("", "x", 1)
    const player2 = Player("", "o", 2)
    let store = [];
    const boxes = document.getElementsByClassName("boxes")
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
                alert("enter your name)")
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
            defineWinner()
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
            // console.log(arr);
        }
        checker()

        let congratulations = ""
        function showDisplay() {
            const gamebox = document.getElementById("gameBox")
            display.style.display = "grid"
            display.textContent = congratulations
        }
        function checkWinner() {
            if (number == 9) {
                return false
            }
            for (let i = 0; i <= 7; i++) {
                const areEqual = arr[i].every(item => item === arr[i][0])
                if (areEqual == true) {
                    // console.log(i, "true");
                    winner = arr[i][0]
                    console.log(winner);
                    if (winner == "x") {
                        console.log(player1.name, " wins")
                        congratulations = `${player1.name} wins`
                        showDisplay();
                        number = 9
                    }
                    else if (winner == "o") {
                        console.log(player2.name, "wins");
                        congratulations = `${player2.name} wins`
                        showDisplay()
                        number = 9
                    }

                }
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
            winner = ""
            for (let i = 0; i <= 8; i++) {
                boxes[i].textContent = ""
            }
            const gameBox = document.getElementById("gameBox")
            gameBox.style.display = "grid"
            display.style.display = "none"
            display.textContent = ""

        }
        let num = 1
        function namer() {
            if (num == 1) {
                player1.name = input.value
                num = 2
                input.value = ""
            } else if (num == 2) {
                player2.name = input.value
                input.value = ""
                num = 1

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
    return { defineWinner, createDivs, changeBoxes, restart }
})()
GameBoard.createDivs()
GameBoard.changeBoxes()
GameBoard.restart()
// GameBoard.defineWinner()