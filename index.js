let intervalTimer = 2000;
//intervali timer marca la primera carga, para la animación, pero para los siguientes filtros
//no me hace falta que sea tan largo, así que es una constante que cambio tras el primer mapeo

const newPokemonlist = [];
const magikarp = {}
const getPokemonFullList = async () => {
  for (let i = 1; i <= 150; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const jsonify = await response.json();
    newPokemonlist.push(jsonify);
  }
};
const drawPokemons = (fullList) => {
  main1$$.innerHTML = "";
  main0$$.style.display = "none";
  main1$$.style.display = "flex";
  main3$$.style.display = "none";
  match$$.style.display = "none";
  headerDiv$$.style.display = "flex";
  const loadingImage$$ = document.querySelector("#loading-image");
  // const randomNumber = Math.floor(Math.random() * 10 + 1)
  // loadingImage$$.setAttribute("src", `./public/img/loading${randomNumber}.gif`);
  loadingImage$$.setAttribute("src", `./public/img/loading11.gif`);
  loadingImage$$.style.display = "block";

  setTimeout(() => {
    for (const data of fullList) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];
      let characterCard1$$ = document.createElement("figure");
      characterCard1$$.innerHTML = `
    <div>
      <img  content: url("../../public/img/pokeball.png"); src="${data.sprites.front_default}" alt="${data.name}">
      <h2>${data.name.toUpperCase()}(${data.id})</h2>
    </div>
    <div>
      <article> Este pokemon se llama ${data.name.charAt(0).toUpperCase() + data.name.slice(1)};</article>
      <p style="color:${randomColor}"> y es tipo ${data.types[0].type.name} </p>
    </div>
    `;
      // for (const abil of data.abilities) {
      //   let listAbs$$ = document.createElement("p");
      //   listAbs$$.innerText = abil.ability.name;
      // }
      main1$$.appendChild(characterCard1$$);
    }
    if (fullList.length > 0) {
      h3$$.textContent = `Encontrados: ${fullList.length}`;
    }
    if (fullList.length === 0) {
      h3$$.textContent = `¿Qué estás diciendo?`;
    }
    loadingImage$$.style.display = "none";
    allPokemon$$.style.backgroundImage = 'url("./public/img/open.png")';
    allTasks$$.style.backgroundImage = 'url("./public/img/pokeball.png")';
    allMatch$$.style.backgroundImage = 'url("./public/img/pokeball.png")';
    allMagikarp$$.style.backgroundImage = 'url("./public/img/pokeball.png")';
    body$$.style.backgroundColor = "rgb(195, 152, 255)";
    input1$$.style.display = "block";
    inputText1$$.style.display = "block";
    h1$$.style.color = "black";
    h1$$.innerText = "Primera generación!";
    h1$$.style.backgroundColor = "rgba(255, 255, 255, 0.509)";
  }, intervalTimer);
  intervalTimer = 0;
};

  const inputFilterByName = (char) => {
  input1$$.addEventListener("input", () => searchByName(input1$$.value, char));
};

const searchByName = (filter, listChars) => {
  let filtered = listChars.filter((char) => {
    const nameMatch = char.name.toLowerCase().includes(filter.toLowerCase());
    const typeMatch = char.types[0].type.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    return nameMatch || typeMatch;
  });
  notFoundImg$$.style.display = filtered.length === 0 ? "block" : "none";
  drawPokemons(filtered);
};

const start = async () => {
  await getPokemonFullList();
  inputFilterByName(newPokemonlist);
};

start();

allPokemon$$.addEventListener("click", () => drawPokemons(newPokemonlist));
