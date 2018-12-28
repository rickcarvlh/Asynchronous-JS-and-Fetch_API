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
// Make an Http Put request
// Make an Http Delete request