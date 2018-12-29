function easyHttp() {
    this.http = new XMLHttpRequest();
}

// Make an Http Get request
easyHttp.prototype.get = function (url, callback) {
    this.http.open('GEt', url, true);

    // arrow functions fixes this
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);

        } else {
            callback('Error...' + self.http.status)
        }
    }

    this.http.send();
}


// Make an Http Post request
easyHttp.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    // arrow functions fixes this
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }



    // regular JS function need JSON
    this.send(JSON.stringify(data));

}

// Make an Http Put request
// Make an Http Delete request