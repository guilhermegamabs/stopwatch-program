const display = document.getElementById('display');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop() {

}

function reset() {

}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / 1000);
    let milli = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    min = String(min).padStart(2, 0);
    sec = String(sec).padStart(2, 0);
    milli = String(milli).padStart(2, 0);

    display.textContent = `${hours}:${min}:${sec}:${milli}`;
}