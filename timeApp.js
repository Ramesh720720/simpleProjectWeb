function currentTime() {

    let nt = new Date();
    // console.log(nt);

    // hours  
    let hours = nt.getHours();
    // console.log(hours);
    //minutes
    let minutes = nt.getMinutes();
    // console.log(minutes);
    //sec 
    let sec = nt.getSeconds();
    // console.log(sec);

    // month name
    let month = nt.getMonth();
    // console.log(month);
    let months = new Array(12);
    months[0] = "January";
    months[1] = "Febuary";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
    let monthName = months[month];
    // console.log(monthName);
    //year
    let year = nt.getFullYear();
    // console.log(year);
    //date
    let date = nt.getDate();
    // console.log(date);

    //weekdays
    let days = nt.getDay();

    let weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    let dayname = weekdays[days];
    // console.log(dayname);
    let hours2, hours3;
    let ampm;
    if (hours >= 0 && hours <= 12) {

        ampm = "AM";
    } else {
        ampm = "PM";
    }
    if (hours >= 0 && hours <= 12) {
        hours2 = hours;
    } else {
        hours2 = hours - 12;

    }
    if (hours2 <= 9) {
        hours3 = `0${hours2}`
    } else {
        hours3 = hours2;
    }
    // seconds 
    let sec2;
    if (sec <= 9) {
        sec2 = `0${sec}`;
    } else {
        sec2 = sec;
    }
    // minutes 
    let minutes2;
    if (minutes <= 9) {
        minutes2 = `0${minutes}`;
    } else {
        minutes2 = minutes;
    }


    // console.log(hours3);

    let date2 = `${dayname}, ${date} ${monthName} ${year}`;
    // console.log(date2);
    let NowTime = `${hours3}:${minutes2}:${sec2}  ${ampm}`;
    console.log(NowTime);

    let taming = document.getElementById("taming");
    let taming2 = document.getElementById("taming2");
    taming.innerText = NowTime;
    taming2.innerText = date2;
    let t = setTimeout(function() { currentTime() }, 1000);
    // console.clear();
}
currentTime();