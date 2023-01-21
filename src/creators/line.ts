import { Container, Sprite, Texture } from 'pixi.js';
import { MySprite, MyContainer } from '../types';


export function createLine(keyTextures: {[key: string]: Texture}, button: {x: number, y: number}, path: string) {

  const off: MySprite = Sprite.from(keyTextures[`${path}/${path}.png`]);

  const on: MySprite = Sprite.from(keyTextures[`${path}/${path}-on.png`]);
  on.visible = false;

  const container: MyContainer = new Container();
  container.pivot.set(off.width / 2, off.height / 2);
  container.x = button.x;
  container.y = button.y;
  container.id = path;
  container.addChild(on, off);
  container.interactive = true;
  container.cursor = 'pointer';
  container.on('pointerdown', () => {
    on.visible = true;
  });

  return container;

};
