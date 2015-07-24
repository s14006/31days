enchant();

var gs = {fps:30, height:320, width:320};

var ga = {};

ga.background = {height:320, image:"./images/background.png", width:320};

ga.oo3 = {height:32, image:"./images/oo3.png", width:47};

var eSprite = enchant.Class.create(enchant.Sprite, {
	initialize:function(asset) {
		enchant.Sprite.call(this, asset.width, asset.height);
		this.image = game.assets[asset.image];
		game.currentScene.addChild(this);
	}
});

var BGimage = enchant.Class.create(eSprite, {
	initialize:function() {
		eSprite.call(this, ga.background);
	}
});

var Oo3 = enchant.Class.create(eSprite, {
	initialize:function() {
		eSprite.call(this, ga.oo3);
		this.x = (gs.width - this.width) /2;
		this.y = (gs.height - (this.height + 100));
		this.frame = 1;
	}

	,onenterframe:function() {
		if (game.input.up) {
			this.y -= 2;
			if (this.y <= 0) {
				this.y += 2;
			}
		}

		else if (game.input.down) {
			this.y += 2;
			if (this.y >= gs.height - this.height) {
				this.y -= 2;
			}
		}

		else if (game.input.left) {
			this.x -= 3;
			this.scaleX = -1;
			if (this.x <= 0) {
				this.x += 3;
			}
		}

		else if (game.input.right){
			this.x += 3;
			this.scaleX = 1;
			if (this.x >= gs.width - this.width) {
				this.x -= 3;
			}
		}
	}
});

var Enemy = enchant.Class.create(eSprite, {

});

window.onload = function() {
	game = new Core(gs.width, gs.height);
	game.fps = gs.fps;
	game.preload(ga.oo3.image, ga.background.image);
	stage = game.rootScene;

	game.onload = function() {

		var background = new BGimage();

		var oo3 = new Oo3();
	};

	game.start();
};