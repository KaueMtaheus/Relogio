
document.addEventListener('DOMContentLoaded', function() {
    const secondHand = document.querySelector('.second-hand')
    const minuteHand = document.querySelector('.minute-hand')
    const hourHand = document.querySelector('.hour-hand')

    function updateClock() {
        const now = new Date();

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDegrees = (seconds / 60) * 360 + 90;
        const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        const hoursDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) + 30) + 90;
  
        secondHand.style.transform = `rotate(${secondDegrees}deg)`
        minuteHand.style.transform =  `rotate(${minuteDegrees}deg)`
        hourHand.style.transform =  `rotate(${hourDegrees}deg)`

    }

    setInterval(updateClock, 1000);
    updateClock();

});




