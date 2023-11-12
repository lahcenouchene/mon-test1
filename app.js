const express = require("express");
//let pokemons = require("./mock-pokemon");
const app = express();
const port = 3000;
  /////////////////////////////////////////////////////////////////77
  const pokemons = [
    {
      id: 1,
      name: "mohande",
      hp: 25,
      cp: 5,
      types: ["electrique"],
      created: new Date(),
    },
    {
      id: 2,
      name: "massen",
      hp: 24,
      cp: 6,
      types: ["plante", "poison"],
      created: new Date(),
    },
    {
      id: 3,
      name: "kamel",
      hp: 30,
      cp: 7,
      types: ["feu", "roche"],
      created: new Date(),
    },
    {
      id: 4,
      name: "nassima",
      hp: 32,
      cp: 9,
      types: ["eau"],
      created: new Date(),
    },
    {
      id: 5,
      name: "lahcen",
      hp: 45,
      cp: 10,
      types: ["tenbre"],
      created: new Date(),
    },
  ];
  

app.get("/lahcen", (req, res) => res.send("hello word"));

app.get("/api/pkimons/:id", (req, res) => {
  //pour convertire id en un entier
  const id = parseInt(req.params.id);
  try {
    for (let index = 0; index < pokemons.length; index++) {
      //const element = array[index];
      if (index.id===id) {
        res.send("le pokemon cherché s'appelle :"+index.name)
      }
    
    }
  } catch (error) {
    res.send("erreur d'affichage")
  }
  
  
});
 


  
 // const pokemon = pokemons.find(pokemon => pokemon.id == id);
  //res.send("vous avez demandé le pokemons numéro"+id)


app.listen(port, () =>
  console.log(`notre application est démarrée sur :https://localhost:${port}`)
);
