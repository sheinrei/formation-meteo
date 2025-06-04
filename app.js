const key = "c8a4e675fa901dc728e553a943ff7d88";
const cities_array = ["Paris"]
const submit = document.getElementById("submit")


const firstUppercase = (string) => string[0].toUpperCase() + string.slice(1)
const convertCelsus = (number) => (number - 273).toFixed(1) + "°C"
const splitId = (e) => e.split("_");




async function setDom(element) {
    let id = Date.now();


    let d = await meteoData(element);


    const create_html = document.createElement("div");

    create_html.className = "container_meteo_city";

    create_html.id = `container_meteo_city_${id}`

    create_html.innerHTML = `
       
            <div id="frame_ville_${id}" class="name_city">
                 <p id="name_city_${id}">${firstUppercase(element)}</p>
                  <p id="departement_city_${id}" class="departement_city">(${d.departement})</p>
            </div>
            
            <div class="meteo_city">
                <div class="container_temperature" id="container_temperature_${id}">
                    <p id="temperature_min_city_${id}" class="meteo_content">Minimum : ${d.temp_min}</p>
                    <p id="temperature_max_city_${id}" class="meteo_content">Maximum : ${d.temp_max}</p>
                </div>

                <div class="container_weather" id="container_weather_${id}">
                    <p id="weather_description_city_${id}" class="meteo_content">${firstUppercase(d.weather)}</p>
                    <p id="humidity_city_${id}" class="meteo_content">Humidité : ${d.humidity}</p>
                </div>
                
            </div>

            <div class="container_deleat">
                
                <div class="deleat_favori">
                    <i  id="deleat_favori_city_${id}" class=" fa fa-solid fa-trash" style="color:rgb(224, 92, 248);font-size:2.3em"></i>
                </div>

                
            </div>`

    const main_container = document.getElementById("main_container");


    main_container.prepend(create_html);

    const interval = setInterval(implementation,10,create_html);

    create_html.style.marginLeft = "200px"

    let translate_count = 200;

    function implementation(element) {
        translate_count -= 1;

        element.style.marginLeft = `${translate_count}px`;

        if (translate_count == 0) {
            console.log("end")
            clearInterval(interval)
        }

    }



}






//function pour retirer une ville de localStorage
function deleatFavori(ville) {
    console.log("deleat city to localStorage")

    const new_local = JSON.parse(localStorage.getItem("city"));
    const index = new_local.indexOf(ville);
    new_local.splice(index, 1);

    localStorage.clear();
    localStorage.setItem("city", JSON.stringify(new_local));


}


// return les coords d'une ville
async function geocoding(city) {

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;

    try {
        const response = await fetch(url);

        data = await response.json();
        const departement = data[0].state;
        const lon = data[0].lon;
        const lat = data[0].lat;
        return { lon, lat, departement }

    } catch {
        deleatFavori(city)
        alert("Ville inexistante");
    }

}


//return temp_min,temp_max,humidity, weather
async function meteoData(emplacement) {
    const coord = await geocoding(emplacement)
    const lon = coord.lon;
    const lat = coord.lat;
    const departement = coord.departement

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    const response = await fetch(url);
    const data = await response.json();
    const temp_min = convertCelsus(data.main.temp_min);
    const temp_max = convertCelsus(data.main.temp_max);
    const humidity = data.main.humidity + "%";
    const weather = data.weather[0].description;



    const cached_data = {
        temp_min,
        temp_max,
        humidity,
        weather,
        departement
    }
    return cached_data
}




// Init function

//recupère le localStorage avec les favoris en array pour lancer init()
const local_storage = JSON.parse(localStorage.getItem("city"));



// init va setDom() pour chaque ville dans le localStorage et si 
async function init() {

    if (local_storage == null || local_storage.length == 0) {
        localStorage.setItem("city", JSON.stringify(cities_array));
        setDom("Paris")
    } else {
        for (let i = 0; i < local_storage.length; i++) {
            await setDom(local_storage[i])
        }
    }
}

init()

