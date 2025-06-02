function addCity() {
    const input = document.getElementById("input_city").value;
    const local_array = JSON.parse(localStorage.getItem("city")) //duplique un new array
    local_array.push(firstUppercase(input));//ajoute l'input dans le new array
    localStorage.clear()// clear tout pour remettre dans un seul array
    localStorage.setItem("city", JSON.stringify(local_array))// set le new localStorage
    setDom(input_city.value);// ok rajoute la new div 
    document.getElementById("input_city").value = ""//ok clear l'input
}


// element pour ajouter une nouvelle ville aux favoris
submit.addEventListener("click", addCity);



// event pour chercher si quand on clic on selectionne bien l'element pour deleat
document.querySelector("body").addEventListener("click", function (event) {
    const target_id = event.target.id;
    let checked_deleat = getVille(target_id);

    if (checked_deleat[0] == "deleat") {
        deleatFavori(checked_deleat)

        const element = document.getElementById(`container_meteo_city_${checked_deleat[3]}`)
        element.style.display = "none";
    }
})

