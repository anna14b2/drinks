const urlParams = new URLSearchParams(window.location.search);
const spirit = urlParams.get("spirit");

const url = "https://cocktails-240e.restdb.io/rest/recipes?spirit=" + spirit;

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
    // console.log(data);
    getProductList(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

// The code above is copied from the slides restdb.io (slide 34) how to fetch.

//Code for recipes list

//loop
function getProductList(drink) {
  drink.forEach(showRecipe);
}

function showRecipe(recipe) {
  console.log(recipe);
  console.log(recipe.img);

  // create templates
  const template = document.querySelector("#recipelist_template").content;

  // clone the template
  const copy = template.cloneNode(true);

  // change dinamic data

  copy.querySelector("h3").textContent = recipe.Name;
  copy.querySelector("img").setAttribute("src", recipe.img);

  const elemParent = document.querySelector("main");
  elemParent.appendChild(copy);
}
