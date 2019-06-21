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
var score = 0;
var scoreText;
var music;
var level;
var cogumelos;
var tema;
var fim;

var doors;


function preload() {
	
    game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/Plataforma.png');
	game.load.image('blocks', 'assets/Tijolo1.png');
	game.load.image('blocks4', 'assets/Tijolo4.png');
	game.load.spritesheet('jogador', 'assets/Naruto2.png', 32, 48);
	game.load.image('porta', 'assets/porta.png');
	
	
	game.load.image('cogumelo', 'assets/obstaculo1.png');	
	game.load.image('cogumelo2', 'assets/fantasma.png');
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
	
	var ledge = platforms.create(0, 450, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(196, 450, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(456, 450, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(735, 350, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(669, 350, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(565, 350, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(460, 350, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(355, 350, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(250, 350, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(145, 350, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(145, 160, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(355, 160, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(565, 160, 'blocks4');
    ledge.body.immovable = true;
	
	ledge = platforms.create(0, 350, 'blocks4');
    ledge.body.immovable = true;
	

	ledge = platforms.create(0, 250, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(196, 250, 'blocks');
    ledge.body.immovable = true;
	
	ledge = platforms.create(456, 250, 'blocks');
    ledge.body.immovable = true;
	
	
	
	
	tema = game.sound.play('tema');
	tema.play();
	
	
	player = game.add.sprite(32, game.world.height - 150, 'jogador');
	
    
	game.physics.arcade.enable(player);
    
	player.body.bounce.y = 0.1;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
	
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
	
	cursors = game.input.keyboard.createCursorKeys();
	
	
	doors = game.add.group();
	doors.enableBody = true;
	
    var door = doors.create(2, 180, 'porta');
    door.body.gravity.y = 100;
    door.body.bounce.y = 0;
	
	
	
	
	
	cogumelos = game.add.group();
	cogumelos.enableBody = true;
	
	
    var cogumelo = cogumelos.create(635, 280, 'cogumelo2');
    cogumelo.body.gravity.y = 100;
    cogumelo.body.bounce.y = 1
		
	var cogumelo = cogumelos.create(530, 420, 'cogumelo2');
    cogumelo.body.gravity.y = -100;
    cogumelo.body.bounce.y = 1
		
	var cogumelo = cogumelos.create(425, 280, 'cogumelo2');
    cogumelo.body.gravity.y = 100;
    cogumelo.body.bounce.y = 1
		
	var cogumelo = cogumelos.create(320, 420, 'cogumelo2');
    cogumelo.body.gravity.y = -100;
    cogumelo.body.bounce.y = 1
		
		var cogumelo = cogumelos.create(215, 280, 'cogumelo2');
        cogumelo.body.gravity.y = 100;
        cogumelo.body.bounce.y = 1
		
		
		
		
		var cogumelo = cogumelos.create(0, 315, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(0, 270, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(0, 415, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(0, 370, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(765, 370, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(765, 200, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(580, 215, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(580, 180, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(165, 215, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(165, 180, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		
		var cogumelo = cogumelos.create(370, 125, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(370, 90, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(370, 55, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(370, 20, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		var cogumelo = cogumelos.create(370, -15, 'cogumelo');
        cogumelo.body.gravity.y = 0;
        cogumelo.body.bounce.y = 0
		
		
		
	
	
	
	
    scoreText = game.add.text(16, 550, '', { fontSize: '32px', fill: '#F00' });
	
    cursors = game.input.keyboard.createCursorKeys();
	
	level = game.add.text(650, 550, 'Nível 1', { fontSize: '32px', fill: '#FFD851' });
	
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


function killPlayer (player, cogumelo) {
    
	fim = game.sound.play('fim');
	tema.stop();
		
	fim.play();
	player.kill();
			
	scoreText.text = 'Você perdeu Recarregue a pagina!!!';	
	
}

function killDoor (player, door) {
    
	door.kill();	
	window.location.replace("level2.html");
}

