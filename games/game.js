const floorAlgae = [
  "../public/img/al1.png",
  "../public/img/al2.png",
  "../public/img/al3.png",
  "../public/img/al4.png",
  "../public/img/al5.png",
  "../public/img/al6.png",
  "../public/img/al7.png",
  "../public/img/al8.png",
  "../public/img/al9.png",
  "../public/img/al10.png",
  "../public/img/al11.png",
];
class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.background = new Background(ctx);
    this.obstacles = [];
    this.interval = null;

    this.setListeners();
    this.gameTick = 0
    this.levelTick = 1
    this.showGameTick = 2000;

    this.obstacle0Tick = 0;
    this.obstacle1Tick = 0;
    this.obstacle2Tick = 0;
    this.obstacle3Tick = 0;
    this.obstacle4Tick = 0;

    this.audio = new Audio("../public/music/under.mp4");
    this.audioSplash0 = new Audio("../public/music/splash0.mp3");
    this.audio.volume = 0.07;
    this.audioSplash0.volume = 0.07;
  }
  
  start() {
    this.audio.play();
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkCollisions();

      this.gameTick++
      this.showGameTick--
      if(this.gameTick % 2000 === 0){
        this.levelTick += 1
        this.player.amountOfMegaAmmo += 1;
        this.showGameTick = 2000
      }
      this.obstacle0Tick++;
      this.obstacle1Tick++;
      this.obstacle2Tick++;
      this.obstacle3Tick++;
      this.obstacle4Tick++;

      //obstacle magikarp
      if (this.obstacle0Tick > Math.random() * 200 + 210) {
        this.addObstacle1();
          this.obstacle0Tick = 0;
      }
      if (this.obstacle1Tick > Math.random() * 200 + 2000) {
        this.addObstacle1();
        //para que al nivel 2 empiece con ffecuencia a salir
        this.obstacle1Tick = 1750;
          if (this.gameTick >= 8400) {
            this.addObstacle1();
          }
      }
      //obstacle pokeball
      if (this.obstacle2Tick > Math.random() * 400 + 2000) {
        this.addObstacle2();
        this.obstacle2Tick = 0;
      }
      //obstacle ramen
      if (this.obstacle3Tick > Math.random() * 1100 + 1200) {
        this.addObstacle3();
        this.obstacle3Tick = 0;
      }
      //obstacle suelo
      if (this.obstacle4Tick > Math.random() * 310 + 10) {
        this.addObstacle4();
        this.obstacle4Tick = 0;
      }
      if (this.player.hit >= 40 && !this.player.evolution) {
        this.gameOver();
      } else if (this.player.hit >= 60 && this.player.evolution) {
        this.gameOver();
      }
        }, 1000 / 60);
  }

  stop() {
    this.audio.pause();
    clearInterval(this.interval);
    this.interval = null;
  }
  //los otros Magikarp
  addObstacle1() {
    const obstacle = new Obstacle(this.ctx, 10);
    this.obstacles.push(obstacle);
  }
  //la pokeball que atrapa
  addObstacle2() {
    const obstacle = new Obstacle(this.ctx, 50, "../public/img/pokeball.png");
    this.obstacles.push(obstacle);
  }
  addObstacle3() {
    const obstacle = new Obstacle(this.ctx, -10, "../public/img/ramen.png");
    this.obstacles.push(obstacle);
  }
  addObstacle4() {
    const randomIndex = Math.floor(Math.random() * floorAlgae.length);
    const obstacle = new Obstacle(this.ctx, 5, `../public/img/al${randomIndex}.png`, 135);
    this.obstacles.push(obstacle);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach((obs) => obs.draw());


    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`NVL ${this.levelTick}`, 15, 8);
    this.ctx.font = "8px Arial";
    this.ctx.fillText(`+1 NVL en ${this.showGameTick.toString().substring(0, 2)}`, 5, 15);
    
    if(this.player.hit >= 39){
          start$$.style.display = "none";
    }
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
        this.player.hit += obs.damage
        obs.x = -300
        this.audioSplash0.play()

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
    // megaArma con pez
        this.player.megaAmmos.forEach((mana) => {
          this.obstacles = this.obstacles.filter((blu) => {
            if (blu.collides(mana)) {
              this.player.killCount++;
              return false;
            } else return true;
          });
        });
  }
  gameOver() {
    teamRocketEnd$$.style.display = "block";
    start$$.style.display = "none"
    restart$$.style.display = "inline"
    this.stop();
    this.obstacles = [];
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
