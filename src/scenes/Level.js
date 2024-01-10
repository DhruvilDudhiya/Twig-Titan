
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// black_transparent
		const black_transparent = this.add.image(545, 960, "black-transparent");

		// settings
		const settings = this.add.image(90, 92, "settings");

		// container_gamePlay
		const container_gamePlay = this.add.container(0, 0);

		// black_transparent_Img
		const black_transparent_Img = this.add.image(540, 960, "black-transparent");
		black_transparent_Img.visible = false;

		// container_setting
		const container_setting = this.add.container(537, 856);
		container_setting.scaleX = 0;
		container_setting.scaleY = 0;

		// setting_bg
		const setting_bg = this.add.image(0, 0, "setting_bg");
		setting_bg.setOrigin(0.4963226947626887, 0.5108255982563753);
		container_setting.add(setting_bg);

		// close
		const close = this.add.image(354, -254, "close");
		close.scaleX = 0.8;
		close.scaleY = 0.8;
		container_setting.add(close);

		// music_text
		const music_text = this.add.text(136, -34, "", {});
		music_text.setOrigin(0.5, 0.5);
		music_text.text = "off";
		music_text.setStyle({ "color": "#752d2dff", "fontSize": "30px" });
		container_setting.add(music_text);

		// sound_text
		const sound_text = this.add.text(136, 52, "", {});
		sound_text.setOrigin(0.5, 0.5);
		sound_text.text = "off";
		sound_text.setStyle({ "color": "#752d2dff", "fontSize": "30px" });
		container_setting.add(sound_text);

		// music
		const music = this.add.image(-86, -32, "music");
		container_setting.add(music);

		// sound
		const sound = this.add.image(-85, 56, "sound");
		container_setting.add(sound);

		// toggle_brown_off_music
		const toggle_brown_off_music = this.add.image(28, -30, "toggle_brown");
		container_setting.add(toggle_brown_off_music);

		// toggle_brown_off_sound
		const toggle_brown_off_sound = this.add.image(28, 59, "toggle_brown");
		container_setting.add(toggle_brown_off_sound);

		// toggle_btn_brown_off_music
		const toggle_btn_brown_off_music = this.add.image(1, -31, "toggle_btn_brown");
		container_setting.add(toggle_btn_brown_off_music);

		// toggle_btn_brown_off_sound
		const toggle_btn_brown_off_sound = this.add.image(1, 59, "toggle_btn_brown");
		container_setting.add(toggle_btn_brown_off_sound);

		// container_gameOver
		const container_gameOver = this.add.container(0, 0);
		container_gameOver.visible = false;

		// gameOver
		const gameOver = this.add.image(540, 692, "gameOver");
		container_gameOver.add(gameOver);

		// home
		const home = this.add.image(390, 950, "home");
		container_gameOver.add(home);

		// retry
		const retry = this.add.image(690, 949, "retry");
		container_gameOver.add(retry);

		// scoreText
		const scoreText = this.add.text(540, 663, "", {});
		scoreText.setOrigin(0.5, 0.5);
		scoreText.text = "Your Score: 10";
		scoreText.setStyle({ "color": "#885631", "fontFamily": "carterOne", "fontSize": "40px", "fontStyle": "bold" });
		container_gameOver.add(scoreText);

		// highScore
		const highScore = this.add.text(540, 741, "", {});
		highScore.setOrigin(0.5, 0.5);
		highScore.text = "HighScore";
		highScore.setStyle({ "color": "#b86f36", "fontFamily": "carterOne", "fontSize": "35px", "fontStyle": "bold" });
		container_gameOver.add(highScore);

		// highScore_text
		const highScore_text = this.add.text(540, 780, "", {});
		highScore_text.setOrigin(0.5, 0.5);
		highScore_text.text = "10";
		highScore_text.setStyle({ "color": "#b86f36", "fontFamily": "carterOne", "fontSize": "35px", "fontStyle": "bold" });
		container_gameOver.add(highScore_text);

		// introText
		const introText = this.add.text(540, 484, "", {});
		introText.setOrigin(0.5, 0.5);
		introText.text = "Hold on Screen to stretch out the stick";
		introText.setStyle({ "align": "center", "color": "#b86f36", "fontFamily": "carterOne", "fontSize": "45px" });
		introText.setPadding({"left":20});
		introText.setWordWrapWidth(900);

		// banana
		const banana = this.add.image(932, 110, "banana");
		banana.flipX = true;

		// banana_count
		const banana_count = this.add.text(996, 103, "", {});
		banana_count.scaleX = 0.8;
		banana_count.scaleY = 0.8;
		banana_count.setOrigin(0.5, 0.5);
		banana_count.text = "0";
		banana_count.setStyle({ "color": "#f4e8b1", "fontFamily": "carterOne", "fontSize": "70px" });

		// container_scoreBoard
		const container_scoreBoard = this.add.container(540, 0);
		container_scoreBoard.scaleY = 0;

		// score_Board
		const score_Board = this.add.image(0, 149.1040806076188, "score_Board");
		container_scoreBoard.add(score_Board);

		// text_score
		const text_score = this.add.text(0, 236.1040806076188, "", {});
		text_score.scaleX = 0.8;
		text_score.scaleY = 0.8;
		text_score.setOrigin(0.5, 0.5);
		text_score.text = "1";
		text_score.setStyle({ "color": "#5e2e0e", "fontSize": "80px" });
		container_scoreBoard.add(text_score);

		this.black_transparent = black_transparent;
		this.settings = settings;
		this.container_gamePlay = container_gamePlay;
		this.black_transparent_Img = black_transparent_Img;
		this.container_setting = container_setting;
		this.setting_bg = setting_bg;
		this.close = close;
		this.music_text = music_text;
		this.sound_text = sound_text;
		this.toggle_brown_off_music = toggle_brown_off_music;
		this.toggle_brown_off_sound = toggle_brown_off_sound;
		this.toggle_btn_brown_off_music = toggle_btn_brown_off_music;
		this.toggle_btn_brown_off_sound = toggle_btn_brown_off_sound;
		this.container_gameOver = container_gameOver;
		this.scoreText = scoreText;
		this.highScore = highScore;
		this.highScore_text = highScore_text;
		this.introText = introText;
		this.banana = banana;
		this.banana_count = banana_count;
		this.container_scoreBoard = container_scoreBoard;
		this.text_score = text_score;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	black_transparent;
	/** @type {Phaser.GameObjects.Image} */
	settings;
	/** @type {Phaser.GameObjects.Container} */
	container_gamePlay;
	/** @type {Phaser.GameObjects.Image} */
	black_transparent_Img;
	/** @type {Phaser.GameObjects.Container} */
	container_setting;
	/** @type {Phaser.GameObjects.Image} */
	setting_bg;
	/** @type {Phaser.GameObjects.Image} */
	close;
	/** @type {Phaser.GameObjects.Text} */
	music_text;
	/** @type {Phaser.GameObjects.Text} */
	sound_text;
	/** @type {Phaser.GameObjects.Image} */
	toggle_brown_off_music;
	/** @type {Phaser.GameObjects.Image} */
	toggle_brown_off_sound;
	/** @type {Phaser.GameObjects.Image} */
	toggle_btn_brown_off_music;
	/** @type {Phaser.GameObjects.Image} */
	toggle_btn_brown_off_sound;
	/** @type {Phaser.GameObjects.Container} */
	container_gameOver;
	/** @type {Phaser.GameObjects.Text} */
	scoreText;
	/** @type {Phaser.GameObjects.Text} */
	highScore;
	/** @type {Phaser.GameObjects.Text} */
	highScore_text;
	/** @type {Phaser.GameObjects.Text} */
	introText;
	/** @type {Phaser.GameObjects.Image} */
	banana;
	/** @type {Phaser.GameObjects.Text} */
	banana_count;
	/** @type {Phaser.GameObjects.Container} */
	container_scoreBoard;
	/** @type {Phaser.GameObjects.Text} */
	text_score;

	/* START-USER-CODE */

    // Write more your code here

    create() {
        this.editorCreate();
        this.gameOptions = {
            platfromGapRange: [100, 400],
            platfromWidthRange: [80, 300],
            platfromHeight: 600,
            playerWidth: 32,
            playerHeight: 64,
            poleWidth: 10,
            growTime: 1000,
            rotateTime: 500,
            walkTime: 2,
            fallTime: 400,
            scrollTime: 150
        }
        this.coinCount = 0;
        this.gameWidth = 1085;
        this.gameHeight = 1920;
        this.IDLE = 0;
        this.WAITING = 1;
        this.GROWING = 2;
        this.WALKING = 3;
        this.addCoin();
        this.addPlatforms();
        this.addPole();
        this.addPlayer();
        this.scoreBardTween();
        this.particles = this.add.particles('partical');

        this.particleEmitter = this.particles.createEmitter({
            speed: { min: 10, max: 1000 },
            gravityY: 10,
            lifespan: { min: 150, max: 500 },
            scale: { start: 1, end: 0 },
        });
        this.particleEmitter.stop();
        this.black_transparent_Img.setInteractive();
        this.input.on("pointerdown", this.grow, this);
        this.settings.setInteractive().on("pointerdown", () => {
            this.tweens.add({
                targets: this.settings,
                scaleX: "/=1.1",
                scaleY: "/=1.1",
                duration: 200,
                yoyo: true,
                onComplete: () => {
                    this.black_transparent_Img.visible = true;
                    this.settingPopupTween(0, 1, this.container_setting);
                }
            })
        })
        this.input.on("pointerup", this.stop, this);
        this.settings.setInteractive().on("pointerover", () => {
            this.input.setDefaultCursor('pointer');
            this.pointerOverTween(this.settings, 1);
        })
        this.settings.setInteractive().on("pointerout", () => {
            this.input.setDefaultCursor('default');
            this.pointerOutTween(this.settings, 1);
        })

        this.close.setInteractive().on("pointerdown", () => {
            this.settingPopupTween(1, 0, this.container_setting);
            this.black_transparent_Img.visible = false;
        })
       this. black_transparent_Img.setInteractive().on("pointerdown", () => {
            this.settingPopupTween(1, 0, this.container_setting);
            this.black_transparent_Img.visible = false;
        })
        this.setting_bg.setInteractive();
        this.toggle_btn_brown_off_music.setInteractive().on("pointerdown", () => {
            const targetX = this.toggle_btn_brown_off_music.x === 1 ? 55 : 1;
            if(targetX === 55){
                this.music_text.text = "on",
                this.toggle_btn_brown_off_music.setTexture("toggle_btn_yellow");
                this.toggle_brown_off_music.setTexture("toggle_yellow");
            }else{
                this.music_text.text = "off",
                this.toggle_btn_brown_off_music.setTexture("toggle_btn_brown")
                this.toggle_brown_off_music.setTexture("toggle_brown");
            }
            this.soundButtobnTween(targetX, this.toggle_btn_brown_off_music);
        });
        this.toggle_btn_brown_off_sound.setInteractive().on("pointerdown", () => {
            const targetX = this.toggle_btn_brown_off_sound.x === 1 ? 55 : 1;
            if(targetX === 55){
                this.sound_text.text = "on",
                this.toggle_btn_brown_off_sound.setTexture("toggle_btn_yellow");
                this.toggle_brown_off_sound.setTexture("toggle_yellow");
            }else{
                this.sound_text.text = "off",
                this.toggle_btn_brown_off_sound.setTexture("toggle_btn_brown")
                this.toggle_brown_off_sound.setTexture("toggle_brown");
            }
            this.soundButtobnTween(targetX, this.toggle_btn_brown_off_sound);
        });
    }
    soundButtobnTween(targetX, target) {
        this.tween = this.tweens.add({
            targets: target,
            x: targetX,
            duration: 200,
            onComplete: () => {
                this.tween.stop();
            }
        });
    }
    settingPopupTween = (intiScale, tweenScale, targetContainer) => {
        this.tween = this.tweens.add({
            targets: targetContainer,
            scaleX: { from: intiScale, to: tweenScale },
            scaleY: { from: intiScale, to: tweenScale },
            duration: 300,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                this.tween.stop();
            }
        })
    }

    addPlatforms = () => {
        this.mainPlatform = 0;
        this.platforms = [];
        this.platforms.push(this.addPlatform(0));
        this.platforms.push(this.addPlatform(this.gameWidth));
        this.tweenPlatform();
    }
    scoreBardTween = () => {
        this.tweens.add({
            targets: this.container_scoreBoard,
            y: 1,
            scaleY: 1,
            duration: 800,
            ease: 'Bounce'
        });
    }
    pointerOverTween(btn, initSclae) {
        this.input.setDefaultCursor('pointer');
        this.tweens.add({
            targets: btn,
            scaleX: initSclae + 0.05,
            scaleY: initSclae + 0.05,
            duration: 50
        })
    }
    pointerOutTween(btn, initSclae) {
        this.input.setDefaultCursor('default');
        this.tweens.add({
            targets: btn,
            scaleX: initSclae,
            scaleY: initSclae,
            duration: 50
        })
    }

    addPlatform = (posX) => {
        let platform = this.add.sprite(posX, this.gameHeight - 590, "platform");
        platform.displayWidth = (this.gameOptions.platfromWidthRange[0] + this.gameOptions.platfromWidthRange[1]) / 2;
        platform.displayHeight = this.gameOptions.platfromHeight;
        platform.setOrigin(0, 0);
        this.container_gamePlay.add(platform);
        return platform
    }
    tweenPlatform = () => {
        let destination = this.platforms[this.mainPlatform].displayWidth + Phaser.Math.Between(this.gameOptions.platfromGapRange[0], this.gameOptions.platfromGapRange[1]);
        let size = Phaser.Math.Between(this.gameOptions.platfromWidthRange[0], this.gameOptions.platfromWidthRange[1]);
        this.tweens.add({
            targets: [this.platforms[1 - this.mainPlatform]],
            x: destination,
            displayWidth: size,
            duration: this.gameOptions.scrollTime,
            callbackScope: this,
            onComplete: function () {
                this.gameMode = this.WAITING;
                this.placeCoin();
            }
        })
    }
    addPlayer = () => {
        console.log(this.gameOptions.platfromHeight);
        this.player = this.add.sprite(this.platforms[this.mainPlatform].displayWidth - this.gameOptions.poleWidth, this.gameHeight - 550, "player");
        this.player.setOrigin(0.8, 0.9);
        this.player.setScale(0.5);
    }
    addPole = () => {
        this.pole = this.add.sprite(this.platforms[this.mainPlatform].displayWidth - 20, this.gameHeight - 530, "stick");
        this.pole.setOrigin(0.5, 1);
        this.pole.displayWidth = this.gameOptions.poleWidth * 3.5;
        this.pole.displayHeight = this.gameOptions.playerHeight / 2;
        this.container_gamePlay.add(this.pole);
    }
    grow(p, g) {
        if (this.introText.visible) {
            setTimeout(() => {
                this.introText.visible = false;
            }, 200);
        }
        if (!g.length) {
            if (this.gameMode == this.WAITING) {
                this.gameMode = this.GROWING;
                this.growTween = this.tweens.add({
                    targets: [this.pole],
                    displayHeight: this.gameOptions.platfromGapRange[1] + this.gameOptions.platfromWidthRange[1],
                    duration: this.gameOptions.growTime,
                });
            }
            if (this.gameMode == this.WALKING) {
                if (this.player.flipY) {
                    this.player.flipY = false;
                    this.player.y = this.gameHeight - 550;
                }
                else {
                    this.player.flipY = true;
                    this.player.y = this.gameHeight - 400;
                    // this.player.y = this.gameHeight - this.gameOptions.platfromHeight + this.gameOptions.playerHeight - this.gameOptions.poleWidth * -10;
                    let playerBound = this.player.getBounds();
                    let platformBound = this.platforms[1 - this.mainPlatform].getBounds();
                    if (Phaser.Geom.Rectangle.Intersection(playerBound, platformBound).width != 0) {
                        this.player.flipY = false;
                        this.player.y = this.gameHeight - 550;
                    }
                }
            }
        }
    }
    addCoin = () => {
        this.coin = this.add.sprite(0, this.gameHeight - this.gameOptions.platfromHeight + 10 + this.gameOptions.playerHeight / 0.5, "banana");
        this.coin.setScale(0.8, 0.8);
        this.coin.visible = false;
        this.container_gamePlay.add(this.coin);

    }
    placeCoin = () => {
        let centerPosX = (this.platforms[this.mainPlatform].getBounds().right + this.platforms[1 - this.mainPlatform].getBounds().left) / 2;
        this.coin.x = centerPosX;
        this.coin.visible = true;
        console.log(this.coinCount);
    }
    stop() {
        if (this.gameMode == this.GROWING) {
            this.gameMode = this.IDLE;
            this.growTween.stop();
            if (this.pole.displayHeight > this.platforms[1 - this.mainPlatform].x - this.pole.x) {
                this.tweens.add({
                    targets: [this.pole],
                    angle: 90,
                    duration: this.gameOptions.rotateTime,
                    ease: "Bounce.easeOut",
                    callbackScope: this,
                    onComplete: function () {
                        this.gameMode = this.WALKING;
                        this.player.anims.play('runAnimation')
                        if (this.pole.displayHeight < this.platforms[1 - this.mainPlatform].x + this.platforms[1 - this.mainPlatform].displayWidth - this.pole.x) {
                            this.walkTween = this.tweens.add({
                                targets: [this.player],
                                x: this.platforms[1 - this.mainPlatform].x + this.platforms[1 - this.mainPlatform].displayWidth - this.pole.displayWidth,
                                duration: this.gameOptions.walkTime * this.pole.displayHeight,
                                callbackScope: this,
                                onComplete: function () {
                                    this.coin.visible = false;
                                    this.tweens.add({
                                        targets: [this.player, this.pole, this.platforms[1 - this.mainPlatform], this.platforms[this.mainPlatform]],
                                        props: {
                                            x: {
                                                value: "-= " + this.platforms[1 - this.mainPlatform].x
                                            }
                                        },
                                        duration: this.gameOptions.scrollTime,
                                        callbackScope: this,
                                        onComplete: function () {
                                            this.player.anims.stop('runAnimation')
                                            this.player.setTexture("player");
                                            this.prepareNextMove();
                                        }
                                    })
                                }
                            })
                        }
                        else {
                            this.platformTooLong();
                        }
                    }
                })
            }
            else {
                this.platformTooShort();
            }
        }
    }
    platformTooLong() {
        this.walkTween = this.tweens.add({
            targets: [this.player],
            x: this.pole.x + this.pole.displayHeight + this.player.displayWidth,
            duration: this.gameOptions.walkTime * this.pole.displayHeight,
            callbackScope: this,
            onComplete: function () {
                this.fallAndDie();
            }
        })
    }
    platformTooShort() {
        this.tweens.add({
            targets: [this.pole],
            angle: 90,
            duration: this.gameOptions.rotateTime,
            ease: "Cubic.easeIn",
            callbackScope: this,
            onComplete: function () {
                this.player.anims.play('runAnimation')
                this.gameMode = this.WALKING;
                this.tweens.add({
                    targets: [this.player],
                    x: this.pole.x + this.pole.displayHeight,
                    duration: this.gameOptions.walkTime * this.pole.displayHeight,
                    callbackScope: this,
                    onComplete: function () {
                        this.player.anims.stop('runAnimation')
                        this.player.setTexture("player");
                        this.tweens.add({
                            targets: [this.pole],
                            angle: 180,
                            duration: this.gameOptions.rotateTime,
                            ease: "Cubic.easeIn"
                        })
                        this.fallAndDie();
                    }
                })
            }
        })
    }
    fallAndDie() {
        this.gameMode = this.IDLE;
        this.tweens.add({
            targets: [this.player],
            y: this.gameHeight + this.player.displayHeight * 2,
            duration: this.gameOptions.fallTime,
            ease: "Cubic.easeIn",
            callbackScope: this,
            onComplete: function () {
                this.shakeAndRestart();

            }
        })
    }
    updateScoreTween() {
        this.tweens.add({
            targets: [this.text_score],
            scaleX: 1.5,
            scaleY: 1.5,
            duration: 100,
            ease: "Cubic.easeIn",
            callbackScope: this,
            onComplete: function () {
                this.tweens.add({
                    targets: [this.text_score],
                    scaleX: 0.8,
                    scaleY: 0.8,
                    duration: 100,
                    ease: "Cubic.easeIn"
                })
            }
        })
    }
    prepareNextMove() {
        this.currentScore = localStorage.getItem("currentScore");
        this.currentScore++;
        localStorage.setItem("currentScore", this.currentScore);
        this.text_score.text = this.currentScore;
        this.highScore = localStorage.getItem("highScore");
        if (this.currentScore > this.highScore) {
            localStorage.setItem("highScore", this.currentScore);
        }
        console.log(this.highScore, this.currentScore);
        this.updateScoreTween()
        // if(this.score >= 2){
        // 	this.gameOptions.platfromGapRange = [200 , 700];
        //     console.log("updateLevel", this.gameOptions.platfromGapRange);
        // }
        this.gameMode = this.IDLE;
        this.platforms[this.mainPlatform].x = this.gameWidth;
        this.mainPlatform = 1 - this.mainPlatform;
        this.tweenPlatform();
        this.pole.angle = 0;
        this.pole.x = this.platforms[this.mainPlatform].displayWidth - 25;
        this.pole.displayHeight = this.gameOptions.poleWidth * 3.1;
    }
    shakeAndRestart() {
        this.cameras.main.shake(500, 0.003);
        // this.container_gameOver.visible = true;
        // setTimeout(() => {
        //     this.scene.start("GameOver");
        // }, 800);
        this.time.addEvent({
            delay: 1000,
            callbackScope: this,
            callback: function () {
                this.scene.start("GameOver");
            }
        })
    }
    update() {
        if (this.player.flipY) {
            let playerBound = this.player.getBounds();
            let coinBound = this.coin.getBounds();
            let platformBound = this.platforms[1 - this.mainPlatform].getBounds();
            if (Phaser.Geom.Rectangle.Intersection(playerBound, platformBound).width != 0) {
                this.player.anims.stop('runAnimation')
                this.player.setTexture("player");
                this.walkTween.stop();
                this.gameMode = this.IDLE;
                this.shakeAndRestart();
            }
            if (this.coin.visible && Phaser.Geom.Rectangle.Intersection(playerBound, coinBound).width != 0) {
                this.coinCount++;
                this.particleEmitter.start();
                this.particleEmitter.explode(100, this.coin.x, this.coin.y);
                this.banana_count.text = this.coinCount;
                this.coin.visible = false;
                this.tweens.add({
                    targets: this.banana,
                    scaleX: 0.8,
                    scaleY: 0.8,
                    duration: 300,
                    callbackScope: this,
                    onComplete: function () {
                        this.tweens.add({
                            targets: this.banana,
                            scaleX: 1,
                            scaleY: 1,
                            duration: 300,
                        })
                    }
                })
            }
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
