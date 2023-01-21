import { Container, Sprite, Texture } from 'pixi.js';
import { MySprite, MyContainer } from '../types';


export function createKey(keyTextures: {[key: string]: Texture}, button: {x: number, y: number}, key: string) {

  const base: MySprite = Sprite.from(keyTextures[`${key}/${key}.png`]);
  base.zIndex = 4;

  const hover: MySprite = Sprite.from(keyTextures[`${key}/${key}-hover.png`]);
  hover.zIndex = 3;

  const clicked: MySprite = Sprite.from(keyTextures[`${key}/${key}-clicked.png`]);
  clicked.zIndex = 2;

  const disabled: MySprite = Sprite.from(keyTextures[`${key}/${key}-disabled.png`]);
  disabled.zIndex =  1;

  const container: MyContainer = new Container();
  container.pivot.set(base.width / 2, base.height / 2);
  container.x = button.x;
  container.y = button.y;
  container.id = key;
  container.sortableChildren = true;
  container.addChild(disabled, clicked, hover, base);
  console.log('container.children', container.children);

  container.interactive = true;
  container.cursor = 'pointer';
  container.on('pointerover', () => {
    hover.zIndex = 5;
  });
  container.on('pointerout', () => {
    hover.zIndex = 3;
  });
  container.on('pointerdown', () => {
    hover.zIndex = 3;
    clicked.zIndex = 5;
  });
  container.on('pointerup', () => {
    hover.zIndex = 5;
    clicked.zIndex = 2;
  });

  return container;

};
