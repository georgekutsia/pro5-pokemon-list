class Game {
  constructor(ctx){
    this.ctx = ctx

    this.player = new Player(ctx);
    this.background = new Background(ctx)
    this.interval = null;

    this.setListeners();
  }
start(){
  this.interval = setInterval(()=>{
    this.clear();
    this.draw();
    this.move();

  }, 1000/60)
}

stop(){
  clearInterval(this.interval);
  this.interval = null
}

clear(){
  this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height)
}

draw(){
  this.background.draw()
  this.player.draw()
}
move(){
  this.background.move()
  this.player.move()
}

  setListeners(){
    document.addEventListener("keydown", (ev)=>{
      this.player.keyDown(ev.keyCode)
    })
    document.addEventListener("keyup", (ev)=>{
      this.player.keyUp(ev.keyCode)
    })
  }
}



class Background {
  constructor(ctx){
          this.ctx = ctx;
          this.x = 10;
          this.y = 0;
          this.vx = -0.3

          this.w = this.ctx.canvas.width
          this.h = this.ctx.canvas.height
        this.img = new Image();
        this.img.src = "../public/img/back-canvas.jpeg"

  }
  draw(){
   this.ctx.drawImage(
    this.img, this.x, this.y, this.w, this.h
   )
   this.ctx.drawImage(
    this.img, this.x + this.w, this.y, this.w, this.h
   )
  }
  move(){
    this.x += this.vx
    if(this.x + this.w <= 0){
      this.x = 0
    }
  }
}