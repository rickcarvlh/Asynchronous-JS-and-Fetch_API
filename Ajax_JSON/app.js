document.getElementById('button1').addEventListener('click', loadCustomer);


document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customer
function loadCustomer(e) {
    // instatiate xhr
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // log it for now
            // console.log(this.responseText);

            // parse it as an object
            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;

            // output to browser
            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();

}

// Load Customers
function loadCustomers(e) {
    // instatiate xhr
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // log it for now
            // console.log(this.responseText);

            // parse it as an object
            const customers = JSON.parse(this.responseText);

            let output = '';

            // needs this because it's an array
            customers.forEach(function (customer) {

                // appending
                output += `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;

            });
            // output to browser
            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();

}