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







// [
//   {title : "Fight Club", writer : "Chuck Palahniuk", year : 1999, actors : ["Brad Pitt", "Ed ward Norton"]},
//   {title : "Pulp Fiction", writer : "Quentin Tarantino", year : 1994, actors : ["John Travolta", "Uma Thurman"]},
//   {title : "Inglorious Basterds", writer : "Quentin Tarantino", year : 2009, actors : ["Brad Pitt", "Diane Kruger","Eli Roth"]},
//   {title : "The Hobbit: An Unexpected Journey", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit"},
//   {title : "The Hobbit: The Desolation of Smaug", writer : "J.R.R. Tolkein", year : 2013, franchise : "The Hobbit"},
//   {title : "The Hobbit: The Battle of the Five Armies", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit", synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."},
//   {title : "Pee Wee Herman's Big Adventure"},
//   {title : "Avatar"}
// ]