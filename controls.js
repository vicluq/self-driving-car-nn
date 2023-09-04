class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.backward = false;

        this.#addKbdListeners();
    }

    // Private method to add the keyboard listeners to keys
    #addKbdListeners() {
        // When pressing the key, start moving
        document.onkeydown = (e) => {
            switch(e.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.backward = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
            }

            console.table(this); // debug
        }

        // When we realease the key, stop moving
        document.onkeyup = (e) => {
            switch(e.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.backward = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
            }

            console.table(this); // debug
        }
    }
}