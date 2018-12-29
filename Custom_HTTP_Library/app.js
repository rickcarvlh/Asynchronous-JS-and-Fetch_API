const http = new easyHttp;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);

//     }
//     // console.log(response);

// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create POST
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);

    }
});

// Update post
http.put('');