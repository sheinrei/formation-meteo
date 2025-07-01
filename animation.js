let interval;


function slideY(element) {
    translate_count -= 2
    element.style.transform = `translateY(${translate_count}px)`;
    if (translate_count < 1) {
        clearInterval(interval)
    }
}

function slideDeleat(element){
    $(element).css("position","relative").animate({
        right: "150px",
        opacity: 0,
        height : '0px'
    },2000, function(){
        $(this).remove()
    })

    


}