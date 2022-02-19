// Async Await (Fetch API)


async function getData(url) {
  const data = await getDataMipa1(url);
}

getData(`data/mipa1.json`);


function getDataMipa1(url) {
  return fetch(url)
    .then(result => result.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
}







