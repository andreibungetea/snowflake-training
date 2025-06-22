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

    // generateSection();

    
    const generateSection = () => {
          const planetSection = document.createElement("section"); // <section></section>
          planetSection.innerHTML = `
            <img src="${planetData.images.planet}" class="planet-image" />
            <h1>${planetData.name}</h1>
            <p class="planet-description">${planetData.overview.content}</p>
            <div>
              <span>Source: </span>
              <a href="${planetData.overview.source}" class="planet-descripiton-source" target="_blank">
                Wikipedia
                <img src="./assets/icon-source.svg" />
              </a>
            </div>
          `;
          document.body.appendChild(planetSection); //apelam functia
    };
};



getPlanetData();


