import { Text } from 'pixi.js';
import { MyText, TextData } from '../types';


export function createText(textData: TextData, path: string) {

  const text: MyText = new Text(textData.string, {
    fontFamily: 'bahnschrift',
    fontSize: textData.size,
    fontWeight: textData.weight,
    fill: textData.color,
    align: 'center'
  });

  text.anchor.set(0.5);
  text.x = textData.x;
  text.y = textData.y;
  text.id = path;

  return text;

};
