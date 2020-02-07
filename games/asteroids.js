var c = document.getElementById("canvas");
c.height = 1000;
c.width = 1300;
var ctx = c.getContext("2d");
var x = 10,
    y = 100;
ctx.fillStyle = "black";
ctx.fillRect(700, 100, 100, 100);

function draw() {
    ctx.beginPath();
    // The arc() method creates an arc/curve
    // To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI
    // JS syntax: content.arc(x,y,r,sAngle,eAngle,counterclockwise)
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(250,0,0,0.4)';
    ctx.fill();

    x += 2;
    ctx.fillStyle = 'rgba(34,45,23,0.4)';
    ctx.fillRect(0, 0, c.width, c.height);
    // requestAnimationFrame(callback) calls a function to update an animation before the next repaint
    requestAnimationFrame(draw);
}
draw();