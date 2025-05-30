function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setFirstDom);

        


    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

async function setFirstDom(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    const r = await fetch(url);
    const data = await r.json();

    const city_geoloc = data.name;

    setDom(city_geoloc);
}

getLocation();

