function fetchData(callback){
   setTimeout(() => {
        const data = {name: 'john', age: 30}
        callback(data);
   }, 1000);
}

fetchData((data) => {
    console.log(data);
    
})