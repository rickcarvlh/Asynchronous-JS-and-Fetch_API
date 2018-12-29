document.getElementById('button1').addEventListener('click', getText);
// button2
document.getElementById('button2').addEventListener('click', getJson);

// fetch returns promises
// ! Get local text file data
function getText() {
    fetch('text.txt')
        .then(function (res) {
            // here we get a promise
            // console.log(res.text());
            return res.text();
        })
        .then(function (data) {
            console.log(data);
            // output the data to the UI
            document.getElementById('output').innerHTML = data;
        })
        // catch error
        .catch(function (err) {
            console.log(err);

        });
}

// ! Get local JSON data
function getJson() {
    fetch('posts.json')
        .then(function (res) {
            // here we get a promise
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            // output the data to the UI
            // document.getElementById('output').innerHTML = data;

            // ? array so we loop trought it
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        // catch error
        .catch(function (err) {
            console.log(err);

        });
}