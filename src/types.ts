import type { Sprite, Container } from 'pixi.js';

export interface MySprite extends Sprite {
  id?: string;
}

export interface MyContainer extends Container {
  id?: string;
}
