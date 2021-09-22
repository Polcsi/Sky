const daybtn = document.querySelector('#daybtn');
const nightbtn = document.querySelector('#nightbtn');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const clouds = document.querySelector('.cloud');
const stars = document.querySelector('.stars');

daybtn.onclick = () => {
    document.body.style.backgroundImage = "linear-gradient(var(--day-sky)";
    moon.style.display = "none";
    sun.style.display = "unset"
    clouds.style.display = "unset";
    stars.style.display = "none";
    nightbtn.style.display = "flex";
    daybtn.style.display = "none";
}

nightbtn.onclick = () => {
    document.body.style.backgroundImage = "linear-gradient(var(--night-sky)";
    moon.style.display = "unset";
    sun.style.display = "none"
    clouds.style.display = "none";
    stars.style.display = "unset";
    nightbtn.style.display = "none";
    daybtn.style.display = "flex";
}