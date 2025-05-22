import '../styles/main.css';
import logo from '../images/logo.png';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);

const title = document.createElement('h1');
title.textContent = 'Привіт, Webpack!';
document.body.appendChild(title);
