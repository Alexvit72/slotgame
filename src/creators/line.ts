import { Container, Sprite, Texture } from 'pixi.js';


export function createLine(keyTextures: {[key: string]: Texture}, button: {x: number, y: number}, path: string) {

  const off = Sprite.from(keyTextures[`${path}/${path}.png`]);

  const on = Sprite.from(keyTextures[`${path}/${path}-on.png`]);
  on.visible = false;

  const container = new Container();
  container.pivot.set(off.width / 2, off.height / 2);
  container.x = button.x;
  container.y = button.y;
  container.name = path;
  container.addChild(on, off);
  container.interactive = true;
  container.cursor = 'pointer';
  container.on('pointerdown', () => {
    on.visible = true;
  });

  return container;

};
