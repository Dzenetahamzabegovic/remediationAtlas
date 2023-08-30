"use strict";
import Country from "./Country";
import { countries } from "./data";

// afficher toutes les données
console.log(countries);

const getCountry = function (country) {
  // element input
  const inputText = document.querySelector("input");

  // bouton search
  const buttonSearch = document.querySelector("button");
  buttonSearch.addEventListener("click", () => {
    console.log("click");
  });

  // element container pour afficher les pays
  const container = document.querySelector(".results");

  // aller chercher les données // j'ai pris la suisse car je n'arrivais pas a afficher tous els pays
  // si je mets un pays à la place de "country" ca marche
  // afficher les donn

  // j'arrivais pas a prendre country
  // j'aurai mis fetch  -> fetch("https://restcountries.com/v3.1/name/${country}")
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      const dataCleaned = data;
      console.log(dataCleaned); // affiche la ligne name - donc utiliser que ca

      // prendre du
      //   const country = new Country(
      //     country.flag,
      //     country.name.comon,
      //     country.population,
      //     country.subregion,
      //     country.picture.large,
      //     country.maps.openStreetMaps
      //   );

      // pour chaque pays
      data.forEach(function (country) {
        const nomPays = dataCleaned.name;
        const container = document.querySelector(".results");

        const population = country.population;
        // console.log(population);

        const subregion = country.subregion;
        // console.log(subregion);

        const html = `<div class="country--card">
		<p class="country--flag">${country.flag}</p>
		<div class="country--info">
				<h1>${country.name.common}</h1>
				<p>population: ${country.population}</p>
				<p>region: ${country.subregion}</p>
		</div>
		<a class="country--map" href=${country.maps.openStreetMaps} target="_blank">
				<span class="map">📍</span>
		</a>
</div>`;
        container.insertAdjacentHTML("beforeend", html);
      });
      // BOUTON CLICK NORMAL
      buttonSearch.addEventListener("click", () => {
        const inputText = document.querySelector("input");
        const country = inputText.value;
        console.log(inputText.value);
        // si le pays est dedans la liste on va l'afficher - prendre le pays
      });

      // BOUTON AVEC CLAVIER
      buttonSearch.addEventListener("keyup", function (e) {
        if (e.key === "enter") {
          alert("pressed");
          const message = document.querySelector(".results");
          console.log(message);
          const country = inputText.value;
          // message "pas de pays dipso "
          // Si la recherche ne correspond a aucun pays, l’app affiche un message d’erreur à l’utilisateur.trice.
          if (country.name.common === "South africa ") {
            message.textContent = "Couldn’t find country";
          }
        }
      });

      // TRIER PAR ORDRE DE POPULATION
      buttonSearch.addEventListener("click", () => {
        const countriesArray = Array.from(countries);
        countriesArray.sort((a, b) => {
          const populationA = parseInt(
            a.querySelector(".user--info p").textContent[0]
          );
          const populationB = parseInt(
            b.querySelector(".user--info p").textContent[0]
          );
          console.log(populationA);
          return populationA - populationB;
        });
        container.innerHTML = " ";
        countriesArray.forEach((country) => {
          container.appendChild(country);
        });

        //
      });
    });
};

getCountry("");
