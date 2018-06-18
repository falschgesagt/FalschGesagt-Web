const URL = "https://api.falschgesagt.de";
var quotes = [];

/*[
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
]*/



document.addEventListener("DOMContentLoaded", function() {
	const quoteButton = document.querySelector('button');
	
	fetchQuotes();

	quoteButton.onclick = function() {
		showRandomQuote();
	}

});



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandomQuote() {
	const textLabel = document.querySelector('#text span');
	const authorLabel = document.querySelector('#author');

	const random = getRandomInt(0, quotes.length - 1);

	textLabel.innerHTML = quotes[random].text;
	authorLabel.innerHTML = quotes[random].author;
}


/*
	BACKEND ------------------------------------------------------------------------
*/

function fetchQuotes() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	quotes = JSON.parse(request.responseText);
	    	showRandomQuote();
	    } else {
	    	console.warn("Could not fetch quotes");
	    }
	};
	request.open("GET", URL, true);
	request.send();
}


