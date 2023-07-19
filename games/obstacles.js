class Obstacle {
  constructor(ctx,damage, obstacleImg) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width;
    this.y = Math.random() * this.ctx.canvas.height;
    this.w = this.ctx.canvas.width / 17;
    this.h = this.ctx.canvas.width / 17;
    this.vx = -2;
    this.damage = damage
    this.img = new Image();
    this.img.src = obstacleImg || "../public/img/mag.png";
    this.img.frame = 0;
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
  }
  collides(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w - 5 && this.x + this.w > objetivo.x;
    const colY = this.y + this.h-5 > objetivo.y && this.y < objetivo.y + objetivo.h-5;
    return colX && colY;
  }
}
