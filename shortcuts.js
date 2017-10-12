
var promise = new Promise(function(resolve, reject){
    reject(new Error('the page didnt load'));
});

promise
    .catch(console.log);



    var promise = Promise.reject(new Error('failed to load content'));
    
  