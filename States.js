import {
	canvas,
	ctx,
	canvasWidth,
	canvasHeight,
	fieldSize,
	fieldPosX,
	fieldPosY,
	winningScore,
	framesTilNextRound
} from './Settings';


import {
	addPointTo, 
	displayScores, 
	displayWinner,
	displayRestart,
	displayStart
} from './Score';

import {
	drawNet,
	drawBackground
} from './Utils';

import {isPressedAny} from './Keyboarder';
import Game from './Game';
import Ball from './Ball';
import Pad from './Pad';


var framesElapsedSinceEndRound = 0;

var playerOne = 0;
var playerTwo = 0;
var winnerName = null;

const padOne = new Pad(ctx, fieldPosX+16, fieldPosY);
const padTwo = new Pad(ctx, fieldPosX+fieldSize-32, fieldPosY);

const ball = new Ball(
	ctx,
	canvasWidth/2 - 4,
	canvasHeight/2 - 4, 8
);

padOne.setKey('UP', 'A');
padOne.setKey('DOWN', 'Q');

padTwo.setKey('UP', 'P');
padTwo.setKey('DOWN', 'M');

export const GAME_START = 'GAME_START';
const GAME_END_ROUND = 'GAME_END_ROUND';
const GAME_START_ROUND = 'GAME_START_ROUND';
const GAME_PLAY = 'GAME_PLAY';
const GAME_OVER = 'GAME_OVER';

Game.addState(

	GAME_START,

	{
		'handleInputs': () => {
			if (isPressedAny()) {
				Game.setState(GAME_PLAY);
			}
		},

		'update': () => {
			Game.handleInputs();
		},

		'draw': () => {
			drawBackground();
			padOne.draw();
			padTwo.draw();
			displayScores(ctx, playerOne, playerTwo);
			displayStart(ctx);
		}
	}
);

Game.addState(

	GAME_PLAY, 

	{
		'update': () => {
			padOne.update();
			padTwo.update();
			ball.update();

			if (ball.collideWithRightWall()) {
				playerOne = addPointTo(playerOne);
				Game.setState(GAME_END_ROUND);
			}

			if (ball.collideWithLeftWall()) {
				playerTwo = addPointTo(playerTwo);
				Game.setState(GAME_END_ROUND);
			}

			if (ball.collideWith(padOne) ||
					ball.collideWith(padTwo)) {
				ball.changeDirection();
			}
		},
		'draw': () => {
			drawBackground();
			drawNet();
			padOne.draw();
			padTwo.draw();
			ball.draw();
			displayScores(ctx, playerOne, playerTwo);
		}
});

Game.addState(

	GAME_END_ROUND,

	{
		'update': () => {
			padOne.update();
			padTwo.update();

			framesElapsedSinceEndRound++;

			if (playerOne === winningScore ||
					playerTwo === winningScore) {
				winnerName = playerOne === winningScore ? 
												'Player ONE' :
												'Player TWO';

				return Game.setState(GAME_OVER);
			}

			if (framesElapsedSinceEndRound === framesTilNextRound) {
				framesElapsedSinceEndRound = 0;
				ball.reset();
				Game.setState(GAME_PLAY);
				Game.start();
			}
		},

		'draw': () => {
			drawBackground();
			drawNet();
			padOne.draw();
			padTwo.draw();
			displayScores(ctx, playerOne, playerTwo);
		}
	}
);

Game.addState(

	GAME_OVER,

	{
		'handleInputs': () => {
			if (isPressedAny()) {
				ball.reset();
				framesElapsedSinceEndRound = 0;
				playerOne = 0;
				playerTwo = 0;
				Game.setState(GAME_PLAY);
			}
		},

		'update': () => {
			if (framesElapsedSinceEndRound > framesTilNextRound) {
				Game.handleInputs();
			};

			framesElapsedSinceEndRound++;
		},

		'draw': () => {
			drawBackground()

			padOne.draw();
			padTwo.draw();
			displayScores(ctx, playerOne, playerTwo);
			displayWinner(ctx, winnerName);

			if (framesElapsedSinceEndRound > framesTilNextRound) {
				displayRestart(ctx);				
			}
		}
	}
);