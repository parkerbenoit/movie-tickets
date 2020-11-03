// Business Logic for Tickets

function TicketOffice() {
  this.movies = [];
  this.currentId = 0;
}

TicketOffice.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies.push(movie);
}

TicketOffice.prototype.assignId = function()  {
  this.currentId +=1;
  return this.currentId;
}

TicketOffice.prototype.addShowtime = function ()  {
  this.movies.push(movie);
}


// Business Logic for Movies ------------

function Movie(movieTitle, showTime) {
  this.movieTitle = movieTitle;
  this.showTime = showTime;
}

//function TicketPrice(age)//


// User Interface Logic ----------
let ticketOffice = new TicketOffice();










/*
// Movies Titles //

"First-release"
  1. The Sandlot
  2. The Matrix
  3. Avatar

"Non first-release":
  4. Star Wars: Random
  5. Transformers


// Discount Factors //

  Before 12pm - Matinee (discounted)
  After 12pm - Normal priced

  Seniors 65+ - discounted

  Non-"first-release" - discounted
//  //
*/




$(document).ready(function() {
  $("form#age-input").submit(function(event) {
    event.preventDefault();
    const inputtedAge = parseInt($("input#customer-age").val());
    $("input#customer-age").val();
    console.log(inputtedAge);
  })
})