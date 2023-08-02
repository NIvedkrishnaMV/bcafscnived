var x=document.getElementById('user')
var err =document.getElementById('err')
var err1 =document.getElementById('err1')
var p =document.getElementById('pass')
var err2 =document.getElementById('err2')
var e =document.getElementById('email')
x.addEventListener('keyup',function(e){console.log(e.target.value)})
function validatename()
{
    if(x.value.trim()=="")
    {
        err.innerText="username cannot be empty";
        x.style.borderColor='red';
    return false;
    }
    else if(x.value.length<3)
    {
        err.innerText='username must be more than three character';
        x.style.borderColor="red";
        return false;
    }
    else
    {
    err.innerText='';
    return true;
    }  
}
function validatepass()
{
    if(p.value.trim()=="")
    {
        err1.innerText="Password is required to log in";
        p.style.borderColor='red';
    return false;
    }
    else
    {
    err1.innerText='';
    return true;
    }  
}
function validateemail()
{
    if(e.value.trim()=="")
    {
        err2.innerText="email is required to log in";
        e.style.borderColor='red';
    return false;
    }
    else
    {
    err2.innerText='';
    return true;
    }  
}
function validateform()
{
    if(!validatename()||!validatepass()||!validateemail())
    {
        return false;
    }
    else
    {
        return true;
    }
}
