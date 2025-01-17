/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables

let characterName = "Alex";
let age = Math.floor(Math.random() * 100); // Random age between 0 and 100
let favoriteFood = "Pizza";
let isSuperhero = Math.random() > 0.5; // Random boolean
let specialPowers = ["Invisibility", "Super Strength", "Flying"];

// Function to generate a random character description
function generateCharacter() {
    characterName = `Character ${Math.floor(Math.random()*100)}`;
    age = Math.floor(Math.random()*100);
    favoriteFood =["Pizza","Burger","Sushi","Ice Cream"][Math.floor(Math.random()*4)];
    isSuperher0 = Math.random() > 0.5;

    const powers = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    console.log(powers);
    
    const description = `
        Meet ${characterName}, a ${age}-year-old ${isSuperhero ? "superhero" : "regular person"} 
        who loves ${favoriteFood} and has the power of ${powers}!
    `;
    document.querySelector("#characterDescription").innerText = description;
}

// Functions to update character's age
function increaseAge() {
    console.log(age);
    age++;
    console.log(age);
    updateCharacterDescription();
}

function decreaseAge() {
    console.log(age);
    age--;
    console.log(age);
    updateCharacterDescription();
}

// Function to update the character's description after changing age
function updateCharacterDescription() {
    const description = `
        Meet ${characterName}, a ${age}-year-old ${isSuperhero ? "superhero" : "regular person"} 
        who loves ${favoriteFood} and has the power of ${specialPowers[0]}!
    `;
    document.querySelector("#characterDescription").innerText = description;
}

// Add event listeners for buttons using querySelector
document.querySelector('#generateButton').addEventListener('click', generateCharacter);
document.querySelector('#increaseAgeButton').addEventListener('click', increaseAge);
document.querySelector('#decreaseAgeButton').addEventListener('click', decreaseAge);
