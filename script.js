var nam = document.getElementById("nam");

var count = 1;

var map = [
	['╔','═','═','═','═','═','═','═','═','═','═','═','═','═','╗'],
	['║','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','║'],
	['║','◦','═','═','═','═','═','╗','◦','║','◦','╔','═','◦','║'],
	['║','◦','◦','◦','◦','◦','◦','║','◦','║','◦','║','◦','◦','║'],
	['║','◦','◦','◦','◦','◦','◦','║','◦','║','◦','║','◦','◦','║'],
	['╠','═','═','═','═','═','═','╝','◦','║','◦','║','◦','◦','║'],
	['║','◦','◦','◦','◦','◦','◦','◦','◦','║','◦','║','◦','◦','║'],
	['║','◦','═','═','═','═','═','═','═','╝','◦','╚','═','◦','║'],
	['║','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','║'],
	['║','◦','═','═','═','═','═','═','═','═','◦','═','═','◦','║'],
	['║','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','║'],
	['║','◦','╔','═','═','═','═','═','═','═','◦','═','═','◦','║'],
	['║','◦','║','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','◦','║'],
	['║','◦','◦','◦','◦','◦','◦','║','◦','◦','◦','◦','◦','◦','║'],
	['╚','═','═','═','═','═','═','╩','═','═','═','═','═','═','╝']	
];

var brick = "╬╩╦╣╠╝╚╗╔║═";

var output = '';

var snake = {
	pos_x: 1, 
	pos_y: 1,
	dx: 1,
	dy: 0,
	move: function(){
		map[this.pos_x][this.pos_y] = ' ';
		this.pos_x += this.dx;
		this.pos_y += this.dy;
		map[this.pos_x][this.pos_y] = '☺';
		display();
	}
};

function display(){
	output = '';
	for (var i = 0; i < 15; i++) {
		for (var j = 0; j < 15; j++) {
			output += map[i][j];
		}
		output += '<br>';
	}	
	nam.innerHTML = output;
}

function init_map(){
	// for (var i = 1; i < 14; i++) {
	// 	for (var j = 1; j < 14; j++) {
	// 		map[i][j] = ' ';
	// 	}
	// }
	map[1][1] = '☺';
	display();
}

function running(){
	init_map();
		
	var time = setInterval(loop, 50);
	function loop() {
		if (brick.indexOf(map[snake.pos_x+snake.dx][snake.pos_y+snake.dy]) < 0){
			snake.move('right');
		}
	}
}

document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
    	case 39:
    		snake.dx = 0;
    		snake.dy = 1;
    		break;
    	case 37:
    		snake.dx = 0;
    		snake.dy = -1;
    		break;
    	case 38:
    		snake.dx = -1;
    		snake.dy = 0;
    		break;
    	case 40:
    		snake.dx = 1;
    		snake.dy = 0;
    		break;
    }
});
