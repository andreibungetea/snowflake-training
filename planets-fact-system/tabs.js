// -------- Tabs -----------
const planetOverviewButton = document.querySelector(".planet-overview-button");
const planetStructureButton = document.querySelector(".planet-structure-button");
const planetSurfaceButton = document.querySelector(".planet-surface-button");

const handelDisplayPlanetOverview = () => {
    
    // stergem clasa selected-tab de pe butonul selectat in prezent
    const currentlySelectedTab = document.querySelector("selected-tab"); 
    currentlySelectedTab.classList.remove("selected-tab"); 
    // adauga clasa selected-tab pe noul buton selectat
    planetOverviewButton.classList.add("selected-tab");
};
planetOverviewButton.addEventListener("click", handelDisplayPlanetOverview);

const handelDisplayPlanetStructure = () => {

    const currentlySelectedTab = document.querySelector(".selected-tab");
    currentlySelectedTab.classList.remove("selected-tab");
    planetStructureButton.classList.add("selected-tab");

    // modificam imaginea. modificam sursa
    const planetImage = () => {
        planetImage.setAttribute("src", planetData.images.internal);
    };


    // modificam paragraful
    const planetDescription = document.querySelector(".planet-description");
    planetDescription.innerText = planetData.structure.content;

    // modificam link-ul
    const planetDescriptionSource = document.querySelector(".planet-description-source");
    planetDescriptionSource.setAttribute("href", planetData.structure.source);
};

planetStructureButton.addEventListener("click", handelDisplayPlanetStructure);

const handleDisplayPlanetSurface = () => {
    const currentlySelectedTab = document.querySelector("selected-tab");
    currentlySelectedTab.classList.remove("selected-tab");
    planetSurfaceButton.classList.add("selected-tab");
};

planetSurfaceButton.addEventListener("click", handleDisplayPlanetSurface);