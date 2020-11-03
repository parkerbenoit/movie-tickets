



// Business Logic for Movies ------------

function Movie(movieTitle, time, age) {
  this.movieTitle = movieTitle;
  this.time = time;
  this.age = age;
}





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