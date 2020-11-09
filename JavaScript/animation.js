//Animation of the Home-Page Card

document.querySelector('.overlay').addEventListener('click', animate);
const card = document.querySelector('.mycard');

//Counter for the color switches
let count = 1;

function animate() {
    count++;
    if (count % 2 === 0) {
        //Adds Class with the CSS styling to the Home-Page Card
        card.classList.add('animate')
    } else {
        card.classList.remove('animate')
    }
}