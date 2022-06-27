/*-------------------------- constants --------------------------*/

const size = document.getElementById('size');

/*-------------------------- functions --------------------------*/

const getHeight = () => (Math.floor(Math.random() * 800));
//const getWidth = () => (Math.floor(Math.random() * 1080));

/*-------------------------- styles --------------------------cd*/

size.style.height = `${getHeight()}px`;
size.style.width = '100%';
size.style.display = 'block';

size.style.overflow = 'hidden';
size.scrolling = 'no';

/*-------------------------- main code --------------------------*/

const divElem = document.querySelector('body > div');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log('Size changed',entry.target.scrollHeight);
    let data = [size.style.width, entry.target.scrollHeight];
    window.parent.postMessage(data);
  }
});

resizeObserver.observe(divElem);