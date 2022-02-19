// Web Worker

function eksekusiKompleks(value) {
  for (let i = 0; i < value; i++) {
    console.log(i+1);
  }
}


addEventListener("message", event => {
  eksekusiKompleks(event.data);
  postMessage("Succesfully")
})







