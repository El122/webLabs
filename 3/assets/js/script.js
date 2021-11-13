let canvas = null;
let context = null;
let isDrawing = null;

window.onload = function () {
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
};

function startDrawing(e) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
    if (isDrawing == true) {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function changeColor(color) {
    context.strokeStyle = color.value;
}

function changeThickness(thickness) {
    context.lineWidth = thickness.value;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
