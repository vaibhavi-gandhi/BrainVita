brainVita.preloader = function(game){
	// define width and height of the game
	brainVita.GAME_WIDTH = 800;
	brainVita.GAME_HEIGHT = 600;
};
brainVita.preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((brainVita.GAME_WIDTH-311)/2, (brainVita.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('background', 'img/background.png');
		this.load.image('Mainmenu', 'img/Mainmenu.png');
		this.load.image('start', 'img/start.png');
		this.load.image('highscorebutton', 'img/highscorebutton.png');
		this.load.image('helpbutton', 'img/helpbutton.png');
		this.load.image('helpscreen', 'img/helpscreen.png');
		this.load.image('highscore', 'img/highscore.png');
		this.load.image('back','img/back.png');
		this.load.image('board','img/board.png');
		this.load.image('marble','img/marble.png');
		// load spritesheets
		
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};