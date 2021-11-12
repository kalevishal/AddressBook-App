window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function() {
        if(phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phoneNumber = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        if(address.value.length == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).addressNumber = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function() {
        if(address.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).zipNumber = zip.value;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });

});

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

function getInputValueById(property) {
    let value = document.querySelector(property).value;
    return value;
}