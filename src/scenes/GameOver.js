
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_popUP
		const container_popUP = this.add.container(0, 0);

		// black_transparent
		const black_transparent = this.add.image(540, 960, "black-transparent");
		container_popUP.add(black_transparent);

		// container_popupAnimation
		const container_popupAnimation = this.add.container(554.4303054707575, 937);
		container_popupAnimation.scaleX = 0;
		container_popupAnimation.scaleY = 0;
		container_popUP.add(container_popupAnimation);

		// gameOver
		const gameOver = this.add.image(-14.430305470757503, 32, "gameOver");
		container_popupAnimation.add(gameOver);

		// score
		const score = this.add.text(-14.430305470757503, 0, "", {});
		score.setOrigin(0.5, 0.5);
		score.text = "Your Score: 0";
		score.setStyle({ "color": "#885631", "fontFamily": "carterOne", "fontSize": "40px", "fontStyle": "bold" });
		container_popupAnimation.add(score);

		// highScore_txt
		const highScore_txt = this.add.text(-14.430305470757503, 74, "", {});
		highScore_txt.setOrigin(0.5, 0.5);
		highScore_txt.text = "High Score";
		highScore_txt.setStyle({ "color": "#b86f36", "fontFamily": "carterOne", "fontSize": "35px", "fontStyle": "bold" });
		container_popupAnimation.add(highScore_txt);

		// highScore
		const highScore = this.add.text(-14.430305470757503, 125, "", {});
		highScore.setOrigin(0.5, 0.5);
		highScore.text = "0";
		highScore.setStyle({ "color": "#b86f36", "fontFamily": "carterOne", "fontSize": "35px", "fontStyle": "bold" });
		container_popupAnimation.add(highScore);

		// home
		const home = this.add.image(-164.4303054707575, 285, "home");
		container_popupAnimation.add(home);

		// retry
		const retry = this.add.image(135.5696945292425, 285, "retry");
		container_popupAnimation.add(retry);

		this.container_popUP = container_popUP;
		this.container_popupAnimation = container_popupAnimation;
		this.score = score;
		this.highScore_txt = highScore_txt;
		this.highScore = highScore;
		this.home = home;
		this.retry = retry;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_popUP;
	/** @type {Phaser.GameObjects.Container} */
	container_popupAnimation;
	/** @type {Phaser.GameObjects.Text} */
	score;
	/** @type {Phaser.GameObjects.Text} */
	highScore_txt;
	/** @type {Phaser.GameObjects.Text} */
	highScore;
	/** @type {Phaser.GameObjects.Image} */
	home;
	/** @type {Phaser.GameObjects.Image} */
	retry;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		let currentScore = localStorage.getItem("currentScore");
		this.score.text = "Your Score: "+ currentScore;
		this.highScore.text = localStorage.getItem("highScore");
		this.home.setInteractive().on("pointerdown", () => {
			localStorage.setItem("currentScore" , 1);
			this.tweens.add({
                targets: this.home,
                scaleX: "/=1.1",
                scaleY: "/=1.1",
                duration: 100,
                yoyo: true,
                onComplete: () => {
					this.scene.start("Home");
                }
            })
		})
		this.retry.setInteractive().on("pointerdown", () => {
			localStorage.setItem("currentScore" , 1);
			this.tweens.add({
                targets: this.retry,
                scaleX: "/=1.1",
                scaleY: "/=1.1",
                duration: 100,
                yoyo: true,
                onComplete: () => {
					this.scene.start("Level");
                }
            })
		})
		this.home.on('pointerover', function () {
			this.input.setDefaultCursor('pointer');
		}, this)
		this.home.on('pointerout', function () {
			this.input.setDefaultCursor('default');
		}, this)
		this.retry.on('pointerover', function () {
			this.input.setDefaultCursor('pointer');
		}, this)
		this.retry.on('pointerout', function () {
			this.input.setDefaultCursor('default');
		}, this)
		this.tween = this.tweens.add({
			targets: this.container_popupAnimation,
			scaleX: { from: 0, to: 1 },
			scaleY: { from: 0, to: 1 },
			duration: 300,
			// delay: 200,
			ease: 'Sine.easeInOut',
			// yoyo : true,
			onComplete: () => {
				this.tween.stop();
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
