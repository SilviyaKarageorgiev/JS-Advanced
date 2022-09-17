function solve(steps, lengthOfFootprint, speed){

    let distanceInMeters = steps * lengthOfFootprint;
    let speedInMetersPerHour = speed * 1000;

    let time = distanceInMeters / speedInMetersPerHour;
    let timeInSec = time * 3600;

    let rest = Math.floor(distanceInMeters / 500);
    timeInSec += rest * 60;

    let hours = Math.floor(timeInSec / 3600);
    let minutes = Math.floor((timeInSec - (hours * 3600)) / 60);
    let seconds = Math.ceil(timeInSec - minutes * 60);

    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);