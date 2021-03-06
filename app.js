const daybtn = document.querySelector('#daybtn');
const nightbtn = document.querySelector('#nightbtn');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const clouds = document.querySelector('.cloud');
const stars = document.querySelector('.stars');
var potd = "";
var check = null;
var firstClick = true;
var secondClick = true;

function setDay(param)
{
    if(param === "day"){document.body.style.backgroundImage = "linear-gradient(var(--day-sky)";}
    if(param === "sunset"){document.body.style.backgroundImage = "linear-gradient(var(--sunset-sky)";}
    moon.style.display = "none";
    sun.style.display = "unset"
    clouds.style.display = "unset";
    stars.style.display = "none";
    nightbtn.style.display = "flex";
    daybtn.style.display = "none";
}

function setNight()
{
    document.body.style.backgroundImage = "linear-gradient(var(--night-sky)";
    moon.style.display = "unset";
    sun.style.display = "none"
    clouds.style.display = "none";
    stars.style.display = "unset";
    nightbtn.style.display = "none";
    daybtn.style.display = "flex";
}

daybtn.onclick = () => {
    setDay(potd);
    clearInterval(check);
    if(firstClick)
    {
        check = setInterval(checkTime, 20000);
        firstClick = false;
    } else if(secondClick) {
        check = setInterval(checkTime, 60000);
        secondClick = false;
    } else {
        check = null;
    }
}

nightbtn.onclick = () => {
    setNight();
    clearInterval(check);
    if(firstClick)
    {
        check = setInterval(checkTime, 20000);
        firstClick = false;
    } else if(secondClick) {
        check = setInterval(checkTime, 60000);
        secondClick = false;
    } else {
        check = null;
    }
}

function checkTime()
{
    const time = new Date().toLocaleTimeString();
    console.log(time);
    if(time > "07:00:00" && time < "18:00:00")
    {
        console.log("Good Day!");
        potd = "day";
        setDay("day");
    }else if(time > "18:00:00" && time < "20:00:00") {
        console.log("Good Sunset!");
        potd = "sunset";
        setDay("sunset");
    } else if((time > "20:00:00" && time < "23:59:59") || (time > "00:00:00" && time < "07:00:00")) {
        console.log("Good night!");
        potd = "day";
        setNight();
    } else {
        console.log("Error");
    }
}

checkTime();
check = setInterval(checkTime, 3000);

function display_c()
{
    var refresh=1000; 
    mytime=setTimeout('display_ct()',refresh)
}
    
function display_ct() 
{
    var x = new Date().toLocaleTimeString();
    /* var ampm = x.substring(0, 2) >= 12 ? ' PM' : ' AM'; */
    document.getElementById('ct').innerHTML = x;
    display_c();
}