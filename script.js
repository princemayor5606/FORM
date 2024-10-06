function registers(){
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let phonenumber = document.getElementById('phonenumber')
    let password=  document.getElementById('password')
    let confirmpassword = document.getElementById('confirmpassword')
    
    // for (let i = 0; i < password.length; i++) {
    //     let pass = password[i];

    if(username.value == '' || username.value == 0){
        error1.innerHTML = 'This field is required'
    } else if (!(username.value).includes('@')){
        error1.innerHTML = 'Input @ before your username'
    }else {
        error1.innerHTML = ''
    }


    if(email.value == '' || email.value == 0) {
        error2.innerHTML = 'This field is required.'
        error2.style.color = 'red'
    } else if(!(email.value).includes('@') && (email.value).includes('.')){
        error2.innerHTML = 'Input a valid email'
        error2.style.color = 'red'
    } else {
        error2.innerHTML = ''
    }

    if(phonenumber.value == '' || phonenumber.value ==0){
        error3.innerHTML = 'This field is required'
    }else if(!(phonenumber.value).includes('0') && (phonenumber.value).lenght(11) ){
        error3.innerHTML = 'Invalid Number'
    }else {
        error3.innerHTML = ''
    }

    
  if (password.value === confirmpassword.value ){
       error5 = ''
    } else {
        error5 = 'Password doesnt match'

    }
}

