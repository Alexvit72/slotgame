import { Container, Sprite, Texture } from 'pixi.js';


export function createField(texture: Texture, x: number, y: number) {

  const container = new Container();

  const field = Sprite.from(texture);

  container.addChild(field);
  container.pivot.set(field.width / 2, field.height / 2);
  container.x = x;
  container.y = y;
  container.name = 'field_full';

  return container;

};
