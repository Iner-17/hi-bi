let me = document.getElementById('me')
let text = document.getElementById('text')
let page = 0

function nextpage() {
    if (page == 0){
        text.innerHTML = 'Alam mo ba?'
        me.innerHTML = '😄'
        page = 1
    } else if (page == 1) {
        text.innerHTML = 'Unang beses palang kita nakita alam ko ng may Asthma ka'
        me.innerHTML = '😅'
        page = 2
    } else if (page == 2) {
        text.innerHTML = 'alam mo ba kung bakit?'
        me.innerHTML = '🤔'
        page = 3
    } else if (page == 3) {
        text.innerHTML = 'kasi you take my breath away'
        me.innerHTML = '🤣'
        page = 4
    } else if (page == 4) {
        text.innerHTML = 'Sheesh!'
        me.innerHTML = '😎'
        page = 5
    } else if (page == 5) {
        text.innerHTML = 'wag ka muna kiligin'
        me.innerHTML = '😆✋'
        page = 6
    } else if (page == 6) {
        text.innerHTML = 'Alam mo ba kahit bali-baliktarin tong bulaklak na ito'
        me.innerHTML = '🌷'
        me.style.rotate = '360deg'
        page = 7
    } else if (page == 7) {
        text.innerHTML = 'Para sayo parin to eyy Happy Monthsaryy! I love you bii!'
        me.innerHTML = '🥰🌷'
        me.style.rotate = '360deg'
        page = 8
    } 

}