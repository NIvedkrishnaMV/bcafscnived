// function mathOperation(a,b,operation)
// {
//     new Promise((resolve,reject)=>
//     {
//         if(operation=='add'){
//             resolve(a+b);
//         }
//         else if (operation =='sub')
//         {
//             resolve(a-b);
//         }
//         else{
//             reject(`Invalid operation`);
//         }
//     })
//     .then((val)=>
//     {
//         console.log('Result:', val);
//     })
//     .catch((err)=>
//     {
//         console.error("Error",err);
//     })
// }    

// mathOperation(10,5,'add');
// mathOperation(10,5,'sub');
// mathOperation(10,5,'multiply');

async function add1(a,b){
    let promise = new Promise((resolve,reject)=>{
        resolve(sum)
     } )    
}