const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent');
xhr.setRequestHeader('X-RapidAPI-Key', '0078fd6dcamsh5f750205e776271p1be203jsn68cc9e284542');
xhr.setRequestHeader('X-RapidAPI-Host', 'cricbuzz-cricket.p.rapidapi.com');

xhr.send(data);