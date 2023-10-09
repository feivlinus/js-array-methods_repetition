const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

//Task 1
// ['Crepes', ...]
const onlyTitles = recipes.map((recipe) => {
  return recipe.title;
});

// onlyTitles.forEach((entry) => {
//   console.log(entry);
// });

//Task 2
// ['Crepes (60min)', ...]
const titlesWithDuration = recipes.map((recipe) => {
  return `${recipe.title} (${recipe.duration}min)`;
});

// titlesWithDuration.forEach((entry) => {
//   console.log(entry);
// });

//Task 3
// [20, 10, 432, 12]
const timePerServing = recipes.map((recipe) => {
  return recipe.servings;
});

// timePerServing.forEach((entry) => {
//   console.log(entry);
// });

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

//Task 4
// 'Crepes, Scrambled Eggs, ...'
const allTitlesInOneString = recipes
  .map((recipe) => {
    return recipe.title;
  })
  .join(", ");

//console.log(allTitlesInOneString);

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

//Task 5
const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  return recipe.duration <= 60;
});

// recipesThatOnlyTake60minutesOrLess.forEach((entry) => {
//   console.log(entry);
// });

//Task 6
const allRecipesWithMoreThan2Servings = recipes.filter((recipe) => {
  return recipe.servings > 2;
});

// allRecipesWithMoreThan2Servings.forEach((entry) => {
//   console.log(entry);
// });

//Task 7
const allRecipesWithTitlesLongerThan12Characters = recipes.filter((recipe) => {
  return recipe.title.length > 12;
});

// allRecipesWithTitlesLongerThan12Characters.forEach((entry) => {
//   console.log(entry);
// });

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
