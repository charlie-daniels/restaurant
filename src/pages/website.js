import chefJpeg from './../images/chef.jpeg';
import backgroundJpeg from './../images/background.jpeg';
import style from './../styles/style.css';

function createHeader() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  heading.textContent = 'Gudadryck';
  header.appendChild(heading);

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const home = document.createElement('a');
  home.textContent = 'Home';
  const menu = document.createElement('a');
  menu.textContent = 'Menu';
  const contact = document.createElement('a');
  contact.textContent = 'Contact';

  nav.append(home, menu, contact);
  return nav;
}

function createIntroduction() {
  const intro = document.createElement('section');
  intro.setAttribute('id', 'introduction');

  const para1 = document.createElement('p');
  para1.classList.add('text');
  para1.textContent = 'This is the experience of your lifetime. Taste the hours of labour spent crafting perfection, and have our chefs walk you through the flavour sensation that is our cuisine.';
  const para2 = document.createElement('p');
  para2.classList.add('text');
  para2.textContent = 'Whether it be fellow strangers at the Chef\'s table, or as a group of loved ones, embark on a guided tour through the delectable, untamed and ferocious aromas of our locally sourced ingredients.';

  intro.append(para1, para2);
  return intro;
}

function createPreview() {
  const preview = document.createElement('section');
  preview.setAttribute('id', 'preview');

  const chef = document.createElement('div');
  chef.classList.add('chef');
  preview.appendChild(chef);

  const chefImg = new Image();
  chefImg.src = chefJpeg;
  const quoteWrapper = document.createElement('div');
  quoteWrapper.classList.add('quote');
  chef.append(chefImg, quoteWrapper);

  const quote = document.createElement('q');
  quote.textContent = 'My food has been my lifelong dream, and now I can make it other people\'s reality.';
  const quoteRef = document.createElement('p');
  quoteRef.textContent = '- Head Chef Pellesi';
  quoteWrapper.append(quote, quoteRef);

  return preview;
}

function createFooter() {
  const footer = document.createElement('footer');
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
  const intro = createIntroduction();
  const preview = createPreview();
  const footer = createFooter();

  content.append(
    header,
    nav,
    intro,
    preview,
    footer
  );

  document.querySelector('body').appendChild(content);
}