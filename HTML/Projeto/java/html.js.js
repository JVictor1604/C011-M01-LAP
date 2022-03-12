let text = document.querySelector("#texto-inicial")


function handleEvent() {

    if (text.style.color != 'red') {

        text.style.color = 'red'
    }   else {

        text.style.color = 'black'
    }
}