import style from './../styles/global.css';
import loadHome from './home.js';

function loadPage(page) {
  const container = document.getElementById('content');
  const footer = document.querySelector('footer');
  container.insertBefore(page, footer);
}

function createHeader() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  heading.classList.add('background');
  heading.textContent = 'Gudadryck';
  header.appendChild(heading);

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
  const contact = document.createElement('button');
  contact.textContent = 'Contact';

  nav.append(home, menu, contact);
  return nav;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('background');
  footer.textContent = 'built by ';
  const gitLink = document.createElement('a');
  gitLink.setAttribute('href', 'https://github.com/charlie-daniels');
  gitLink.textContent = 'charlie-daniels';

  footer.appendChild(gitLink);
  return footer;
}

export default function initialiseWebsite() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  const header = createHeader();
  const nav = createNav();
  const footer = createFooter();

  content.append(
    header,
    nav,
    footer
  );
  
  document.querySelector('body').appendChild(content);
  loadPage(loadHome());
}