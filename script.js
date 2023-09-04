const canvas = document.getElementById('myCanvas')
canvas.width = 200;

// Getting the context to be able to draw
const ctx = canvas.getContext('2d');

// Creating a car
const car = new Car(100, 100, 50, 75)

function animate() {
    canvas.height = window.innerHeight;
    car.update();
    car.draw(ctx);

    // Create the animation "loop" (recursion) w/ JS
    requestAnimationFrame(animate);
}

animate();