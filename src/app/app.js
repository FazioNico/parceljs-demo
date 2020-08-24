import './app.css';
import html from './app.html';

const name = 'Parcel Bundler'
const myApp = document.querySelector('app');

myApp.innerHTML = html;
myApp.querySelector('#name').innerHTML = name;