var mouse_event = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("colors").value;
    width_of_line = document.getElementById("line_width").value;
    mouse_event = "mouseDown";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    var current_position_of_x = e.clientX - canvas.offsetLeft;
    var current_position_of_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    }
    console.log("Last position of X and Y cordinate = ")
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of X and Y cordinate = ")
    console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouse_event = "mouseUp";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouse_event = "mouseLeave";
}
function clear_area(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}