const div = document.querySelector("body");
let last_x = 0;

let start_x = [];


// est ce que je peux mettre que les container_meteo_city_? dans cet event?
div.addEventListener("touchmove", function (event) {
    let id = event.target.id;
    let pos_x = event.touches[0].clientX;

    if (id == `container_meteo_city_${getVille(id)[3]}`) {
        slide(id, pos_x);
    }
    else {
        const ville = getVille(id)
        const index = ville.length-1
        slide(`container_meteo_city_${ville[index]}`, pos_x)
    }
})


div.addEventListener("touchend", function (e) {
    let element = document.getElementById(e.target.id);
    let width = element.clientWidth;
    const end_x = e.changedTouches[0].screenX;
    const diff = end_x - start_x[0]


    if (diff > width * 0.5 && element.id == `container_meteo_city_${getVille(element.id)[3]}`) {
        deleatFavori(getVille(element.id))
        document.getElementById(element.id).style.display = "none"

    } else {
        const ville = getVille(element.id)
        const id_container = `container_meteo_city_${ville[ville.length-1]}`
        document.getElementById(id_container).style.transform = `translateX(0)`
    }
    last_x = 0;
    start_x = [];
})


div.addEventListener("touchstart", function (e) {
    start_x.push(e.touches[0].screenX);

})

function slide(id, pos_x) {
    if (!last_x) { last_x = pos_x }
    let diff = pos_x - last_x;
    const element = document.getElementById(id);
    element.style.transform = `translateX(${diff}px)`
}

addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        addCity()
    }
})