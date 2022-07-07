const countdown = function(){
    const date = new Date('Thur August 6 2022 00:00:00');
    const presentDate = new Date();

    let difference = date - presentDate;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    // console.log(days, hours, minutes, seconds);

    let day = Math.floor(difference / days);
    let hour = Math.floor((difference % days) / hours);
    let minute = Math.floor((difference % hours) / minutes);
    let second = Math.floor((difference % minutes) / seconds);
    // console.log(day, hour, minute, second);

    if(day < 10){
        day = '0' + day;
    } else{
        day = day
    }

    if(hour < 10){
        hour = '0' + hour;
    } else{
        hour = hour;
    }

    if(minute < 10){
        minute = '0' + minute;
    } else{
        minute = minute;
    }
    if(second < 10){
        second = '0' + second;
    } else{
        second = second;
    }

    document.querySelector('.days').innerText = day;
    document.querySelector('.hours').innerText = hour;
    document.querySelector('.minutes').innerText = minute;
    document.querySelector('.seconds').innerText = second;

}

setInterval(countdown, 1000);