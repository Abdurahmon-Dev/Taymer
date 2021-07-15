let that_day = new Date('Nov 1 2021 00:00:00');
   
function fixDate() {
    let now = new Date();
    let gap = that_day - now;
    
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minute = Math.floor(gap / 1000 / 60) % 60;
    let secunde = Math.floor(gap / 1000) % 60;

    getElement(days,hours,minute,secunde);
}
function getElement(day,hour,minute,secund) {
    let TextDays = document.getElementById('day');
    TextDays.innerText = day;

    let TextHour = document.getElementById('hour');
    TextHour.innerText = hour;

    let TextMinute = document.getElementById('minute');
    TextMinute.innerText = minute;

    let TextSecunde = document.getElementById('secund');
    TextSecunde.innerText = secund;
}

window.addEventListener('load', () => {
    setInterval(fixDate, 1000);
});


