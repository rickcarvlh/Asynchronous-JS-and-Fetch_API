// grabbing the button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// create function for button
function getJokes(e) {
    // console.log('get jokes');

    // Grab the jokes 
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    // random number
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            // converts JSON to an object
            const response = JSON.parse(this.responseText);
            console.log(response);

            // intialize a variable
            let output = '';

            if (response.type === 'success') {

                //! on this it has be like this because of the API
                // ! Check Documentation for more
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`
                });

            } else {
                output += `<li>Something went wrong</li>`
            }

            //* Add to the HTML
            document.querySelector('.jokes').innerHTML = output;

        }
    }

    xhr.send();


    e.preventDefault();
}