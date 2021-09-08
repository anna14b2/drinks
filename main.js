const url = "https://cocktails-240e.restdb.io/rest/recipes";

// The API key
const options = {
  headers: {
    "x-apikey": "613731bc43cedb6d1f97edad",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // we have the data
    console.log(data);
    // handleData(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

// The code above is copied from the slides restdb.io (slide 34) how to fetch.

//Code for recipe list

//fetch data

//comment out while styling

// fetch("https://cocktails-240e.restdb.io/rest/recipes")
//   .then((res) => res.json())
//   .then(gotData);

// //
// function gotData(data) {
//   data.forEach(showRecipe);
// }

// function showRecipe(recipe) {
//   const template = document.querySelector(".recipelist_template").content;
//   const copy = template.cloneNode(true);

//   copy.querySelector(
//     "img"
//   ).src = `http://www.kea.paufiaschi.com/2sem/cocktails/${recipes._id}.jpeg`;
//   copy.querySelector("img").alt = recipe.name;
//   copy.querySelector("h2").textContent = recipes.name;
//   copy.querySelector("a").href = `productpage.html?recipe=${recipe.name}`;

//   const topParent = document.querySelector(".recipe_idea");
//   const elemParent = topParent.querySelector("a");
//   elemParent.appendChild(copy);
// }
