// Define the API URL
const apiUrl = 'https://api.adviceslip.com/advice';

// Make a GET request
async function adviceApiCall(){
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        renderData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to render data in cards
function renderData(response) {
    console.log(response)
    const adviceSpan = document.querySelector('.advice-number');
    adviceSpan.innerHTML = '';
    const adviceQuote = document.querySelector('.advice-quote');
    adviceQuote.innerHTML = '';
    const adviceNum = document.createElement('span');
    const adviceStatement = document.createElement('p');
    adviceNum.append('ADVICE #' + JSON.stringify(response.slip.id));
    adviceStatement.append(JSON.stringify(response.slip.advice));
    adviceSpan.append(adviceNum);
    adviceQuote.append(adviceStatement);
}