//main js code

/*-------------------------- constants --------------------------*/

const container = document.querySelector('.container');
let j, x, y, idNum;
j = x = y = idNum = 0;
let sizes = {};

/*-------------------------- functions --------------------------*/

const randNum = (a,b) => (Math.floor(Math.random() * a) + b);

function createText() {
    let words = [
		'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
		'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
		'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
		'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
		'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
		'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
		'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
		'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
		'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
		'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
		'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
		'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
		'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
		'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
		'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
		'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
		'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
		'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
		'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
		'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
		'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
		'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
		'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
		'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
		'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
		'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
		'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
		'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
		'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
		'elementum', 'tempor', 'risus', 'cras'
    ];
    let num = randNum(200,50);
    let phrase = '';
    for (i = 0; i < num; i++) {
        randomWord = randNum(words.length, 0);
        phrase += words[randomWord] + ' ';
    }
    return phrase;
}

function load(numImages = 5){         //loads 5 div elements containing images and paragraphs after eventlistener has been triggered
    let i = 0;
    while(i < numImages) {
        const div = document.createElement('div');
        div.className = 'element';
        container.appendChild(div);

        const img = document.createElement('img');
        img.className = 'car';
        let imageNum = randNum(3,1).toString();
        img.src = `./images/image_${imageNum}.jpeg`;
        img.alt = 'picture of a car';
        newDivEl = document.querySelectorAll('.element')[j];
        newDivEl.appendChild(img);

        const text = document.createElement('p');
        text.className = 'text';
        newDivEl.appendChild(text);
        let phrase = createText();
        text.innerHTML = phrase;

        i++;
        j++;
    }
}

function iframeLoader(){                //loads an iframe in one of the 5 newly created div elements
    const response =  load();            
    idNum++;
    let rdnIframe = j - randNum(5,0) - 1;

    const iframe = document.createElement('iframe');
    iframe.className = 'framework';
    iframe.id = `dm_iframe_${idNum}`;
    iframe.src = './html/iframe.html';

    newIframe = document.querySelectorAll('.element')[rdnIframe];
    newIframe.appendChild(iframe);
 }

/*-------------------------- main code --------------------------*/

iframeLoader();

window.addEventListener('message', ({data}) => {
    console.log(data);
    document.getElementById(`dm_iframe_${idNum}`).style.height = `${data[1]}` + 'px';
    document.getElementById(`dm_iframe_${idNum}`).style.width = `${data[0]}`;
});

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200) {
        iframeLoader();
    }
});