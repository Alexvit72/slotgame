import { Text } from 'pixi.js';
import { TextData } from '../types';


export function createText(textData: TextData, path: string) {

  const text = new Text(textData.string.toUpperCase(), {
    fontFamily: 'bahnschrift',
    fontSize: textData.size,
    fontWeight: textData.weight,
    fill: textData.color,
    align: 'center'
  });

  text.anchor.set(0.5);
  text.x = textData.x;
  text.y = textData.y;
  text.name = path;

  return text;

};
