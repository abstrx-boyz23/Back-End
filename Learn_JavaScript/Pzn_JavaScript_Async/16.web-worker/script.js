// Application JS

const worker = new Worker("web_worker.js");
worker.addEventListener("message", event => {
  console.log(`Data : ${event.data}`);
})

const btnClick = document.getElementById('btn-click');
btnClick.addEventListener("click", function (event) {
  console.log("Mulai!");
  worker.postMessage(10);
  console.log("Selesai!");
});









