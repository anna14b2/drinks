const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = `https://cocktails-240e.restdb.io/rest/recipes?q={"_id" : {"$in" : ["${id}"]}}`;
console.log(url);

// The API key
const options = {
  headers: {
    "x-apikey": "613731bc43cedb6d1f97edad",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showCocktail(data));

// populate the page

function showCocktail(cocktail) {
  console.log(cocktail);

  document.querySelector("h1").textContent = cocktail.Name;
  console.log(cocktail.Name);
  document.querySelector(".ingredients").textContent = cocktail.Ingredients;
  document.querySelector(".instructions").textContent = cocktail.Recipe;
  document.querySelector("img").setAttribute("src", cocktail.img);
  document.querySelector("img").setAttribute("alt", cocktail.Name + "picture");
}
