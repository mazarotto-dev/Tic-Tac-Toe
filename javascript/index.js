const theme = document.getElementById('theme')
const root = document.querySelector(':root')

let rootBackground = sessionStorage.getItem('background')
let rootFooter = sessionStorage.getItem('footer')
let rootSelect = sessionStorage.getItem('select')
let rootSelected = sessionStorage.getItem('selected')

root.style.setProperty('--background', rootBackground)
root.style.setProperty('--footer-fonte', rootFooter)
root.style.setProperty('--select', rootSelect)
root.style.setProperty('--selected', rootSelected)

theme.value = sessionStorage.getItem('themeSelected')

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


const form = document.getElementById('players-form');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const playerX = document.getElementById('player-one').value;
    const playerO = document.getElementById('player-two').value;

    console.log('playerX:', playerX);
    console.log('playerO:', playerO);

    sessionStorage.setItem('playerX', playerX);
    sessionStorage.setItem('playerO', playerO);

    console.log('Redirecionando para tictactoe.html...');
    location.href = 'tictactoe.html';
});
