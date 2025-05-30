const key = "c8a4e675fa901dc728e553a943ff7d88";
const cities_array = ["London"]
const submit = document.getElementById("submit")
let count_city = 0



const firstUppercase = (string) => string[0].toUpperCase() + string.slice(1)
const convertCelsus = (number) => (number - 273).toFixed(1) + "°C"
const getId = (e) => e.split("_");


async function setDom(element) {

    const d = await meteoData(element)

    const create_html = document.createElement("div");
    create_html.className = "container_meteo";

    create_html.innerHTML = `
        <div class="container_meteo_city" id="container_meteo_city_${firstUppercase(element)}">   

            <div id="name_city_${element}" class="name_city">${firstUppercase(element)}</div>
            
            <div class="meteo_city">
                <div class="container_temperature">
                    <p id="temperature_min_city_${element}">Minimum : ${d.temp_min}</p>
                    <p id="temperature_max_city_${element}" class="temperature_max_city">Maximum : ${d.temp_max}</p>
                </div>

                <div class="container_weather">
                    <p id="weather_description_city_${element}">${firstUppercase(d.weather)}</p>
                    <p id="humidity_city_${element}">Humidité : ${d.humidity}</p>
                </div>
                
            </div>

            <div class="container_deleat">
                <p class="deleat_favori" id="deleat_favori_city_${firstUppercase(element)}"><p>
            </div>
        </div>`
    let new_div = document.getElementById("container_meteo_city");
    new_div.parentNode.append(create_html);
    count_city++;

    if (count_city > 2) {
        const element = document.querySelector(".main_container");
        element.style.margin = "0"
    }
}

// fetch
async function geocoding(city) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`

    const response = await fetch(url);
    const data = await response.json();

    const lon = data[0].lon;
    const lat = data[0].lat;
    return { lon, lat }
}

async function meteoData(emplacement) {
    const coord = await geocoding(emplacement)
    const lon = coord.lon;
    const lat = coord.lat;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    const response = await fetch(url);
    const data = await response.json();

    const temp_min = convertCelsus(data.main.temp_min)
    const temp_max = convertCelsus(data.main.temp_max)
    const humidity = data.main.humidity + "%";
    const weather = data.weather[0].description;



    const cached_data = {
        temp_min,
        temp_max,
        humidity,
        weather
    }
    return cached_data
}




// Init function


const local_storage = JSON.parse(localStorage.getItem("city"));

async function init() {
    if (local_storage.length < 1) {
        localStorage.setItem("city", JSON.stringify(cities_array))
        setDom("London");
    } else {
        for (let i = 0; i < local_storage.length; i++) {
            await setDom(local_storage[i])
        }
    }
}

init()

