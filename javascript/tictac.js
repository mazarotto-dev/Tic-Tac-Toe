const playerX = sessionStorage.getItem('playerX');
const playerO = sessionStorage.getItem('playerO');

let turnPlayer = ''

const regions = document.querySelectorAll('.cursorPointer');
let vBoard = [];

function updateTitle() {
    document.getElementById('player-view').innerText = turnPlayer;
}

function initializeGame() {
    document.getElementsByTagName('h2').innerHTML = 'Vez de: <span id="player-view"></span>';
    turnPlayer = playerX;
    updateTitle();
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    winnerView.classList.remove('winners-ativo')
    regions.forEach(function (ev) {
        ev.classList.remove('win');
        ev.classList.remove('disable');
        ev.innerText = ''
        ev.addEventListener('click', game);
    });
}

function game(clicked) {
    const spanClicked = clicked.currentTarget;
    const region = spanClicked.dataset.game;
    const rowColuwnPair = region.split('.'); // ['0', '1']
    const row = rowColuwnPair[0];
    const coluwn = rowColuwnPair[1];

    if (turnPlayer === playerX) {
        spanClicked.innerText = 'X';
        turnPlayer = playerO;
        vBoard[row][coluwn] = 'X';
    } else {
        spanClicked.innerText = 'O';
        turnPlayer = playerX;
        vBoard[row][coluwn] = 'O';
    }

    spanClicked.classList.remove('cursorPointer');
    updateTitle();
    spanClicked.removeEventListener('click', game);
    spanClicked.classList.add('disable');
    win();
}

function win() {
    let empate = true; // Inicializa com true

    regions.forEach(function (ev) {
        if (!ev.classList.contains('disable')) {
            empate = false; // Define como false se houver alguma região disponível
        }
    });

    if ((vBoard[0][0] === 'X' && vBoard[0][1] === 'X' && vBoard[0][2] === 'X') || (vBoard[0][0] === 'O' && vBoard[0][1] === 'O' && vBoard[0][2] === 'O')) {
        regions[0].classList.add('win');
        regions[1].classList.add('win');
        regions[2].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if ((vBoard[1][0] === 'X' && vBoard[1][1] === 'X' && vBoard[1][2] === 'X') || (vBoard[1][0] === 'O' && vBoard[1][1] === 'O' && vBoard[1][2] === 'O')) {
        regions[3].classList.add('win');
        regions[4].classList.add('win');
        regions[5].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if ((vBoard[2][0] === 'X' && vBoard[2][1] === 'X' && vBoard[2][2] === 'X') || (vBoard[2][0] === 'O' && vBoard[2][1] === 'O' && vBoard[2][2] === 'O')) {
        regions[6].classList.add('win');
        regions[7].classList.add('win');
        regions[8].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if ((vBoard[0][0] === 'X' && vBoard[1][0] === 'X' && vBoard[2][0] === 'X') || (vBoard[0][0] === 'O' && vBoard[1][0] === 'O' && vBoard[2][0] === 'O')) {
        regions[0].classList.add('win');
        regions[3].classList.add('win');
        regions[6].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if ((vBoard[0][1] === 'X' && vBoard[1][1] === 'X' && vBoard[2][1] === 'X') || (vBoard[0][1] === 'O' && vBoard[1][1] === 'O' && vBoard[2][1] === 'O')) {
        regions[1].classList.add('win');
        regions[4].classList.add('win');
        regions[7].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if ((vBoard[0][2] === 'X' && vBoard[1][2] === 'X' && vBoard[2][2] === 'X') || (vBoard[0][2] === 'O' && vBoard[1][2] === 'O' && vBoard[2][2] === 'O')) {
        regions[2].classList.add('win');
        regions[5].classList.add('win');
        regions[8].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if ((vBoard[0][0] === 'X' && vBoard[1][1] === 'X' && vBoard[2][2] === 'X') || (vBoard[0][0] === 'O' && vBoard[1][1] === 'O' && vBoard[2][2] === 'O')) {
        regions[0].classList.add('win');
        regions[4].classList.add('win');
        regions[8].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if ((vBoard[0][2] === 'X' && vBoard[1][1] === 'X' && vBoard[2][0] === 'X') || (vBoard[0][2] === 'O' && vBoard[1][1] === 'O' && vBoard[2][0] === 'O')) {
        regions[2].classList.add('win');
        regions[4].classList.add('win');
        regions[6].classList.add('win');
        regions.forEach(function (ev) {
            ev.removeEventListener('click', game);
            ev.classList.add('disable');
        });
    } else if (empate) {
        playerName.innerText = 'Empate!'
        document.querySelector('p').innerText = ''
        winnerView.classList.add('winners-ativo')
    
        playAgain.addEventListener('click', function () {
        initializeGame()   
    })

        initialPage.addEventListener('click', function () {
            window.location.href = 'index.html'
        })
    }
    
    if (
        (vBoard[0][0] === 'X' && vBoard[0][1] === 'X' && vBoard[0][2] === 'X') || 
        (vBoard[1][0] === 'X' && vBoard[1][1] === 'X' && vBoard[1][2] === 'X') ||
        (vBoard[2][0] === 'X' && vBoard[2][1] === 'X' && vBoard[2][2] === 'X') ||

        (vBoard[0][0] === 'X' && vBoard[1][0] === 'X' && vBoard[2][0] === 'X') ||
        (vBoard[0][1] === 'X' && vBoard[1][1] === 'X' && vBoard[2][1] === 'X') ||
        (vBoard[0][2] === 'X' && vBoard[1][2] === 'X' && vBoard[2][2] === 'X') ||
        
        (vBoard[0][0] === 'X' && vBoard[1][1] === 'X' && vBoard[2][2] === 'X') ||
        (vBoard[0][2] === 'X' && vBoard[1][1] === 'X' && vBoard[2][0] === 'X')        
        ) {
        setTimeout(winnerViewX, 1000)
    } else if (
        (vBoard[0][0] === 'O' && vBoard[0][1] === 'O' && vBoard[0][2] === 'O') || 
        (vBoard[1][0] === 'O' && vBoard[1][1] === 'O' && vBoard[1][2] === 'O') ||
        (vBoard[2][0] === 'O' && vBoard[2][1] === 'O' && vBoard[2][2] === 'O') ||

        (vBoard[0][0] === 'O' && vBoard[1][0] === 'O' && vBoard[2][0] === 'O') ||
        (vBoard[0][1] === 'O' && vBoard[1][1] === 'O' && vBoard[2][1] === 'O') ||
        (vBoard[0][2] === 'O' && vBoard[1][2] === 'O' && vBoard[2][2] === 'O') ||
        
        (vBoard[0][0] === 'O' && vBoard[1][1] === 'O' && vBoard[2][2] === 'O') ||
        (vBoard[0][2] === 'O' && vBoard[1][1] === 'O' && vBoard[2][0] === 'O')
    ) {
        setTimeout(winnerViewO, 1000)
    }
}

const winnerView = document.querySelector('.winners')
const playerName = document.getElementById('player-name')
const playAgain = document.getElementById('play-again')
const initialPage = document.getElementById('initial-page')

function winnerViewX() {
    playerName.innerText = playerX
    document.getElementById('winner-view').innerText = playerX
    winnerView.classList.add('winners-ativo')
    
    playAgain.addEventListener('click', function () {
        initializeGame()   
    })

    initialPage.addEventListener('click', function () {
        window.location.href = 'index.html'
    })
}

function winnerViewO() {
    playerName.innerText = playerO
    document.getElementById('winner-view').innerText = playerO
    winnerView.classList.add('winners-ativo')
    
    playAgain.addEventListener('click', function () {
        initializeGame()   
    })

    initialPage.addEventListener('click', function () {
        window.location.href = 'index.html'
    })
}

window.addEventListener('DOMContentLoaded', function () {

    if (playerX === null || playerO === null) {
        alert('Você não pode jogar sem um jogador!')
        location.href = 'index.html'
    } else {
        initializeGame()
    }
})

theme.value = sessionStorage.getItem('themeSelected')

let root = document.querySelector(':root')

let rootBackground = sessionStorage.getItem('background')
let rootFooter = sessionStorage.getItem('footer')
let rootSelect = sessionStorage.getItem('select')
let rootSelected = sessionStorage.getItem('selected')

root.style.setProperty('--background', rootBackground)
root.style.setProperty('--footer-fonte', rootFooter)
root.style.setProperty('--select', rootSelect)
root.style.setProperty('--selected', rootSelected)

theme.addEventListener('change', function () {
    console.log('Tema selecionado:', theme.value);

    if (theme.value === 'purple-theme') {
        root.style.setProperty('--background', '#7A2653');
        root.style.setProperty('--footer-fonte', '#FF7AC1');
        root.style.setProperty('--select', '#ff7ac18a');
        root.style.setProperty('--selected', '#FF7AC1');
    } else if (theme.value === 'cyan-theme') {
        root.style.setProperty('--background', '#349FA8');
        root.style.setProperty('--footer-fonte', '#43CFDB');
        root.style.setProperty('--select', '#11858d8a');
        root.style.setProperty('--selected', '#43CFDB');
    } else if (theme.value === 'yellow-theme') {
        root.style.setProperty('--background', '#F0BC47');
        root.style.setProperty('--footer-fonte', '#C7A044');
        root.style.setProperty('--select', '#E3C781');
        root.style.setProperty('--selected', '#C7A044');
    } else if (theme.value === 'green-theme') {
        root.style.setProperty('--background', '#27B85E');
        root.style.setProperty('--footer-fonte', '#87FFB4');
        root.style.setProperty('--select', '#9CE59E');
        root.style.setProperty('--selected', '#87FFB4');
    }

    sessionStorage.setItem('themeSelected', theme.value)

    sessionStorage.setItem('background', root.style.getPropertyValue('--background'))

    sessionStorage.setItem('footer', root.style.getPropertyValue('--footer-fonte'))
    sessionStorage.setItem('select', root.style.getPropertyValue('--select'))
    sessionStorage.setItem('selected', root.style.getPropertyValue('--selected'))
})


if (theme.value === '') {
    theme.value = 'purple-theme'
}