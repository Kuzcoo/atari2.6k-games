import {setKey, isPressed} from './Keyboarder';

@setKey

class Pad {
  width = 8;
  height= 32;
  color = '#fff';
  velocity = 4;
  keyUp = null;
  keyDown = null;

  constructor(context, x, y) {
    this.ctx = context;
    this.x = x;
    this.y = y;
  }

  handleInputs() {
    if (isPressed(this.keyUp)) {
      this.y -= this.velocity;
    }

    if (isPressed(this.keyDown)) {
      this.y += this.velocity;
    }
  }

  update() {
    this.handleInputs();
  }

  draw() {
    this.ctx.fillStyle = this.color;

    this.ctx.fillRect(
      this.x, this.y, 
      this.width, this.height
    );
  }
}

export default Pad;