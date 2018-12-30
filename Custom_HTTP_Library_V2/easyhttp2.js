/**
 * EasyHttp Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0 ES6 version
 * @author Ricardo Carvalho
 * @version MIT
 * 
 */

class EasyHttp {
    //  Make an HTTP GET Request
    get(url) {
        // adding promises
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // Make an HTTP POST Request
    post(url, data) {
        // adding promises
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // Make an HTTP PUT Request
    put(url, data) {
        // adding promises
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // Make an HTTP DELETE Request
    delete(url) {
        // adding promises
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(() => resolve('Resource Deleted'))
                .catch(err => reject(err));
        });

    }


}