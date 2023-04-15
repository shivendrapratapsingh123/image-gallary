const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
  const imageFiles = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {'pic1.jpg':'eyecloser',
'pic2.jpg':'water',
'pic3.jpg':'flower',
'pic4.jpg':'art',
'pic5.jpg':'butterfly'
}

/* Looping through images */
for(image of imageFiles){
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt',alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click',e => {
displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;
});
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',() =>{
  const b = btn.getAttribute('class');
  console.log(b);
  if(b === 'dark')
  {
    btn.textContent = 'Lighten';
   btn.setAttribute('class','light');
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
   if(b === 'light')
  {
    btn.textContent = 'Darken';
    btn.setAttribute('class','dark');
    overlay.style.backgroundColor = 'rgba(0, 0,0,0)';
  }
});
