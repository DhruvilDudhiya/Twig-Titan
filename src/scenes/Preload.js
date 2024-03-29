
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// black_transparent
		this.add.image(545, 960, "black-transparent");

		// progress
		const progress = this.add.text(540, 1635, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "Loading";
		progress.setStyle({ "fontSize": "30px" });

		// logo
		const logo = this.add.image(540, 444, "logo");

		this.progress = progress;
		this.logo = logo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progress;
	/** @type {Phaser.GameObjects.Image} */
	logo;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		this.fakeLoader()
		localStorage.setItem("highScore", 0);
		localStorage.setItem("currentScore", 1);

		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level"));
	}
	fakeLoader() {
		this.outerBar = this.add.sprite(540 , 1730, "Progressbar_Base");
		this.outerBar.setOrigin(0.5 , 0.5);
		this.outerBar.setScale(1, 1);
		this.outerBar.setVisible(false)

		this.innerBar = this.add.sprite(200 , 1730, "Progressbar");
		this.innerBar.setOrigin(0, 0.5);
		this.innerBar.setScale(1 , 1);
		this.innerBar.setVisible(false)

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		let loadingCount = 1;
		let loadingText = setInterval(()=>{
			if(loadingCount % 3 === 0) {
				this.progress.setText('Loading...');
			}
			else if((loadingCount+1) %3 === 0){
				this.progress.setText('Loading..');
			}
			else if((loadingCount+2) %3 ===0){
				this.progress.setText('Loading.');
			}
			loadingCount ++;
		},300)

		const updateProgressBar = () => {
			this.outerBar.setVisible(true);
			this.innerBar.setVisible(true);
			this.progress.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			// Replace with your game object image
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);


			// this.loadingBall.x = (this.innerBarWidth - 60) * currentProgress + 280;

			this.progress.setTint("0xfdefb4");

			currentInterval++;

			if (currentProgress >= 1) {
				clearInterval(loadingText);
				clearInterval(progressInterval);
				this.scene.start("Home");
			}
		};
		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
