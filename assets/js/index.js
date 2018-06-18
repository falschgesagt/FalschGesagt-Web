const quotes = [
	{
		text: '"Vom Feeling her hatte ich ein gutes Gefühl."',
		author: 'Karl Marx'
	},
	{
		text: '"Hier spielt die Musik!"',
		author: 'Ludwig van Beethoven'
	},
	{
		text: '"Ich bin Optimist. Sogar meine Blutgruppe ist positiv."',
		author: 'Napoleon Bonaparte'
	}
]

var currentIndex = 0;




document.addEventListener("DOMContentLoaded", function() {
	const quoteButton = document.querySelector('button');
	const textLabel = document.querySelector('#text');
	const authorLabel = document.querySelector('#author');

	quoteButton.onclick = function() {
		if (currentIndex >= quotes.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}

		textLabel.innerHTML = quotes[currentIndex].text;
		authorLabel.innerHTML = quotes[currentIndex].author;
	}

});




