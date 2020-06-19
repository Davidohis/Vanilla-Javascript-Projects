
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.heighh = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
    if (!isDrawing) return; // stop the on from running when they are not moused down

    console.log(event);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = hue;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];

    
    hue ++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth ++;
    } else {
        ctx.lineWidth --;
    }
};

canvas.addEventListener('mousedown', function(){
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);