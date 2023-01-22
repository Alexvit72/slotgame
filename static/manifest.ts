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
        {
          name: "field",
          srcs: "Rabbit Illusion/main/field2.png"
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
    {
      name: "slots",
      assets: [
        {
          name: "slot_1",
          srcs: "Rabbit Illusion/slots/base/slot_1.png"
        },
        {
          name: "slot_1-1",
          srcs: "Rabbit Illusion/slots/base/slot_1-1.png"
        },
        {
          name: "slot_1-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_1-disabled.png"
        },
        {
          name: "slot_2",
          srcs: "Rabbit Illusion/slots/base/slot_2.png"
        },
        {
          name: "slot_2-1",
          srcs: "Rabbit Illusion/slots/base/slot_2-1.png"
        },
        {
          name: "slot_2-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_2-disabled.png"
        },
        {
          name: "slot_3",
          srcs: "Rabbit Illusion/slots/base/slot_3.png"
        },
        {
          name: "slot_3-1",
          srcs: "Rabbit Illusion/slots/base/slot_3-1.png"
        },
        {
          name: "slot_3-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_3-disabled.png"
        },
        {
          name: "slot_4",
          srcs: "Rabbit Illusion/slots/base/slot_4.png"
        },
        {
          name: "slot_4-1",
          srcs: "Rabbit Illusion/slots/base/slot_4-1.png"
        },
        {
          name: "slot_4-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_4-disabled.png"
        },
        {
          name: "slot_5",
          srcs: "Rabbit Illusion/slots/base/slot_5.png"
        },
        {
          name: "slot_5-1",
          srcs: "Rabbit Illusion/slots/base/slot_5-1.png"
        },
        {
          name: "slot_5-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_5-disabled.png"
        },
        {
          name: "slot_6",
          srcs: "Rabbit Illusion/slots/base/slot_6.png"
        },
        {
          name: "slot_6-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_6-disabled.png"
        },
        {
          name: "slot_7",
          srcs: "Rabbit Illusion/slots/base/slot_7.png"
        },
        {
          name: "slot_7-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_7-disabled.png"
        },
        {
          name: "slot_8",
          srcs: "Rabbit Illusion/slots/base/slot_8.png"
        },
        {
          name: "slot_8-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_8-disabled.png"
        },
        {
          name: "slot_9",
          srcs: "Rabbit Illusion/slots/base/slot_9.png"
        },
        {
          name: "slot_9-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_9-disabled.png"
        },
        {
          name: "slot_10",
          srcs: "Rabbit Illusion/slots/base/slot_free10.png"
        },
        {
          name: "slot_10-disabled",
          srcs: "Rabbit Illusion/slots/base/slot_free10-disabled.png"
        },
      ]
    },
    {
      name: "fonts",
      assets: {
        "bahnschrift": "font/bahnschrift.ttf"
      }
    }
  ]
}
