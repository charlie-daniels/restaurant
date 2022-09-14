import './../styles/contact.css';
import addressPng from './../images/address.png';

function createLocation() {
  const location = document.createElement('div');

  const findUs = document.createElement('h2');
  findUs.textContent = 'Find us';
  findUs.classList.add('background', 'content-center');
  const addressWrapper = document.createElement('div');
  addressWrapper.classList.add('background', 'content-center');

  const addressImage = new Image();
  addressImage.src = addressPng;
  const address = document.createElement('p');
  address.textContent = '14050 W Sunset Blvd Unit 41, Los Angeles, CA 90272-3619';
  addressWrapper.append(addressImage, address);

  location.append(
    findUs,
    addressWrapper
  );
  return location;
}

export default function loadContact() {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');

  const address = createLocation();

  const talk = document.createElement('h2');
  talk.textContent = 'Talk with us';
  talk.classList.add('background', 'content-center');
  const call = document.createElement('p');
  call.textContent = '+1-202-555-0125';
  call.classList.add('background', 'content-center');

  contact.append(
    address,
    talk,
    call
  );
  return contact;
}