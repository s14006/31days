enchant();

var gs = {fps:30, height:320, width:320};

var ga = {};

ga.background = {height:320, image:"background.png", width:320};

ga.pool = {height:120, image:"pool.png", width:140};

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

var Pool = enchant.Class.create(eSprite, {
	initialize:function() {
		eSprite.call(this, ga.pool);
		this.x = gs.width - this.width;
		this.y = gs.height - this.height - 25;
	}
});

var Oo3 = enchant.Class.create(eSprite,{
	initialize:function(x, y) {
		eSprite.call(this, ga.oo3);
		this.x = 70;
		this.y = 200;
	}

	,onenterframe:function() {
		if (game.input.right) { 
			this.x = 250;
			this.y = 210;
			this.frame = [3, 3, 3, 3, 4, 4, 4, 4];
		}
		else if (game.input.left || game.input.down) {
			this.x = 70;
			this.y = 200;
			this.frame = 0;
		}
		else if (game.input.up) {
			this.x = 68;
			this.y = 120;
			this.frame = [0, 0, 1, 1, 2, 2];
		};
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
		this.y = 35 + y;
	}
});

var Pulley = enchant.Class.create({
	initialize:function(x, y) {
		var group = new Group();
		group.addChild(new PulleyStand(x, y));
		group.addChild(new PulleyBody(x, y));

		stage.addChild(group);
	}

});


/* 今回は使わなかった(´・ω・｀)
var Player = enchant.Class.create(Oo3,{
	initialize:function() {
		Oo3.call(this);
	}

	
});

*/


window.onload = function() {
	game = new Core(gs.width, gs.height);
	game.fps = gs.fps;
	game.preload(ga.background.image, ga.pool.image, ga.oo3.image, ga.pulleyBody.image, ga.stand.image);
	stage = game.rootScene;

	game.onload = function() {
		var backgrund = new eSprite(ga.background);

		var	pool = new Pool();

		var pulley = new Pulley(43, 56);

		var oo3 = new Oo3();


	};

	game.start();
};
