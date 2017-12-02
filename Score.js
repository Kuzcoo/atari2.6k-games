import {
	fieldPosX,
	fieldPosY,
	fieldSize
} from './Settings';

const fieldCenter = fieldPosX + fieldSize/2;

export const addPointTo = (player) =>{
	return player + 1;
};

export const displayScores = (ctx, playerOne, playerTwo) => {
	ctx.font = '48px bit5x3';
	ctx.textAlign='center';
	ctx.fillText(playerOne, fieldCenter - 48, fieldPosY+48);
	ctx.fillText(playerTwo, fieldCenter + 48, fieldPosY+48);
};

export const displayWinner = (ctx, winnerName) => {
	ctx.font = '18px bit5x3';
	ctx.textAlign='center';
	ctx.fillText(winnerName + ' won the game !', fieldCenter, fieldPosY + fieldSize/2 - 16);
};

export const displayRestart = (ctx) => {
	ctx.fillText('PRESS ANY KEY', fieldCenter, fieldPosY + fieldSize/2 + 9);
	ctx.fillText('TO PLAY', fieldCenter, fieldPosY + fieldSize/2 + 27);
};

export const displayStart = (ctx) => {
	ctx.font = '18px bit5x3';
	ctx.textAlign='center';
	ctx.fillText('PRESS ANY KEY', fieldCenter, fieldPosY + fieldSize/2 + 9);
	ctx.fillText('TO PLAY', fieldCenter, fieldPosY + fieldSize/2 + 27);
};