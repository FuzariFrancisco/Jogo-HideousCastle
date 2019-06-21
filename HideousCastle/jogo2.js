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


function preload() {
    game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/Plataforma.png');
	game.load.image('blocks', 'assets/Tijolo1.png');
	game.load.image('blocks2', 'assets/Tijolo2.png');
	game.load.image('blocks3', 'assets/Tijolo3.png');
	game.load.image('blocks4', 'assets/Tijolo4.png');
	game.load.spritesheet('jogador', 'assets/Naruto2.png', 32, 48);
	game.load.image('porta', 'assets/porta.png');
	
	game.load.image('cogumelo', 'assets/fantasma2.png');
    game.load.image('cogumelo2', 'assets/obstaculo1.png');	
	game.load.image('cogumelo3', 'assets/fantasma.png');
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
    
	ledge = platforms.create(200, 150, 'blocks3');
    ledge.body.immovable = true;
	
	ledge = platforms.create(70, 150, 'blocks3');
    ledge.body.immovable = true;
	
	for(var i=0; i<15; i++)
	{
		ledge = platforms.create(70, 64+(i*21), 'blocks4');
        ledge.body.immovable = true;
	}
	
	for(var i=0; i<5; i++)
	{
		ledge = platforms.create(265, 65+(i*21), 'blocks4');
        ledge.body.immovable = true;
	}
	
	    ledge = platforms.create(331, 65, 'blocks3');
        ledge.body.immovable = true;
		
		ledge = platforms.create(515, 65, 'blocks4');
        ledge.body.immovable = true;
		
		ledge = platforms.create(635, 65, 'blocks4');
        ledge.body.immovable = true;
	
	ledge = platforms.create(540, 150, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(410, 150, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(0, 450, 'blocks3');
    ledge.body.immovable = true;
	
	ledge = platforms.create(130, 450, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(540, 450, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(475, 450, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(475, 350, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(280, 350, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(70, 350, 'blocks3');
    ledge.body.immovable = true;
	
	ledge = platforms.create(70, 255, 'blocks3');
    ledge.body.immovable = true;
	
	ledge = platforms.create(260, 250, 'blocks');
    ledge.body.immovable = true;

	ledge = platforms.create(610, 250, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(800, 500, 'blocks2');
    ledge.body.immovable = true;
	
	
	
	

	
	ledge = platforms.create(790, 211, 'blocks2');
    ledge.body.immovable = true;
	
	ledge = platforms.create(790, 150, 'blocks2');
    ledge.body.immovable = true;
	
	
	
	
	tema = game.sound.play('tema');
	tema.play();
	
	
	player = game.add.sprite(100, game.world.height - 150, 'jogador');
	
    
	game.physics.arcade.enable(player);
    
	player.body.bounce.y = 0.1;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
	
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
	
	cursors = game.input.keyboard.createCursorKeys();
	
	
	doors = game.add.group();
    doors.enableBody = true;
	
    var door = doors.create(i * 1, 380, 'porta');
    door.body.gravity.y = 300;
    door.body.bounce.y = 0.0 + Math.random() * 0.2;
    
	
	
	
	
	cogumelos = game.add.group();
	cogumelos.enableBody = true;
	
		var cog1 = cogumelos.create(170, 385, 'cogumelo'); 
	    cog1.body.gravity.x = 400;
	    cog1.body.bounce.x = 1 
	
	    var cog2 = cogumelos.create(700, 285, 'cogumelo'); 
	    cog2.body.gravity.x = -400;
	    cog2.body.bounce.x = 1 
		
		var cog1 = cogumelos.create(170, 185, 'cogumelo'); 
	    cog1.body.gravity.x = 400;
	    cog1.body.bounce.x = 1 
		
		for(var i=0; i<2; i++)
		{
			var cog1 = cogumelos.create(733+(i*35), 472, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
		} 
		
		for(var i=0; i<1; i++)
		{
			var cog1 = cogumelos.create(768+(i*35), 507, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
		} 
		
		
		for(var i=0; i<2; i++)
		{
			var cog1 = cogumelos.create(i*35, 472, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
		} 
		
		for(var i=0; i<1; i++)
		{
			var cog1 = cogumelos.create(i*35, 507, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
		} 
		
		    var cog1 = cogumelos.create(450, 473, 'cogumelo'); 
	        cog1.body.gravity.x = 150;
		    cog1.body.bounce.x = 1
			
			var cog1 = cogumelos.create(137, 172, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
			
			var cog1 = cogumelos.create(137, 207, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
			
			var cog1 = cogumelos.create(137, 372, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
			
			var cog1 = cogumelos.create(437, 317, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
			
			var cog1 = cogumelos.create(437, 282, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
			
			var cog1 = cogumelos.create(137, 407, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
			
			var cog1 = cogumelos.create(102, 381, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
		
		    var cog1 = cogumelos.create(102, 416, 'cogumelo2'); 
	        cog1.body.gravity.x = 0;
		    cog1.body.bounce.x = 0
			
			var cog1 = cogumelos.create(20, -50, 'cogumelo3'); 
	        cog1.body.gravity.y = 150;
		    cog1.body.bounce.y = 1
			
			var cog1 = cogumelos.create(135, 117, 'cogumelo3'); 
	        cog1.body.gravity.x = 500;
		    cog1.body.bounce.x = 1
			
			var cog1 = cogumelos.create(470, -50, 'cogumelo3'); 
	        cog1.body.gravity.y = 150;
		    cog1.body.bounce.y = 1
			
			var cog1 = cogumelos.create(590, -50, 'cogumelo3'); 
	        cog1.body.gravity.y = 150;
		    cog1.body.bounce.y = 1
		
		
		
	
	
	
	
	
    scoreText = game.add.text
	(16, 550, '', 
	{ fontSize: '32px', fill: '#F00' }
	);
	
    cursors = game.input.keyboard.createCursorKeys();
	
	level = game.add.text
	(650, 550, 'Nível 2', 
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
	window.location.replace("level3.html");
}

function killPlayer (player, cogumelo) {
    
	fim = game.sound.play('fim');
	tema.stop();
	
	fim.play();
	player.kill();
		
	scoreText.text = 'Você perdeu Recarregue a pagina!!!';	
	
}











