const main$$ = document.querySelector(".main");

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
        let characterCard$$ = document.createElement("figure");
        characterCard$$.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <article> Este encantador pokemon se llama ${data.name.charAt(0).toUpperCase() + data.name.slice(1)};y es de tipo ${data.types[0].type.name}  
            </article>

    `;
        main$$.appendChild(characterCard$$);
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