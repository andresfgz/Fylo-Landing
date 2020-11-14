const buttonH = document.getElementById('button-ex');
const parrag = document.getElementById('base');
const lab = document.getElementById('email');
function validation (valor) {
   re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(!re.exec(valor)){
        parrag.classList.remove('check-email');
        parrag.classList.add('check-email-ok');
        lab.classList.remove('main-section-input');
        lab.classList.add('main-section-input-red');
	} else{
        parrag.classList.add('check-email');
        lab.classList.remove('main-section-input-red');
        lab.classList.add('main-section-input');
    }
}