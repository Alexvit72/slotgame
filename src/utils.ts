import { KeyboardButtons } from './types';
import { Texts } from './types';

export const keyboardButtons: KeyboardButtons = {
  btn_plus: {x: 700, y: 132},
  btn_minus: {x: 207, y: 132},
  btn_info: {x: 68, y: 1781},
  btn_min: {x: 218, y: 1931},
  btn_max: {x: 218, y: 2048},
  line_1: {x: 628, y: 2001},
  line_3: {x: 1028, y: 2001},
  line_5: {x: 1425, y: 2001},
  line_7: {x: 1821, y: 2001},
  line_9: {x: 2217, y: 2001},
  btn_start: {x: 2646, y: 1988},
  btn_auto: {x: 2786, y: 1706}
};

export const texts: Texts = {
  denomination: {
    x: 453, y: 52,
    string: 'Деноминация',
    size: 41,
    weight: 'normal',
    color: '#ffffff'
  },
  free_games: {
    x: 2384, y: 48,
    string: 'Бесплатные игры',
    size: 41,
    weight: 'normal',
    color: '#ffffff'
  },
  balance: {
    x: 453, y: 1667,
    string: 'Баланс',
    size: 65,
    weight: 'normal',
    color: '#ffffff'
  },
  bet: {
    x: 2285, y: 1667,
    string: 'Ставка',
    size: 65,
    weight: 'normal',
    color: '#ffffff'
  }
};
