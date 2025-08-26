let planetData;

const getPlanetData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();

  console.log(data);

  const startIndex = window.location.pathname.lastIndexOf("/");
  const lastIndex = window.location.pathname.indexOf(".");
  const planetName = window.location.pathname.slice(startIndex + 1 , lastIndex);
  
  console.log(planetName);
  
//context: avem un array de obiecte. fiecare obiect contine info despre o planeta anume 
//noi vrem sa luam din array acel obiect care contine info despre planeta pe e carei pagina suntem
//noi stim ce planeta cautam in functie de planetName
planetData = data.find((element) => element.name.toLowerCase() === planetName);

console.log(planetData);
// generare el de html in js:

generateSection();

};

const generateSection = () => {
    const planetSection = document.createElement("section"); //<section> </section> / - il pune in planetSection
// vrem ca section sa afiseze o imagine:
planetSection.innerHTML = ` 
<img src="${planetData.images.planet}" class="planet-image"/>
<h1 class="title-lg">${planetData.name}</h1>
<p class="planet-description text-md">${planetData.overview.content}</p>
<span>Source: </span>
<a href="${planetData.overview.source}" class="planet-description-source" target="_blank">Wikipedia<img src="./assets/icon-source.svg" /></a>

<div class="description-planet-container">
  <p class="description-planet">
  ROTATION TIME <span>${planetData.rotation}</span></p>
  <p class="description-planet">      
  REVOLUTION TIME <span>${planetData.revolution}</span></p>
  <p class="description-planet">     
  RADIUS <span>${planetData.radius}</span></p>
  <p class="description-planet">     
  AVERAGE TEMP. <span>${planetData.temperature}</span></p>     
</div>

`;
document.body.appendChild(planetSection); //adaugarea section-ului in pagina

};

getPlanetData();

