const ctx = canvas$$.getContext("2d");

const game = new Game(ctx);
//gamOn es para indicar que se ha acabado el juego, que otras formas me han fallado


allMagikarp$$.addEventListener("click", () => {
  match$$.style.display = "none";
  main0$$.style.display = "none";
  main1$$.style.display = "none";
  main3$$.style.display = "block";
  body$$.style.backgroundImage = 'url("./public/img/background-magikarp.jpeg")';
  allPokemon$$.style.backgroundImage = 'url("./public/img/pokeball.png")';
  allTasks$$.style.backgroundImage = 'url("./public/img/pokeball.png")';
  allMatch$$.style.backgroundImage = 'url("./public/img/pokeball.png")';

  allMagikarp$$.style.backgroundImage = 'url("./public/img/open.png")';
  allMagikarp$$.style.width = "50%";
  allMagikarp$$.style.maxWidth = "340px";
  allMagikarp$$.style.maxHeight = "200px";


  allPokemon$$.style.width = "100px";
  allMatch$$.style.width = "100px";
  allTasks$$.style.width = "100px";

});

start$$.addEventListener("click", function () {
  canvas$$.style.display = "block";
  teamRocket$$.style.display = "none";
  start$$.style.opacity = "0.2"
  start$$.style.bottom = "8%"
    if (game.interval) {
      game.stop();
      start$$.innerText = "Start";
      start$$.style.opacity = "1";
    } else {
      game.start();
      start$$.innerText = "Stop";
    }
  }
);
restart$$.addEventListener("click", ()=>{
    window.location.reload();
})