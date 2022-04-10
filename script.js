// при клике нарисовать крестик или нолик
// после каждой отрисовки проверять есть ли победитель
// если есть победитель - выводить текст, кто выйграл
// выделять выйгрышную линию цветом
// при нажатии на кнопку начинать заново
// добавить выбор, кто начинает - крестики или нолики
// добавить счет

const area = document.getElementById('area')
const cells = document.getElementsByClassName('ttt__cell')

let step = 0
let result = ''
let gameIsOver = false

area.addEventListener('click', event => {
    if (!gameIsOver && (event.target.classname = 'ttt_cell') && (event.target.innerHTML.length === 0) ) {
        step % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O'
        step++
        getGameResult()
    }
})

const winningResults = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [2, 4, 6], [0, 4, 8]
]

const getGameResult = () => {

    for (i = 0; i < winningResults.length; i++) {

        const el1 = cells[winningResults[i][0]].innerHTML
        const el2 = cells[winningResults[i][1]].innerHTML
        const el3 = cells[winningResults[i][2]].innerHTML
        
        if (el1 == 'X' && el2 == 'X' && el3 == 'X') {
            gameIsOver = true
            result = 'Крестики' 
            getResults (result)
        }
        else if (el1 == 'O' && el2 == 'O' && el3 == 'O') {
            gameIsOver = true
            result = 'Нолики'
            getResults (result)
        }
    }
}


const getResults = winner => {
    console.log(winner);
}