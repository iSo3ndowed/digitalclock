function clock(){
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    const greetingsEl = document.querySelector('.greetings')


    var h = new Date().getHours()
    var m = new Date().getMinutes()
    var s = new Date().getSeconds()

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    greetings()
}

function greetings(){
    const greetingsEl = document.querySelector('.greetings')
    var h = new Date().getHours()
    if(h < 12){
        greetingsEl.innerHTML = "Good Morning !!!"
    }else if(h > 12 && h < 16){
        greetingsEl.innerHTML = "Good Afternoon !!!"
    }else{
        greetingsEl.innerHTML = "Good Evening !!!"
    }
}

var interval = setInterval(clock, 1000)