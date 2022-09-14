import '../styles/menu.scss';

function createMenuItem(name, desc) {
  const item = document.createElement('div');
  item.classList.add('item')
  const itemName = document.createElement('h3');
  itemName.textContent = name;
  const itemDesc = document.createElement('p');
  itemDesc.textContent = desc;
  item.append(itemName, itemDesc);

  return item;
}

function createMenuSection(title, itemList) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('content-center');

  const heading = document.createElement('h2');
  heading.textContent = title;
  heading.classList.add('background');
  const items = document.createElement('div');
  items.classList.add('background', 'content-center', 'stretch');

  itemList.forEach(i => {
    items.appendChild(i);
  });

  wrapper.append(
    heading,
    items
  );
  return wrapper;
}

function createAppetisers() {
  const itemList = [
    createMenuItem('Gravlax', 'Luxurious red savoury cured salmon'),
    createMenuItem('Pâté de foie', 'Creamy pate served atop rye crackers and cranberry reduction'),
    createMenuItem('Soup de jours', 'Soup of the day')
  ];

  const appetisers = createMenuSection('Apéritifs', itemList)
  return appetisers;
}

function createMains() {
  const itemList = [
    createMenuItem('Soupe à l\'oignon', 'Five onions broiled and stewed with three cheese topping, served with caramelised red onion crumb'),
    createMenuItem('Lamb sur l\'os', 'Lamb on the bone served with lamb and red wine reduction and mixed summer vegetables'),
    createMenuItem('Coq au vin', 'Chicken stew with white wine, served with herbal pomme puree')
  ];

  const mains = createMenuSection('Plat principal', itemList)
  return mains;
}

export default function loadMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');

  menu.append(
    createAppetisers(),
    createMains()
  );

  return menu;
}