window.onload = loadPage

let chart = new Chart();
console.log(chart)
let series = [
    {
        name: null,
        color: 'orange',
        data: 120
    }
]


function loadPage(){
    console.log('DOMLoaded')

    let canvas = document.getElementById('canvaser')
    canvas.style.backgroundColor = 'white'
    let ctx = canvas.getContext('2d')
    
    
    let barY = 10 
    for(let i = 0; i < 28; i++){
        ctx.fillStyle = 'orange'
        ctx.fillRect(10, barY, 100+barY, 10)
        barY+=20;
    }
    
    
}

