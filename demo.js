let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('resolved..')
    },4000);
});
async function asyncFunc(){
    try{
        let result=await promise;
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
}
asyncFunc();