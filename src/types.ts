import type { Sprite, Container, Text, TextStyleFontWeight } from 'pixi.js';

export interface MySprite extends Sprite {
  id?: string;
}

export interface MyContainer extends Container {
  id?: string;
}

export interface MyText extends Text {
  id?: string;
}

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
