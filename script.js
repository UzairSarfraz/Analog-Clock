let h = document.getElementById('hr');
let m = document.getElementById('mn');
let s = document.getElementById('ss');

function show_clock(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hRotation = 30*hours + minutes/2;
    let mRotation = 6*minutes;
    let sRotation = 6*seconds;

    h.style.transform = `rotate(${hRotation}deg)`;
    m.style.transform = `rotate(${mRotation}deg)`;
    s.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(show_clock, 1000)