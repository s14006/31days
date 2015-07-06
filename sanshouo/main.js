enchant();

var gs = {fps:15, height:320, width:320};

var ga = {};
ga.oo3 = {
	height:32
	,image:"oo3.png"
	,width:47
};

var eSprite = enchant.Class.create(enchant.Sprite,{
	initialize:function(asset){
		enchant.Sprite.call(this,asset.width,asset.height);
		this.image = game.assets[asset.image];
		game.currentScene.addChild(this);
	}
});

var Oo3 = enchant.Class.create(eSprite,{
	initialize:function(frame,x,y) {
		eSprite.call(this,ga.oo3);
		this.frame = frame || 0;
		this.x = x || 0;
		this.y = y || 0;
	}
});


window.onload = function() {
	game = new Core(gs.width, gs.height);
	game.fps = gs.fps;
	game.preload(ga.oo3.image);
	stage = game.rootScene;

	game.onload = function() {

		var oo3 = new Oo3([0,1,2],100,100);
		
	};

	game.start();
};
