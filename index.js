const time = document.getElementById("time")
const greeting = document.getElementById("greeting")
const name = document.getElementById("name")

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

    switch(hour){
        case hour < 12:
            greeting.textContent = "Good morning,"
            break
        case hour < 18:
            greeting.textContent = "Good afternoon,"
            break
        default:
            greeting.textContent = "Good evening,"
    }
}

function getName () {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Your name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

function setName (e) {
    console.log('setting name',e)
}

name.addEventListener('keypress', setName)


showTime()
getName()
setBackground()