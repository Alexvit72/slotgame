//import * as PIXI from 'pixi.js';
import { Application, Sprite, Container, Assets, Graphics } from 'pixi.js';
import { manifest } from '../static/manifest';
import { keyboardButtons, texts } from './utils';
import { createKey } from './creators/key';
import { createLine } from './creators/line';
import { createText } from './creators/text';

//window.PIXI = PIXI;
let starts: { [key: string]: boolean } = {
	reel_1: false,
	reel_2: false,
	reel_3: false,
	reel_4: false,
	reel_5: false
};
let line = '';
let bet = '1';
let balance = '';
let free_games = 0;
let denomination = 1;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	width: 2840,
	height: 2160
});

async function initializeLoader(): Promise<any> {
    await Assets.init({ manifest: manifest });
    const bundleIds =  manifest.bundles.map(bundle => bundle.name);
    const assets = await Assets.loadBundle(bundleIds);
		return assets;
}

initializeLoader().then((textures) => {
	console.log('textures', textures);
	const panel = Sprite.from(textures.scene.panel);

	const main_bg = Sprite.from(textures.scene.main_bg);
	main_bg.scale.set(0.8);
	main_bg.anchor.set(0.5, 0);
	main_bg.x = app.screen.width / 2;

	const logo = Sprite.from(textures.scene.logo);
	logo.scale.set(0.8);
	logo.anchor.set(0.5, 0);
	logo.x = app.screen.width / 2;
	logo.y = 135;

	const field_full = new Container();
  const field = Sprite.from(textures.scene.field);
  field_full.addChild(field);
  field.anchor.set(0.5);
	field.scale.set(0.82);
  field.x = app.screen.width / 2;
  field.y = 1014;

	const mask = new Graphics();
	app.stage.addChild(mask);
	mask.x = field.x;
	mask.y = field.y;
	mask.lineStyle(0);
	mask.beginFill(0x000000);
	mask.drawRect(-field.width / 2, -field.height / 2 + 3, field.width, field.height - 3);
	mask.endFill();
	field_full.mask = mask;

	for (let i = 1; i <= 5; i++) {
		const reel = new Container();
	  reel.name = `reel_${i}`;
		field_full.addChild(reel);
		let x: number = 1;
		switch(i) {
			case 1:
				x = 636;
				break;
			case 2:
				x = 1031;
				break;
			case 3:
				x = 1420;
				break;
			case 4:
				x = 1814;
				break;
			case 5:
				x = 2205;
				break;
		}

		app.ticker.add((delta) => {
			if(starts[`${reel.name}`]) {
				reel.children.forEach((child) => {
					//console.log('child', child);
					child.y += (80 - delta);
					if(child.y > 1814) {
						child.destroy();
						const newSlot = Sprite.from(textures.slots[`slot_${Math.floor(1 + Math.random() * 10)}`]);
						newSlot.scale.set(0.8);
						newSlot.anchor.set(0.5);
						newSlot.x = x;
						newSlot.y = -575;
						reel.addChildAt(newSlot, 0);
					}
				});
			}
		});

		for (let j = 1; j <= 6; j++) {
			const slot = Sprite.from(textures.slots[`slot_${Math.floor(1 + Math.random() * 10)}`]);
			slot.scale.set(0.8);
			slot.anchor.set(0.5);
			slot.x = x;
			switch(j) {
				case 1:
					slot.y = -575;
					break;
				case 2:
					slot.y = -175;
					break;
				case 3:
					slot.y = 220;
					break;
				case 4:
					slot.y = 618;
					break;
				case 5:
					slot.y = 1013;
					break;
				case 6:
					slot.y = 1414;
					break;
			}
			reel.addChild(slot);
		}
	}

	app.stage.addChild(main_bg, logo, field_full, panel);

	const linesContainer = new Container();
	app.stage.addChild(linesContainer);
	const keyTextures = textures.keys.keyboard.textures;
	for (let [key, coord] of Object.entries(keyboardButtons)) {
		if (key.startsWith('line_')) {
			linesContainer.addChild(createLine(keyTextures, coord, key))
		} else {
			app.stage.addChild(createKey(keyTextures, coord, key))
		}
	}

	for (let child of linesContainer.children) {
		child.on('pointerdown', () => {
			linesContainer.children.forEach((child) => {
				child.getChildByName('on').visible = false;
			});
			child.getChildByName('on').visible = true;
			line = child.name[child.name.length - 1];
		});
	}

	app.stage.getChildByName('btn_start').on('pointerdown', () => {
		let i = 1;
		for (let key in starts) {
			starts[key] = true;
			setTimeout(() => {
				starts[key] = false;
			}, (i++) * 5000);
		}
	});

	for (let [key, textData] of Object.entries(texts)) {
		app.stage.addChild(createText(textData, key));
	}

});
