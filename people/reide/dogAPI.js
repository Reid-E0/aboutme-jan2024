const dogs = [];
const dogBtn = document.getElementById('dogButton');
function fetchNewDog() {
  fetch('https://random.dog/woof.json')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('dogImage');
      dogImage.src = data.url;
    });
}
function addDog() {
  let dogImage = document.getElementsByClassName(dogImage);
  let newDog = document.createElement('img');
  newDog.src = dogImage.src;
  let dogBox = document.getElementsByClassName(dogBox);
  dogBox.appendChild(newDog);
}
// addDog function may need to move.
dogBtn.addEventListener('click', (e) => {
  fetchNewDog();
  addDog();
});
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('chooseBGColor').addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
  });
});
