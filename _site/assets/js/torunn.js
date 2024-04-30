$(document).ready(function() {   

});



$(function() {

  const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});


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

  $(".carousel-item__actions--ratings--dislike").click(function() {
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
    $(".sense-page").delay(500).removeClass("active");
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


  $(".open-subsense-01").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-01").addClass("active"); return(false); });
  $(".open-subsense-02").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-02").addClass("active"); return(false); });
  $(".open-subsense-03").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-03").addClass("active"); return(false); });
  $(".open-subsense-04").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-04").addClass("active"); return(false); });
  $(".open-subsense-05").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-05").addClass("active"); return(false); });
  $(".open-subsense-06").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-06").addClass("active"); return(false); });
  $(".open-subsense-07").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-07").addClass("active"); return(false); });
  $(".open-subsense-08").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-08").addClass("active"); return(false); });
  $(".open-subsense-09").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-09").addClass("active"); return(false); });
  $(".open-subsense-10").click(function() { 
    $(this).closest(".sense-page").find(".sense-page.subsense-10").addClass("active"); return(false); });


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



  $(".carousel-item-cover").click(function() {
    $(this).find(".style-shuffle-pack").show().addClass("im-active");
    return(false); 
  });

   
  $(".style-shuffle-pack-close, .style-shuffle-summary-button").click(function() {
    $(this).closest(".style-shuffle-pack").hide().removeClass("im-active");
    return(false); 
  });

  $(".style-shuffle-summary-button").click(function() {
    $(this).closest(".carousel-item").hide();
    return(false); 
  });


  // animate progress by a step indicated by diff
  function animateProgress01(diff) {
      var currValue = $(".playback-bubble-01").width();
      var toValue = currValue + diff;
      toValue = toValue < 0 ? 0 : toValue;
      toValue = toValue > 200 ? 200 : toValue;
      $(".playback-bubble-01").animate({'width': toValue}, 500).animate({'height': toValue}, 500);
  }
  function animateProgress02(diff) { var currValue = $(".playback-bubble-02").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-02").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress03(diff) { var currValue = $(".playback-bubble-03").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-03").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress04(diff) { var currValue = $(".playback-bubble-04").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-04").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress05(diff) { var currValue = $(".playback-bubble-05").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-05").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress06(diff) { var currValue = $(".playback-bubble-06").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-06").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress07(diff) { var currValue = $(".playback-bubble-07").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-07").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress08(diff) { var currValue = $(".playback-bubble-08").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-08").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress09(diff) { var currValue = $(".playback-bubble-09").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-09").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }
  function animateProgress10(diff) { var currValue = $(".playback-bubble-10").width(); var toValue = currValue + diff; toValue = toValue < 0 ? 0 : toValue; toValue = toValue > 200 ? 200 : toValue; $(".playback-bubble-10").animate({'width': toValue}, 500).animate({'height': toValue}, 500); }



  $(".style-shuffle-rating-01, .item-drilldown__item-01").click(function() { animateProgress01(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-02, .item-drilldown__item-02").click(function() { animateProgress02(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-03, .item-drilldown__item-03").click(function() { animateProgress03(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-04, .item-drilldown__item-04").click(function() { animateProgress04(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-05, .item-drilldown__item-05").click(function() { animateProgress05(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-06, .item-drilldown__item-06").click(function() { animateProgress06(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-07, .item-drilldown__item-07").click(function() { animateProgress07(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-08, .item-drilldown__item-08").click(function() { animateProgress08(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-09, .item-drilldown__item-09").click(function() { animateProgress09(parseInt($(this).data('diff'))); });
  $(".style-shuffle-rating-10, .item-drilldown__item-10").click(function() { animateProgress10(parseInt($(this).data('diff'))); });

  $(".thumbs-up.style-shuffle-rating-01").click(function() { $(".playback-bubble-01").show();});
  $(".thumbs-up.style-shuffle-rating-02").click(function() { $(".playback-bubble-02").show();});
  $(".thumbs-up.style-shuffle-rating-03").click(function() { $(".playback-bubble-03").show();});
  $(".thumbs-up.style-shuffle-rating-04").click(function() { $(".playback-bubble-04").show();});
  $(".thumbs-up.style-shuffle-rating-05").click(function() { $(".playback-bubble-05").show();});
  $(".thumbs-up.style-shuffle-rating-06").click(function() { $(".playback-bubble-06").show();});
  $(".thumbs-up.style-shuffle-rating-07").click(function() { $(".playback-bubble-07").show();});
  $(".thumbs-up.style-shuffle-rating-08").click(function() { $(".playback-bubble-08").show();});
  $(".thumbs-up.style-shuffle-rating-09").click(function() { $(".playback-bubble-09").show();});
  $(".thumbs-up.style-shuffle-rating-10").click(function() { $(".playback-bubble-10").show();});


   
  $(".style-shuffle-rating").click(function() {
    $(this).addClass("active");
    return(false); 
  });

   
  $(".thumbs-down").click(function() {
    $(this).closest(".style-shuffle-item").addClass("thumbs-down").delay(700).queue(function(){
      $(this).addClass("im-offscreen").dequeue();
    });
    return(false); 
  });
   
  $(".thumbs-up").click(function() {
    $(this).closest(".style-shuffle-item").addClass("thumbs-up").delay(700).queue(function(){
      $(this).addClass("im-offscreen").dequeue();
    });
    return(false);
  });

 $(".scale-quiz-select").click(function() {
    $(this).addClass("selected");
    $(this).closest(".scale-quiz-page").addClass("rated").delay(2000).queue(function(){
      $(this).addClass("removing").dequeue();
    });
    return(false);  
  });

  $(".skip-category").click(function() {
    $(this).addClass("selected");
    $(this).closest(".scale-quiz-page").addClass("rated").delay(1200).queue(function(){
      $(this).addClass("removing").dequeue();
    });
    return(false);  
  });

   
  $(".only-some-items").click(function() {
    $(this).closest(".style-shuffle-item").addClass("drilldown-is-open");
    return(false); 
  });
   
  $(".drilldown-close").click(function() {
    $(this).closest(".style-shuffle-item").removeClass("drilldown-is-open");
    return(false); 
  });

  $(".item-drilldown__next").click(function() {
    $(this).closest(".style-shuffle-item").addClass("fade-out").delay(1000).queue(function(){
      $(this).addClass("im-offscreen").dequeue();
    });
    return(false);
  });


  $(".item-drilldown__item ").click(function() {
    $(this).toggleClass("liked");
    return(false);  
  });



$(".this-or-that-page .skip10").click(function() { $(".this-or-that-page.sense-10").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip09").click(function() { $(".this-or-that-page.sense-09").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip08").click(function() { $(".this-or-that-page.sense-08").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip07").click(function() { $(".this-or-that-page.sense-07").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip06").click(function() { $(".this-or-that-page.sense-06").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip05").click(function() { $(".this-or-that-page.sense-05").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip04").click(function() { $(".this-or-that-page.sense-04").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip03").click(function() { $(".this-or-that-page.sense-03").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip02").click(function() { $(".this-or-that-page.sense-02").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });
$(".this-or-that-page .skip01").click(function() { $(".this-or-that-page.sense-01").addClass("rated").delay(1000).queue(function(){ $(this).addClass("removing").dequeue(); }); return(false);  });

$(".playback-button").click(function() { 
  $(".scale-playback").addClass("removing"); 
  return(false);  });





  $(".sense-01.rating-little").click(function() { $(".playback-01").addClass("little"); return(false); });
  $(".sense-01.rating-somewhat").click(function() { $(".playback-01").addClass("somewhat"); return(false); });
  $(".sense-01.rating-very").click(function() { $(".playback-01").addClass("very"); return(false); });

  $(".sense-02.rating-little").click(function() { $(".playback-02").addClass("little"); return(false); });
  $(".sense-02.rating-somewhat").click(function() { $(".playback-02").addClass("somewhat"); return(false); });
  $(".sense-02.rating-very").click(function() { $(".playback-02").addClass("very"); return(false); });

  $(".sense-03.rating-little").click(function() { $(".playback-03").addClass("little"); return(false); });
  $(".sense-03.rating-somewhat").click(function() { $(".playback-03").addClass("somewhat"); return(false); });
  $(".sense-03.rating-very").click(function() { $(".playback-03").addClass("very"); return(false); });

  $(".sense-04.rating-little").click(function() { $(".playback-04").addClass("little"); return(false); });
  $(".sense-04.rating-somewhat").click(function() { $(".playback-04").addClass("somewhat"); return(false); });
  $(".sense-04.rating-very").click(function() { $(".playback-04").addClass("very"); return(false); });

  $(".sense-05.rating-little").click(function() { $(".playback-05").addClass("little"); return(false); });
  $(".sense-05.rating-somewhat").click(function() { $(".playback-05").addClass("somewhat"); return(false); });
  $(".sense-05.rating-very").click(function() { $(".playback-05").addClass("very"); return(false); });

  $(".sense-06.rating-little").click(function() { $(".playback-06").addClass("little"); return(false); });
  $(".sense-06.rating-somewhat").click(function() { $(".playback-06").addClass("somewhat"); return(false); });
  $(".sense-06.rating-very").click(function() { $(".playback-06").addClass("very"); return(false); });

  $(".sense-07.rating-little").click(function() { $(".playback-07").addClass("little"); return(false); });
  $(".sense-07.rating-somewhat").click(function() { $(".playback-07").addClass("somewhat"); return(false); });
  $(".sense-07.rating-very").click(function() { $(".playback-07").addClass("very"); return(false); });

  $(".sense-08.rating-little").click(function() { $(".playback-08").addClass("little"); return(false); });
  $(".sense-08.rating-somewhat").click(function() { $(".playback-08").addClass("somewhat"); return(false); });
  $(".sense-08.rating-very").click(function() { $(".playback-08").addClass("very"); return(false); });

  $(".sense-09.rating-little").click(function() { $(".playback-09").addClass("little"); return(false); });
  $(".sense-09.rating-somewhat").click(function() { $(".playback-09").addClass("somewhat"); return(false); });
  $(".sense-09.rating-very").click(function() { $(".playback-09").addClass("very"); return(false); });
  
  $(".sense-10.rating-little").click(function() { $(".playback-10").addClass("little"); return(false); });
  $(".sense-10.rating-somewhat").click(function() { $(".playback-10").addClass("somewhat"); return(false); });
  $(".sense-10.rating-very").click(function() { $(".playback-10").addClass("very"); return(false); });

     

  $(".round-1 .this-or-that-select, .round-2 .this-or-that-select").click(function() {
    $(this).addClass("selected");
    $(this).closest(".this-or-that-page").addClass("rated").delay(1000).queue(function(){
      $(this).addClass("removing").dequeue();
    });
    return(false);  
  });


  $(".round-3 .this-or-that-select").click(function() {
    $(this).addClass("selected");
    $(this).closest(".this-or-that-page").addClass("rated");
    return(false);  
  });


  $(".round-3-done-button").click(function() {
    $(this).closest(".this-or-that-page").addClass("removing");
    return(false);  
  });


  $(".round-1 .sense-01.rating-little").click(function() { $(".round-2.sense-01").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-01.rating-somewhat").click(function() { $(".round-2.sense-01").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-01.rating-very").click(function() { $(".round-2.sense-01").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-01.rating-1").click(function() { $(".round-2.sense-01").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-01.rating-2").click(function() { $(".round-2.sense-01").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-01.rating-3").click(function() { $(".round-2.sense-01").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-01.rating-4").click(function() { $(".round-2.sense-01").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-01.rating-5").click(function() { $(".round-2.sense-01").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-01.rating-little").click(function() { $(".round-3.sense-01").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-01.rating-somewhat").click(function() { $(".round-3.sense-01").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-01.rating-very").click(function() { $(".round-3.sense-01").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-01.rating-1").click(function() { $(".round-3.sense-01").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-01.rating-2").click(function() { $(".round-3.sense-01").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-01.rating-3").click(function() { $(".round-3.sense-01").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-01.rating-4").click(function() { $(".round-3.sense-01").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-01.rating-5").click(function() { $(".round-3.sense-01").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-02.rating-little").click(function() { $(".round-2.sense-02").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-02.rating-somewhat").click(function() { $(".round-2.sense-02").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-02.rating-very").click(function() { $(".round-2.sense-02").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-02.rating-1").click(function() { $(".round-2.sense-02").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-02.rating-2").click(function() { $(".round-2.sense-02").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-02.rating-3").click(function() { $(".round-2.sense-02").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-02.rating-4").click(function() { $(".round-2.sense-02").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-02.rating-5").click(function() { $(".round-2.sense-02").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-02.rating-little").click(function() { $(".round-3.sense-02").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-02.rating-somewhat").click(function() { $(".round-3.sense-02").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-02.rating-very").click(function() { $(".round-3.sense-02").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-02.rating-1").click(function() { $(".round-3.sense-02").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-02.rating-2").click(function() { $(".round-3.sense-02").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-02.rating-3").click(function() { $(".round-3.sense-02").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-02.rating-4").click(function() { $(".round-3.sense-02").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-02.rating-5").click(function() { $(".round-3.sense-02").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-03.rating-little").click(function() { $(".round-2.sense-03").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-03.rating-somewhat").click(function() { $(".round-2.sense-03").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-03.rating-very").click(function() { $(".round-2.sense-03").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-03.rating-1").click(function() { $(".round-2.sense-03").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-03.rating-2").click(function() { $(".round-2.sense-03").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-03.rating-3").click(function() { $(".round-2.sense-03").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-03.rating-4").click(function() { $(".round-2.sense-03").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-03.rating-5").click(function() { $(".round-2.sense-03").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-03.rating-little").click(function() { $(".round-3.sense-03").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-03.rating-somewhat").click(function() { $(".round-3.sense-03").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-03.rating-very").click(function() { $(".round-3.sense-03").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-03.rating-1").click(function() { $(".round-3.sense-03").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-03.rating-2").click(function() { $(".round-3.sense-03").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-03.rating-3").click(function() { $(".round-3.sense-03").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-03.rating-4").click(function() { $(".round-3.sense-03").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-03.rating-5").click(function() { $(".round-3.sense-03").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-04.rating-little").click(function() { $(".round-2.sense-04").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-04.rating-somewhat").click(function() { $(".round-2.sense-04").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-04.rating-very").click(function() { $(".round-2.sense-04").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-04.rating-1").click(function() { $(".round-2.sense-04").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-04.rating-2").click(function() { $(".round-2.sense-04").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-04.rating-3").click(function() { $(".round-2.sense-04").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-04.rating-4").click(function() { $(".round-2.sense-04").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-04.rating-5").click(function() { $(".round-2.sense-04").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-04.rating-little").click(function() { $(".round-3.sense-04").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-04.rating-somewhat").click(function() { $(".round-3.sense-04").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-04.rating-very").click(function() { $(".round-3.sense-04").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-04.rating-1").click(function() { $(".round-3.sense-04").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-04.rating-2").click(function() { $(".round-3.sense-04").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-04.rating-3").click(function() { $(".round-3.sense-04").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-04.rating-4").click(function() { $(".round-3.sense-04").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-04.rating-5").click(function() { $(".round-3.sense-04").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-05.rating-little").click(function() { $(".round-2.sense-05").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-05.rating-somewhat").click(function() { $(".round-2.sense-05").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-05.rating-very").click(function() { $(".round-2.sense-05").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-05.rating-1").click(function() { $(".round-2.sense-05").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-05.rating-2").click(function() { $(".round-2.sense-05").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-05.rating-3").click(function() { $(".round-2.sense-05").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-05.rating-4").click(function() { $(".round-2.sense-05").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-05.rating-5").click(function() { $(".round-2.sense-05").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-05.rating-little").click(function() { $(".round-3.sense-05").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-05.rating-somewhat").click(function() { $(".round-3.sense-05").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-05.rating-very").click(function() { $(".round-3.sense-05").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-05.rating-1").click(function() { $(".round-3.sense-05").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-05.rating-2").click(function() { $(".round-3.sense-05").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-05.rating-3").click(function() { $(".round-3.sense-05").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-05.rating-4").click(function() { $(".round-3.sense-05").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-05.rating-5").click(function() { $(".round-3.sense-05").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-06.rating-little").click(function() { $(".round-2.sense-06").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-06.rating-somewhat").click(function() { $(".round-2.sense-06").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-06.rating-very").click(function() { $(".round-2.sense-06").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-06.rating-1").click(function() { $(".round-2.sense-06").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-06.rating-2").click(function() { $(".round-2.sense-06").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-06.rating-3").click(function() { $(".round-2.sense-06").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-06.rating-4").click(function() { $(".round-2.sense-06").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-06.rating-5").click(function() { $(".round-2.sense-06").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-06.rating-little").click(function() { $(".round-3.sense-06").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-06.rating-somewhat").click(function() { $(".round-3.sense-06").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-06.rating-very").click(function() { $(".round-3.sense-06").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-06.rating-1").click(function() { $(".round-3.sense-06").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-06.rating-2").click(function() { $(".round-3.sense-06").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-06.rating-3").click(function() { $(".round-3.sense-06").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-06.rating-4").click(function() { $(".round-3.sense-06").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-06.rating-5").click(function() { $(".round-3.sense-06").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-07.rating-little").click(function() { $(".round-2.sense-07").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-07.rating-somewhat").click(function() { $(".round-2.sense-07").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-07.rating-very").click(function() { $(".round-2.sense-07").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-07.rating-1").click(function() { $(".round-2.sense-07").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-07.rating-2").click(function() { $(".round-2.sense-07").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-07.rating-3").click(function() { $(".round-2.sense-07").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-07.rating-4").click(function() { $(".round-2.sense-07").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-07.rating-5").click(function() { $(".round-2.sense-07").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-07.rating-little").click(function() { $(".round-3.sense-07").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-07.rating-somewhat").click(function() { $(".round-3.sense-07").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-07.rating-very").click(function() { $(".round-3.sense-07").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-07.rating-1").click(function() { $(".round-3.sense-07").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-07.rating-2").click(function() { $(".round-3.sense-07").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-07.rating-3").click(function() { $(".round-3.sense-07").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-07.rating-4").click(function() { $(".round-3.sense-07").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-07.rating-5").click(function() { $(".round-3.sense-07").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-08.rating-little").click(function() { $(".round-2.sense-08").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-08.rating-somewhat").click(function() { $(".round-2.sense-08").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-08.rating-very").click(function() { $(".round-2.sense-08").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-08.rating-1").click(function() { $(".round-2.sense-08").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-08.rating-2").click(function() { $(".round-2.sense-08").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-08.rating-3").click(function() { $(".round-2.sense-08").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-08.rating-4").click(function() { $(".round-2.sense-08").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-08.rating-5").click(function() { $(".round-2.sense-08").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-08.rating-little").click(function() { $(".round-3.sense-08").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-08.rating-somewhat").click(function() { $(".round-3.sense-08").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-08.rating-very").click(function() { $(".round-3.sense-08").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-08.rating-1").click(function() { $(".round-3.sense-08").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-08.rating-2").click(function() { $(".round-3.sense-08").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-08.rating-3").click(function() { $(".round-3.sense-08").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-08.rating-4").click(function() { $(".round-3.sense-08").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-08.rating-5").click(function() { $(".round-3.sense-08").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-09.rating-little").click(function() { $(".round-2.sense-09").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-09.rating-somewhat").click(function() { $(".round-2.sense-09").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-09.rating-very").click(function() { $(".round-2.sense-09").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-09.rating-1").click(function() { $(".round-2.sense-09").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-09.rating-2").click(function() { $(".round-2.sense-09").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-09.rating-3").click(function() { $(".round-2.sense-09").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-09.rating-4").click(function() { $(".round-2.sense-09").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-09.rating-5").click(function() { $(".round-2.sense-09").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-09.rating-little").click(function() { $(".round-3.sense-09").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-09.rating-somewhat").click(function() { $(".round-3.sense-09").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-09.rating-very").click(function() { $(".round-3.sense-09").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-09.rating-1").click(function() { $(".round-3.sense-09").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-09.rating-2").click(function() { $(".round-3.sense-09").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-09.rating-3").click(function() { $(".round-3.sense-09").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-09.rating-4").click(function() { $(".round-3.sense-09").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-09.rating-5").click(function() { $(".round-3.sense-09").find(".rating-5").css({'display':'block'}); return(false); });


  $(".round-1 .sense-10.rating-little").click(function() { $(".round-2.sense-10").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-1 .sense-10.rating-somewhat").click(function() { $(".round-2.sense-10").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-1 .sense-10.rating-very").click(function() { $(".round-2.sense-10").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-1 .sense-10.rating-1").click(function() { $(".round-2.sense-10").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-1 .sense-10.rating-2").click(function() { $(".round-2.sense-10").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-1 .sense-10.rating-3").click(function() { $(".round-2.sense-10").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-1 .sense-10.rating-4").click(function() { $(".round-2.sense-10").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-1 .sense-10.rating-5").click(function() { $(".round-2.sense-10").find(".rating-5").css({'display':'block'}); return(false); });

  $(".round-2 .sense-10.rating-little").click(function() { $(".round-3.sense-10").find(".rating-little").css({'display':'block'}); return(false); });
  $(".round-2 .sense-10.rating-somewhat").click(function() { $(".round-3.sense-10").find(".rating-somewhat").css({'display':'block'}); return(false); });
  $(".round-2 .sense-10.rating-very").click(function() { $(".round-3.sense-10").find(".rating-very").css({'display':'block'}); return(false); });
  $(".round-2 .sense-10.rating-1").click(function() { $(".round-3.sense-10").find(".rating-1").css({'display':'block'}); return(false); });
  $(".round-2 .sense-10.rating-2").click(function() { $(".round-3.sense-10").find(".rating-2").css({'display':'block'}); return(false); });
  $(".round-2 .sense-10.rating-3").click(function() { $(".round-3.sense-10").find(".rating-3").css({'display':'block'}); return(false); });
  $(".round-2 .sense-10.rating-4").click(function() { $(".round-3.sense-10").find(".rating-4").css({'display':'block'}); return(false); });
  $(".round-2 .sense-10.rating-5").click(function() { $(".round-3.sense-10").find(".rating-5").css({'display':'block'}); return(false); });

});



