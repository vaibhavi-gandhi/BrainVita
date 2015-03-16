brainVita.Display_highscores = function(game){};
brainVita.Display_highscores.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'highscore');
		// add the button that will start the game
		this.add.button(297, 501, 'back', this.back, this);
		
	},
	back: function() {
		// start the Game state
		this.state.start('MainMenu');
	}
};