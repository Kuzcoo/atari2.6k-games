import {
	canvasWidth,
	canvasHeight,
	fieldSize,
	fieldPosX,
	fieldPosY
} from './Settings';

const endFieldX = fieldPosX + fieldSize;
const endFieldY = fieldPosY + fieldSize;

class Ball {
	size = 4;
	color = '#fff';
	vel = {x: 1, y: 1};

	constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = fieldSize/2 - this.size/2 + fieldPosX;
		this.y = Math.round(Math.random()*fieldSize/2) + fieldPosY;
	}

	collideWith(pad) {
		return ((this.x + this.size >= pad.x && this.x + this.size <= pad.x + 8) &&
					 (this.y + this.size >= pad.y && this.y + this.size <= pad.y + 32)) ||
						((this.x >= pad.x && this.x <= pad.x + 8) &&
					 (this.y + this.size >= pad.y && this.y + this.size <= pad.y + 32));
	}

	changeDirection() {
		this.vel.x = -this.vel.x;
	}

	collideWithRightWall() {
		return this.x >= fieldPosX + fieldSize - this.size / 2;
	}

	collideWithLeftWall() {
		return this.x <= fieldPosX - this.size / 2;
	}

	checkBoundsCollision() {
		if (this.y <= fieldPosY - this.size/2 || this.y >= endFieldY - this.size/2) {
			this.vel.y = -this.vel.y;
		}
	}

	reset() {
		this.x = fieldSize/2 - this.size/2 + fieldPosX;
		this.y = Math.round(Math.random()*fieldSize/2) + fieldPosY;
		this.vel.x = -this.vel.x;
	}

	update() {
		this.checkBoundsCollision();
		this.x += this.vel.x;
		this.y += this.vel.y;
	}

	draw() {
		this.ctx.fillStyle = '#fff';

		this.ctx.fillRect(
			this.x, this.y,
			this.size, this.size
		);
	}
}

export default Ball;