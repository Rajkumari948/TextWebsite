const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let isErasing = false;
let isDrawingEnabled = false;
let isErasingEnabled = false;
let startX = 0;
let startY = 0;

// Get the buttons
const drawBtn = document.getElementById('drawBtn');
const eraseBtn = document.getElementById('eraseBtn');

// Event listeners for buttons
drawBtn.addEventListener('click', () => {
  isDrawingEnabled = true;
  isErasingEnabled = false;
  canvas.style.cursor = "crosshair"; // Change cursor to crosshair for drawing mode
  drawBtn.classList.add('active');
  eraseBtn.classList.remove('active');
});

eraseBtn.addEventListener('click', () => {
  isDrawingEnabled = false;
  isErasingEnabled = true;
  canvas.style.cursor = "default"; // Change cursor to default for eraser mode
  eraseBtn.classList.add('active');
  drawBtn.classList.remove('active');
});

canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseup', handleMouseUp);
canvas.addEventListener('mouseout', handleMouseOut);

function handleMouseDown(event) {
  // Mouse Left button's value is 1
  if (event.buttons !== 1) return; // Only start action if left mouse button is pressed
  isDrawing = isDrawingEnabled;
  isErasing = isErasingEnabled;
  if (isDrawing || isErasing) {
    startX = event.clientX - canvas.getBoundingClientRect().left;
    startY = event.clientY - canvas.getBoundingClientRect().top;
  }
}

function handleMouseMove(event) {
  if (!isDrawing && !isErasing) return; // Skip if not drawing or erasing

  const x = event.clientX - canvas.getBoundingClientRect().left;
  const y = event.clientY - canvas.getBoundingClientRect().top;

  if (isDrawing) {
    ctx.beginPath(); // Start a new path for drawing
    ctx.moveTo(startX, startY);
    ctx.lineTo(x, y);
    ctx.stroke(); // Stroke the path to draw it on the canvas

    startX = x;
    startY = y;
  } else if (isErasing) {
    ctx.clearRect(x - 25, y - 25, 50, 50); // Adjust the eraser size as needed
  }
}

function handleMouseUp() {
  isDrawing = false;
  isErasing = false;
}

function handleMouseOut() {
  isDrawing = false;
  isErasing = false;
}