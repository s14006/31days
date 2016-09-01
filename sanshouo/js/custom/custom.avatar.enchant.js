eavatar = {};
eavatar.loadImages = function(){
 return Array.prototype.concat(eavatar.monster.loadImages(),eavatar.background.loadImages());
};

var custom_avatar_image_path = "../images/";

eavatar.background = {
  desert:0,field:1,dungeon:2,lake:3
  ,images:[
     custom_avatar_image_path + "avatarBg1.png"
    ,custom_avatar_image_path + "avatarBg2.png"
    ,custom_avatar_image_path + "avatarBg3.png"
  ]
  ,loadImages:function(){
    return this.images;
  }
};

eavatar.monster = {
  images:[
     {dragon:custom_avatar_image_path + "monster/bigmonster1.gif"}
    ,{minotaur:custom_avatar_image_path + "monster/bigmonster2.gif"}
    ,{monster1:custom_avatar_image_path + "monster/monster1.gif"}
    ,{monster2:custom_avatar_image_path + "monster/monster2.gif"}
    ,{monster3:custom_avatar_image_path + "monster/monster3.gif"}
    ,{monster4:custom_avatar_image_path + "monster/monster4.gif"}
    ,{monster5:custom_avatar_image_path + "monster/monster5.gif"}
    ,{monster6:custom_avatar_image_path + "monster/monster6.gif"}
    ,{monster7:custom_avatar_image_path + "monster/monster7.gif"}
  ]
  ,getImage:function(key){
    return this.images[key];
  }
  ,loadImage:function(index){
    for (var key in this.images[index])
      return (this.images[index][key]);
  }
  ,loadImages:function(){
    var result = [];
    for (var index = 0; index < this.images.length; index++)
        result.push(this.loadImage(index));
    return result;
  }
  ,getRandom:function(){
    return this.loadImage(Generator.number(this.images.length));
  }
};


eAvatarDemo = enchant.Class.create(enchant.avatar.Avatar,{
  initialize:function(code,x,y){
    enchant.avatar.Avatar.call(this,code);
    this.x = x || 0;
    this.y = y || 0;
    this.age = 0;
    this.action = "demo";
    game.currentScene.addChild(this);
  }
});

eAvatarMonsterDemo = enchant.Class.create(enchant.avatar.AvatarMonster,{
  initialize:function(asset,x,y){
    enchant.avatar.AvatarMonster.call(this,game.assets[asset]);
    this.x = x || 0;
    this.y = y || 0;
    this.age = 0;
    game.currentScene.addChild(this);
  }
});

eAvatarBGDemo = enchant.Class.create(enchant.avatar.AvatarBG,{
  initialize:function(mode){
    enchant.avatar.AvatarBG.call(this,mode);
    this.age =0;
    this.y = 40;
    game.currentScene.addChild(this);
  },
  onenterframe:function(){
    this.scroll(this.age * 2);
  }
});


