enchant();

var gs = {fps:30, height:320, width:320};

var ga = {};
ga.oo3 = {
	height:32
	,image:"oo3.png"
	,width:47
};
ga.kassha = {
	height:100
	,image:"kassha.png"
	,width:100
};
ga.dai = {
	height:80
	,image:"dai.png"
	,width:50
};

var eSprite = enchant.Class.create(enchant.Sprite,{
	initialize:function(asset) {
		enchant.Sprite.call(this,asset.width,asset.height);
		this.image = game.assets[asset.image];
		game.currentScene.addChild(this);
	}
});

var Oo3 = enchant.Class.create(eSprite,{
	initialize:function() {
		eSprite.call(this,ga.oo3);
		this.frame = [0, 0, 1, 1, 2, 2];
		this.x = 120;
		this.y = 220;
	}
});

var Kassha = enchant.Class.create(eSprite,{
	initialize:function() {
		eSprite.call(this,ga.kassha);
		this.x = 95;
		this.y = 157;
	}

	,onenterframe:function() {
		this.rotate(3);
	}
});

var Dai = enchant.Class.create(eSprite,{
	initialize:function() {
		eSprite.call(this,ga.dai);
		this.x = 120;
		this.y = 190;
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
	game.preload(ga.oo3.image,ga.kassha.image,ga.dai.image);
	stage = game.rootScene;

	game.onload = function() {

		var dai = new Dai();
		var kassha = new Kassha();
		var oo3 = new Oo3();

	};

	game.start();
};
