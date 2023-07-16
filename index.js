const main$$ = document.querySelector(".main-div1");

const newPokemonlist = []
const getPokemonFullList = async () => {
    for (let i = 1; i <= 150; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const jsonify = await response.json()
    newPokemonlist.push(jsonify);
  }
}

const drawPokemons = (fullList) =>{
    for(const data of fullList){
      const colors = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige",
      "bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue",
      "chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue",
      "darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta",
      "darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue",
      "darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray",
      "dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro",
      ];
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];

      let characterCard1$$ = document.createElement("figure");
        characterCard1$$.innerHTML = `
            <div>
            <img  content: url("../../public/img/pokeball.png"); src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name.toUpperCase()}</h2>
            </div>
            <div>
            <article> Este pokemon se llama ${
              data.name.charAt(0).toUpperCase() + data.name.slice(1)
            };</article>
            <p style="color:${randomColor}"> y es de tipo ${data.types[0].type.name} </p>
            </div>;
    `;

        main$$.appendChild(characterCard1$$);
  }
  // return fullList.map((data) => ({
  //   nombre: data.name,
  //   peso: data.weight
  // }
  // ))
}


const start = async () => {
  await getPokemonFullList();
  // const data = getFullListData(list)
  drawPokemons(newPokemonlist);
}
start()