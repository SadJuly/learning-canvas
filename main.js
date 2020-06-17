document.addEventListener('DOMContentLoaded', loadPage)

function loadPage(){
    console.log('DOMLoaded')
    let canvas = document.getElementById('canvaser')
    let ctx = canvas.getContext('2d')
    console.log(ctx)
}

