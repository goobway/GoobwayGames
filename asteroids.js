var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
// The arc() method creates an arc/curve
// To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI
// JS syntax: content.arc(x,y,r,sAngle,eAngle,counterclockwise)
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();