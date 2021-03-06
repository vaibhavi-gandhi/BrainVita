brainVita.Game = function(game){
    this. moves = 0;
	this.lEdge = 2;
	this.rEdge = 4;
	this.board=[];
	this.marbles=[];
	
};

brainVita.Game.prototype = {
	create: function(){
		this.createBoard();
		this.addMarbles();
	},

	createBoard: function(){
		this.add.sprite(0, 0, 'background');
		this.add.sprite(0, 0, 'board');
		for(i=0; i<7; i++){
				this.board[i] = new Array(7);
				for(j=0; j<7; j++){
					if((i < this.lEdge && j < this.lEdge) || // top-left
						(i > this.rEdge && j < this.lEdge) || // bottom-left
						(i < this.lEdge && j > this.rEdge) || // top-right
						(i > this.rEdge && j > this.rEdge) )
					{
						this.board[i][j]=-1;
					}
					else
					{
						this.board[i][j]=1;
					}
				}
			}
	    this.board[3][3] = 0;
	},

    addMarbles: function(){
		for(i=0; i<7; i++){
			this.marbles[i] = new Array(7);
			for(j=0; j<7; j++){    

				if(this.board[i][j]==1)
				{
				 this.marbles[i][j]=this.add.sprite(60+j*70,50+i*72,'marble');
	            }
				  
            }
    
        } 
       

        },   

        renderBoard : function(){

        	for(i=0; i<7; i++){
			for(j=0; j<7; j++){    
				 if(this.isEligibleCell(i,j))
				 { 
				 this.marbles[i][j].iIndex = i;
				 this.marbles[i][j].jIndex = j;
				 this.marbles[i][j].inputEnabled=true;
				 this.marbles[i][j].input.enableDrag();
			//	 this.marbles[i][j].events.onDragStart.add(this.onDragStart, this);
				 this.marbles[i][j].events.onDragStop.add(this.onDragStop,this);
				 }  
            }
    
        } 
       

        },

    /*    onDragStart : function(sprite, pointer){
 
            var iIndex = sprite.iIndex;
            var jIndex = sprite.jIndex;
            if(this.marbles[iIndex][jIndex].input.isDragged)
				 {
				 	this.marbles[iIndex][jIndex]=0;
				 	if (iIndex+2<7 && this.board[iIndex+2][jIndex]==0) {
				 		                                 this.marbles[iIndex+1][jIndex].destroy();
				 	                                     this.board[iIndex+2][jIndex]=1;
				 	                                     this.board[iIndex+1][jIndex]=0;
				 	                                      }
				 	if (jIndex+2<7 && this.board[iIndex][jIndex+2]==0) {
				 		                                  this.marbles[iIndex][jIndex+1].destroy();
				 	                                      this.board[iIndex][jIndex+2]=1;
				 	                                      this.board[iIndex][jIndex+1]=0;}
				 	if (iIndex-2>0 && this.board[iIndex-2][jIndex]==0) { 
				 		                                  this.marbles[iIndex-1][jIndex].destroy();
				 	                                      this.board[iIndex-2][jIndex]=1;
				 	                                      this.board[iIndex-1][jIndex]=0;}
				 	if (jIndex-2>0 && this.board[iIndex][jIndex-2]==0) {
				 		                                 this.marbles[iIndex][jIndex-1].destroy();
				 	                                     this.board[iIndex][jIndex-2]=1; 
				 	                                     this.board[iIndex][jIndex-1]=0; } 
				 } 
        },*/

        onDragStop : function(sprite,pointer) {
            var iIndex = sprite.iIndex;
            var jIndex = sprite.jIndex;
        

		    if (iIndex+2<6 && this.board[iIndex+2][jIndex]==0 && this.board[iIndex+1][jIndex]==1) {
		    	                                        /* if (pointer.x>=50+jIndex*70 && pointer.x<=130+jIndex*70 && pointer.y>=188+iIndex*72
		    	                                         	&& pointer.y<=288+iIndex*72) {
		    	                                         	console.log("True1");
		    	                                            sprite.reset(60+jIndex*70,50+(iIndex+2)*72); */
		    	                                            this.board[iIndex+2][jIndex]=1;
				 	                                        this.board[iIndex+1][jIndex]=0;
		    	                                         	this.marbles[iIndex+1][jIndex].destroy();
				 	                                    
				 	                                    /*  } 
				 	                                      else{
				 		                                 sprite.reset(60+jIndex*70,50+iIndex*72);}
				 	                                      } */
		    if (jIndex+2<6 && this.board[iIndex][jIndex+2]==0 && this.board[iIndex][jIndex+1]==1) {
		    	                                         this.board[iIndex][jIndex+2]=1;
				 	                                      this.board[iIndex][jIndex+1]=0;
				 		                                  this.marbles[iIndex][jIndex+1].destroy();
				 	                                      }
			if (iIndex-2>0 && this.board[iIndex-2][jIndex]==0 && this.board[iIndex-1][jIndex]==1) { 
				                                          this.board[iIndex-2][jIndex]=1;
				 	                                      this.board[iIndex-1][jIndex]=0;
				 		                                  this.marbles[iIndex-1][jIndex].destroy();
				 	                                       }
				 	                                
			if (jIndex-2>0 && this.board[iIndex][jIndex-2]==0  && this.board[iIndex][jIndex-1]==1) {
				                                          this.board[iIndex][jIndex-2]=1; 
				 	                                     this.board[iIndex][jIndex-1]=0;
				 		                                 this.marbles[iIndex][jIndex-1].destroy();
				 	                                     }
				 	                               

				 
        },



	    	
isEligibleCell:function(x,y) {
		return this.getAvailableHoles(i,j).length > 0;
		    

		},

	getAvailableHoles:function(x,y){
		 this.holes = [];
	
			 if(this.isCellExists(x, y-2)&& this.board[x][y-2] == 0 && this.board[x][y-1]==1 ) 
			 {
			  this.holes.push({x:x, y: y-2});
            
		
			}
		    if( this.isCellExists(x, y+2) && this.board[x][y+2] == 0 && this.board[x][y+1]==1) 
			{ 
				this.holes.push({x:x, y: y+2});
			
		
	         }
			if( this.isCellExists(x-2, y) && this.board[x-2][y] == 0 && this.board[x-1][y]==1) 
			 {
			 	this.holes.push({x:x-2, y: y});
			
		
		     }   
			 if(this.isCellExists(x+2, y)&& this.board[x+2][y] == 0&& this.board[x+1][y]==1 )
			 { 
			 	this.holes.push({x:x+2, y: y});
			
			 }
            

		return this.holes;

	} ,


		 isCellExists: function(x,y){ 
		 	var val;
		 	if(x<0 || x>6)
		 	{
                return false;
		 		
		 	}
		 	if(y<0 || y>6)
		 	{
		 		return false;
		 		
		 	}
		 	val=this.board[x][y];
		
		 	if(val>=0)
		 	{
		 		return true;
		 		
		 	}
		 	else
		 	{
		 		return false;
		 	}
		 	
			
		},

		isGameOver: function(){
			var i,j;
			for(i=0; i < 7; i++){
				for(j=0; j < 7; j++){
					if(this.board[i][j] == 1 && this.getAvailableHoles(i,j).length > 0){
						return false;
					}
				}
			}
			return true;
		},

		update: function(){

			this.renderBoard();
			}
};

   

    



