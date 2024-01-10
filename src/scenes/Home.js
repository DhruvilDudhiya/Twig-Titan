
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// black_transparent
		this.add.image(545, 960, "black-transparent");

		// logo
		const logo = this.add.image(540, 444, "logo");

		// playBtn
		const playBtn = this.add.image(540, 1440, "playBtn");

		// titalWalk
		const titalWalk = this.add.sprite(300, 234, "1");
		titalWalk.scaleX = 0.5;
		titalWalk.scaleY = 0.5;

		this.logo = logo;
		this.playBtn = playBtn;
		this.titalWalk = titalWalk;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	playBtn;
	/** @type {Phaser.GameObjects.Sprite} */
	titalWalk;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		// this.titalWalk.anims.frameRate = 1
		this.titalWalk.anims.play('runAnimation');
		this.titalWalk.anims.currentAnim.frameRate = 16;
		this.titalWalk.anims.play('runAnimation');
		console.log(this.titalWalk);
		this.playBtn.setInteractive().on("pointerdown", () => {
			this.scene.start("Level");
		})
		this.monkeyLeftToRight();
		// this.buttonTween(this.playBtn);
		// this.buttonTween(this.logo);
		this.playBtn.on('pointerover', function () {
			this.pointerOverTween(this.playBtn, 1);
		}, this)
		this.playBtn.on('pointerout', function () {
			this.pointerOutTween(this.playBtn, 1);
		}, this)
	}
	monkeyLeftToRight() {
		this.tweens.add({
			targets : this.titalWalk,
			x : 715,
			duration : 1500,
			onComplete : () => {
				this.titalWalk.anims.stop();
				this.titalWalk.setTexture("player");
				setTimeout(() => {
					this.titalWalk.flipX = true;
					this.titalWalk.anims.play('runAnimation');
					this.monkeyRightToLeft();
				}, 500);
			}
		})
	}
	monkeyRightToLeft() {
		this.tweens.add({
			targets : this.titalWalk,
			x : 300,
			duration : 1500,
			onComplete : () => {
				this.titalWalk.anims.stop();
				this.titalWalk.setTexture("player");
				setTimeout(() => {
					this.titalWalk.flipX = false;
					this.titalWalk.anims.play('runAnimation');
					this.monkeyLeftToRight();
				}, 500);
			}
		})
	}
	buttonTween = (sprite) => {
		this.tweens.add({
			targets: sprite,
			scaleX: "/=0.95",
			scaleY: "/=0.95",
			duration: 600,
			yoyo: true,
			repeat: -1,
			ease: 'Sine.easeInOut'

		})
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
