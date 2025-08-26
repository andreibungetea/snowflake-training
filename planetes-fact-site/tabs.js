// -------- TABS ---------

const planetOverviewButton = document.querySelector(".planet-overview-button");
const planetStructureButton = document.querySelector(".planet-structure-button");
const planetSurfaceButton = document.querySelector(".planet-surface-button");

const handleDisplayPlanetOverview = () => {
  // stergem clasa selected-tab de pe butonul selectat in prezent
  const currentlySelectedTab = document.querySelector(".selected-tab");
  currentlySelectedTab.classList.remove("selected-tab");
  //adaugam clasa selected-tab pe noul buton selectat
  planetOverviewButton.classList.add("selected-tab");

  const planetImage = document.querySelector(".planet-image");
  planetImage.setAttribute("src", planetData.images.planet);

  const planetDescription = document.querySelector(".planet-description");
  planetDescription.innerText = planetData.overview.content;
  
  const planetDescriptionSource = document.querySelector(".planet-description-source");
  planetDescriptionSource.setAttribute("href", planetData.overview.source);

};
planetOverviewButton.addEventListener("click", handleDisplayPlanetOverview);

const handleDisplayPlanetStructure = () => {
  //sterge clasa selected-tab de pe butonul selectat in prezent
  const currentlySelectedTab = document.querySelector(".selected-tab");
  currentlySelectedTab.classList.remove("selected-tab");
  //adauga clasa selected-tab pe noul buton selectat
  planetStructureButton.classList.add("selected-tab");

  const planetImage = document.querySelector(".planet-image");
  planetImage.setAttribute("src", planetData.images.internal);

  const planetDescription = document.querySelector(".planet-description");
  planetDescription.innerText = planetData.structure.content;

  const planetDescriptionSource = document.querySelector(".planet-description-source");
  planetDescriptionSource.setAttribute("href", planetData.structure.source);

};           

planetStructureButton.addEventListener("click", handleDisplayPlanetStructure);

const handleDisplayPlanetSurface = () => {
  //stergem clasa selected-tab de pe butonul selectat in prezent
  const currentlySelectedTab = document.querySelector(".selected-tab");
  currentlySelectedTab.classList.remove("selected-tab");
  //adaugam clasa selected-tab pe noul buton selectat
  planetSurfaceButton.classList.add("selected-tab"); 

  const planetImage = document.querySelector(".planet-image");
  planetImage.setAttribute("src", planetData.images.geology);

  const planetDescription = document.querySelector(".planet-description");
  planetDescription.innerText = planetData.geology.content;

 const planetDescriptionSource = document.querySelector(".planet-description-source");
 planetDescriptionSource.setAttribute("href", planetData.geology.source);

};

planetSurfaceButton.addEventListener("click", handleDisplayPlanetSurface);