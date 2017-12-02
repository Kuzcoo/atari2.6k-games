var keyPressed = {};

export const KEY = {
	'A': 65,
	'Q': 81,
	'P': 80,
	'M': 77
};

export const isPressed = keyCode => {
	return keyPressed[keyCode];
};

export const isPressedAny = () => {
	return [].filter.call(
			Object.keys(keyPressed), 
			key => keyPressed[key] === true
		).length > 0;
};

export const setKey = target => {
	target.prototype.setKey = function (type, keyName) {
		switch (type) {
			case 'UP':
				this.keyUp = KEY[keyName];
			break;
			case 'DOWN':
				this.keyDown = KEY[keyName];
			break;
		}
	};
};

export const init = () => {
	window.addEventListener('keydown', e => {
		keyPressed[e.keyCode] = true;
	});

	window.addEventListener('keyup', e => {
		keyPressed[e.keyCode] = false;
	});
};