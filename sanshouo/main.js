enchant();

var gs = {fps:30, height:320, width:320};

var ga = {};

ga.background = {height:320, image:"background.png", width:320};

ga.oo3 = {height:32, image:"oo3.png", width:47};

ga.pulleyBody = {height:100, image:"pulley.png", width:100};

ga.stand = {height:80, image:"stand.png", width:50};

var eSprite = enchant.Class.create(enchant.Sprite, {
	initialize:function(asset) {
		enchant.Sprite.call(this, asset.width, asset.height);
		this.image = game.assets[asset.image];
		game.currentScene.addChild(this);
	}
});

var Oo3 = enchant.Class.create(eSprite,{
	initialize:function(x, y) {
		eSprite.call(this, ga.oo3);
		this.frame = [0, 0, 1, 1, 2, 2];
		this.x = 0 || x;
		this.y = 0 || y;
	}
});

var PulleyBody = enchant.Class.create(eSprite, {
	initialize:function(x, y) {
		eSprite.call(this, ga.pulleyBody);
		this.x = 0 || x;
		this.y = 0 || y;
	}

	,onenterframe:function() {
		this.rotate(3);
	}
});

var PulleyStand = enchant.Class.create(eSprite,{
	initialize:function(x, y) {
		eSprite.call(this,ga.stand);
		this.x = 25 + x;
		this.y = 40 + y;
	}
});

var Pulley = enchant.Class.create({
	initialize:function(x, y) {
		var group = new Group();
		group.addChild(new PulleyStand(x, y));
		group.addChild(new PulleyBody(x, y));

		node = group;

		stage.addChild(group);
	}
});


/* 今回は使わなかった(´・ω・｀)
var Player = enchant.Class.create(Oo3,{
	initialize:function() {
		Oo3.call(this);
	}

	,onenterframe:function() {
		if (game.input.right) this.x += 4;
		if (game.input.left) this.x -= 4;
		if (game.input.up) this.y -= 4;
		if (this.x <= -4) this.x += 4;
		if (this.x >= 276) this.x -= 4;
	}
});

*/


window.onload = function() {
	game = new Core(gs.width, gs.height);
	game.fps = gs.fps;
	game.preload(ga.background.image, ga.oo3.image, ga.pulleyBody.image, ga.stand.image);
	stage = game.rootScene;

	game.onload = function() {

		var backgrund = new eSprite(ga.background);

		var pulley = new Pulley(43, 56);

		var oo3 = new Oo3(70, 120);

	};

	game.start();
};
