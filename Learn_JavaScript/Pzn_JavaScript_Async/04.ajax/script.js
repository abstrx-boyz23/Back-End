function ajax(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success(xhr);
    }
  }
  xhr.open("GET",url,true);
  xhr.send();
}


console.log("Mulai");
ajax("mipa1.json", result => {
  console.log(result.response)
}, () => console.log("Error"));
console.log("Selesai");
