import { Container, Sprite, Texture } from 'pixi.js';


export function createKey(keyTextures: {[key: string]: Texture}, button: {x: number, y: number}, path: string) {

  const container = new Container();

  const base = Sprite.from(keyTextures[`${path}/${path}.png`]);
  base.zIndex = 4;

  const hover = Sprite.from(keyTextures[`${path}/${path}-hover.png`]);
  hover.zIndex = 3;

  const clicked = Sprite.from(keyTextures[`${path}/${path}-clicked.png`]);
  clicked.zIndex = 2;

  if (`${path}/${path}-disabled.png` in keyTextures) {
    const disabled = Sprite.from(keyTextures[`${path}/${path}-disabled.png`]);
    disabled.zIndex =  1;
    container.addChild(disabled);
  }

  container.addChild(clicked, hover, base);
  container.pivot.set(base.width / 2, base.height / 2);
  container.x = button.x;
  container.y = button.y;
  container.name = path;
  container.sortableChildren = true;
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
  container
    .on('pointerup', () => {
      hover.zIndex = 5;
      clicked.zIndex = 2;
    })
    .on('pointerupoutside', () => {
      hover.zIndex = 3;
      clicked.zIndex = 2;
    });

  return container;

};
