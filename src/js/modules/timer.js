
// id = DOM element where should locate the timer
// deadline = time until timer should work
const timer = (id, deadline) => {
    const getTimeRemaining = (endTime) => {
        const time = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor((time / (1000 * 60 * 60 * 24))),
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((time / 1000 / 60) % 60),
            seconds = Math.floor((time / 1000) % 60);

        return { total: time, days, hours, minutes, seconds }
    }

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

        //unique timer id to manage and stop it
        const timeInterval = setInterval(updateClock, 1000)

        // add zero toe the digits which than 9
        const addZero = (num) => (num <= 9) ? '0' + num : num

        //set digits on clock before setInterval start
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);
            days.textContent = addZero(t.days)
            hours.textContent = addZero(t.hours)
            minutes.textContent = addZero(t.minutes)
            seconds.textContent = addZero(t.seconds)

            if(t.total <= 0) {
                days.textContent = "00"
                hours.textContent = "00"
                minutes.textContent = "00"
                seconds.textContent = "00"

                clearInterval(timeInterval)
            }
        }
    }

    setClock(id, deadline)
}

export default timer