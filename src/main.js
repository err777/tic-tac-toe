// + при клике нарисовать крестик или нолик
// + после каждой отрисовки проверять есть ли победитель
// + если есть победитель - выводить текст, кто выйграл
// + выделять выйгрышную линию цветом
// + при нажатии на кнопку начинать заново
// добавить выбор, кто начинает - крестики или нолики
// добавить счет


const area = document.getElementById('area')
const cells = area.getElementsByClassName('ttt__cell')

const dialogWindow = document.getElementById('dialog')
const dialogCloseButton = dialogWindow.querySelector('.dialog__close')
const dialogRestartButton = document.getElementById('btn-restart')
const dialogDonationButton = document.getElementById('btn-donation')


let step = 0
let result = ''
let gameIsOver = false

const onAreaClick = (event) => {
        if (!gameIsOver && (event.target.classname = 'ttt_cell') && (event.target.innerHTML.length === 0) ) {
            event.target.innerHTML = step % 2 === 0 ?  'X' :  'O'
            step++
            getGameResult()
        }
}

const onDialogCloseButton = (event) => {
        dialogWindow.style.display = 'none' 
}

const winningResults = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [2, 4, 6], [0, 4, 8]
]

const getGameResult = () => {

    for (let i = 0; i < winningResults.length; i++) {

        const el1 = cells[winningResults[i][0]]
        const el2 = cells[winningResults[i][1]]
        const el3 = cells[winningResults[i][2]]
        
        if (el1.innerHTML == 'X' && el2.innerHTML == 'X' && el3.innerHTML == 'X') {
            el1.style.color = 'rgb(224, 77, 77)'
            el2.style.color = 'rgb(224, 77, 77)'
            el3.style.color = 'rgb(224, 77, 77)'
            gameIsOver = true
            result = 'Крестики победили!' 
            dialogWindow.style.display = 'flex' 
            getResults (result)
            
        }
        else if (el1.innerHTML == 'O' && el2.innerHTML == 'O' && el3.innerHTML == 'O') {
            el1.style.color = 'rgb(224, 77, 77)'
            el2.style.color = 'rgb(224, 77, 77)'
            el3.style.color = 'rgb(224, 77, 77)'
            gameIsOver = true
            result = 'Нолики победили!'
            dialogWindow.style.display = 'flex' 
            getResults (result)
        }
        else if (step === 9) {
            gameIsOver = true
            result = 'Ничья'
            dialogWindow.style.display = 'flex' 
            getResults (result)
        }
    }
}

const getResults = winner => {
    const dialogContent = document.querySelector('.dialog__сontent')
    dialogContent.innerHTML = `<h1>${winner}</h1>` 
}


const onDialogRestartButtonClick = (event) => {
    window.location.reload();
}








dialogRestartButton.addEventListener('click', onDialogRestartButtonClick)
area.addEventListener('click', onAreaClick)
dialogCloseButton.addEventListener('click', onDialogCloseButton)
