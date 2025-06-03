function addCity() {
    const input = document.getElementById("input_city").value;
    const local_array = JSON.parse(localStorage.getItem("city")) //duplique un new array

    const check_dupe = local_array.indexOf(firstUppercase(input))

    if (check_dupe < 0){

    local_array.push(firstUppercase(input));//ajoute l'input dans le new array
    localStorage.clear();// clear tout pour remettre dans un seul array
    localStorage.setItem("city", JSON.stringify(local_array));// set le new localStorage
    setDom(input_city.value);// ok rajoute la new div 
    document.getElementById("input_city").value = ""//ok clear l'input

    }else{alert("Ville déjà présente")}
}


// element pour ajouter une nouvelle ville aux favoris
submit.addEventListener("click", addCity);



// event pour chercher si quand on clic on selectionne bien l'element pour deleat
document.querySelector("#main_container").addEventListener("click", function (event) {
    const target_id = event.target.id;
    const main_container = document.getElementById(target_id).closest(`#container_meteo_city_${splitId(target_id)[3]}`);
    const ville = main_container.childNodes[1].textContent;

    let checked_deleat = splitId(target_id);
    console.log

    if (checked_deleat[0] == "deleat") {
        deleatFavori(ville)
        main_container.remove();
    }  
})

