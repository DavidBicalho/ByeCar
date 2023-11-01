var card = window.document.getElementById('card')
var icon1 = window. document.getElementById('icon1')
var icon2 = window. document.getElementById('icon2')

function voltz(){
    card.src = 'images/voltz.svg'
    icon1.setAttribute("onclick", "honda()")
    icon2.setAttribute("onclick", "honda()")
}

function honda(){
    card.src = 'images/honda.svg'
    icon1.setAttribute("onclick", "voltz()")
    icon2.setAttribute("onclick", "voltz()")
}