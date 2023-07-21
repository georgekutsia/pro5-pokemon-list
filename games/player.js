let width = 20
let height = 20

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 50;
    this.w = this.ctx.canvas.width / 17;
    this.h = this.ctx.canvas.width / 17;
    this.vx = 0.05;
    this.vy = 0;
    this.g = 0.005;
    this.evolving = false
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

    this.up = 87;
    this.down = 83;
    this.left = 65;
    this.right =68;
    this.effort = 4;
    this.shooting = 66;
    this.inactive = true;

    this.megaShooting = 77;
    this.amountOfAmmo = 10;
    this.amountOfMegaAmmo = 10;
    this.ammos = [];
    this.megaAmmos = [];
    this.ammoCountback = 400;
    this.evolution = false;
    this.shootAmmo = new Audio("../public/music/splash.mp3");
    this.audioNoAmmo = new Audio("../public/music/noAmmo.mp3")
    this.megaShootAmmo = new Audio("../public/music/megaShoot.mp3");
    this.evolve = new Audio("../public/music/evolucionar.mp3");

    this.inactiveCountback = 3000;
    this.shootAmmo.volume = 0.07;
    this.audioNoAmmo.volume = 0.07;
    this.megaShootAmmo.volume = 0.07;
    this.evolve.volume = 0.07;
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
    this.ammos.forEach((shoot) => {shoot.draw();});
    this.megaAmmos.forEach((shoot) => {shoot.draw();});

    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Puntos: ${this.killCount.toString()}`, 250, 120);
    this.ctx.fillText(`Salpicadura [B]:${this.amountOfAmmo.toString()}`, 216, 130);
    this.ctx.fillText(`Mega splash [M]:${this.amountOfMegaAmmo.toString()}`, 211, 140);
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
    this.ctx.fillText(`Esfuerzo`, 234, 21);
    this.ctx.fillText(`Mov: WASD`, 100, 8);


    if(!this.evolution){
      this.ctx.fillText(`Magikarp`, 234, 10);
    } else {
      this.ctx.fillText(`Gyrados`, 245, 10);
    }
    
    if(this.hit <=0){
      this.hit = 0
    }

    if(this.killCount != 0 && this.killCount % 20 === 0){
      this.evolve.play()
      this.img.src = "../public/img/gyrados.png"
      this.w = this.ctx.canvas.width / 8;
      this.h = this.ctx.canvas.width / 8;
      this.evolution = true;
      this.life = 60
      width = 80;
      height = 20;
    }
    if(this.evolving){
      this.hit -= 0.03
    }
    if(this.evolution){
      this.evolving = true
        setTimeout(() => {
          this.evolving = false
          this.img.src = "../public/img/magikarp.png";
          this.life = 40;
          width = 20;
          height = 20;
          this.w = this.ctx.canvas.width / 15;
          this.h = this.ctx.canvas.width / 15;
          this.evolution = false;
        }, 10000);
    }
      this.effort -= 0.015;
      if(this.effort <= 0){
        this.effort = 0
      }
      if(this.effort >= 40){
        this.effort = 40
      }
      if(this.effort >= 38){
        this.inactive = false;
        setTimeout(() => {
          this.inactive = true
        }, this.inactiveCountback);
      }
      if(!this.inactive){
        this.ctx.fillText(`¡Magikarp!`, this.x -5 , this.y - 2);

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
      this.ammoCountback = 600;
      this.amountOfAmmo++;
      if(this.hit === 0){
        this.amountOfAmmo++
      }
    }
    if(this.y <= 30){
      this.effort +=0.02;
      this.ay = 0.03
    }

    this.ammos.forEach((shoot) => {shoot.move();});
    this.megaAmmos.forEach((shoot) => {shoot.move();});
    this.ammos = this.ammos.filter((ammo) => ammo.isVisible());
    this.megaAmmos = this.megaAmmos.filter((ammo) => ammo.isVisible());
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
    if (key === this.up && this.inactive ) {
      this.ay = -0.05;
      this.effort += 0.8
    }
    if (key === this.left && this.inactive) {
      this.ax = -0.7;
      this.effort += 0.3;
    }
    if (key === this.right && this.inactive) {
      this.ax = +0.5;
      this.effort += 0.3;
    }
    if (key === this.down && this.inactive) {
      this.ay = 0.05;
      this.effort += 0.3;
    }
    if (key === this.shooting) {
      if(this.amountOfAmmo >= 1){
        this.shoot();
        this.amountOfAmmo -= 1;
        if(this.evolution){
          this.extraShoot();
        }
      this.effort += 1;
      } else if (this.amountOfAmmo <= 0) {
        this.audioNoAmmo.play()
    }
  }
      if (key === this.megaShooting) {
        if (this.amountOfMegaAmmo >= 1) {
          this.megaShoot();
          this.amountOfMegaAmmo -= 1;
          this.effort += 1;
        } else if (this.amountOfMegaAmmo <= 0) {
          this.audioNoAmmo.play();
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
    this.shootAmmo.play();
  }
  extraShoot() {
    const ammo = new Shoot(this.ctx, this.x + 20, this.y + 14);
    this.ammos.push(ammo);
    this.shootAmmo.play();
  }
  megaShoot(){
    const megaAmmo = new Megashoot(this.ctx, this.x + 20, this.y + 15);
    this.megaAmmos.push(megaAmmo);
    this.megaShootAmmo.play();

  }
}

class Shoot {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;

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



class Megashoot {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.vy = 1;
    this.vx = 0.3;
    this.img = new Image();
    this.img.src = "../public/img/waterball.png";
    this.img.frame = 0;

    this.w = 10;
    this.h = 10;
    this.megaTick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.02
    this.w += 0.1
    this.h += 0.1
    this.megaTick++
    
    if (this.megaTick >= 20) {
      this.vy -= 0.1;
    }
    if (this.megaTick >= 60) {
      this.vy += 0.1;
    }
    if (this.megaTick >= 100) {
      this.vy += 0.05;
    }
    if (this.megaTick >= 140) {
      this.vy -= 0.1;
    }
    if (this.megaTick >= 270) {
      this.vy += 0.1;
    }
    if (this.megaTick >= 350) {
      this.vy -= 0.1;
    }
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
