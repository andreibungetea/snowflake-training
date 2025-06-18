let planetData; //undefined

const getPlanetData = async () => {
    const response = await fetch("./data.json");
    const data = await response.json(); //convertirea datelor din json la js

    const startIndex = window.location.pathname.lastIndexOf("/");
    const lastIndex = window.location.pathname.indexOf(".");
    const planetName = window.location.pathname.slice(startIndex + 1, lastIndex);

    console.log(window.location.pathname); //aflam adresa url-ului 
    console.log(planetName);
    
    const planetData = data.find(
        (element) => element.name.toLowerCase() === planetName
    );
    console.log(planetData);

    generateSection();
    
   
};

const generateSection = () => {
    // cream continut de html in js
     const planetSection = document.createElement("section"); //<section></section>
    planetSection.innerHTML = `
    <img src="${planetData.images.planet}" class="planet-image" /> //adaugam img in int section-ului din html
    <h1>${planetData.name}</h1>
    <p class="planet-description">${planetData.overview.content}</p>
    <div> 
    <span>Source :</span>
    <a href="${planetData.overview.source}" class="planet-description-source" target=_blank>
    Wikipedia
    <img src="./assets/icon-source.svg" />
    </a>
    </div>
    `
    document.body.appendChild(planetSection); // il adaugam in pagina sa il vedem
};

getPlanetData();


