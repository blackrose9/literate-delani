$().ready(function(){
   $("#wwd1").click(function(){
      $("#wwdtext1").toggle();
      $("#wwdimage1").toggle();
   });
});
$().ready(function(){
   $("#wwd2").click(function(){
      $("#wwdtext2").toggle();
      $("#wwdimage2").toggle();
   });
});
$().ready(function(){
   $("#wwd3").click(function(){
      $("#wwdtext3").toggle();
      $("#wwdimage3").toggle();
   });
});

$().ready(function(){
   $("#projecta").mouseover(function(){
      $("#projecta h4").show();
   });$("#projecta h4").mouseout(function(){
      $("#projecta h4").hide();
   })
});