var email =document.getElementById('field1');
var password =document.getElementById('field2');
var err1 =document.getElementById('err1');
var err2 =document.getElementById('err2');
var rolex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/

function validateemail()
{
    // checked
    if(email.value.trim()=='')
    {
        err1.innerText="Field cannot be empty";
        email.style.border='1px solid red';
        return false;
    }
    else if(!email.value.match(rolex))
    {
        err1.innerText="Email is not in correct format";
        email.style.border='1px solid red';
        return false;
    }
    else
    {
        err1.innerText=""
        email.style.border="1px solid red";
        return true;
    }
}
function vailidatepass()
{
    if(password.value.trim()=='')
    {
        err2.innerText="Enter password";
        password.style.border='1px solid red';
        return false;
    }
    else if(password.value.length<3)
    {
        err2.innerText="Lengthy password sugested"
        return false;
    }
    else
    {
        err2.innerText=""
        password.style.border="1px solid red";
        return true;
    }
}
function verify()
{
    if(!vailidatepass()||!validateemail())
    {
        return false;
    }
    else
    {
        return true;
    }
}