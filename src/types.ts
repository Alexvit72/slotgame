import type { TextStyleFontWeight } from 'pixi.js';

export type KeyboardButtons = {
  [key: string]: {x: number, y: number}
}

export type TextData = {
  x: number,
  y: number,
  string: string,
  size: number,
  weight: TextStyleFontWeight,
  color: string
}

export type Texts = {
  [key: string]: TextData
}
