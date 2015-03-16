brainVita.MainMenu = function(game){};
brainVita.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'Mainmenu');
		// add the button that will start the game
		this.add.button(298, 235, 'start', this.GameScreen, this);
		this.add.button(298, 339, 'helpbutton', this.help, this);
		this.add.button(298, 457, 'highscorebutton', this.highscores, this);
	},
	/*startGame: function() {
		// start the Game state
		this.state.start('Game');
	}*/

	help:function(){
		this.state.start('helpscreen');
	},

	highscores:function()
	{
		this.state.start('Display_highscores');
	},
	GameScreen:function(){
		this.state.start('Game');
	},
	
};

