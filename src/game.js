import Phaser from 'phaser';
import Scene1 from './Scene1';
import Scene2 from './Scene2';

export const CONFIG = {
  width: 256,
  height: 272,
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  parent: null,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.NO_CENTER,
  },
  autoRound: false
};

export const GAME_SETTINGS = {
  playerSpeed: 200,
};

window.onload = () => {
  const game = new Phaser.Game(CONFIG);
};
