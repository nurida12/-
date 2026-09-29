const promise = new Promise((resolve, reject)  => {
    setTimeout(() => {
        const succes = false;
        if (succes) {
        resolve('операция сәтті аяқталды!')
        }else{
         reject('Қате пайда болды');
        } 
    }, 1000)
})

promise
.then((message) => {
  console.log(message)
    
})
.catch((error) => {
    console.log(error)
    
})