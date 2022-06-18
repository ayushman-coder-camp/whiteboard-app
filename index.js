window.addEventListener("load", () => {
    const iframe = document.querySelector("iframe");
    const paint = iframe.getContext("2d");

    //Resizing
    iframe.width = window.innerWidth;
    iframe.height = window.innerHeight;

    //Variables
    let paintTool = false;

    //Start Painting
    function startPaint(a){
        paintTool = true;
        draw(a);
    }

    function endPaint(){
        paintTool = false
    }

    function paint(a){
        if (!paintTool) return;
        paint.lineWidth = 8;
        paint.lineCap = "round";

        paint.lineTo(a.cilentX, a.cilentY)
        paint.stroke()
    }
    //Event Listeners
    iframe.addEventListener("mousedown" ,startPaint);
    iframe.addEventListener("mouseup" ,endPaint);
    iframe.addEventListener("mousemove" ,paint);
})