// annimer l'arrivé d'une nouvelle div mmeteo ville
let translate_count = 200;

function implementation(element) {
    translate_count -= 10;

    element.style.marginLeft = `${translate_count}px`;

    if(translate_count == 0){
        clearInterval(interval)
    }

}