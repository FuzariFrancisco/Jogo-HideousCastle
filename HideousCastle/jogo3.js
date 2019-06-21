var game = new Phaser.Game
(800, 600, Phaser.AUTO, '', 
{ 
	preload: preload, 
	create: create, 
	update: update 
});

var player;
var platforms;
var cursors;
var doors;
var score = 0;
var scoreText;
var music;
var level;
var cogumelos;
var tema;
var fim;
var j;


function preload() {
    game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/Plataforma.png');
	game.load.image('blocks', 'assets/Tijolo1.png');
	game.load.image('blocks4', 'assets/Tijolo4.png');
	game.load.image('blocks3', 'assets/Tijolo3.png');
	game.load.image('blocks2', 'assets/Tijolo2.png');
	game.load.spritesheet('jogador', 'assets/Naruto2.png', 32, 48);
	game.load.image('porta', 'assets/porta.png');
	
	game.load.image('cogumelo', 'assets/Cogumelo1.png');	
	game.load.image('cogumelo2', 'assets/fantasma.png');
	game.load.image('cogumelo3', 'assets/obstaculo1.png');
	game.load.audio('tema', 'assets/Tema1.mp3');		
	game.load.audio('fim', 'assets/Fim1.mp3');
	
}



function create() {
		
	game.physics.startSystem(Phaser.Physics.ARCADE);		
    game.add.sprite(0, 0, 'sky');

	
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    
	var ledge = platforms.create(0, 80, 'blocks3');
    ledge.body.immovable = true;
	
	ledge = platforms.create(265, 80, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(460, 80, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(780, 120, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(750, 220, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(600, 280, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(0, 450, 'blocks3');
    ledge.body.immovable = true;
	
	ledge = platforms.create(270, 470, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(470, 450, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(0, 250, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(400, 200, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(550, 380, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(470, 280, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(150, 195, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(-18, 0, 'blocks2');
    ledge.body.immovable = true;
	
	ledge = platforms.create(798, 0, 'blocks2');
    ledge.body.immovable = true;
	
	
	tema = game.sound.play('tema');
	tema.play();
	
	
	player = game.add.sprite(32, game.world.height - 200, 'jogador');
    
	game.physics.arcade.enable(player);
    
	player.body.bounce.y = 0.1;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
	
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
	
	cursors = game.input.keyboard.createCursorKeys();
	
	
	doors = game.add.group();
    doors.enableBody = true;
	
	    var door = doors.create(1, 180, 'porta');
        door.body.gravity.y = 300;
        door.body.bounce.y = 0
			   
	
    
        	
	
	cogumelos = game.add.group();
	cogumelos.enableBody = true;
	
	for (var i = 0; i < 26; i++)
	{
		var cog1 = cogumelos.create(i*35, 500, 'cogumelo'); 
	    cog1.body.gravity.y = 400;
	    cog1.body.bounce.x = 1 
	}
	
	    var cog1 = cogumelos.create(110, 435, 'cogumelo2'); 
	    cog1.body.gravity.x = 400;
	    cog1.body.bounce.x = 1 
		
		var cog1 = cogumelos.create(400, 230, 'cogumelo2'); 
	    cog1.body.gravity.y = 400;
	    cog1.body.bounce.y = 1 
		
		var cog1 = cogumelos.create(300, 100, 'cogumelo2'); 
	    cog1.body.gravity.y = 50;
	    cog1.body.bounce.y = 1
		
		var cog1 = cogumelos.create(690, 247, 'cogumelo2'); 
	    cog1.body.gravity.y = -150;
	    cog1.body.bounce.y = 1
		
		var cog1 = cogumelos.create(600, 101, 'cogumelo2'); 
	    cog1.body.gravity.y = 150;
	    cog1.body.bounce.y = 1
		
		var cog1 = cogumelos.create(0, 30, 'cogumelo2'); 
	    cog1.body.gravity.x = 150;
	    cog1.body.bounce.x = 1
		
		
		
		
		
		for(var i = 0; i < 5; i++)
		{
		var cog1 = cogumelos.create(i*35, 272, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		}
		
		for(var i = 0; i < 3; i++)
		{
		var cog1 = cogumelos.create(i*35, 307, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		}
		
		for(var i = 0; i < 4; i++)
		{
		var cog1 = cogumelos.create(660+(i*35), 302, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		}
		
		for(var i = 0; i < 3; i++)
		{
		var cog1 = cogumelos.create(695+(i*35), 337, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		}
		
		for(var i = 0; i < 2; i++)
		{
		var cog1 = cogumelos.create(730+(i*35), 372, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		}
		
		var cog1 = cogumelos.create(765, 407, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		
		
		var cog1 = cogumelos.create(150, 217, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		
		var cog1 = cogumelos.create(185, 217, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1
		
		var cog1 = cogumelos.create(220, 217, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1
		
		
		var cog1 = cogumelos.create(0, 102, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		
		var cog1 = cogumelos.create(35, 102, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		
		var cog1 = cogumelos.create(0, 137, 'cogumelo3'); 
	    cog1.body.gravity.y = 0;
	    cog1.body.bounce.y = 1 
		
		
	

		
	
	           
	
	
	
	
    scoreText = game.add.text
	(16, 550, '', 
	{ fontSize: '32px', fill: '#F00' }
	);
	
    cursors = game.input.keyboard.createCursorKeys();
	
	level = game.add.text
	(650, 550, 'Nível 3', 
	{ fontSize: '32px', fill: '#FFD851' }
	);
	
}

function update() {
	
	var hitPlatform = game.physics.arcade.collide(player, platforms);	
	
    game.physics.arcade.collide(doors, platforms);
    game.physics.arcade.collide(cogumelos, platforms);	
	
	game.physics.arcade.overlap(player, doors, killDoor, null,this);	
	game.physics.arcade.overlap(player, cogumelos, killPlayer, null, this);	
	
    player.body.velocity.x = 0;
	
	
    if (cursors.left.isDown){		
        player.body.velocity.x = -150;
        player.animations.play('left');
    }
    else if (cursors.right.isDown){		
        player.body.velocity.x = 150;
        player.animations.play('right');
	}
    else{
        player.animations.stop();
        player.frame = 4;
    }
	
	
	if (cursors.up.isDown && player.body.touching.down && hitPlatform)
	{
		player.body.velocity.y = -350;
	}
	
}

function killDoor (player, door) {
    
	door.kill();	
	window.location.replace("index.html");
}

function killPlayer (player, cogumelo) {
    
	fim = game.sound.play('fim');
	tema.stop();
	
	fim.play();
	player.kill();
		
	scoreText.text = 'Você perdeu Recarregue a pagina!!!';	
	
}











