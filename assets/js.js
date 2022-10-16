const docH = document.getElementById('hour')
const docM = document.getElementById('minutes')
const docS = document.getElementById('sec')

const clockTime = setInterval(function time(){
    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    if(h < 10) h = '0' + h
    if(m < 10) m = '0' + m
    if(s < 10) s = '0' + s

    docH.innerHTML = h
    docM.innerHTML = m
    docS.textContent = s
}, 1000)