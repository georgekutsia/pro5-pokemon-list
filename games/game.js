class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.background = new Background(ctx);
    this.obstacles = [];
    this.interval = null;

    this.setListeners();
    this.obstacleTick = 0;

    this.audio = new Audio("../public/music/under.mp4");
  }
  start() {
    this.audio.play();
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkCollisions();
      this.obstacleTick++;

      if (this.obstacleTick > Math.random() * 200 + 100) {
        this.addObstacle();
        this.obstacleTick = 0;
      }
    }, 1000 / 60);
  }

  stop() {
    this.audio.pause();
    clearInterval(this.interval);
    this.interval = null;
  }
  addObstacle() {
    const obstacle = new Obstacle(this.ctx);
    this.obstacles.push(obstacle);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach((obs) => obs.draw());
  }
  move() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach((obs) => obs.move());
  }

  setListeners() {
    document.addEventListener("keydown", (ev) => {
      this.player.keyDown(ev.keyCode);
    });
    document.addEventListener("keyup", (ev) => {
      this.player.keyUp(ev.keyCode);
    });
  }
  checkCollisions() {
    // obstaculo con el pez
    this.obstacles.forEach((obs) => {
      if (obs.collides(this.player)) {
        this.gameOver();
      }
    });

    // arma con pez
    this.obstacles.forEach((obs) => {
      this.player.ammos = this.player.ammos.filter((am) => {
        if(am.collides(obs)){
        am.x = -300
        obs.x = -400
        this.player.killCount++
        return false;
        } else return true;
      })
    })
  }
  gameOver() {
    this.stop();
    this.obstacles = [];
    this.player = new Player(ctx);
  }
}








class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 10;
    this.y = 0;
    this.vx = -0.3;

    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.img = new Image();
    this.img.src = "../public/img/back-canvas.jpeg";
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
  }
  move() {
    this.x += this.vx;
    if (this.x + this.w <= 0) {
      this.x = 0;
    }
  }
}
