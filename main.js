var last_position_of_x , current_position_of_mouse_x
canvas = document.getElementById ("myCanvas")
ctx = canvas.getContext ("2d")
color = "blue"
width_of_line = 1 
var width = screen.width
new_width = screen.width - 70
new_height = screen.height - 300
if(width < 992)
{

document.getElementById("myCanvas").width = new_width
document.getElementById("myCanvas").height = new_height
document.body.style.overflow = "hidden";

}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
MouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{

color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
MouseEvent = "mouseup";

}

function my_mousemove(e)
{

current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent -- "mouseDown") {
console.log("current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y + " + current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
ctx.stroke();
}
canvas = document.getElementById("Neeshtha's Canvas");
color = "red";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokestyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

color = document.getElementById("color").value;
console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x +" ,Y - " + mouse_y);
    circle(mouse_x ,mouse_y);

}

function circle(mouse_x , mouse_y)
{

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();

}

function cleararea(){

ctx.clearRect(0,0,canvas.width, canvas.height)

}



}
