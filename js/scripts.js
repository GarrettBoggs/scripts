$(document).ready(function() {
  $("#blanks form").submit(function() {
    var person1Input= $("input#person1").val().toUpperCase();

    var person2Input= $("input#person2").val().toUpperCase();

    $(".person1").text(person1Input);

    $(".person2").text(person2Input);


    $("#story").show();

     event.preventDefault();
  });
});
