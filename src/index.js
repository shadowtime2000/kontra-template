import { init, Sprite, GameLoop } from 'kontra';

import MovingBox from './sprites/MovingBox'

let { canvas } = init();

let movingBox = MovingBox(Sprite);

let loop = GameLoop({
  update: function() {
    movingBox.update();

    if (movingBox.x > canvas.width) {
      movingBox.x = -movingBox.width;
    }
  },
  render: function() {
    movingBox.render();
  }
});

loop.start();