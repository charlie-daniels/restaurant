import chefJpeg from './../images/chef.jpeg';
import './../styles/home.css';

function createIntroduction() {
  const intro = document.createElement('section');
  intro.setAttribute('id', 'introduction');

  const para1 = document.createElement('p');
  para1.classList.add('background');
  para1.textContent = 'This is the experience of your lifetime. Taste the hours of labour spent crafting perfection, and have our chefs walk you through the flavour sensation that is our cuisine.';
  const para2 = document.createElement('p');
  para2.classList.add('background');
  para2.textContent = 'Whether it be fellow strangers at the Chef\'s table, or as a group of loved ones, embark on a guided tour through the delectable, untamed and ferocious aromas of our locally sourced ingredients.';

  intro.append(
    para1, 
    para2
  );
  return intro;
}

function createPreview() {
  const preview = document.createElement('section');
  preview.classList.add('content-center');

  const chef = document.createElement('div');
  chef.classList.add('chef', 'background', 'content-center');
  preview.appendChild(chef);

  const chefImg = new Image();
  chefImg.src = chefJpeg;
  const quoteWrapper = document.createElement('div');
  quoteWrapper.classList.add('quote', 'background');
  chef.append(
    chefImg,
    quoteWrapper
  );

  const quote = document.createElement('q');
  quote.textContent = 'My food has been my lifelong dream, and now I can make it other people\'s reality.';
  const quoteRef = document.createElement('p');
  quoteRef.textContent = '- Head Chef Pellesi';
  quoteWrapper.append(
    quote, 
    quoteRef
  );

  return preview;
}

export default function loadHome() {
  const home = document.createElement('div');
  
  const intro = createIntroduction();
  const preview = createPreview();

  home.append(
    intro, 
    preview
  );
  return home;
}