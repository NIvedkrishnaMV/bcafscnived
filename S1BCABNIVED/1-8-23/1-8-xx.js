// setInterval(() => {
//     console.log("hi");
// }, 1000);
// console.log("me first");

// var btn = document.getElementById("btn1");
// btn.addEventListener("click",()=>{
//     alert('callback alert!!');
// })

// function add(a,b){
//     var sum=a+b;
//     return sum;
// }
// function display(val){
//     document.getElementById("res").innerText=`the sum is ${val}`
// }

// var result=add(2,3);
// display(result);

// function add1(a,b,callback)
// {
//     var sum=a+b;
//     callback(sum)
// }
// function display(val){
//     document.getElementById("res").innerText=`the sum is ${val}`
// }
// add1(2,3,display);

// function add1(a,b)
// {
//     let promise= new Promise((resolve,reject)=> {
//         var sum = a+b;
//         if(sum>10)
//         {
//             resolve(sum);
//         }
//         else
//         {
//             reject('error');
//         }
//     })
//     promise.then((val)=>{
//         document.getElementById("res").innerText=`the sum is ${val}`
//     }) 
//     .catch((err)=>{
//         document.getElementById("res").innerText=`the error message is ${err}`
//     })
// }
// add1(10,3);

// function mathOperation(a,b,operation)
// {
//     return new Promise((resolve,reject)=>{
//         if(operation=='add'){
//             resolve(a+b);
//         }
//         else if (operation =='sub')
//         {
//             resolve(a-b);
//         }
//         else if (operation== 'multiply')
//         {
//             resolve(a*b);
//         }
//         else if(operation=='divide')
//         {
//             resolve(a/b);
//         }
//         else{
//             reject( new Error (`Invalid operation`));
//         }
//     });
// }
//  mathOperation(5,3,'add')
//  .then(result=>{
//     console.log('add:',result);
//  })
//  .catch(error=>{
//     console.log('Error:',error.message);
//  });
 

//  mathOperation(10,4,'sub')
//  .then(result=>{
//     console.log('sub:',result);
//  })
//  .catch(error=>{
//     console.log('Error:',error.message);
// });

// mathOperation(7,2,'multiply')
//  .then(result=>{
//     console.log('mul:',result);
//  })
//  .catch(error=>{
//     console.log('Error:',error.message);
// });
// mathOperation(8,2,'divide')
//  .then(result=>{
//     console.log('div:',result);
//  })
//  .catch(error=>{
//     console.log('Error:',error.message);
// });
 
async function add1(a,b)
{
    let promise= new Promise((resolve,reject)=> {
        var sum = a+b;
        if(sum>1)
        {
            resolve(sum)
        }
        else
        {
            reject('error')
        }
    })
    var ans = await promise
    document.getElementById("res").innerText=`the sum is ${ans}`;
}
add1(10,2);
