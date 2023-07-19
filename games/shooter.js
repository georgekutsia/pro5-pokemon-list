

const start = async () => {
  await getPokemonFullList();
  inputFilterByName(newPokemonlist);
};

const canvas$$ = document.querySelector("#canvas");

const ctx = canvas$$.getContext("2d");

const game = new Game(ctx);

const start$$ = document.querySelector("#shooter-start");

start$$.addEventListener("click", function () {
  if (game.interval) {
    game.stop();
    start$$.innerText = "Start";
  } else {
    game.start();
    start$$.innerText = "Stop";
  }
});
