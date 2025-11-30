/* Generate Superhero
Generate Supervillian
Display the Two Names with a "vs" in between */

import {randomSuperhero} from 'superheroes';
import {randomSupervillain} from 'supervillains';


/* For use Webpack, Parcel, or Vite to package those npm modules into code the browser can understand.


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeBtn");

  button.addEventListener("click", () => {
    const hero = superheroes[Math.floor(Math.random() * superheroes.length)];
    const villain = supervillains.random();

    const heading = document.querySelector("h2");
    heading.textContent = `${hero} vs ${villain}`;
  });
});
*/

console.log((randomSuperhero()) + " vs " + randomSupervillain());
