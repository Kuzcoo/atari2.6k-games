export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;
export const fieldSize = 512;
export const fieldPosX = canvasWidth/2 - fieldSize/2;
export const fieldPosY = canvasHeight/2 - fieldSize/2;

export const winningScore = 11;
export const framesTilNextRound = 180;