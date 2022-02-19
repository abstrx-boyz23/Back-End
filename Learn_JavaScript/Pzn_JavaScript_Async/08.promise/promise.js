console.log("Hello World!!");

function getData(url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject(Error("Gagal Me-Request!!"))
      }
    }
    xhr.open("GET",url,true);
    xhr.send();
    
  })
  return promise;
}
const dataMipa1 = getData("data/mipa1.json");
dataMipa1
  .then(response => JSON.parse(response))
  .then(response => console.log(response))
  .catch(error => console.log(error.message))
  







