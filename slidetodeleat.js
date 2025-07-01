const main_container = document.querySelector("#main_container");
let last_x = 0;
let start_x = [];


main_container.addEventListener("touchmove", function (event) {
    let id = event.target.id;
    const number_id = splitId(id);    
    if (id !== `container_meteo_city_${number_id[number_id.length-1]}`){id = `container_meteo_city_${number_id[number_id.length-1]}`}
 

    let pos_x = event.touches[0].clientX;
    slide(id, pos_x);
    event.preventDefault()
}, {passive:false})


function slide(id, pos_x) {
    if (!last_x) { last_x = pos_x }
    let diff = pos_x - last_x;
 
    const e = document.getElementById(id)
    const width = e.clientWidth

    // limite du slide
    if (diff > width*0.5){diff = width*0.5};
    if (diff < -width*0.5){diff = -width*0.5};


    document.getElementById(id).style.transform = `translateX(${diff}px)`
}


main_container.addEventListener("touchend", function (e) {

    const id = splitId(e.target.id)    
    let main_container = document.getElementById(e.target.id).closest(`#container_meteo_city_${id[id.length-1]}`);
    //let element = document.getElementById(`container_meteo_city_${id[id.length-1]}`);

    
    // variable pour condition
    let width = main_container.clientWidth;
    const end_x = e.changedTouches[0].screenX;
    const diff = end_x - start_x[0]
    const ville = document.getElementById(`name_city_${id[id.length-1]}`).textContent

    diff > width * 0.33 || diff < -width*0.33 ? (deleatFavori(ville),slideDeleat(main_container)) : main_container.style.transform = `translateX(0)`

    // remise à 0 des positions
    last_x = 0;
    start_x = [];
})


//event pour retenir la premiere pos de x enregistré dans un tableau pour retenir first = [0]
main_container.addEventListener("touchstart", function (e) {
    start_x.push(e.touches[0].screenX)
    e.preventDefault()
},{passive:false})


//racourcie touche enter pour valider l'input d'une nouvelle ville
addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        addCity()
    }
})