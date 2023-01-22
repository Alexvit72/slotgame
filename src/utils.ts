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
  denomination_count: {
    x: 453, y: 132,
    string: '1.5',
    size: 55,
    weight: 'normal',
    color: '#000000'
  },
  bronze: {
    x: 980, y: 91,
    string: '1100',
    size: 45,
    weight: 'normal',
    color: '#ffffff'
  },
  silver: {
    x: 1295, y: 91,
    string: '2500',
    size: 45,
    weight: 'normal',
    color: '#ffffff'
  },
  gold: {
    x: 1607, y: 91,
    string: '3600',
    size: 45,
    weight: 'normal',
    color: '#ffffff'
  },
  diamond: {
    x: 1920, y: 91,
    string: '7900',
    size: 45,
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
  free_games_count: {
    x: 2384, y: 132,
    string: '0 / 0',
    size: 65,
    weight: 'bold',
    color: '#ffcc00'
  },
  balance: {
    x: 453, y: 1667,
    string: 'Баланс',
    size: 65,
    weight: 'normal',
    color: '#ffffff'
  },
  balance_count: {
    x: 453, y: 1781,
    string: '100500',
    size: 86,
    weight: 'normal',
    color: '#ffcc00'
  },
  bet: {
    x: 2285, y: 1667,
    string: 'Ставка',
    size: 65,
    weight: 'normal',
    color: '#ffffff'
  },
  bet_count: {
    x: 2285, y: 1781,
    string: '5',
    size: 110,
    weight: 'normal',
    color: '#ffcc00'
  },
  title: {
    x: 1420, y: 1753,
    string: 'Сделайте ставку!',
    size: 65,
    weight: 'normal',
    color: '#ffffff'
  },
};
