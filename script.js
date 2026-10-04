// candidate pool of planets and sectors[cite: 38]
const campaignSectors = [
    { name: "Tatooine" },
    { name: "Hoth" },
    { name: "Coruscant" },
    { name: "Death Star" }
];
let currentSectorIndex = 0;
let activePlanet = "Tatooine";
let selectedStat = "height";
let aiDifficulty = "easy";
let mindTrickAvailable = true;
let preSelectedCpuCardIndex = null;

// expanded roster of character templates with working visualguide image urls[cite: 38]
const characterRoster = [
    { id: 1, name: "Luke Skywalker", role: "Jedi", saber: "Green", saberClass: "saber-green", affiliation: "Rebellion", homeworld: "Tatooine", species: "Human", height: "172", mass: "77", films: 4, vehicles: 2, starships: 2, birth_year: "19BBY", img: "https://starwars-visualguide.com/assets/img/characters/1.jpg" },
    { id: 2, name: "C-3PO", role: "Droid", saber: "None", saberClass: "saber-none", affiliation: "Rebellion", homeworld: "Tatooine", species: "Droid", height: "167", mass: "75", films: 6, vehicles: 0, starships: 0, birth_year: "112BBY", img: "https://starwars-visualguide.com/assets/img/characters/2.jpg" },
    { id: 3, name: "R2-D2", role: "Droid", saber: "None", saberClass: "saber-none", affiliation: "Rebellion", homeworld: "Naboo", species: "Droid", height: "96", mass: "32", films: 6, vehicles: 0, starships: 0, birth_year: "33BBY", img: "https://starwars-visualguide.com/assets/img/characters/3.jpg" },
    { id: 4, name: "Darth Vader", role: "Sith", saber: "Red", saberClass: "saber-red", affiliation: "Empire", homeworld: "Tatooine", species: "Human", height: "202", mass: "136", films: 4, vehicles: 0, starships: 1, birth_year: "41.9BBY", img: "https://starwars-visualguide.com/assets/img/characters/4.jpg" },
    { id: 5, name: "Leia Organa", role: "Rebel Leader", saber: "None", saberClass: "saber-none", affiliation: "Rebellion", homeworld: "Alderaan", species: "Human", height: "150", mass: "49", films: 4, vehicles: 1, starships: 0, birth_year: "19BBY", img: "https://starwars-visualguide.com/assets/img/characters/5.jpg" },
    { id: 10, name: "Obi-Wan Kenobi", role: "Jedi", saber: "Blue", saberClass: "saber-blue", affiliation: "Rebellion", homeworld: "Stewjon", species: "Human", height: "182", mass: "77", films: 6, vehicles: 1, starships: 5, birth_year: "57BBY", img: "https://starwars-visualguide.com/assets/img/characters/10.jpg" },
    { id: 11, name: "Anakin Skywalker", role: "Jedi", saber: "Blue", saberClass: "saber-blue", affiliation: "Republic", homeworld: "Tatooine", species: "Human", height: "188", mass: "84", films: 3, vehicles: 2, starships: 3, birth_year: "41.9BBY", img: "https://starwars-visualguide.com/assets/img/characters/11.jpg" },
    { id: 13, name: "Chewbacca", role: "Warrior", saber: "None", saberClass: "saber-none", affiliation: "Rebellion", homeworld: "Kashyyyk", species: "Wookiee", height: "228", mass: "112", films: 4, vehicles: 1, starships: 2, birth_year: "200BBY", img: "https://starwars-visualguide.com/assets/img/characters/13.jpg" },
    { id: 14, name: "Han Solo", role: "Smuggler", saber: "None", saberClass: "saber-none", affiliation: "Rebellion", homeworld: "Corellia", species: "Human", height: "180", mass: "80", films: 4, vehicles: 0, starships: 2, birth_year: "29BBY", img: "https://starwars-visualguide.com/assets/img/characters/14.jpg" },
    { id: 20, name: "Yoda", role: "Jedi", saber: "Green", saberClass: "saber-green", affiliation: "Republic", homeworld: "Dagobah", species: "Yoda's species", height: "66", mass: "17", films: 5, vehicles: 0, starships: 0, birth_year: "896BBY", img: "https://starwars-visualguide.com/assets/img/characters/20.jpg" },
    { id: 21, name: "Palpatine", role: "Sith", saber: "Red", saberClass: "saber-red", affiliation: "Empire", homeworld: "Naboo", species: "Human", height: "170", mass: "75", films: 5, vehicles: 0, starships: 0, birth_year: "82BBY", img: "https://starwars-visualguide.com/assets/img/characters/21.jpg" },
    { id: 22, name: "Boba Fett", role: "Bounty Hunter", saber: "None", saberClass: "saber-none", affiliation: "Independent", homeworld: "Kamino", species: "Human", height: "183", mass: "78", films: 3, vehicles: 0, starships: 1, birth_year: "31.5BBY", img: "https://starwars-visualguide.com/assets/img/characters/22.jpg" },
    { id: 44, name: "Darth Maul", role: "Sith", saber: "Red", saberClass: "saber-red", affiliation: "Empire", homeworld: "Dathomir", species: "Zabrak", height: "175", mass: "80", films: 1, vehicles: 1, starships: 1, birth_year: "54BBY", img: "https://starwars-visualguide.com/assets/img/characters/44.jpg" },
    { id: 51, name: "Mace Windu", role: "Jedi", saber: "Purple", saberClass: "saber-blue", affiliation: "Republic", homeworld: "Haruun Kal", species: "Human", height: "192", mass: "84", films: 3, vehicles: 0, starships: 0, birth_year: "72BBY", img: "https://starwars-visualguide.com/assets/img/characters/51.jpg" },
    { id: 53, name: "Eeth Koth", role: "Jedi", saber: "Green", saberClass: "saber-green", affiliation: "Republic", homeworld: "Nar Shaddaa", species: "Zabrak", height: "171", mass: "86", films: 2, vehicles: 0, starships: 0, birth_year: "102BBY", img: "https://starwars-visualguide.com/assets/img/characters/53.jpg" },
    { id: 54, name: "Count Dooku", role: "Sith", saber: "Red", saberClass: "saber-red", affiliation: "Empire", homeworld: "Serenno", species: "Human", height: "193", mass: "86", films: 2, vehicles: 1, starships: 0, birth_year: "102BBY", img: "https://starwars-visualguide.com/assets/img/characters/54.jpg" }
];

// image lookup from the akabab dataset (ids match swapi people ids)
let imageById = {};
fetch("https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json")
    .then(r => r.json())
    .then(list => { list.forEach(c => { imageById[c.id] = c.image; }); })
    .catch(err => console.error("Image dataset failed:", err));

// placeholder used when an image can't load (inline SVG, never breaks)
function placeholderImg(name) {
    const initials = name.split(/[\s-]+/).map(w => w[0]).join("").slice(0, 3).toUpperCase();
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='125'>
        <rect width='100%' height='100%' fill='#171a26'/>
        <text x='50%' y='55%' font-size='42' font-family='sans-serif' font-weight='bold'
              fill='#ffe81f' text-anchor='middle'>${initials}</text></svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// counter system: force users, blaster wielders, and droids[cite: 38]
function getAdvantageMultiplier(attackerRole, defenderRole) {
    const isBlaster = (role) => ["Bounty Hunter", "Warrior", "Smuggler", "Rebel Leader"].includes(role);

    if (attackerRole === "Jedi" && isBlaster(defenderRole)) return 1.25;
    if (isBlaster(attackerRole) && defenderRole === "Droid") return 1.25;
    if (attackerRole === "Droid" && defenderRole === "Sith") return 1.25;
    if (attackerRole === "Sith" && defenderRole === "Jedi") return 1.25;
    return 1.0;
}

// reusable fetch wrapper with error handling[cite: 38]
function get(url, fct) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => fct(data))
        .catch(err => {
            console.error("SWAPI Fetch Error:", err);
            fct(null);
        });
}

// game state[cite: 38]
let playerHand = [];
let cpuHand = [];
let playerScore = 0;
let cpuScore = 0;
let currentRound = 1;

// attach stat picker buttons[cite: 38]
document.querySelectorAll(".stat-btn").forEach(btn => {
    if (btn.id === "diff-easy" || btn.id === "diff-thrawn") return;
    btn.onclick = () => {
        document.querySelectorAll(".stat-btn:not(#diff-easy):not(#diff-thrawn)").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedStat = btn.getAttribute("data-stat");
    };
});

// difficulty toggles[cite: 38]
document.getElementById("diff-easy").onclick = function () {
    aiDifficulty = "easy";
    this.classList.add("active");
    document.getElementById("diff-thrawn").classList.remove("active");
    document.getElementById("ai-mode-tag").innerText = "AI: EASY";
};

document.getElementById("diff-thrawn").onclick = function () {
    aiDifficulty = "thrawn";
    this.classList.add("active");
    document.getElementById("diff-easy").classList.remove("active");
    document.getElementById("ai-mode-tag").innerText = "AI: THRAWN";
};

// extract numeric values for stat battle comparison[cite: 38]
function extractStatValue(char, statKey) {
    if (statKey === "films") return char.filmCount || 0;
    if (statKey === "vehicles") return char.vehicleCount || 0;
    if (statKey === "starships") return char.starshipCount || 0;
    if (statKey === "birth_year") {
        const parsedYear = parseFloat(char.birth_year);
        return isNaN(parsedYear) ? 20 : parsedYear;
    }
    const val = parseFloat(char[statKey]);
    return isNaN(val) ? 50 : val;
}

function initGame() {
    document.getElementById("game-loading-status").innerText = "Selecting 10 unique fighters from the Holocron...";
    document.getElementById("btn-start-game").style.display = "none";

    const shuffledPool = [...characterRoster].sort(() => Math.random() - 0.5);
    const selectedTen = shuffledPool.slice(0, 10);

    let loaded = [];
    let processed = 0;

    selectedTen.forEach(template => {
        get(`https://www.swapi.tech/api/people/${template.id}`, data => {
            processed++;
            if (data && data.result) {
                const p = data.result.properties;
                loaded.push({
                    id: template.id,
                    img: template.img,
                    name: p.name || template.name,
                    role: template.role,
                    saber: template.saber,
                    saberClass: template.saberClass,
                    affiliation: template.affiliation,
                    homeworldName: template.homeworld,
                    speciesName: template.species,
                    height: p.height !== "unknown" ? p.height : template.height,
                    mass: p.mass !== "unknown" ? p.mass : template.mass,
                    birth_year: p.birth_year !== "unknown" ? p.birth_year : template.birth_year,
                    filmCount: (p.films && p.films.length) ? p.films.length : template.films,
                    vehicleCount: (p.vehicles && p.vehicles.length) ? p.vehicles.length : template.vehicles,
                    starshipCount: (p.starships && p.starships.length) ? p.starships.length : template.starships
                });
            } else {
                loaded.push({
                    id: template.id,
                    img: template.img,
                    name: template.name,
                    role: template.role,
                    saber: template.saber,
                    saberClass: template.saberClass,
                    affiliation: template.affiliation,
                    homeworldName: template.homeworld,
                    speciesName: template.species,
                    height: template.height,
                    mass: template.mass,
                    birth_year: template.birth_year,
                    filmCount: template.films,
                    vehicleCount: template.vehicles,
                    starshipCount: template.starships
                });
            }

            if (processed === selectedTen.length) {
                loaded.sort(() => Math.random() - 0.5);
                playerHand = loaded.slice(0, 5);
                cpuHand = loaded.slice(5, 10);

                document.getElementById("game-loading-status").innerText = "10 Unique Holocrons Synchronized!";
                document.getElementById("btn-start-game").style.display = "block";
            }
        });
    });
}

// start game button handler[cite: 38]
document.getElementById("btn-start-game").onclick = () => {
    document.getElementById("game-intro").style.display = "none";
    document.getElementById("game-board").style.display = "block";
    updateCampaignMap();
    renderHands();
};

// construct card html with image[cite: 38]
function buildCardHtml(char) {
    let roleClass = "role-bounty";
    if (char.role === "Sith") roleClass = "role-sith";
    else if (char.role === "Jedi") roleClass = "role-jedi";
    else if (char.role === "Droid") roleClass = "role-droid";
    else if (char.role === "Rebel Leader") roleClass = "role-leader";
    else if (char.role === "Warrior") roleClass = "role-warrior";
    else if (char.role === "Smuggler") roleClass = "role-smuggler";

    const isForceUser = char.role === "Jedi" || char.role === "Sith";
    const saberLine = isForceUser
        ? `<p class="saber-row"><strong>Lightsaber:</strong> <span class="saber-indicator ${char.saberClass}">⚡ ${char.saber}</span></p>`
        : "";

    const imageUrl = imageById[char.id] || char.img || placeholderImg(char.name);
    const safeName = char.name.replace(/'/g, "");

    return `
        <div class="card-badge-row">
            <span class="role-badge ${roleClass}">${char.role}</span>
            <span class="card-species">${char.speciesName}</span>
        </div>
        <img class="card-portrait" src="${imageUrl}" alt="${char.name}"
             referrerpolicy="no-referrer"
             onerror="this.onerror=null; this.src=placeholderImg('${safeName}')">
        <h3>${char.name}</h3>
        ${saberLine}
        <p><strong>Homeworld:</strong> ${char.homeworldName}</p>
        <p><strong>Height:</strong> ${char.height} cm | <strong>Mass:</strong> ${char.mass} kg</p>
        <p><strong>Films:</strong> ${char.filmCount} | <strong>Age:</strong> ${char.birth_year || "Unknown"}</p>
        <p><strong>Transports:</strong> ${char.vehicleCount + char.starshipCount}</p>
    `;
}

// render hands on battlefield[cite: 38]
function renderHands() {
    const playerContainer = document.getElementById("player-hand");
    const cpuContainer = document.getElementById("cpu-hand");
    playerContainer.innerHTML = "";
    cpuContainer.innerHTML = "";

    playerHand.forEach((char, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = buildCardHtml(char);
        card.onclick = () => playRound(index);
        playerContainer.appendChild(card);
    });

    cpuHand.forEach(() => {
        const back = document.createElement("div");
        back.className = "card-back";
        back.innerHTML = `<span class="card-back-icon">SW</span>`;
        cpuContainer.appendChild(back);
    });
}

// updates the visual campaign sector progression[cite: 38]
function updateCampaignMap() {
    document.querySelectorAll(".map-sector").forEach((el, idx) => {
        el.className = "map-sector";
        if (idx < currentSectorIndex) el.classList.add("liberated");
        else if (idx === currentSectorIndex) el.classList.add("current");
        else el.classList.add("locked");
    });
    activePlanet = campaignSectors[currentSectorIndex].name;
    document.getElementById("active-planet-name").innerText = activePlanet;
}

// grand admiral thrawn counter-picking algorithm[cite: 38]
function pickCpuCardIndex() {
    if (aiDifficulty === "easy" || cpuHand.length <= 1) {
        return Math.floor(Math.random() * cpuHand.length);
    }

    let bestIndex = 0;
    let highestPredictedScore = -Infinity;

    cpuHand.forEach((card, index) => {
        let base = extractStatValue(card, selectedStat);
        let buff = (card.homeworldName.toLowerCase() === activePlanet.toLowerCase()) ? 20 : 0;

        let avgCounterMult = 1.0;
        playerHand.forEach(pCard => {
            avgCounterMult += (getAdvantageMultiplier(card.role, pCard.role) - 1.0);
        });
        avgCounterMult = avgCounterMult / (playerHand.length || 1);

        let projectedPower = (base + buff) * avgCounterMult;
        if (projectedPower > highestPredictedScore) {
            highestPredictedScore = projectedPower;
            bestIndex = index;
        }
    });

    return bestIndex;
}

// jedi mind trick trigger[cite: 38]
document.getElementById("btn-mind-trick").onclick = function () {
    if (!mindTrickAvailable || cpuHand.length === 0) return;

    preSelectedCpuCardIndex = pickCpuCardIndex();
    const plannedCard = cpuHand[preSelectedCpuCardIndex];

    const preview = document.getElementById("mind-trick-preview");
    document.getElementById("revealed-card-name").innerText = `${plannedCard.name} (${plannedCard.role}, ${plannedCard.speciesName})`;
    preview.style.display = "block";

    mindTrickAvailable = false;
    this.disabled = true;
    this.innerText = "⚡ Mind Trick Spent";
};

// executes a round clash[cite: 38]
function playRound(playerIndex) {
    const cpuIndex = (preSelectedCpuCardIndex !== null && document.getElementById("mind-trick-preview").style.display === "block")
        ? preSelectedCpuCardIndex
        : pickCpuCardIndex();

    preSelectedCpuCardIndex = null;
    document.getElementById("mind-trick-preview").style.display = "none";

    const playerCard = playerHand.splice(playerIndex, 1)[0];
    const cpuCard = cpuHand.splice(cpuIndex, 1)[0];

    const battleModal = document.getElementById("battle-modal");
    const planetTitle = document.getElementById("clash-planet-title");
    const substatus = document.getElementById("clash-substatus");
    const clashPlayerSlot = document.getElementById("clash-card-player");
    const clashCpuSlot = document.getElementById("clash-card-cpu");
    const breakdownEl = document.getElementById("clash-stats-breakdown");
    const winnerSpotlight = document.getElementById("winner-spotlight");
    const saberFx = document.getElementById("saber-flash-fx");

    battleModal.style.display = "flex";
    winnerSpotlight.style.display = "none";
    breakdownEl.innerHTML = "";
    saberFx.className = "";
    planetTitle.innerText = `Battle Sector: ${activePlanet}`;
    substatus.innerText = "Fighters locking combat targets...";

    clashPlayerSlot.innerHTML = `<div class="card">${buildCardHtml(playerCard)}</div>`;
    clashCpuSlot.innerHTML = `<div class="card">${buildCardHtml(cpuCard)}</div>`;

    const isSaberDuel = (playerCard.role === "Jedi" || playerCard.role === "Sith") &&
        (cpuCard.role === "Jedi" || cpuCard.role === "Sith");
    if (isSaberDuel) {
        setTimeout(() => {
            saberFx.className = "flashing";
        }, 300);
    }

    setTimeout(() => {
        let playerBase = extractStatValue(playerCard, selectedStat);
        let cpuBase = extractStatValue(cpuCard, selectedStat);

        const playerBuff = (playerCard.homeworldName.toLowerCase() === activePlanet.toLowerCase()) ? 20 : 0;
        const cpuBuff = (cpuCard.homeworldName.toLowerCase() === activePlanet.toLowerCase()) ? 20 : 0;

        const playerAdv = getAdvantageMultiplier(playerCard.role, cpuCard.role);
        const cpuAdv = getAdvantageMultiplier(cpuCard.role, playerCard.role);

        const playerFinal = Math.round((playerBase + playerBuff) * playerAdv);
        const cpuFinal = Math.round((cpuBase + cpuBuff) * cpuAdv);

        breakdownEl.innerHTML = `
            <p><strong>Clash Stat:</strong> ${selectedStat.toUpperCase()}</p>
            <p><strong>Your Card (${playerCard.name}):</strong> Base ${playerBase} + Planet Bonus (${playerBuff}) × Counter Mult (${playerAdv}) = <strong>${playerFinal}</strong></p>
            <p><strong>Imperial Card (${cpuCard.name}):</strong> Base ${cpuBase} + Planet Bonus (${cpuBuff}) × Counter Mult (${cpuAdv}) = <strong>${cpuFinal}</strong></p>
        `;

        let winnerCard = null;
        let bannerText = "";

        if (playerFinal > cpuFinal) {
            playerScore++;
            winnerCard = playerCard;
            bannerText = `Winner: ${playerCard.name}! (Player)`;
        } else if (cpuFinal > playerFinal) {
            cpuScore++;
            winnerCard = cpuCard;
            bannerText = `Winner: ${cpuCard.name}! (Imperial AI)`;
        } else {
            bannerText = "Stalemate! Both cards neutralized.";
        }

        saberFx.className = "";
        winnerSpotlight.style.display = "block";
        document.getElementById("winner-banner-text").innerText = bannerText;
        document.getElementById("winner-card-container").innerHTML = winnerCard ? `<div class="card">${buildCardHtml(winnerCard)}</div>` : "";

        document.getElementById("score-player").innerText = playerScore;
        document.getElementById("score-cpu").innerText = cpuScore;
    }, 1000);

    // advance round or complete sector[cite: 38]
    document.getElementById("btn-next-round").onclick = () => {
        battleModal.style.display = "none";
        currentRound++;
        if (currentRound <= 5) {
            document.getElementById("round-indicator").innerText = `Round ${currentRound} / 5`;
            renderHands();
        } else {
            const gameOverModal = document.getElementById("game-over-modal");
            const sectorWon = playerScore > cpuScore;

            if (sectorWon) {
                currentSectorIndex++;
                if (currentSectorIndex < campaignSectors.length) {
                    alert(`Sector Liberated! You reclaimed ${activePlanet}! Advancing to next sector...`);
                    currentRound = 1;
                    playerScore = 0;
                    cpuScore = 0;
                    document.getElementById("score-player").innerText = "0";
                    document.getElementById("score-cpu").innerText = "0";
                    document.getElementById("round-indicator").innerText = `Round 1 / 5`;
                    updateCampaignMap();
                    initGame();
                } else {
                    document.getElementById("game-over-title").innerText = "Galactic Conquest Achieved!";
                    document.getElementById("game-over-score").innerText = `Death Star Destroyed! All Sectors Free!`;
                    document.getElementById("game-over-message").innerText = "You defeated Emperor Palpatine and restored peace to the galaxy!";
                    gameOverModal.style.display = "flex";
                }
            } else {
                document.getElementById("game-over-title").innerText = "Campaign Failed!";
                document.getElementById("game-over-score").innerText = `Defeated in ${activePlanet} Sector!`;
                document.getElementById("game-over-message").innerText = "The Imperial fleet overwhelmed your forces. The rebellion has fallen.";
                gameOverModal.style.display = "flex";
            }
        }
    };
}

// play again handler[cite: 38]
document.getElementById("btn-restart-game").onclick = () => {
    location.reload();
};

// run on initial page load[cite: 38]
initGame();