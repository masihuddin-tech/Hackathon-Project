// Dummy hackathon data
const hackathons = [
  { name: "AI Challenge 2025", date: "2025-09-10", category: "AI", description: "Build innovative AI solutions." },
  { name: "WebDev Fest", date: "2025-10-05", category: "Web Development", description: "Create modern web apps." },
  { name: "App Sprint", date: "2025-08-25", category: "App Development", description: "Develop mobile applications." }
];

const hackathonList = document.getElementById("hackathonList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const dateFilter = document.getElementById("dateFilter");

function displayHackathons(data) {
  hackathonList.innerHTML = "";
  data.forEach(h => {
    hackathonList.innerHTML += `
      <div class="card">
        <h3>${h.name}</h3>
        <p><strong>Date:</strong> ${h.date}</p>
        <p><strong>Category:</strong> ${h.category}</p>
        <p>${h.description}</p>
        <button onclick="register('${h.name}')">Register</button>
      </div>
    `;
  });
}

function register(hackathonName) {
  alert(`You have registered for ${hackathonName}!`);
}

function filterHackathons() {
  let searchText = searchInput.value.toLowerCase();
  let category = categoryFilter.value;
  let dateType = dateFilter.value;

  let filtered = hackathons.filter(h => 
    h.name.toLowerCase().includes(searchText) &&
    (category === "" || h.category === category) &&
    (dateType === "" || 
      (dateType === "upcoming" && new Date(h.date) >= new Date()) ||
      (dateType === "past" && new Date(h.date) < new Date())
    )
  );

  displayHackathons(filtered);
}

searchInput.addEventListener("input", filterHackathons);
categoryFilter.addEventListener("change", filterHackathons);
dateFilter.addEventListener("change", filterHackathons);

// Initial display
displayHackathons(hackathons);
