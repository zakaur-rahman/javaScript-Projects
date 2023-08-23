// Radius of circle
const RADIUS = 200;
// Circle center points
const X_CIRCLE_CENTER = 300;
const Y_CIRCLE_CENTER = 300;
 
let canvas;
let ctx;
 
class MousePosition {
    constructor(x, y) {
        this.x = x,
        this.y = y;
    }
}
 
// Holds changing mouse position
let mousePos = new MousePosition(0,0);
 
// Call for our function to execute when page is loaded
document.addEventListener('DOMContentLoaded', setupCanvas);
 
function setupCanvas(){
    // Get reference to canvas element
    canvas = document.getElementById("my-canvas");
    // Get methods for manipulating the canvas
    ctx = canvas.getContext("2d");
    drawCanvas();
    // Execute redrawCanvas when the mouse moves
    canvas.addEventListener("mousemove", redrawCanvas);
}
 
function drawCanvas(){
    // Create border
    drawRectangle("#839192", 5, 0, 0, 600, 600);
    // Create circle
    drawCircle("#839192", 1, X_CIRCLE_CENTER, Y_CIRCLE_CENTER, RADIUS, 0, 2 * Math.PI);
    // Create guide lines
    drawLine("#839192", 1, X_CIRCLE_CENTER, 0, X_CIRCLE_CENTER, 600);
    drawLine("#839192", 1, 0, Y_CIRCLE_CENTER, 600, Y_CIRCLE_CENTER);
}
 
function redrawCanvas(evt){
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    // Redraw canvas
    drawCanvas();
 
    // Call for MousePosition object to be updated 
    getMousePosition(evt);
 
    // Draw x & y coordinates using updated MousePosition settings
    drawTextAtPoint(ctx, "X : " + mousePos.x, 15, 25);
    drawTextAtPoint(ctx, "Y : " + mousePos.y, 15, 45);
 
    // Get angle in degrees and draw text
    let angleOfMouseDegrees = getAngleUsingXAndY(mousePos.x, mousePos.y);
    drawTextAtPoint(ctx, "Degrees : " + angleOfMouseDegrees, 15, 65);
 
    // Calculates hypotenuse and opposite sides and draws
    // them
    drawTriangle(angleOfMouseDegrees);
}
 
function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY){
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(startX, startY, endX, endY);
}
 
function drawCircle(strokeColor, lineWidth, xCircCenter, yCircCenter, radius, arcStart, arcEnd){
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(xCircCenter, yCircCenter, radius, arcStart, arcEnd);
    ctx.stroke();
}
 
function drawLine(strokeColor, lineWidth, xStart, yStart, xEnd, yEnd){
    // Move to start of line
    ctx.moveTo(xStart, yStart);
    // Move to end of line
    ctx.lineTo(xEnd, yEnd);
    // Draw line
    ctx.stroke();
}
 
function drawTextAtPoint(ctx, text, x, y){
    ctx.font = "15px Arial";
    ctx.fillText(text,x,y);
}
 
function getMousePosition(evt){
    // Get the canvas size and position relative to the web page
    let canvasDimensions = canvas.getBoundingClientRect();
    // Get canvas x & y position
    mousePos.x = Math.floor(evt.clientX - canvasDimensions.left);
    mousePos.y = Math.floor(evt.clientY - canvasDimensions.top);
 
    // Convert to coordinate graph
    mousePos.x -= 300;
    mousePos.y = -1 * (mousePos.y - 300);
    return mousePos;
}
 
// Returns the angle using x and y
// x = Adjacent Side
// y = Opposite Side
// Tan(Angle) = Opposite / Adjacent
// Angle = ArcTan(Opposite / Adjacent)
function getAngleUsingXAndY(x, y){
    let adjacent = x;
    let opposite = y;
 
    return radiansToDegrees(Math.atan2(opposite, adjacent));
}
 
function radiansToDegrees(rad){
    if(rad < 0){
        // Correct the bottom error by adding the negative
        // angle to 360 to get the correct result around
        // the whole circle
        return (360.0 + (rad * (180 / Math.PI))).toFixed(2);
    } else {
        return (rad * (180 / Math.PI)).toFixed(2);
    }
}
 
function degreesToRadians(degrees){
    return degrees * (Math.PI / 180);
}
 
function drawTriangle(angleDegrees){
    // Draw hypotenuse
    ctx.moveTo(X_CIRCLE_CENTER, Y_CIRCLE_CENTER);
 
    // Cosine = Adjacent / Hypotenuse so
    // xEndPoint = xStartPoint + radius * cos(angle) [angle in radians]
    let xEndPoint = X_CIRCLE_CENTER + RADIUS * Math.cos(degreesToRadians(angleDegrees));
 
    // Sine = Opposite / Hypotenuse so
    // yEndPoint = yStartPoint + radius * sin(angle) [angle in radians]
    let yEndPoint = Y_CIRCLE_CENTER + RADIUS * -(Math.sin(degreesToRadians(angleDegrees)));
    drawTextAtPoint(ctx, "Radians : " + degreesToRadians(angleDegrees).toFixed(2), 15, 85);
 
    ctx.lineTo(xEndPoint, yEndPoint);
    ctx.stroke();
 
    // Draw Opposite Line
    ctx.moveTo(xEndPoint, yEndPoint);
    ctx.lineTo(xEndPoint, 300);
    ctx.stroke();
 
    // Draw text for x & y
    drawTextAtPoint(ctx, "(" + xEndPoint.toFixed(2) + "," + yEndPoint.toFixed(2) + ")", xEndPoint + 10, yEndPoint - 10);
 
    // Calculate the hypotenuse length (Stays Constant)
    let hypotenuseLength = getLineLength(X_CIRCLE_CENTER, Y_CIRCLE_CENTER, xEndPoint, yEndPoint);
    drawTextAtPoint(ctx, "Hypot L : " + hypotenuseLength.toFixed(2), 15, 105);
 
    // Calculate the opposite length
    let oppositeLength = getLineLength(xEndPoint, yEndPoint, xEndPoint, 300);
    drawTextAtPoint(ctx, "Opp L : " + oppositeLength.toFixed(2), 15, 125);
 
}
 
// Distance = √((x2 - x1)² + (y2 - y1)²)
function getLineLength(x1, y1, x2, y2){
    let xS = x2 - x1;
    xS = xS * xS;
    let yS = y2 - y1;
    yS = yS * yS;
    return Math.sqrt(xS + yS);
}