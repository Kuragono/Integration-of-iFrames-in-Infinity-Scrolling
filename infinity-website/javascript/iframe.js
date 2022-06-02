/*-------------------------- constants --------------------------*/

const size = document.getElementById('size');

/*-------------------------- functions --------------------------*/

const getHeight = () => (Math.floor(Math.random() * 800));
const getWidth = () => (Math.floor(Math.random() * 1080));

/*-------------------------- styles --------------------------*/

size.style.height = `${getHeight()}px`;
size.style.width = `${getWidth()}px`;
size.style.display = 'block';

size.style.overflow = 'hidden';
size.scrolling = 'no';

/*-------------------------- main code --------------------------*/

let height = size.style.height;
let width = size.style.width;
let sizes = {width, height};

window.parent.postMessage(sizes);