// import initAnimaNumeros from "./anima-numeros";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
    
    // initAnimaNumeros(); //initAnimaNumeros
  }

  function createAnimal(animal) {
    const divAnimal = document.createElement("div");
    divAnimal.classList.add("numero-animal");
    divAnimal.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return divAnimal;
  }

  fetchAnimais("./animaisapi.json");
}
