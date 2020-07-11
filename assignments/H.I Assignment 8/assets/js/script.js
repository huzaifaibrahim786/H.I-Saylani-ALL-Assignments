var hour = 0;
var min = 0;
var sec = 0;
var mili_sec = 0;
var starts = document.querySelector('#start');
var hour_head = document.querySelector('#hour');
var min_head = document.querySelector('#min');
var sec_head = document.querySelector('#sec');
var mili_head = document.querySelector('#mili_sec');
var interval;

function stopWatch() {
    mili_sec++;
    mili_head.innerHTML = mili_sec;
    if (mili_sec >= 100) {
        sec++;
        if (sec <= 9) {

            sec_head.innerHTML = sec;
        }
        mili_sec = 0;
    } else if (sec >= 60) {
        min++;
        if (min <= 9) {

            min_head.innerHTML = min;
        }
        sec = 0;
    } else if (min >= 60) {
        hour++;
        min = 0;
        if (hour <= 9) {
            min_head.innerHTML = min;
            hour_head.innerHTML = hour;
        }
        min = 0;
    }
};

function start() {
    interval = setInterval(stopWatch, 10);
    starts.style.pointerEvents = 'none';
    starts.style.opacity = '.4';
};

function stop() {
    clearInterval(interval);
    starts.style.pointerEvents = 'auto';
    starts.style.opacity = '1';
};

function reset() {
    hour = 0 + '0';
    min = 0 + '0';
    sec = 0 + '0';
    mili_sec = 0 + '0';
    mili_head.innerHTML = mili_sec;
    sec_head.innerHTML = sec;
    min_head.innerHTML = min;
    hour_head.innerHTML = hour;
    clearInterval(interval);
    starts.style.pointerEvents = 'auto';
    starts.style.opacity = '1';
};