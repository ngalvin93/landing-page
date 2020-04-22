const time = document.getElementById("time")

function showTime () {
    let t = new Date(),
    h = t.getHours(),
    m = t.getMinutes(),
    s = t.getSeconds();

    const amPm = h > 12 ? 'PM' : 'AM'
    h = h % 12 || 12

    time.innerHTML = `${h}:${addZero(m)}:${addZero(s)} ${amPm}`

    setTimeout(showTime,1000)
}

function addZero (n) {
    return (parseInt(n,10) < 10 ? '0' : '') + n
}

function setBackground () {
    let date = new Date(),
    hour = date.getHours()
    console.log(hour)

    switch(hour){
        case hour < 12:
            console.log('morning')
            break
        case hour < 18:
            console.log('evening')
            break
        default:
            console.log('night')
    }
}

showTime()
setBackground()