document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);


    // console.log('READYSTATE', xhr.readyState);

    // OPTIONAL - Used for spinners / loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);

    }


    //! New stuff
    xhr.onload = function () {
        console.log('READYSTATE', xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);
            // prints to ui instead of console
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`

        }

    }

    // ! old stuff
    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE', xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);

    //     }
    // }

    xhr.onerror = function () {
        console.log('Request error.....');

    }

    // mandatory
    xhr.send();

    /**readyState Values
     * 0: request not initialized
     * 1: server connection established
     * 2: request received
     * 3: processing request
     * 4: request finished and response is ready
     * 
     */

    // HTTP Statuses
    // 200: OK
    // 403: FORBIDDEN
    // 404: NOT FOUND
}