/*          INDEX PAGE FORM VALIDATION                */
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const email = document.querySelector('.e-mail');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let send = true;
        if(email.value.trim() === ''){
            setError(email, 'e-mail obrigatório');
            send = false;
        }
        else if(!isEmail(email.value.trim())){
            setError(email, 'Introduza um endereço de e-mail válido');
            send = false;
        }
        else {
            send = true;
       }

       if(send){
           form.submit();
       }
    
});

function setError(input, message){
    const inputGroup = input.parentElement;
    error.innerText = message;

    inputGroup.className = 'input-group error'
}

function isEmail(email) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

                /* FAQ DROPDOWN */
const items = document.querySelectorAll('.heading');
const contents = document.querySelectorAll('.content');

items.forEach(item => {
    item.addEventListener('click', (e)=> {

        contents.forEach((subItem) => {
            if(e.target.nextElementSibling != subItem &&
                subItem.classList.contains('open')
                ){
                    subItem.classList.remove('open');
                }
        });

        const panel = item.nextElementSibling;
        panel.classList.toggle('open');
        item.classList.toggle('open');

    });

    
});






