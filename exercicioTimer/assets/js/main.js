function timer(){
    function getHourBySeconds(second) {
        const data = new Date(second * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    function startTimer() {
        timer = setInterval(function () {
            second++;
            clock.innerHTML = getHourBySeconds(second);
        }, 1000)
    }
    
    const clock = document.querySelector('.clock');
    let second = 0;
    let timer;
    
    document.addEventListener('click', function (e) {
        const el = e.target;
    
        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            clock.innerHTML = "00:00:00";
            clock.classList.remove('pausado');
            second = 0;
        }
    
        if (el.classList.contains('iniciar')) {
            clock.classList.remove('pausado');
            clearInterval(timer);
            startTimer();
        }
    
        if (el.classList.contains('pausar')) {
            clock.classList.add('pausado');
            clearInterval(timer)
        }
    });
}

timer();
