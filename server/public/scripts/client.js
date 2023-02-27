console.log('script sourced.');

function getQuotes() {
    axios.get('/quotes').then((response) => {
        // Code that will run on successful response
        // from the server
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let quotesFromServer = response.data;
        let contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
        for (let quote of quotesFromServer) {
            contentDiv.innerHTML += `
                <p>"${quote.text}" - ${quote.author}</p>
            `
        }
    }) 
}

getQuotes();

let submitForm = event => {
    event.preventDefault();
    console.log(event);
    let text = event.target[0].value;
    let author = event.target[1].value;
    console.log(text, author);
    let quoteForServer = {
        text,
        author
    };
    axios.post('/quotes', quoteForServer).then((response) => {
        console.log(response);
        getQuotes();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    })
};

