'use strict';
/*
 * second.mjs
 */
import {Canvas} from './modules/canvas.js';
import {$, animate} from './modules/nQuery.js';
import {Rect, Circle} from './modules/shape.js';

let things = [];
let startStop;
const MILLISECS = 25;

let cv = Object.create(Canvas);
cv.init('mycv', 'silver');

let disk = Object.create(Circle);
disk.init(cv, 20, 380, 10, 0, Math.PI*2, 'red', false);
things.push(disk);

animate(things, startStop, MILLISECS);