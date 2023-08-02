var num=document.getElementById('num')
var msg=document.getElementById('msg')

function test()
{
    try 
    {
        if(num.value=='') throw "empty";
        if(isNaN(num.value)) throw "not a number";
        if(num.value<10) throw "too low";
        if(num.value>20) throw "too high";

    } catch (error) 
    {
        msg.innerText= error
    }
    finally
    {
        num.value=''
    }
}