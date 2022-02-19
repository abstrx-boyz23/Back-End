// Menggunakan Ajax (jQuery) => menggunakan script lain

/*
function movieResult () {
  $("#movie-list").html("");
  
  // request 
  $.ajax({
    url: "https://www.omdbapi.com/",
    type: "GET",
    dataType: "JSON",
    data: {
      "apikey": "50876211",
      "s": $("#search-input").val()
    },
    success: result => {
      console.log(result);
      if (result.Response === "True") {
        const search = result.Search;
        $.each(search, (i , movie) => {
          $("#movie-list").append(getMovie(movie));
        });
      } else if( $("#search-input").val() === ""){
        $("movie-list").html("")
      } else {
        $("#movie-list").html('<h1 class="text-center mt-5" style="font-size: 50px; color: red">Movie Not Found!</h1>')
      }
      $("#search-input").val("");
    }
  });
}
// saat pencarian movie
$("#search-btn").click(function () {
  movieResult();
});

// tombol enter
$("#search-input").keyup(function (event) {
  if (event.keyCode === 13) {
    movieResult();
  }
});

// function see detail
$("#movie-list").on("click",".see-detail", function () {
  $.ajax({
    url: "https://www.omdbapi.com/",
    type: "GET",
    dataType: "JSON",
    data: {
      "apikey": "50876211",
      "i": $(this).data("id")
    },
    success: result => {
      console.log(result);
      if (result.Response === "True" ) {
        $(".modal-body").html(getMovieDetail(result));
      }
    }
  })
});
*/




// Menggunakan Fetch (Vanila JavaScript) => murni fitur JavaScript

function movieResult () {
  const movieList = document.querySelector("#movie-list");
  const searchInput = document.querySelector("#search-input");
  
  movieList.innerHTML = "";
  
  // Fetch (Data Movie)
  fetch(`https://www.omdbapi.com/?apikey=50876211&s=${searchInput.value}`)
    .then(response => response.json())
    .then(result => {
      if (result.Response === "True") {
        const search = result.Search;
        let cards = "";
        search.forEach(movie => cards += getMovie(movie));
        movieList.innerHTML = cards;
        
        const seeDetailModal = document.querySelectorAll(".see-detail");
        
        seeDetailModal.forEach(sdm => {
          sdm.addEventListener("click", function () {
            document.querySelector(".modal-body").innerHTML = "";
            
            fetch(`https://www.omdbapi.com/?apikey=50876211&i=${this.data.id}`)
              .then(response => response.json())
              .then(result => {
                
                if (result.Response === "True" ) {
                  
                  document.querySelector(".modal-body").innerHTML = getMovieDetail(result);
                  
                }
              });
          });
        })
      } else if (searchInput.value === ""){
        movieList.innerHTML = "";
      } else {
        movieList.innerHTML = '<h1 class="text-center mt-5" style="font-size: 50px; color: red">Movie Not Found!</h1>';
      }
    searchInput.value = "";
    });
}

// saat pencarian movie
document.querySelector("#search-btn").addEventListener("click", function () {
  movieResult();
});

// tombol enter
document.querySelector("#search-input").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    movieResult();
  }
});


// Function

// 1. Get Movie
function getMovie(movie) {
  return `<div class="col-md-4 mb-4">
            <div class="card">
              <img src="${movie.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p>${movie.Year}</p>
                <a href="#" class="btn see-detail" style="background-color: #61d7f4; color: white;" data-bs-toggle="modal" data-bs-target="#seeDetailModal" data-id="${movie.imdbID}">See Detail</a>
              </div>
            </div>
          </div>`
}

// 2. Get See Detail Movie
function getMovieDetail(result) {
  return `<div class="container-fluid">
                  
            <div class="row">
              <h2 class="text-center mb-3">${result.Title}</h2>
              <div class="col-md-4">
                <img src="${result.Poster}" class="card-img-top">
              </div>
              
              <div class="col-md-8">
                <ol class="list-group list-group-numbered">
                
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw"><b>Genre :</b> ${result.Genre}</div>
                    </div>
                  </li>
                  
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw"><b>Actors :</b> ${result.Actors}</div>
                    </div>
                  </li>
                  
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw"><b>Language :</b> ${result.Language}</div>
                    </div>
                  </li>
                  
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw"><b>Released :</b> ${result.Released}</div>
                    </div>
                  </li>
                  
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw"><b>Duration :</b> ${result.Runtime}</div>
                    </div>
                  </li>
                  
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw"><b>Country :</b> ${result.Country}</div>
                    </div>
                  </li>
                  
                </ol>
              </div>
            </div>
          </div>`
}





