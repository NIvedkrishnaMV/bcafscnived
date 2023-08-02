console.log(document.all);

var hd=document.getElementById('head');
console.log(hd);

hd.style.color='blue';
hd.innerText='Javascript is fun';

var tag=document.getElementById('tag1');
tag.innerHTML='<p>Adding an inner HTML</p>';

var ls=document.getElementsByClassName('list');
ls[0].style.color="blue";

var p=document.getElementById('para');
p.innerText='para is changed';

var h=document.getElementsByTagName('h1');
h[0].style.color='cyan';
h[1].style.color='blue';

