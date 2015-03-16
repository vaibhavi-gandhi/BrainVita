brainVita.helpscreen = function(game){};
brainVita.helpscreen.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'helpscreen');
		// add the button that will start the game
		this.add.button(285, 480, 'back', this.back, this);
		
	},
	back: function() {
		// start the Game state
		this.state.start('MainMenu');
	}

	};