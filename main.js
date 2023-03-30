function stopWacth(){
const numbers = document.querySelector('.numbers');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;
let timer;

function getSeconds(seconds) {
    let date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function startSeconds() {
    timer = setInterval(function () {
        seconds++;
        numbers.innerHTML = getSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('start')) {
        numbers.classList.remove('paused')
        clearInterval(timer)
        startSeconds()
    }
    if (el.classList.contains('pause')) {
        numbers.classList.add('paused')
        clearInterval(timer)
    }
    if (el.classList.contains('reset')) {
        clearInterval(timer)
        numbers.innerHTML = '00:00:00'
        seconds = 0
        numbers.classList.remove('paused')
    }
})
}
stopWacth()