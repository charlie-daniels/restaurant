import './../styles/global.css';
import './../styles/website.css';

import loadHome from './home.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';

function loadPage(page) {
  const container = document.getElementById('current-page');
  container.innerHTML = '';
  container.appendChild(page);
}

function createHeader() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  heading.classList.add('background');
  heading.textContent = 'Rêver';

  header.append(heading);
  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('background');

  const home = document.createElement('button');
  home.textContent = 'Home';
  home.addEventListener('click', () => loadPage(loadHome()));
  const menu = document.createElement('button');
  menu.textContent = 'Menu';
  menu.addEventListener('click', () => loadPage(loadMenu()));
  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  contact.addEventListener('click', () => loadPage(loadContact()));

  nav.append(
    home, 
    menu, 
    contact
  );
  return nav;
}

function createPageContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'current-page');
  container.classList.add('stretch');
  return container;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('background');
  footer.textContent = 'built by ';
  const gitLink = document.createElement('a');
  gitLink.setAttribute('href', 'https://github.com/charlie-daniels');
  gitLink.textContent = 'charlie-daniels';

  footer.append(gitLink);
  return footer;
}

export default function initialiseWebsite() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.classList.add('content-center');

  const header = createHeader();
  const nav = createNav();
  const pageContainer = createPageContainer();
  const footer = createFooter();

  content.append(
    header,
    nav,
    pageContainer,
    footer
  );
  
  document.querySelector('body').appendChild(content);
  loadPage(loadHome());
}