

#### run app
```
node server.js
```


 function frameAnalysis() {
    console.log("frameAnalysis");
    //let url= 'http://jsonplaceholder.typicode.com/todos/2';
    // let url= 'http://0.0.0.0:8080/api/test';
    let url= 'http://localhost:8080/api/test';
    fetch(url, {
        mode: 'no-cors',
        method: 'GET'
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

 }

 function frameAnalysis() {
    console.log("frameAnalysis");
    let url= 'http://jsonplaceholder.typicode.com/todos/2';
    // let url= 'http://0.0.0.0:8080/api/test';
    //let url= 'http://localhost:8080/api/test';

    fetch(url, {
        mode: 'no-cors',
        method: 'GET'
    })
    .then(function(response) {
        console.log("response----> ", response); 
        console.log(response.text() ); 
    }).catch(function(e) {  
        console.log('Request failed', e) ; 
    });

 }