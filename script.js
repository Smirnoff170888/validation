const inputName = document.querySelector('.form__input_name');
const errorName = document.querySelector('.form__error_name');
const inputEmail = document.querySelector('.form__input_email');
const errorEmail = document.querySelector('.form__error_email');
const inputTel = document.querySelector('.form__input_tel');
const errorTel = document.querySelector('.form__error_tel');
const inputUrl = document.querySelector('.form__input_url');
const errorUrl = document.querySelector('.form__error_url');
const formButton = document.querySelector('.form__button');

function validateForm(event) {
    let f = true;
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorTel.textContent = '';
    errorUrl.textContent = '';

    if (inputName.validity.tooShort || inputName.value.length == 0) {
        errorName.textContent = 'Должно быть от 2 до 20 символов';
        f = false;
    }

    if (inputName.validity.patternMismatch) {
        errorName.textContent = 'Введите Имя кириллицей с заглавной буквы';
        f = false;
    }

    if (inputEmail.validity.patternMismatch || inputEmail.value.length == 0) {
        errorEmail.textContent = 'e-mail в формате: sega@yandex.ru';
        f = false;
    }

    if (inputTel.validity.tooShort || inputTel.value.length == 0) {
        errorTel.textContent = 'Должно быть от 11 до 20 символов';
        f = false;
    }
    if (inputTel.validity.patternMismatch) {
        errorTel.textContent = 'телефон в формате: +7 (123) 456-78-90';
        f = false;
    }

    if (inputUrl.validity.patternMismatch) {
        errorUrl.textContent = 'URL в формате: http://mysite.ru';
        f = false;
    }
    formButton.disabled = !f;
}

inputName.addEventListener('input', validateForm);
inputEmail.addEventListener('input', validateForm);
inputTel.addEventListener('input', validateForm);
inputUrl.addEventListener('input', validateForm);