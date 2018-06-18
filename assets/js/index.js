const URL = "https://api.falschgesagt.de";
var data = {

};



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
	if (data != null) {
		const textLabel = document.querySelector('#text span');
		const authorLabel = document.querySelector('#author');

		const randomQuote = getRandomInt(0, data.quotes.length - 1);
		const randomAuthor = getRandomInt(0, data.authors.length - 1);

		textLabel.innerHTML = data.quotes[randomQuote];
		authorLabel.innerHTML = data.authors[randomAuthor];
	}
}


/*
	BACKEND ------------------------------------------------------------------------
*/

function fetchQuotes() {
	var request = new XMLHttpRequest();
	request.onload = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	data = JSON.parse(request.responseText);
	    	showRandomQuote();
	    } else {
	    	console.warn("Could not fetch quotes");
	    }
	};
	request.open("GET", URL, true);
	request.send();
}


