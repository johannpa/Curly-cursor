const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

setupCanvas();
window.addEventListener("resize", setupCanvas);

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// intro motion
let mouseMoved = false;

const pointer = {
  x: 0.5 * window.innerWidth,
  y: 0.5 * window.innerHeight,
};

const params = {
  pointsNumber: 40,
  widthFactor: 0.3,
  mouseThreshold: 0.6,
  spring: 0.4,
  friction: 0.5,
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
  trail[i] = {
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
  };
}

window.addEventListener("click", (e) => {
  updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", (e) => {
  updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", (e) => {
  updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
  pointer.x = eX;
  pointer.y = eY;
}
