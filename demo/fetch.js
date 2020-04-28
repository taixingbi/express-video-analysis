//url= 'http://jsonplaceholder.typicode.com/todos/2';
url= 'http://localhost:8080/api/test';

function demo() {
    alert("test")


}

function test0() {
    //let mat = cv.imread("108"); //mat

    alert("test")
}

//url= 'http://jsonplaceholder.typicode.com/todos/2';
function getRequest() {
    console.log("getRequest...");

    console.log(url);
    fetch(url, {
        mode: 'cors',
        method: 'GET'
    })
    .then((response) => {
        console.log("response ",response);
        return response.json();
    })
    .then((data) => {
        console.log("data ",data);
    });
    return;
}

async function getRequestPromise() {
    console.log("getRequestPromise....");

    const response = await fetch(url, {
        method: 'GET'
      });
    let data = await response.json();
    console.log("data ",data);
    return data;
}

url= 'http://localhost:8080/api/test';

async function postRequest() {
    console.log("postRequest...");

    data={	
        "id": "103.jpg",
        "imgbase64": "1234"
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });


    let data = await response.json();
    console.log("data ",data);


    return data;
}



