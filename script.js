let ulItem = document.getElementById("ul-item");

function apiRequest() {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users?page=2")
      .then((r) => r.json())
      .then(function (x) {
        x.data.forEach((element) => {
          let liItem = document.createElement("li");
          liItem.innerText = `${element.email}`;
          ulItem.appendChild(liItem);
        });
      });
  }).catch((error) => reject(error));
}
apiRequest()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));







async function asyncFunction(){
    let x = await fetch('https://reqres.in/api/users?page=2')
    if (x.status !== 200){
        throw 'error'
    }
    let y = await x.json()
    return y
}
asyncFunction()
.then ((z) => {
    z.data.forEach((element) =>{
        let liElement = document.createElement('li')
        liElement.innerText = `${element.first_name}`
        ulItem.appendChild(liElement)
    })

})
.catch((t) => console.log("error"));