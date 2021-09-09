const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
  "https://cocktails-240e.restdb.io/rest/recipes?q={%22_id%22%20:%20{%22$in%22%20:%20[%22" +
  id +
  "%22]}}";

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
}
