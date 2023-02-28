$(document).ready(function() {    
});


$(function() {

  $(".carousel-item__actions--ratings--like").click(function() {
    $(this).closest( ".carousel-item" ).next(".similar-items").addClass('im-loading');
    $(this).closest( ".carousel-item__actions--ratings" ).find(".carousel-item__actions--ratings--dislike").removeClass('active');
    $(this).closest( ".carousel-item" ).removeClass("disliked");
    $(this).toggleClass("active");
    return false;
  });


  $(".carousel-item__actions--ratings--dislike").click(function() {
    $(this).toggleClass("active");
    $(this).closest( ".carousel-item" ).toggleClass("disliked");
    $(this).closest( ".carousel-item__actions--ratings" ).find(".carousel-item__actions--ratings--like").removeClass('active');
    return false;
  });
   
  $(".carousel-item__actions--ratings--dislike--undo").click(function() {
    $(this).closest( ".carousel-item" ).removeClass("disliked");
    return false;
  });
   

});
