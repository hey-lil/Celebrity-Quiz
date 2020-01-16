
$(document).ready(function() {
  $("#submit").submit(function(event) {
    var time = $("input:radio[name=time]:checked").val();
    var bathe = $("input:radio[name=bathe]:checked").val();
    var dinner = $("input:radio[name=dinner]:checked").val();

    if (time === lateNight && bathe === bath && dinner === potRoast) {
      $().show();
    }
    if (time === lateNight && bathe === bath && dinner === potRoast) {
      $().show();
    }
    if (time === lateNight && bathe === bath && dinner === potRoast) {
      $().show();
    }
  }
}
