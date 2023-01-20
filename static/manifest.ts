import type { ResolverManifest } from 'pixi.js';

export const manifest: ResolverManifest = {
  bundles: [
    {
      name : "scene",
      assets: {
        "panel" : "panel_bg.png",
        "main_bg" : "Rabbit Illusion/main/main_bg.png",
        "logo" : "Rabbit Illusion/main/logo.png",
      }
    },
    {
      name : "keys",
      assets: {
        "keyboard" : "spritesheets/0_keyboard_new.json",
      }
    },
  ]
}
