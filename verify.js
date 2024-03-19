function handleSubmit(e){
    
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const textd = document.getElementById("textd").value;
    const fullnameError = document.getElementById("fullnameError");
    const emailError = document.getElementById("emailError");
    const textError = document.getElementById("textError");
    if(fullname.length<3){
         e.preventDefault();
          fullnameError.style.display = 'block';
          fullnameError.style.color = 'red';
          fullnameError.innerHTML = '<b> Full name should contain minimum 3 letters'
       }
    if(fullname.length>2){
        fullnameError.style.display = 'block';
        fullnameError.innerHTML = ''
     }
    if(email.length<4){
        e.preventDefault();
        emailError.style.display = 'block';
        emailError.style.color = 'red';
        emailError.innerHTML = '<b> Please enter proper email'
       }
    if(email.length>3){
        emailError.style.display = 'block';
        emailError.innerHTML = ''
       }
    if(textd.length<10){
      e.preventDefault();
       textError.style.display = 'block';
       textError.style.color = 'red';
       textError.innerHTML = ' <b> Please discribe more'
      }
    if(textd.length>10){
       textError.style.display = 'block';
       textError.innerHTML = ''
      }
  console.log("form submitted");
}