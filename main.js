const canvas = document.getElementById('myCanvas');
canvas.width = 200; // Fixed width

const ctx = canvas.getContext('2d');
const road = new Road(canvas.width/2,canvas.width*0.9);
const car = new Car(100, 100, 30, 50); // Adjust the initial position within the canvas
car.draw(ctx);

animate();

function animate(){
    canvas.height=window.innerHeight;
    car.update();
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}