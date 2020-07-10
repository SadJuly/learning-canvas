window.onload = function(){
    var canvas = document.querySelector("#canvaser")
    if (canvas.getContext){
        ctx = canvas.getContext("2d")
        
        canvas.onmouse
        canvas.onmousemove = (e) => {
            console.log(e.layerX, e.layerY)
        }       


    } else {
        alert('Canvas unsupported!')
    }


    function startDrawing(context){
        context.on
    }
    
}

