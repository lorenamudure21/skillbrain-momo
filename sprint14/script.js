// Helper function to fetch JSON data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to load data");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Main function to load data and initialize functionality
async function initializeApp() {
  const data = await fetchData("data.json");
  if (!data) return;

  const { destinations, crew, technology } = data;
  setupEventHandlers(destinations, crew, technology);
}

// Set up event listeners for navigation
function setupEventHandlers(destinations, crew, technology) {
  document.getElementById("btn-home").addEventListener("click", () => showSection("home-section"));
  document.getElementById("btn-destination").addEventListener("click", () => updateDestination(destinations[0]));
  document.getElementById("btn-crew").addEventListener("click", () => updateCrew(crew[0]));
  document.getElementById("btn-technology").addEventListener("click", () => updateTechnology(technology[0]));
}

// Show the requested section and hide others
function showSection(sectionId) {
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

// Update Destination section
function updateDestination(destination) {
  document.getElementById("destination-title").textContent = destination.name;
  document.getElementById("destination-description").textContent = destination.description;
  document.getElementById("distance").textContent = destination.distance;
  document.getElementById("travel-time").textContent = destination.travel;
  document.getElementById("destination-image").src = destination.images.png;

  showSection("destination-section");
  setBackground("assets/destination/background-destination-desktop.jpg.png");
}

// Update Crew section
function updateCrew(member) {
  document.getElementById("crew-role").textContent = member.role.toUpperCase();
  document.getElementById("crew-name").textContent = member.name;
  document.getElementById("crew-description").textContent = member.bio;
  document.getElementById("crew-image").src = member.images.png;

  showSection("crew-section");
  setBackground("assets/crew/background-crew-desktop.png");
}

// Update Technology section
function updateTechnology(tech) {
  document.getElementById("technology-name").textContent = tech.name;
  document.getElementById("technology-description").textContent = tech.description;
  document.getElementById("technology-image").src = tech.images.portrait;

  showSection("technology-section");
  setBackground("assets/technology/background-technology-desktop.jpg");
}

// Set background image dynamically
function setBackground(imageUrl) {
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Initialize the app
initializeApp();
