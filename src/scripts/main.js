// this is the main file that pulls in all other modules
// you can require() bower components too!
// var example = require("./example");
// example.welcome();
// var _ = require("underscore");
// var $ = require("jquery");

(function () {
  window.console.log(1); 

  /*
  * Profile Menu
  */
  $('body').on('click', '#menu-trigger', function(e){
    e.preventDefault();
    console.log("kerker")
    $("#subheader-container").toggleClass('toggled');
    $("#main-menu").slideToggle(200);
  });
}());