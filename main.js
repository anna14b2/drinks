const url = "https://cocktails-240e.restdb.io/rest/recipes?max=2";

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
