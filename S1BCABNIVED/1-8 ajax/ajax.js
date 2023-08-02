function getdata()
{
    console.log("get data clicked");

// create XML object
var xhttp=new XMLHttpRequest();
// create an event listener
xhttp.onreadystatechange=function()
{
    let promise= new Promise((resolve,reject)=>{
        if (xhttp.readyState==4 && xhttp.status==200) {
            var data = JSON.parse(this.responseText);
            var output = `<tr><th>Name</th>
                            <th>Email</th></tr>`;
            for(let i=0;i<data.length;i++)
            {
                output+=`<tr>    
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                        </tr>`;
            }
            resolve(output)
        }
    })
        promise.then ((val)=>{
            document.getElementById('tr').innerHTML=val;
        })   
    
}
// request specification
xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
// sending request
xhttp.send();
}