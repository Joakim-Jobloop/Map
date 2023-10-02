const people = [
  {
    id: 1,
    name: "Victor the rainbow wolf",
    age: 32,
    occupation: "Hardwarewolf Engineer",
    image: "/images/dreamwolf.webp",
  },
  {
    id: 2,
    name: "Kitman the hitman",
    age: 28,
    occupation: "Security Manager",
    image: "/images/kitman.webp",
  },
  {
    id: 3,
    name: "Pen Gui",
    age: 35,
    occupation: "Sosial relations",
    image: "/images/penguin_in_the_desert.webp",
  },
  {
    id: 4,
    name: "Paulo Boermann",
    age: 35,
    occupation: "CEO",
    image: "/images/polar_bear_sherpa.webp",
  },
  {
    id: 5,
    name: "Ralph Pronsky",
    age: 19,
    occupation: "Intern",
    image: "/images/skating_red_panda.webp",
  },
  {
    id: 6,
    name: "Sputnik Shallow",
    age: 35,
    occupation: "Tech lead",
    image: "/images/steampunk_sparrow.webp",
  },
  // Add more people as needed
];

// To create cards for each person, you can use the following code:

const cardsContainer = document.getElementById("cards-container");

people.map((person) => {
  const card = `
    <div class="card">
      <img src="${person.image}" alt="${person.name}'s profile picture">
      <div class="card-content">
        <h2>${person.name}</h2>
        <p>Age: ${person.age}</p>
        <p>Occupation: ${person.occupation}</p>
      </div>
    </div>
 `;

  const newCard = document.createElement("div");
  newCard.innerHTML = card;
  cardsContainer.appendChild(newCard);
});



