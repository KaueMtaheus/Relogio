const hourHand = document.querySelector('.hours-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')




const getTime = () => {
    const date = new Date(); 

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};


setInterval( () => {
    const { hours, minutes, seconds } = getTime();

    const hourAngle = (360 / 12) * (hours + minutes / 60);
    const minuteAngle = (360 / 60) * (minutes + seconds / 60);
    const secondAngle = (360 / 60) * seconds;

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    
}, 1000);