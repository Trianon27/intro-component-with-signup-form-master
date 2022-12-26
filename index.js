
let init = function () {

    document.getElementById('submit').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    let val = validation()
    if(val){
           reset_elements();
           alert('Formulario enviado');
           document.getElementById('form-user').reset();      
        }        
    else{

    }

  

}

const validation = function(){
    var condition = false
    var elements = document.getElementsByClassName('error-message');
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == ''){
            elements[i].style.display = 'flex';
            inputs[i].style.backgroundImage = 'url(./images/icon-error.svg)';
            condition = true
        } else{
            if(inputs[i].value != ''){
                elements[i].style.display = 'none';
                inputs[i].style.backgroundImage = 'none';
        }
        }
    }

    let emailv = emailVal();
    if(emailv){
        if(condition){
            return false
        } else{
            return true
        }

    }else{
        elements[2].style.display = 'flex';
        inputs[2].style.backgroundImage = 'url(./images/icon-error.svg)';
        inputs[2].value = '';
        inputs[2].placeholder='email@example.com';
    }
}    


const emailVal = function(){
    let email = document.getElementById('email').value;
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );   
}


reset_elements = function(){
    var elements = document.getElementsByClassName('error-message');
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }
    //url(./images/icon-error.svg);
    for(var i = 0; i < inputs.length; i++){
        inputs[i].style.backgroundImage = 'none';
    }
}




document.addEventListener('DOMContentLoaded', init);