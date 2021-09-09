const urlParams = new URLSearchParams(window.location.search);
const cocktail = urlParams.get("cocktail");
console.log(cocktail);

const url = `https://cocktails-240e.restdb.io/rest/recipes?q={"Name" : {"$in" : ["${cocktail}"]}}`;
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

function getProductRecipe(drink) {
  drink.forEach(showCocktail);
}

// populate the page

function showCocktail(dr) {
  // console.log(dr[0]);

  const product = dr[0];
  // console.log(product);

  document.querySelector("h1").textContent = product.Name;
  console.log(product.Name);

  document.querySelector(".ingredients").innerHTML =
    "<p>" + product.Ingredients + "</p>";
  document.querySelector(".instructions").innerHTML =
    "<p>" + product.Recipe + "<p>";

  document.querySelector("img").setAttribute("src", product.img);
  document.querySelector("img").setAttribute("alt", product.Name + "picture");
}
