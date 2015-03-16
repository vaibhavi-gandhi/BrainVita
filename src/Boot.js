var brainVita = {};
brainVita.Boot = function(game){};
brainVita.Boot.prototype = {
	preload: function(){
		// preload the loading indicator first before anything else
		this.load.image('preloaderBar', 'img/loading_bar.png');
	},
	create: function(){
		// set scale options
		this.add.sprite(0, 0, 'background');
		this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.setScreenSize(true);
		// start the Preloader state
		this.state.start('preloader');
	}
};