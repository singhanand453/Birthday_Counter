const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('mins');
const s = document.getElementById('secs');

const newYear ='14 May 2022';

function countdown(){
    const newYeardate = new Date(newYear);
    const currentDate = new Date();

    const second = (newYeardate - currentDate) / 1000;
    const days = Math.floor(second / 3600 / 24);
    const hours = Math.floor(second/3600) % 24;
    const minutes = Math.floor(second/60) % 60;
    const sec = Math.floor(second) % 60;

    d.innerHTML = days;
    h.innerHTML = formattime(hours);
    m.innerHTML = formattime(minutes);
    s.innerHTML = formattime(sec);


    function formattime(time){
        return time < 10 ? `0${time}` : time;
    }
    
}
countdown();


