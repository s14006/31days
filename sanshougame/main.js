enchant();

var gs = {fps:30, height:320, width:320};

window.onload = function() {
	game = new Core(gs.width, gs.height);
	game.fps = gs.fps;
	stage = game.rootScene;

	game.onload = function() {


	};

	game.start();
};