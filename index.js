const time = document.getElementById("time")

function showTime () {
let t = new Date(),
h = t.getHours(),
m = t.getMinutes(),
s = t.getSeconds();

const amPm = h > 12 ? 'PM' : 'AM'
h = h % 12 || 12
//console.log(h,m,s,amPm)

time.innerHTML = `${h}:${m}:${s} ${amPm}`

setTimeout(showTime,1000)
}

showTime()