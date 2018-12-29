document.getElementById('button1').addEventListener('click', getText);

// fetch returns promises
function getText() {
    fetch('text.txt')
        .then(function (res) {
            // here we get a promise
            // console.log(res.text());
            return res.text();
        })
        .then(function (data) {
            console.log(data);
        })
        // catch error
        .catch(function (err) {
            console.log(err);

        });
}