const game = document.querySelector(".game")
const gameBox = document.querySelector("#gameBox")
const test = document.getElementsByTagName("div")
console.log(gameBox);
console.log(game)
console.log(test);
const GameBoard = (() => {
    const store = ["x", "0", "x", "0", "x", "0", "x", "0", "x"];
    const render = function () {
        for (let i = 0; i < store.length; i++) {
            console.log(store[i]);
        }
    }

    const createDivs = () => {
        for (let i = 0; i < 9; i++) {
            const box = document.createElement("div")
            // gameBox.appendChild(box)
        }
    }
    return { render, createDivs }
})()

GameBoard.createDivs()


// GameBoard.render()
// const Player = (name, tool) => {
    // console.log(this.name);
    // return { name, tool }
// }

