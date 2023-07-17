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
    name: "Dragoncete",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-8_x2st1r.webp",
  },
  // {
  //   id: 5,
  //   name: "Bulbasur",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-1_x0in1x.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Delphox",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-13_xahbf2.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Charizard",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-2_nkp2at.png",
  // },
  // {
  //   id: 8,
  //   name: "Lugia",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-12_wclzce.jpg",
  // },
  // {
  //   id: 9,
  //   name: "Chien-pao",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-11_pqwdmg.png",
  // },
  // {
  //   id: 10,
  //   name: "Chi-yu",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-9_vh5go0.png",
  // },
  // {
  //   id: 11,
  //   name: "Araquanid",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-10_yo2uoe.png",
  // },
  // {
  //   id: 12,
  //   name: "Blastoise",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-14_wvnq2i.jpg",
  // },
  // {
  //   id: 13,
  //   name: "Mew-to",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-3_bcjcpu.png",
  // },
  // {
  //   id: 14,
  //   name: "Pikachu",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590864/games/match-pokemon/card-4_xjq7ii.png",
  // },
  // {
  //   id: 15,
  //   name: "Jolteon",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-16_gx5dkk.jpg",
  // },
  // {
  //   id: 16,
  //   name: "Hormigatron",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-15_ksifcn.webp",
  // },
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
    name: "Dragoncete",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-8_x2st1r.webp",
  },
  // {
  //   id: 21,
  //   name: "Bulbasur",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-1_x0in1x.jpg",
  // },
  // {
  //   id: 22,
  //   name: "Delphox",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-13_xahbf2.jpg",
  // },
  // {
  //   id: 23,
  //   name: "Charizard",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-2_nkp2at.png",
  // },
  // {
  //   id: 24,
  //   name: "Lugia",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-12_wclzce.jpg",
  // },
  // {
  //   id: 25,
  //   name: "Chien-pao",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-11_pqwdmg.png",
  // },
  // {
  //   id: 26,
  //   name: "Chi-yu",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-9_vh5go0.png",
  // },
  // {
  //   id: 27,
  //   name: "Araquanid",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-10_yo2uoe.png",
  // },
  // {
  //   id: 28,
  //   name: "Blastoise",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-14_wvnq2i.jpg",
  // },
  // {
  //   id: 29,
  //   name: "Mew-to",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-3_bcjcpu.png",
  // },
  // {
  //   id: 30,
  //   name: "Pikachu",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590864/games/match-pokemon/card-4_xjq7ii.png",
  // },
  // {
  //   id: 31,
  //   name: "Jolteon",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-16_gx5dkk.jpg",
  // },
  // {
  //   id: 32,
  //   name: "Hormigatron",
  //   img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-15_ksifcn.webp",
  // },
];







dataPokemon.sort(() => 0.5 - Math.random());

const grid$$ = document.querySelector('#match-cards');
const score$$ = document.querySelector('#match-score');
const attempts$$ = document.querySelector('#match-try');

let matchChosenCards = [];
let matchWonCards = [];

function createBoard() {
  for (let i = 0; i < dataPokemon.length; i++) {
    const matchCard = dataPokemon[i];
    const newCard$$ = document.createElement("img");
    newCard$$.setAttribute("src", "../public/img/pokeball.png");
    newCard$$.setAttribute("data-id", matchCard.id);
    newCard$$.addEventListener("click", (event) => flipNewCard(event.target, i));
    grid$$.appendChild(newCard$$);
  }
}



function checkForMatch() {
  const optionOne = matchChosenCards[0];
  const optionTwo = matchChosenCards[1];
  const cardOne$$ = document.querySelector('[data-id="' + optionOne.id + '"]');
  const cardTwo$$ = document.querySelector('[data-id="' + optionTwo.id + '"]');
  console.log(cardTwo$$)
  if (optionOne.id === optionTwo.id) {
    cardOne$$.setAttribute("src", "../public/img/pokeball.png");
    cardTwo$$.setAttribute("src", "../public/img/pokeball.png");
  } else if (optionOne.name === optionTwo.name && optionOne.id !== optionTwo.id) {
    cardOne$$.setAttribute("src", "../public/img/loading2.gif");
    cardTwo$$.setAttribute("src", "../public/img/loading2.gif");
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
  score$$.textContent = matchWonCards.length;
  attempts$$.textContent = Number(attempts$$.textContent) + 1;
  if (matchWonCards.length === dataPokemon.length / 2) {
    score$$.textContent = "A topeeee!!! todo bien!";
  }
}

createBoard();

