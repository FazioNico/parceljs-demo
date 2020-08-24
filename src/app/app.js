// import style CSS
import './app.css';
// import HTML template
import html from './app.html';

// define data
const name = 'Parcel Bundler';
// get HTML tag to build app
const myApp = document.querySelector('app');
// inject template
myApp.innerHTML = html;
// inject data in template
myApp.querySelector('#name').innerHTML = name;