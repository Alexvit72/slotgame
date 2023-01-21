import type { ResolverManifest } from 'pixi.js';

export const manifest: ResolverManifest = {
  bundles: [
    {
      name : "scene",
      assets: [
        {
          name: "panel",
          srcs: "panel_bg.png"
        },
        {
          name: "main_bg",
          srcs: "Rabbit Illusion/main/main_bg.png"
        },
        {
          name: "logo",
          srcs: "Rabbit Illusion/main/logo.png"
        },
      ],
    },
    {
      name : "keys",
      assets: [
        {
          name: "keyboard",
          srcs: "spritesheets/0_keyboard_new_with_folders.json"
        }
      ]
    },
  ]
}
