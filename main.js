const urlParams = new URLSearchParams(window.location.search);
const spirit = urlParams.get("spirit");
console.log(spirit);

// This is the end point filtered by spirit, which is what we are using as categories / It is defined by restdb
const url = `https://cocktails-240e.restdb.io/rest/recipes?q={"Spirit" : {"$in" : ["${spirit}"]}}`;
console.log(url);

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
    getProductList(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

//Code for recipes list

//loop
function getProductList(drink) {
  drink.forEach(showRecipe);
}

function showRecipe(recipe) {
  // console.log(recipe);
  // console.log(recipe.img);

  // create templates
  const template = document.querySelector("#recipelist_template").content;

  // clone the template
  const copy = template.cloneNode(true);

  // make the product page match the recipe clicked
  copy
    .querySelector("a")
    .setAttribute("href", "productpage.html?cocktail=" + recipe.Name);
  console.log(recipe.Name);

  // change dinamic data

  copy.querySelector("h3").textContent = recipe.Name;
  copy.querySelector("img").setAttribute("src", recipe.img);
  copy.querySelector("img").setAttribute("alt", recipe.Name + "picture");

  const elemParent = document.querySelector("main");
  elemParent.appendChild(copy);
}
