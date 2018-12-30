document.getElementById('button1').addEventListener('click', getText);
// button2
document.getElementById('button2').addEventListener('click', getJson);
// button3
document.getElementById('button3').addEventListener('click', getExternal);

// fetch returns promises
// ! Get local text file data
function getText() {
    fetch('text.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            // output the data to the UI
            document.getElementById('output').innerHTML = data;
        })
        // catch error
        .catch(err => console.log(err));
}

// ! Get local JSON data
function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
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
        .catch(err => console.log(err));
}

// ! Get from external API 
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // output the data to the UI
            // document.getElementById('output').innerHTML = data;

            // ? array so we loop trought it
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        // catch error
        .catch(err => console.log(err));
}