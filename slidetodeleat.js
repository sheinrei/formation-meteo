// slide pour virer une ville 
let start_x = null;
let end_x = null;
const width_element = document.getElementById("main_container").clientWidth;
const main_container = document.getElementById("main_container")


// fonction pour detecter dans quelle endroit on se trouve pour get l'id
// avec event touchmove enregistrer x dans une var globale faire decalage de la div
// et ensuite repeter l'action en boucle


main_container.addEventListener("touchmove", function (e){
    console.log(e)

})



/* 
main_container.addEventListener("touchstart", function (e) {
    const x = e.touches[0].screenX;
    start_x = x;


})

main_container.addEventListener("touchend", function (e) {
    const x = e.changedTouches[0].screenX
    end_x = x;

    if (Math.abs((start_x - end_x)) > width_element * .5) {
        li1.style.display = "none"
    }
})
 */