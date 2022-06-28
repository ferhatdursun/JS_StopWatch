
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
const start = document.querySelector(".start");

let flag = 1

document.getElementById('start').addEventListener('click', () => {

    flag *= -1
    console.log(flag);

    if (flag == 1) {
        clearInterval(int); //*! clearIntervar durdurmak icin
        start.innerHTML = `<i class="fa-solid fa-play ferhat "></i>`;
    } else {
        flag !== 1;
        int = setInterval(displayTimer, 10); //*! burada else seklinde kullaniliyor. Degilse setInterval(kaldigin yerden devam et)
        start.innerHTML = `<i class="fa-solid fa-pause ferhat "></i>`;
    }
});

//*! RESET Button
const reloadButton = document.querySelector("#reload");
// // Reload everything:
function reload() {
    reload = location.reload();
    // // Event listeners for reload
    reloadButton.addEventListener(click, reload);
}

function displayTimer() {
    milliseconds += 10;

    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }


    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}


