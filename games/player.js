let width = 20
let height = 20
let resizing = 15
class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 10;
    this.y = 0;
    this.w = this.ctx.canvas.width / resizing;
    this.h = this.ctx.canvas.width / resizing;

    this.vx = 0.1;
    this.vy = 0;

    this.g = 0.005;

    this.ay = 0;
    this.ax = 0;
    this.fastSwiming = 20;
    this.img = new Image();
    this.img.src = "../public/img/magikarp.png";
    this.img.frame = 0;
    this.frameAmount = 3;
    this.count = 0;
    this.killCount = 0;
    this.life = 40;
    this.hit = 0;

    this.tired = 40;
    this.effort = 4;
    this.shooting = 66;
    this.amountOfAmmo = 3;
    this.ammos = [];
    this.ammoCountback = 200;
    this.evolution = false;
    this.splashAudio = new Audio("../public/music/splash.mp3");
    this.audioNoAmmo = new Audio("../public/music/noAmmo.mp3")
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frame * this.img.height) / this.frameAmount,
      this.img.width,
      this.img.height / this.frameAmount,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ammos.forEach((shoot) => {
      shoot.draw();
    });
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Salpicadura: ${this.amountOfAmmo.toString()}`, 210, 140);
    this.ctx.fillText(`Puntos: ${this.killCount.toString()}`, 230, 130);
    // this.ctx.fillText(`Bulala${Math.round(this.life * 100) / 100}`, 15, 50);
    // energía
    this.ctx.fillStyle = "yellow";
    if(this.effort >= 30){
    this.ctx.fillStyle = "orange";
    }
    this.ctx.fillRect(230, 13, this.effort, 10);
    this.ctx.strokeRect(230, 13, 40, 10);
    // vida
    this.ctx.fillStyle = "lightgreen";
    if (this.hit >= 30) {
      this.ctx.fillStyle = "red";
    }
    this.ctx.fillRect(230, 3, this.life - this.hit, 10);
    this.ctx.strokeRect(230, 3, this.life, 10);
    this.ctx.fillStyle = "black";
    this.ctx.font = "8px Arial";
    if(!this.evolution){
      this.ctx.fillText(`Magikarp`, 234, 10);
    } else {
      this.ctx.fillText(`Gyrados`, 245, 10);
    }
    
    if(this.hit <=0){
      this.hit = 0
    }

    if(this.killCount >= 10){
      this.img.src = "../public/img/gyrados.png"
      this.w = this.ctx.canvas.width / 6;
      this.h = this.ctx.canvas.width / 6;
      this.evolution = true;
      this.life = 60
      width = 80;
      height = 10;
    }
      this.effort -= 0.01;
      if(this.effort <= 0){
        this.effort = 0
      }
      if(this.effort >= 40){
        this.effort = 40
      }

  }

  move() {
    this.vy += this.g + this.ay;
    this.x += this.vx + this.ax;
    this.y += this.vy;

    this.count++;
    if (this.count > this.fastSwiming) {
      this.img.frame++;
      this.count = 0;
    }
    if (this.img.frame > 2) {
      this.img.frame = 0;
    }

    this.ammoCountback--;
    if (this.ammoCountback <= 0) {
      this.ammoCountback = 200;
      this.amountOfAmmo++;
    }

    this.ammos.forEach((shoot) => {
      shoot.move();
    });
    this.ammos = this.ammos.filter((ammo) => ammo.isVisible());
    if (this.y <= 0) {
      this.y = 0;
      this.vy = 0;
    }
    if (this.y + this.h > this.ctx.canvas.height + 5) {
      this.y = this.ctx.canvas.height - this.h + 5;
      this.vy = 0;
    }
    if (this.x <= -10) {
      this.x = -10;
      this.vx = 0;
    }
    if (this.x + this.w >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }
    if (this.amountOfAmmo > 0) {
      this.shooting = 66;
    }
  }
  keyDown(key) {
    if (key === 87) {
      this.ay = -0.05;
      this.effort += 2
    }
    if (key === 65) {
      this.ax = -0.7;
      this.effort += 0.5;

    }
    if (key === 68) {
      this.ax = +0.5;
      this.effort += 0.5;

    }
    if (key === 83) {
      this.ay = 0.05;
      this.effort += 0.5;

    }
    if (key === this.shooting) {
      if(this.amountOfAmmo >= 1){
        this.shoot();
        this.amountOfAmmo -= 1;
      this.effort += 2;
          if (this.evolution) {
            this.bigShoot();
          }
      } else if (this.amountOfAmmo <= 0) {
        this.audioNoAmmo.play()
    }
    }
  }
  keyUp(key) {
    if (key === 87) {
      this.ay = 0;
    }
    if (key === 65) {
      this.ax = 0;
    }
    if (key === 68) {
      this.ax = 0;
    }
    if (key === 83) {
      this.ay = 0;
    }
  }

  shoot() {
    const ammo = new Shoot(this.ctx, this.x + 20, this.y + 10);
    this.ammos.push(ammo);
    this.splashAudio.play();

  }
  bigShoot(){
        const ammo = new Shoot(this.ctx, this.x + 20, this.y + 15);
        this.ammos.push(ammo);
  }
}

class Shoot {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = 5;

    this.g = -0.005;

    this.vy = 0;
    this.vx = 2;
    this.img = new Image();
    this.img.src = "../public/img/waterspin.png";
    this.img.frame = 0;

    this.w = width;
    this.h = height;
  }

  draw() {
    //se ve fatal por alguna razón si lo hago con sprites. ya lo arreglaré, o no
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frame * this.img.width) / 8,
      this.img.width / 8,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    // this.img.frame++;
    // if (this.img.frame > 7) {
    //   this.img.frame = 0;
    // }
    this.vy += this.g;
    this.x += this.vx;
    this.y += this.vy;
  }
  collides(objetivo) {
    const colX =
      this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY =
      this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  isVisible() {
    return this.x < this.ctx.canvas.width;
  }
}
