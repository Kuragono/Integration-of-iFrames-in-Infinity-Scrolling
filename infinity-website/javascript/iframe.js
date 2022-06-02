const getHeight = () => (Math.floor(Math.random() * 800));
const getWidth = () => (Math.floor(Math.random() * 1080));

const size = document.getElementById('size');
size.style.height = `${getHeight()}px`;
size.style.width = `${getWidth()}px`;
size.style.display = 'block';