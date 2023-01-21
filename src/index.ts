import { Application, Sprite, Assets } from 'pixi.js';
import { manifest } from '../static/manifest';
import { keyboardButtons, texts } from './utils';
import { createKey } from './creators/key';
import { createLine } from './creators/line';
import { createText } from './creators/text';

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
	const panel: Sprite = Sprite.from(textures.scene.panel);

	const main_bg: Sprite = Sprite.from(textures.scene.main_bg);
	main_bg.anchor.set(0.5, 0);
	main_bg.x = app.screen.width / 2;

	const logo: Sprite = Sprite.from(textures.scene.logo);
	logo.anchor.set(0.5, 0);
	logo.x = app.screen.width / 2;
	logo.y = 125;

	app.stage.addChild(main_bg, logo, panel);

	const keyTextures = textures.keys.keyboard.textures;
	for (let [key, coord] of Object.entries(keyboardButtons)) {
		if (key.startsWith('line_')) {
			app.stage.addChild(createLine(keyTextures, coord, key))
		} else {
			app.stage.addChild(createKey(keyTextures, coord, key))
		}
	}

	for (let [key, textData] of Object.entries(texts)) {
		app.stage.addChild(createText(textData, key));
	}

});
