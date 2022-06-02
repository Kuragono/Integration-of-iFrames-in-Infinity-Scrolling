/*-------------------------- constants --------------------------*/

const size = document.getElementById('size');

/*-------------------------- functions --------------------------*/

const getHeight = () => (Math.floor(Math.random() * 800));
const getWidth = () => (Math.floor(Math.random() * 1080));

/*-------------------------- styles --------------------------*/

size.style.height = `${getHeight()}px`;
size.style.width = `${getWidth()}px`;
size.style.display = 'block';

/*-------------------------- main code --------------------------*/

let sizes = {height, width};

window.parent.postMessage(sizes);