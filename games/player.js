class Player{
  constructor(ctx){
    this.ctx = ctx
    this.x = 10;
    this.y = 0;
    this.w = 10;
    this.h = 10;
    
    this.vx = 0.2
    this.vy = 0

    this.g = 0.01

    this.ay = 0
    this.ax = 0
    this.fastSwiming = 20
    this.img = new Image()
    this.img.src = "../public/img/magikarp.png";
    this.img.frame = 0;
    this.count = 0

    this.ammos = []
  }

  draw(){
    this.ctx.drawImage(
      this.img,
      0,
      this.img.frame * this.img.height/3, 
      this.img.width, 
      this.img.height/3, 
      this.x,
      this.y,
      this.w,
      this.h
    )
    this.ammos.forEach(shoot =>{
        shoot.draw()
    })
  }

  move(){
    this.vy += this.g + this.ay;
  this.x += this.vx + this.ax;
  this.y += this.vy


  this.count++
  if(this.count > this.fastSwiming ){
      if(this.ay){
        this.fastSwiming = 5;
      } else{
        this.fastSwiming = 20;
      }
    console.log(this.ax)
    this.img.frame++
    this.count = 0;
  }
  if(this.img.frame > 2){
    this.img.frame = 0;
  }
  }

  keyDown(key){
    if(key === 38){
      this.ay = -0.05
    }
    if(key === 37){
      this.ax = -0.7
    }
    if(key === 39){
      this.ax = +0.5
    }
    if(key === 40){
      this.ay = 0.05
    }
    if(key === 32){
      this.shoot()
    }
  }
  keyUp(key){
    if(key === 38){
      this.ay = 0
    }
  if (key === 37) {
    this.ax = 0;
  }
  if (key === 39) {
    this.ax = 0;
  }
  if (key === 40) {
    this.ay = 0;
  }
      this.ammos.forEach((shoot) => {
        shoot.move();
      });
  }
  shoot(){
    const ammo = new Shoot(this.ctx, this.x, this.y) 
    this.ammos.push(ammo)
  }
}



class Shoot{
  constructor(ctx, x, y){
    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.vx = 10;
    this.g = 0.1;

    this.vy = 0;
    this.vx = 10;
  }

  draw(){
   this.ctx.beginPath()
   this.ctx.arc(this.x, this.y, this.draw, 0, Math.PI*2)
   this.ctx.fill()
   this.ctx.closePath()
  }
  move(){
   this.vy += this.g;
   this.x += this.vx;
   this.y += this.vy;
  }

}