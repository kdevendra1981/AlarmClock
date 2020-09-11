setAlarmTime = "0";
runAlaram = true;
function currentTime() {
    let time = new Date();


    hours = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();
    hours = updateTime(hours)
    min = updateTime(min)
    sec = updateTime(sec)

    timeformat = `${hours}:${min}:${sec}`

    let element = document.getElementById("clock")
    element.innerText = timeformat
    window.setTimeout(currentTime, 1000);
    checkAlarmTime(hours, min, sec)

}

function updateTime(k) {
    if (k < 10) {
        return "0" + k
    } else {
        return k
    }


}
currentTime()

let alarmTime = document.getElementById("alarm");
alarmTime.addEventListener('blur', () => {
    let alarmTime = document.getElementById('alarm');
    setAlarmTime = alarmTime.value;
    runAlaram = true;

});

function checkAlarmTime(hh, mm, sec) {
    let clock = document.getElementById('clock')
    clock.style.backgroundColor="#00FF3C";
    if (setAlarmTime.slice(0, 2) == hh.toString() && setAlarmTime.slice(3, 5) == mm.toString()) {
        let audio = new Audio("sound.mp3")
        if (runAlaram) {
            clock.style.backgroundColor = "#FF4400";
            audio.play();
            
        }else{
            audio.pause();
            
        }

    }
}

let stopbtn = document.getElementById("stop")
stopbtn.addEventListener("click",()=>{
    runAlaram = false;
})


