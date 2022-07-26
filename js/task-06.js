const validationField = document.querySelector('#validation-input');

validationField.addEventListener('blur', checkLengh);

const stringLength = validationField.getAttribute('data-length');


function checkLengh(event) {
   
    const target = event.currentTarget;

    if (target.value.length === Number(stringLength)) {
        target.classList.replace('invalid', 'valid');
        return;
    };
    
    target.classList.remove('valid');
    target.classList.add('invalid');
}