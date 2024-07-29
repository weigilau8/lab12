function toggleHighlight(){


    const elements = document. getElementsByClassName ('text');
    for (let i=0; i < elements.length; i++){
        elements[i].classList.toggle('highlight');
    }
}