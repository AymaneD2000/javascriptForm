const element = document.createElement('p');
const message = document.createTextNode("les e-mails ne correspondent pas");
var form = document.getElementById('form');
var tab = document.getElementById('email_confirm');
var contact = document.getElementsByClassName('contact');
var inform = document.getElementById('inform');

function emailValidation() {
    tab.addEventListener('keyup', e => {
        e.preventDefault();
        if (form.email.value != form.email_confirm.value) {
            if (document.body.contains(document.getElementsByTagName(element)[0]) == false) {
                inform.appendChild(element);
                tab.style.background = 'rgba(230,169,171,.5)';
                console.log('false');
            }
        } else{
            inform.removeChild(element);
            tab.style.background = 'white';
            console.log('true');
        }

        setTimeout(() => { 
            inform.removeChild(element);
          }, 3000)

    });
};

element.appendChild(message);
element.style.color = '#d14539';
window.onload = emailValidation;