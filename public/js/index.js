// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Function to render hearts on favorited/unfavorited dogs.
function renderHearts() {
  var favoriteHearts = JSON.parse(localStorage.getItem("favorites"));
  if (localStorage.getItem("favorites") === null) {
    return;
  } else {
    for (i = 0; i < favoriteHearts.length; i++) {
      $("#heart-one-" + [favoriteHearts[i]]).removeClass("far");
      $("#heart-one-" + [favoriteHearts[i]]).addClass("fas");
      $("#heart-two-" + [favoriteHearts[i]]).removeClass("far");
      $("#heart-two-" + [favoriteHearts[i]]).addClass("fas");
    }
  }
}

renderHearts();

// Favorites feature which highlights hearts on favorited dogs and saves that dog to localStorage.
$(".fa-heart").on("click", function() {
  var thisDog = $(this).data("dogid");
  if (favorites.includes(thisDog)) {
    $("#heart-one-" + thisDog).removeClass("fas");
    $("#heart-one-" + thisDog).addClass("far");
    $("#heart-two-" + thisDog).removeClass("fas");
    $("#heart-two-" + thisDog).addClass("far");
    let index = favorites.indexOf(thisDog);
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    favorites.push(thisDog);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderHearts();
  }
});
// terms of service and confirm button
function confirmTos() {
  if (!$("#tos").is(":checked")) {
    $("#tos").click();
  }
}

$("#tos").change(function() {
  if ($(this).is(":checked")) {
    $("#confirmReservation").removeAttr("disabled");
    $("#tosWarning").empty();
  } else {
    $("#confirmReservation").attr("disabled", true);
    $("#tosWarning").text("You must agree to the Terms of Service");
  }
});

$("#confirmReservation").on("click", function() {
  event.preventDefault();
  //confirmResValidation();
  var pickUpDate = $("#pickUpDate").val();
  var returnDate = $("#returnDate").val();
  // var start = moment(pickUpDate, "M/D/YYYY");
  // var end = moment(returnDate, "M/D/YYYY");
  // console.log(end.diff(start, "days"));
  // var diff = end.diff(start, "days");
  var dogId = $(this).attr("data-dogId");

  var reserveDetails = {
    pickUpDate: pickUpDate,
    returnDate: returnDate,
    //daysToRent: diff,
    dogId: dogId
  };
  // AJAX post the data to reserve dog.
  $.post("/api/dogs/reserve", reserveDetails, function(data) {
    if (data) {
      console.log("successful reserve");
      window.location.replace("/user-profile");
    } else {
      console.log("Fail to obtain data userDetails");
    }
  });
});
// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
