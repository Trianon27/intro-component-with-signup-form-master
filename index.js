
let init = function () {

    document.getElementById('submit').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    let val = validation()
    let emailv = emailVal();
    var elements = document.getElementsByClassName('error-message');
    var inputs = document.getElementsByTagName('input');
    if(val){
        if(emailv){
 
           reset_elements();
           alert('Formulario enviado');
           document.getElementById('form-user').reset();
        }
        else{
            reset_elements();
            elements[2].style.display = 'flex';
            inputs[2].style.backgroundImage = 'url(./images/icon-error.svg)';
        }     
    }
    else{
        for(var i = 0; i < elements.length; i++){
            elements[i].style.display = 'flex';
        }
        //url(./images/icon-error.svg); 
        for(var i = 0; i < inputs.length; i++){
            inputs[i].style.backgroundImage = 'url(./images/icon-error.svg)';
        }
    }

  

}

const validation = function(){
    
    var password = document.getElementById('password').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    if(password && firstName && lastName && email){
        return true;
    }
    else{
        return false;
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