// Custom getElement Function
function getElement(elementId) {
    return document.getElementById(elementId);
}

// Get Balance 
function getBalance(balanceFieldId) {
    const balanceField = getElement(balanceFieldId);
    const balance = parseInt(balanceField.innerText);
    return balance;
}

// Get Product 
function getProduct(productFieldId) {
    const productField = getElement(productFieldId);
    const product = productField.value;
    return product;
}

// Get Price 
function getPrice(priceFieldId) {
    const priceField = getElement(priceFieldId);
    const price = parseInt(priceField.value);
    return price;
}

function disableButton() {
    const buttonField = getElement("add-to-list");
    const restBalance = parseInt(getElement('remaining-balance').innerText);
    const price = parseInt(getElement('price').value);
    console.log(price);
    if (restBalance < price) {
        buttonField.disabled = true;
    }
    else {
        buttonField.disabled = false;
    }

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
    const productField = getElement("product");
    const priceField = getElement("price");

    buttonField.addEventListener('click', function () {

        if (productField.value.length == 0 || priceField.value.length == 0) {
            console.log("Input Must");
            alert("Please Input Product & Price");
        }
        else {
            insertRows();
            setTotalPrice();
            
            const restBalance = parseInt(getElement('remaining-balance').innerText);
            
            if (restBalance < 0) {
                buttonField.disabled = true;
            }
            else {
                buttonField.disabled = false;
            }
        }
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


