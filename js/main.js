//first stape slider down//

$(document).ready(function(){
    $("#stape-1").click(function(){
      $("#stape-2").slideToggle(5000);
    });
    /*
    $("#stop").click(function(){
      $("#panel").stop();
    });*/
  });
  $(document).ready(function(){
    $("#button").click(function(){
      $("#inside").slideToggle(5000);
    });
  });
 //////////////////// 
 ///second stape onclick animation
  $(document).ready(function(){
    $("#button").click(function(){
      var div = $("#inside");
  
      //div.animate({top: '100px'}, "slow");
  
      div.animate({fontSize: '3em'}, "slow");
    
    
    });
  });