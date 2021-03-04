const browserManager = require('wdio-lettuce/lib/browserManager');
const config = require('../../config/config.json');
const time = config["time"];

let dragAndDropPage = class dragAndDropPage {

	test() {

		const ACTION_BUTTON = 0;
		const duration = 10;

		browserManager.maximize();
		browserManager.deleteCookies();

		browserManager.navigateTo("http://the-internet.herokuapp.com/drag_and_drop");

		let box1 = "#column-a";
		let box2 = "#column-b";
		let elementSource = $(box1);
		let elementTarget = $(box2);

		let source = elementSource.getLocation();
		let target = elementTarget.getLocation();
		console.log(source); // outputs: { x: 150, y: 20 }
		console.log(target); // outputs: { x: 150, y: 20 }

		let sourceX = elementSource.getLocation('x');
		console.log("Coordenada de origen x: " + sourceX); // outputs: 150

		let sourceY = elementSource.getLocation('y');
		console.log("Coordenada de origen y: " + sourceY); // outputs: 20

		let targetX = elementTarget.getLocation('x');
		console.log("Coordenada de destino x: " + targetX); // outputs: 150

		let targetY = elementTarget.getLocation('y');
		console.log("Coordenada de destino y: " + targetY); // outputs: 20

		// browser.debug();

		browser.performActions([{
			type: 'pointer',
			id: 'finger1',
			parameters: { pointerType: 'mouse' },
			actions: [
				{ type: 'pointerMove', duration: 0, x: parseInt(sourceX), y: parseInt(sourceY) },
				{ type: 'pointerDown', button: ACTION_BUTTON },
				{ type: 'pause', duration: 10 },
				{ type: 'pointerMove', duration, origin: 'pointer', x: parseInt(targetX), y: parseInt(targetY) },
				{ type: 'pointerUp', button: ACTION_BUTTON }
			]
		}])

		// browser.debug();
	}
}
module.exports = new dragAndDropPage();