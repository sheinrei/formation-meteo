const consent_true = document.getElementById("consent_geoloc_true");
const consent_false = document.getElementById("consent_geoloc_false");
let frame_geoloc = document.getElementById("demande_geolocalisation");
const main = document.getElementById("content")
let translate_count = frame_geoloc.clientHeight;




//dialogue pour demande geoloc
consent_true.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setFirstDom);
        frame_geoloc.remove()
        interval = setInterval(slideY, 10, main);

    } else {
        alert("Geolocation is not supported by this browser.");
    }
})

consent_false.addEventListener("click", function () {
    frame_geoloc.remove()
    main.style.transform = `translateY(${frame_geoloc.clientHeight}px)`;
    interval = setInterval(slideY, 10, main);

})






async function setFirstDom(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const key = "c8a4e675fa901dc728e553a943ff7d88";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    const r = await fetch(url);
    const data = await r.json();

    const city_geoloc = data.name;

    setDom(city_geoloc);
}


