// import dataPokemon from '../data/match';

const dataPokemon = [
  {
    id: 1,
    name: "Squirtle",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-5_wtxzum.webp",
  },
  {
    id: 2,
    name: "Meowth",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-6_o9wp42.webp",
  },
  {
    id: 3,
    name: "Lickitung",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-7_ukalq3.png",
  },
  {
    id: 4,
    name: "Chien-piao",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-11_pqwdmg.png",
  },
  {
    id: 5,
    name: "Bulbasur",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-1_x0in1x.jpg",
  },
  {
    id: 6,
    name: "Delphox",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-13_xahbf2.jpg",
  },
  {
    id: 7,
    name: "Charizard",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-2_nkp2at.png",
  },
  {
    id: 8,
    name: "Lugia",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-12_wclzce.jpg",
  },
  {
    id: 17,
    name: "Squirtle",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-5_wtxzum.webp",
  },
  {
    id: 18,
    name: "Meowth",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-6_o9wp42.webp",
  },
  {
    id: 19,
    name: "Lickitung",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-7_ukalq3.png",
  },
  {
    id: 20,
    name: "Chien-piao",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-11_pqwdmg.png",
  },
  {
    id: 21,
    name: "Bulbasur",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-1_x0in1x.jpg",
  },
  {
    id: 22,
    name: "Delphox",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-13_xahbf2.jpg",
  },
  {
    id: 23,
    name: "Charizard",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-2_nkp2at.png",
  },
  {
    id: 24,
    name: "Lugia",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-12_wclzce.jpg",
  },
];







dataPokemon.sort(() => 0.5 - Math.random());


let matchChosenCards = [];
let matchWonCards = [];

function createBoard() {
    match$$.style.display = "block";
    main0$$.style.display = "none";
    main1$$.style.display = "none";
  body$$.style.backgroundImage = 'url("./public/img/background-match.jpeg")';

  for (let i = 0; i < dataPokemon.length; i++) {
    const matchCard = dataPokemon[i];
    const newCard$$ = document.createElement("img");
    newCard$$.setAttribute("src", "../public/img/pokeball.png");
    newCard$$.setAttribute("data-id", matchCard.id);
    newCard$$.addEventListener("click", (event) => flipNewCard(event.target, i));
    grid$$.appendChild(newCard$$);

  }
}



// Objeto de mapeo de nombres de Pokémon a las rutas de imagen
const pokemonImages = {
  Squirtle: "../public/img/loading12.gif",
  Meowth: "../public/img/loading13.gif",
  Lickitung: "../public/img/loading14.gif",
  "Chien-piao": "../public/img/loading18.gif",
  Bulbasur: "../public/img/loading15.gif",
  Delphox: "../public/img/loading16.gif",
  Charizard: "../public/img/loading2.gif",
  Lugia: "../public/img/loading17.gif"
};

function checkForMatch() {
  const optionOne = matchChosenCards[0];
  const optionTwo = matchChosenCards[1];
  const cardOne$$ = document.querySelector('[data-id="' + optionOne.id + '"]');
  const cardTwo$$ = document.querySelector('[data-id="' + optionTwo.id + '"]');
  
  if (optionOne.name === optionTwo.name && optionOne.id !== optionTwo.id && pokemonImages.hasOwnProperty(optionOne.name)) {
    const loadingImg = pokemonImages[optionOne.name];
    cardOne$$.setAttribute("src", loadingImg);
    cardTwo$$.setAttribute("src", loadingImg);
    cardOne$$.removeEventListener("click", flipNewCard);
    cardTwo$$.removeEventListener("click", flipNewCard);
    matchWonCards.push(optionOne);
  } else {
    cardOne$$.setAttribute("src", "../public/img/pokeball.png");
    cardTwo$$.setAttribute("src", "../public/img/pokeball.png");
  }
  
  matchChosenCards = [];
  matchCheckScore();
}

let flipNewCardEnabled = true;

function flipNewCard(choseCard, i) {
  if (!flipNewCardEnabled) {
    return; 
  }

  const card = dataPokemon[i];
  const cardWon = matchWonCards.find((findCard) => findCard.name === card.name);
  if (!cardWon) {
    matchChosenCards.push(card);
    choseCard.setAttribute("src", card.img);
    if (matchChosenCards.length === 2) {
      flipNewCardEnabled = false; 
      setTimeout(() => {
        checkForMatch();
        flipNewCardEnabled = true; 
      }, 1000);
    }
  }
}
function matchCheckScore() {
  attempts$$.textContent = Number(attempts$$.textContent) + 1;
  if (matchWonCards.length === dataPokemon.length / 2) {
    espectacular$$.style.display = "block";
    grid$$.style.display = "none"
  }
}


allMatch$$.addEventListener("click", () => createBoard());
