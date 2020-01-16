
$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();

    var time = $("input:radio[name=time]:checked").val();
    var bathe = $("input:radio[name=bathe]:checked").val();
    var dinner = $("input:radio[name=dinner]:checked").val();

    if (time === "lateNight" && bathe === "bath" && dinner === "potRoast") {
      $("#Answer").show();
      $("#shirley").show();
    }

    else if (time === "midDay" && bathe === "bath" && dinner === "breakfast") {
      $("#Answer").show();
      $("#sandra").show();
    }
    else if (time === "evening" && bathe === "shower" && dinner === "pizza") {
      $("#Answer").show();
      $("#kate").show();
    }
    else {
      $("#Answer").show();
      $("#kristen").show();
    }

  });
});
