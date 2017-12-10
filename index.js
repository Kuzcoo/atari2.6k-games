import {
	canvasWidth,
	canvasHeight
} from './Settings';

import {
	setCanvasSize,
	background
} from './Utils';

import {GAME_START} from './States';
import Game from './Game';
import {init as initKeyBoarder} from './Keyboarder';


setCanvasSize(canvas, canvasWidth, canvasHeight);
initKeyBoarder();

//
Game.setState(GAME_START);
Game.start();