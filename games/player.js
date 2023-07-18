
class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 10;
    this.y = 0;
    this.w = this.ctx.canvas.width/10;
    this.h = this.ctx.canvas.width/10;

    this.vx = 0.1;
    this.vy = 0;

    this.g = 0.005;

    this.ay = 0;
    this.ax = 0;
    this.fastSwiming = 20;
    this.img = new Image();
    this.img.src = "../public/img/magikarp.png";
    this.img.frame = 0;
    this.count = 0;
    this.killCount = 0;
    this.life = 10

    this.shooting = 66
    this.amountOfAmmo = 3
    this.ammos = [];
    this.ammoCountback = 200;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frame * this.img.height) / 3,
      this.img.width,
      this.img.height / 3,
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
        this.ctx.fillText(`Salpicadura: ${this.amountOfAmmo.toString()}`,210,140);
        this.ctx.fillText(`Puntos: ${this.killCount.toString()}`, 230, 130);
        // this.ctx.fillText(`Bulala${Math.round(this.life * 100) / 100}`, 15, 50);
    this.ctx.fillRect( 30, 30, (this.w * this.life) / 10, this.h);
    this.ctx.strokeRect(30, 30, this.w, this.h);



  }

  move() {
    this.vy += this.g + this.ay;
    this.x += this.vx + this.ax;
    this.y += this.vy ;

    this.count++;
    if (this.count > this.fastSwiming) {
      this.img.frame++;
      this.count = 0;

    }
    if (this.img.frame > 2) {
      this.img.frame = 0;
    }

      this.ammoCountback--;
      if(this.ammoCountback <= 0){
        this.ammoCountback = 200;
        this.amountOfAmmo++
      }

    this.ammos.forEach((shoot) => {
        shoot.move();
      });
      this.ammos = this.ammos.filter((ammo) => ammo.isVisible())
      if(this.y<= 0){
        this.y = 0
        this.vy = 0
      }
      if(this.y + this.h > this.ctx.canvas.height + 5){
        this.y = this.ctx.canvas.height-this.h + 5
        this.vy = 0
      }
      if(this.x <= -10){
        this.x = -10
        this.vx = 0
      }
      if(this.x + this.w >= this.ctx.canvas.width){
        this.x = this.ctx.canvas.width - this.w
        this.vx = 0
      }
      if (this.amountOfAmmo > 0) {
        this.shooting = 66;
      }

  }
  keyDown(key) {
    if (key === 87) {
      this.ay = -0.05;
    }
    if (key === 65) {
      this.ax = -0.7;
    }
    if (key === 68) {
      this.ax = +0.5;
    }
    if (key === 83) {
      this.ay = 0.05;
    }
    if (key === this.shooting) {
      this.shoot();
      this.amountOfAmmo-= 1
      console.log(this.amountOfAmmo)
      if(this.amountOfAmmo <= 0){
        this.shooting = 0
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
    const ammo = new Shoot(this.ctx, this.x, this.y);
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

    this.w = 20;
    this.h = 20;
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
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  isVisible(){
    return this.x < this.ctx.canvas.width;
  }
}