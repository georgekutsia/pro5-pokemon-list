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
    id: 9,
    name: "Chien-pao",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-11_pqwdmg.png",
  },
  {
    id: 10,
    name: "Chi-yu",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-9_vh5go0.png",
  },
  {
    id: 11,
    name: "Araquanid",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-10_yo2uoe.png",
  },
  {
    id: 12,
    name: "Blastoise",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-14_wvnq2i.jpg",
  },
  {
    id: 13,
    name: "Mew-to",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-3_bcjcpu.png",
  },
  {
    id: 14,
    name: "Pikachu",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590864/games/match-pokemon/card-4_xjq7ii.png",
  },
  {
    id: 15,
    name: "Jolteon",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-16_gx5dkk.jpg",
  },
  {
    id: 16,
    name: "Hormigatron",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-15_ksifcn.webp",
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
    name: "Dragoncete",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590860/games/match-pokemon/card-8_x2st1r.webp",
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
  {
    id: 25,
    name: "Chien-pao",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-11_pqwdmg.png",
  },
  {
    id: 26,
    name: "Chi-yu",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-9_vh5go0.png",
  },
  {
    id: 27,
    name: "Araquanid",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-10_yo2uoe.png",
  },
  {
    id: 28,
    name: "Blastoise",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590861/games/match-pokemon/card-14_wvnq2i.jpg",
  },
  {
    id: 29,
    name: "Mew-to",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590862/games/match-pokemon/card-3_bcjcpu.png",
  },
  {
    id: 30,
    name: "Pikachu",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590864/games/match-pokemon/card-4_xjq7ii.png",
  },
  {
    id: 31,
    name: "Jolteon",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-16_gx5dkk.jpg",
  },
  {
    id: 32,
    name: "Hormigatron",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1689590868/games/match-pokemon/card-15_ksifcn.webp",
  },
];

export default dataPokemon