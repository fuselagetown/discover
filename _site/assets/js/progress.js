$(document).ready(function() {   

});




$(function() {


  $(".style-shuffle-pack01 .thumbs-up").click(function() { animateProgress01(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack02 .thumbs-up").click(function() { animateProgress02(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack03 .thumbs-up").click(function() { animateProgress03(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack04 .thumbs-up").click(function() { animateProgress04(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack05 .thumbs-up").click(function() { animateProgress05(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack06 .thumbs-up").click(function() { animateProgress06(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack07 .thumbs-up").click(function() { animateProgress07(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack08 .thumbs-up").click(function() { animateProgress08(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack09 .thumbs-up").click(function() { animateProgress09(parseInt($(this).data('diff'))) }); 
  $(".style-shuffle-pack10 .thumbs-up").click(function() { animateProgress10(parseInt($(this).data('diff'))) }); 


  function animateProgress01(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress01").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress01").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress02(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress02").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress02").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress03(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress03").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress03").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress04(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress04").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress04").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress05(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress05").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress05").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress06(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress06").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress06").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress07(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress07").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress07").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress08(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress08").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress08").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress09(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress09").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress09").delay(1000).animate({'value': toValue}, 2);
  }
     
  function animateProgress10(diff) {
      var currValue = $(".style-profile-ui__progressbar__progress10").val();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 100 ? 100 : toValue;
      $(".style-profile-ui__progressbar__progress10").delay(1000).animate({'value': toValue}, 2);
  }
     

     

});


