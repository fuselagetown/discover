$(document).ready(function() {   

});




$(function() {

  $(".carousel-item__actions--ratings--like").click(function() {
    $(this).closest( ".carousel-item__actions--ratings" ).find(".carousel-item__actions--ratings--dislike").removeClass('active');
    $(this).closest( ".carousel-item" ).removeClass("disliked");
    $(this).toggleClass("active");
    return(false); 
  });

  $(".thumbs-up-shop-similar .carousel-item__actions--ratings--like, .carousel-item__button--see-similar").click(function() {
    $(this).closest( ".carousel-item" ).next(".similar-items").addClass('im-loading');
    return(false); 
  });  

  $(".item-01 .carousel-item__actions--ratings--like").click(function() { $(this).closest( ".carousel" ).find(".similar-items-01").addClass('im-loading'); return(false); });
  $(".item-02 .carousel-item__actions--ratings--like").click(function() { $(this).closest( ".carousel" ).find(".similar-items-02").addClass('im-loading'); return(false); });
  $(".item-03 .carousel-item__actions--ratings--like").click(function() { $(this).closest( ".carousel" ).find(".similar-items-03").addClass('im-loading'); return(false); });
  $(".item-04 .carousel-item__actions--ratings--like").click(function() { $(this).closest( ".carousel" ).find(".similar-items-04").addClass('im-loading'); return(false); });

 $(".carousel-item__button--see-similar").click(function() {
    $(this).closest( ".carousel-item" ).next(".similar-items").addClass('im-loading');
    return(false); 
  }); 

  $(".carousel-item__actions--ratings--dislike").click(function() {
    $(this).toggleClass("active");
    $(this).closest( ".carousel-item__actions--ratings" ).find(".carousel-item__actions--ratings--like").removeClass('active');  
    return(false); 
  });

  $(".thumbs-down-playback .carousel-item__actions--ratings--dislike").click(function() {
    $(this).closest( ".carousel-item" ).toggleClass("disliked");
    return(false); 
  });


  $(".carousel-item__actions--ratings--dislike--undo").click(function() {
    $(this).closest( ".carousel-item" ).removeClass("disliked");
    return(false); 
  });


  $(".carousel-item__actions--bookmark").click(function() {
    $(this).closest( ".carousel-item" ).find(".bottom-sheet").toggleClass("open").show();
    return(false); 
  });

  

  $(".carousel-item__actions--save-for-later").click(function() {
    $(this).closest( ".carousel-item" ).toggleClass("saved-for-later");
    $(this).toggleClass("active");
    $('.toast').addClass('saving');
    setTimeout(function () { 
      $('.toast').removeClass('saving');
      }, 2000);
    return(false); 
  });
  $(".carousel-item__actions--already-own").click(function() { 
    $(this).closest(".carousel-item").toggleClass("added-to-closet"); 
    $(this).toggleClass("active");
  });  
  $(".carousel-item__actions--add-to-fix").click(function() { 
    $(this).closest(".carousel-item").toggleClass("added-to-fix"); 
    $(this).toggleClass("active");
  });


  $(".bottom-sheet a").click(function() {
    $(this).closest(".bottom-sheet").toggleClass("open").hide();
    return(false); 
  });


  $(".search").click(function() {
    $(".nav-overlay").addClass("open");
    return(false); 
  });


  $(".open-sense").click(function() {
    $(".nav-overlay").removeClass("open");
    $(".sense-page").removeClass("active");
    return(false); 
  });


  $(".open-01").click(function() { $(".sense-page.sense-01").addClass("active"); return(false); });
  $(".open-02").click(function() { $(".sense-page.sense-02").addClass("active"); return(false); });
  $(".open-03").click(function() { $(".sense-page.sense-03").addClass("active"); return(false); });
  $(".open-04").click(function() { $(".sense-page.sense-04").addClass("active"); return(false); });
  $(".open-05").click(function() { $(".sense-page.sense-05").addClass("active"); return(false); });
  $(".open-06").click(function() { $(".sense-page.sense-06").addClass("active"); return(false); });
  $(".open-07").click(function() { $(".sense-page.sense-07").addClass("active"); return(false); });
  $(".open-08").click(function() { $(".sense-page.sense-08").addClass("active"); return(false); });
  $(".open-09").click(function() { $(".sense-page.sense-09").addClass("active"); return(false); });
  $(".open-10").click(function() { $(".sense-page.sense-10").addClass("active"); return(false); });



  var clicks = 0;
  $('.clicky').on('click', function(){
      var string;
      clicks++;
      switch(clicks){
          case 1:
              string = "We're starting to get to know you..";
              $(this).closest( ".carousel-item" ).find('.clicky').text(string);
              break;
          case 2:
              string = "Your dislikes are just as important as your likes";
              $(this).closest( ".carousel-item" ).find('.clicky').text(string);
              break;
          case 3:
              string = "We're picking up what you're putting down";
              $(this).closest( ".carousel-item" ).find('.clicky').text(string);
              break;
          case 4:
              string = "Keep going—We're listening.";
              $(this).closest( ".carousel-item" ).find('.clicky').text(string);
              break;
          case 5:
              string = "We're taking notes..";
              $(this).closest( ".carousel-item" ).find('.clicky').text(string);
              break;
      }
  });
   

});


