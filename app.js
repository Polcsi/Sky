const daybtn = document.querySelector('#daybtn');
const nightbtn = document.querySelector('#nightbtn');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const clouds = document.querySelector('.cloud');
const stars = document.querySelector('.stars');

function setDay()
{
    document.body.style.backgroundImage = "linear-gradient(var(--day-sky)";
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
    setDay();
}

nightbtn.onclick = () => {
    setNight();
}

function checkTime()
{
    const time = new Date().toLocaleTimeString();
    console.log(time);
    if(time > "07:00:00" && time < "19:00:00")
    {
        console.log("Good Day!");
        setDay();
    } else if(time > "19:00:00" && time < "07:00:00") {
        console.log("Good night!");
        setNight();
    }
}

checkTime();

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