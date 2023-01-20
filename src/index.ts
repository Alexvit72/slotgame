import { Application, Sprite, Assets } from 'pixi.js';
import { manifest } from '../static/manifest';
import { keyboardButtons } from './utils';

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

	function createSprite(button: {x: number, y: number}, key: string) {
		const sprite: Sprite = Sprite.from(textures.keys.keyboard.textures[`${key}.png`]);
		sprite.anchor.set(0.5);
		sprite.x = button.x;
		sprite.y = button.y;
		app.stage.addChild(sprite);
	}

	Object.entries(keyboardButtons).forEach(([key, button]) => {
		createSprite(button, key);
	});

});
