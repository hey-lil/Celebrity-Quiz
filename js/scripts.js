$(document).ready(function() {
  $("#areUSure").click(function() {
      alert("Are you sure?");
  });
// });

// $(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();

    var time = $("input:radio[name=time]:checked").val();
    var bathe = $("input:radio[name=bathe]:checked").val();
    var dinner = $("input:radio[name=dinner]:checked").val();

    if (time === "lateNight" && bathe === "bath" && dinner === "potRoast") {
      $("#Answer").show();
      $(".celebrity").hide();
      $("#shirley").show();
    }

    else if (time === "midDay" && bathe === "bath" && dinner === "breakfast") {
      $("#Answer").show();
      $(".celebrity").hide();
      $("#sandra").show();
    }
    else if (time === "evening" && bathe === "shower" && dinner === "pizza") {
      $("#Answer").show();
      $(".celebrity").hide();
      $("#kate").show();
    }


    else {
      $("#Answer").show();
      $(".celebrity").hide();
      $("#kristen").show();
    }
  });
});
