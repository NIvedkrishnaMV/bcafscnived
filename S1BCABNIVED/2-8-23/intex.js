var user =document.getElementById('field1');
var password =document.getElementById('field2');
var err1 =document.getElementById('err1');
var err2 =document.getElementById('err2'); 
var manoj2=/^([12345]+)$/
var manoj=/^([admin]+)$/

function validateuser()
{
    // checked
    if(user.value.trim()=='')
    {
        err1.innerText="Field cannot be empty";
        user.style.border='2px solid red';
        return false;
    }
    else if(!user.value.match(manoj))
    {
        err1.innerText="invalid User name!!";
        user.style.border='2px solid red';
        return false;
    }
    else
    {
        err1.innerText="";
        user.style.border='2px solid green';
        return true;
    }
}
function validatepass()
{
    if(password.value.trim()=='')
    {
        err2.innerText="Enter password";
        password.style.border='2px solid red';
        return false;
    }
    else if(!password.value.match(manoj2))
    {
        err2.innerText="incorrect password !!";
        password.style.border='2px solid red';
        return false;
    }
    else
    {
        err2.innerText="";
        password.style.border='2px solid green';
        return true;
    }
}
function verify(callback)
{
    if(validateuser() && validatepass())
    {
        callback();
        return true;
    }
    else
    {
        return false;
    }
}
function redirect(){
    window.location = "todos.html" ;
}