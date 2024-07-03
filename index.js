window.onload = function() {
    function updateTime() {
        const currentTime = new Date();
        const utcTime = currentTime.toUTCString().split(' ')[4];
        const utcDay = currentTime.toUTCString().split(',')[0];
        document.getElementById('currentTimeUTC').innerText = utcTime;
        console.log(currentTime);
        document.getElementById('currentDay').innerText = utcDay;
    }

    updateTime();
    setInterval(updateTime, 1000); 
};