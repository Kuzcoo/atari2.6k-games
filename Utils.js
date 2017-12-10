import {
  ctx,
  canvasWidth,
  canvasHeight,
  fieldPosX,
  fieldPosY,
  fieldSize
} from './Settings';

export const setCanvasSize = (canvas, width, height=width) => {
  canvas.width = width;
  canvas.height = height;
}

export const background = (ctx, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
};

export const drawNet = () => {
  ctx.strokeStyle = '#fff';
  ctx.strokeRect(fieldPosX + fieldSize/2 - 1, fieldPosY, 1, fieldSize);
};

export const drawBackground = () => {
  background(ctx, canvasWidth, canvasHeight, 'black');
}