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
    const render = () => {
    }
    const createDivs = () => {
        for (let i = 0; i < 9; i++) {
            const box = document.createElement("div")
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
                return false
            }
            if (this.textContent) {
                return false;
            } console.log(1);
            number++
            if (evenOrOdd() == "false") {
                this.textContent = player1.tool
            }
            else if (evenOrOdd() == "true") {
                this.textContent = player2.tool
            }
            store.push(this.textContent)
            console.log(store);
        }
    }

    return { render, createDivs, btnScore, changeBoxes }
})()

GameBoard.createDivs()
// GameBoard.render()
GameBoard.btnScore()
GameBoard.changeBoxes()

// const Player = (name, tool) => {
    // console.log(this.name);
    // return { name, tool }
// }

