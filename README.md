# integration-of-iframes-in-infinity-scrolling


/**** Edit: 08.06.2022 ****/

The goal was to create an infinitely long website, in which we can inject an iframe.

These were the steps followed in the creation of this project:

1) Create index.html with a basic structure and add a h1 title to it.
2) Create styles.css for basic styling rules.
3) Create inf.js, create a little code snippet (function load()) that injects 5 new div elements containing images and paragraphs when the user reaches the bottom of the website.
4) Create createText() and randNum for the generation of text for the paragraph of random length.
5) Create iframeLoader() which creates an iframe randomly in one of the 5 newly generated div elements.
6) Create iframe.js to give the iframe a random size

The basic idea was working, but the project wasn't ready yet. While locally on the same server everything perfectly, the inf.js would run into problems with cross domain access. Thus I had to find a solution for this problem, and as the iframe belongs to myself, I can simply post the message to the parent window, which will be step 7. 

7) Create postMessage in iframe.js and add eventListener to inf.js for the retrieval of the data.

Finally the program was almost working fine, but one problem was remaining, sometimes the first iframe would not load. This was solved by using a setTimeout() function, set at 200 ms. But this only worked for faster internet speeds. Using throttling to simulate slow 3G proved that the setTimeout() function was the wrong approach. It worked by putting a timer of 2000 ms, however the user experience is not pleasant, when the iframe takes 2 seconds to laod. To solve this a lot of thought has been put into which order the functions are called. After making sure the iframes only load after the data from the postMessage is delivered, the problem was solved. Afterwards the code was made shorter and cleaner.

8) Optimize code to run efficiently.
9) Clean and shorten the code.

/**** Edit: 27.06.2022 ****/

10) Replaced setSize() with resizeObserver() which adds responsive changes when the DOM is changed.
