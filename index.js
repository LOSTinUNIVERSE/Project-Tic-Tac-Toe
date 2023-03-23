const Player = (name, tool, value) => ({ name, tool, value })
const player1 = Player("josh", "x", 1)
const player2 = Player("mosh", "o", 2)
const GameBoard = (() => {
    const store = [];
    const boxes = document.getElementsByClassName("boxes")
    // const player1 = Player("josh", toolInput, 22)
    // const player2 = Player("mosh", toolInput, 22)
    const btnScore = () => {
        const header = document.querySelector("header")
        const askForTool = document.createElement("button")
        askForTool.textContent = "  weapon"
        header.appendChild(askForTool)
        const chooseTool = () => {
            const xbtn = document.createElement("button")
            const obtn = document.createElement("button")
            header.appendChild(xbtn)
            header.appendChild(obtn)
            xbtn.textContent = "x"
            obtn.textContent = "o"
        }
        askForTool.addEventListener("click", chooseTool)

        // function chooseTool() {
        //     const container = this.textContent
        //     console.log(container);
        // }
        // xbtn.addEventListener("click", chooseTool)
        // obtn.addEventListener("click", chooseTool)
    }
    const defineWinner = () => {
        const arr = []
        function checker() {
            for (let i = 1; i <= 3; i++) {
                const box = document.querySelector(`[data-number='${i}']`)
                arr.push(box.textContent)
            }
        }
        checker()
        // const areEqual = arr.every(item => item == arr[0])
        // console.log(areEqual);
        // console.log(arr);
    }
    const createDivs = () => {
        for (let i = 1; i <= 9; i++) {
            const box = document.createElement("div")
            box.dataset.number = i
            box.classList = "boxes"
            gameBox.appendChild(box)
        }
    }
    const changeBoxes = () => {
        let number = 0
        for (let i = 0; i < 9; i++) {
            boxes[i].addEventListener("click", addText)
        }
        function evenOrOdd() {
            if (number % 2 == 0) {
                return "false"
            } return "true"
        }
        function endOfGame() {
            if (number == 1) {
                console.log("over");
                return false
            }
        }
        function addText() {
            if (number == 9) {
                defineWinner()
                return false
            }
            if (this.textContent) {
                return false;
            }/*  console.log(1) */;
            number++
            if (evenOrOdd() == "false") {
                this.textContent = player1.tool
            }
            else if (evenOrOdd() == "true") {
                this.textContent = player2.tool
            }
            store.push(this.textContent)
            // console.log(store);
        }
    }

    return { defineWinner, createDivs, btnScore, changeBoxes }
})()

// const array = ["x", "x", "l"]
// const allEqual = array.every(v => v === array[0])
// console.log(allEqual);
GameBoard.createDivs()
GameBoard.btnScore()
GameBoard.changeBoxes()
GameBoard.defineWinner()

// const defineWinner = () => {
// const number = 1
// if (number = 1) {
// number2 + 2
// } else if (number = 4) {
// number2 = 6
// }
// 
// 
// else if
// 
// const number2 = number + 3
// const arr = []
// function checker = {
// for (let i = number; i <= 3; i++) {
// const box = document.querySelector(`[data-number='${i}']`)
// arr.push(box.textContent)
// }
// }
// const areEqual = arr.every(item => item == arr[0])
// }

const obj = {
    case1: [1, 2, 3],
    case2: [4, 5, 6],
    case3: [7, 8, 9],
    case4: [1, 4, 7],
    case5: [2, 5, 8],
    case6: [3, 6, 9],
}