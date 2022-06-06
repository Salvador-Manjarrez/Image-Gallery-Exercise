const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const myArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */


for (const i of myArray) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${i}`);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => displayedImage.src = e.target.src);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (e) => {
let btnClass = btn.getAttribute('class');
if(btnClass === 'dark') {
btn.setAttribute('class', 'light');
btn.textContent = 'LIGHT IT UP';
overlay.style.backgroundColor = "rgba(0,0,0,0.8)"
}   else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'DARKEN';
    overlay.style.backgroundColor = "rgba(0,0,0,0.0)"
}
});
