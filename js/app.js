// Custom getElement Function
function getElement(elementId) {
    return document.getElementById(elementId);
}

// Get Balance 
function getBalance(balanceFieldId) {
    const balanceField = getElement(balanceFieldId);
    const balance = parseInt(balanceField.innerText);
    console.log(balance);
    return balance;
}

// Get Product 
function getProduct(productFieldId) {
    const productField = getElement(productFieldId);
    const product = productField.value;
    console.log(product);
    return product;
}

// Get Price 
function getPrice(priceFieldId) {
    const priceField = getElement(priceFieldId);
    const price = parseInt(priceField.value);
    console.log(price);
    return price;
}

// setTotalPrice
function setTotalPrice() {
    const toralField = getElement('total');
    const price = getPrice('price');
    const balance = getBalance('balance');

    let total = parseInt(toralField.innerText);
    total = total + price;

    toralField.innerText = total;

    const restBalanceField = getElement('remaining-balance');
    restBalanceField.innerText = balance - total;

    return total;
}

// add To List Button
function addToListButton(buttonFieldId) {
    const buttonField = getElement(buttonFieldId);
    buttonField.addEventListener('click', function () {
        insertRows();
        setTotalPrice();
    })
}

// insertRows
function insertRows() {
    const table = getElement("table");
    const lastRow = table.rows.length;
    const row = table.insertRow(lastRow - 1);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    const product = getProduct('product');
    const price = getPrice('price');

    cell1.innerHTML = product;
    cell2.innerHTML = price;
}


addToListButton("add-to-list");
