class Car {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 0;
        this.acc = 0.2;
        this.maxSpeed = 5;
        this.friction = 0.05; // Atrito = stop it from running too fast
        this.angle = 0;

        this.controls = new Controls();
    }

    update() {
        this.#move();
    }

    #move() {
        if(this.controls.forward)
            this.speed += this.acc;
        if(this.controls.backward)
            this.speed -= this.acc;
        

        // Left & Right rotate the car
        // angle > rotate instead of move diagonally
        if(this.controls.left && (this.controls.forward || this.speed > 0))
            this.angle += 0.02;
        if(this.controls.right && (this.controls.forward || this.speed > 0))
        this.angle -= 0.02;

        if(this.controls.left && (this.controls.backward || this.speed < 0))
            this.angle -= 0.02;
        if(this.controls.right && (this.controls.backward || this.speed < 0))
            this.angle += 0.02;

        // Speed control
        if(this.speed > this.maxSpeed)
            this.speed = this.maxSpeed;
        if(this.speed < -this.maxSpeed/1.5)
            this.speed = -this.maxSpeed/1.5;

        // Controling the friction (against movement)
        if(this.speed > 0)
            this.speed -= this.friction
        if(this.speed < 0)
            this.speed += this.friction;
        if(Math.abs(this.speed) <= this.friction) // to stop the car when we stop moving 
            this.speed = 0;

        // update position over time
        this.y -= Math.cos(this.angle) * this.speed; // scale cos (0-1) by the speed
        this.x -= Math.sin(this.angle) * this.speed;
    }

    draw(ctx) {
        // ! THIS PATH WILL BE REGARDING THE CAR ONLY
        ctx.save()
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle)

        ctx.beginPath(); // create a new drawing state node
        
        ctx.rect(- this.w/2, // no need to subtract the dims from x and y since we are translating to that point
                 -this.h/2,
                 this.w, this.h);

        ctx.fill(); // Fills the shape w/ black as default
        
        ctx.restore();
    }
}