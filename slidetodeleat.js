
const div = document.querySelector("body")
let last_x = 0;

let start_x = [];


// est ce que je peux mettre que les container_meteo_city_? dans cet event?
div.addEventListener("touchmove", function (event) {
    const id = event.target.id;
    const pos_x = event.touches[0].clientX;

    if (getId(id)[0] == "container") { slide(id, pos_x) }
    else {
        const element = event.target.id
        //const parent = document.getElementById(element)
        console.log(element)

    }
})



div.addEventListener("touchend", function (e) {
    let element = document.getElementById(e.target.id);
    let width = element.clientWidth;
    const end_x = e.changedTouches[0].screenX;
    const diff = end_x - start_x[0]

    if (diff > width * 0.3 && getId(element.id)[0] == "container") {
        deleatFavori(getId(element.id[3]))
        document.getElementById(element.id).style.display = "none"
    } else {
        element.style.transform = `translateX(0)`
    }

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