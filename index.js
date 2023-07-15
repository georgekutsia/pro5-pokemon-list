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
        let characterCard1$$ = document.createElement("figure");
        characterCard1$$.innerHTML = `
            <div>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name.toUpperCase()}</h2>
            </div>
            <div>
            <p> Este pokemon se llama ${
              data.name.charAt(0).toUpperCase() + data.name.slice(1)
            };</p>
            <p>y es de tipo ${data.types[0].type.name} </p>
            </div>;
    `;
        // characterCard2$$.innerHTML = `
        //   <p> Este pokemon se llama ${data.name.charAt(0).toUpperCase() + data.name.slice(1)};</p>
        //   <p>y es de tipo ${data.types[0].type.name} </p>`;
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