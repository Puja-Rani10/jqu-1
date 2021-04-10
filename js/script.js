$(document).ready(function(){
 $( "#draggable" ).draggable();
   
 $( "#accordion" ).accordion();


  var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

  
});

