let interval;


function slideY(element) {
    translate_count -= 2
    element.style.transform = `translateY(${translate_count}px)`;
    if (translate_count < 1) {
        clearInterval(interval)
    }
}

