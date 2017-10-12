//Other person server or code
const data = [ana, facu, eneko, juan, agus, santiago]

var getData = function getData(){
    //get the data
    //600
}




var promise = new Promise(function(resolve, reject){
    if (getData = true){
        resolve(data)
    }else {
        reject(new Error('failed to recieve data'))
    }
})


promise
    .then(function(success){
        console.log(succes);
    },function(error){
        console.log(error);
    })


