
enchant();

var gs = {fps:30, height:320, width:320};

gs.assets = {};

var ga = {};

ga.background = {height:320, image:"./images/background.png", width:320};

ga.enemy = {height:16, image:"./images/icon1.png", width:16};

ga.fruit = {height:16, image:"./images/icon0.png", width:16};

ga.oo3 = {height:32, image:"./images/oo3.png", width:47};

var eSprite = enchant.Class.create(enchant.Sprite, {
	initialize:function(asset) {
		enchant.Sprite.call(this, asset.width, asset.height);
		this.image = game.assets[asset.image];
		game.currentScene.addChild(this);
	}
});

var Oo3 = enchant.Class.create(eSprite, {
	initialize:function() {
		eSprite.call(this, ga.oo3);
		this.x = (gs.width - this.width) /2;
		this.y = (gs.height - (this.height + 100));
		this.frame = [0, 0, 1, 1, 2, 2];
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
	initialize:function() {
		eSprite.call(this, ga.enemy);
		this.x = gs.width;
		this.y = Math.random() * (gs.height - this.height);
		this.frame = 0;
	}

	,onenterframe:function() {
		this.x -= 5;
		this.rotate(-5);

		if (this.x <= -32) {
			this.remove();
		}

		if (this.intersect(oo3)) {
			game.end();
			var retry = new Retry();
		}
	}
});

var Fruit = enchant.Class.create(eSprite, {
	initialize:function() {
		eSprite.call(this, ga.fruit);
		this.x = gs.width;
		this.y = Math.random() * (gs.height - this.height);
		this.frame = 28;
	}

	,onenterframe:function() {
		this.x -= 8;
		this.rotate(-5);

		if (this.x <= -16) {
			this.remove();
		}

		if (this.intersect(oo3)) {
			this.remove();
			game.score += 1;
			score.text = "score:" + game.score;
		}
	}
});

var Score = enchant.Class.create(enchant.Label, {
	initialize:function() {
		enchant.Label.call(this);
		this.y = 0;
		this.color = "black";
		this.font = "bold 16pt sans-serif";
		this.x = 0;
		this.text = "score:" + game.score;
		game.currentScene.addChild(this);
	}
});

var Retry = enchant.Class.create(enchant.Label, {
	initialize:function() {
		enchant.Label.call(this);
		this.color = "black";
		this.font = "bold 16pt sans-serif";
		this.text = "リトライ";
		this.textAlign = "center";
		this.y = 260;
		game.currentScene.addChild(this);
	}

	,ontouchend:function() {
		location.reload();
	}
});

// Pad用アセット
gs.assets.pad  = {path:"./pad.png"};
gs.assets.apad = {path:"./apad.png"};
gs.assets.font0 = {path:"./font0.png"};
gs.assets.icon0 = {path:"./icon0.png"};

// Game Pa
var ePad = enchant.Class.create(enchant.ui.Pad,{
	initialize:function(){
		enchant.ui.Pad.call(this);
		this.x = 0;
		this.y = 220;
	}
});

window.onload = function() {
	game = new Core(gs.width, gs.height);
	game.fps = gs.fps;
	game.preload(ga.oo3.image,
				 ga.background.image,
				 ga.enemy.image,
				 ga.fruit.image);
	stage = game.rootScene;

	game.onload = function() {

		game.score = 0;

		var background = new eSprite(ga.background);

		score = new Score();

		oo3 = new Oo3();

		stage.addChild(new ePad());

		var enemis = [];
		var fruits = [];
		stage.on('enterframe', function() {
			if (this.age % (gs.fps * 0.5) === 0) {
				enemis.push(new Enemy());
			}

			if (this.age % (gs.fps * 0.8) === 0) {
				fruits.push(new Fruit());
			}
		});
	};

	game.start();
};

