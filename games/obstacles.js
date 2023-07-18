class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width;
    this.y = Math.random() * this.ctx.canvas.height;
    this.w = this.ctx.canvas.width / 10;
    this.h = this.ctx.canvas.height / 10;
    this.vx = -2;

    this.img = new Image();
    this.img.src = "../public/img/magikarp.png";
    this.img.frame = 0;
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