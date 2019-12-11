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
   });
   $("#projecta").mouseout(function(){
      $("#projecta h4").hide();
   })
});
$().ready(function(){
   $("#projectb").mouseover(function(){
      $("#projectb h4").show();
   });
   $("#projectb").mouseout(function(){
      $("#projectb h4").hide();
   })
});
$().ready(function(){
   $("#projectc").mouseover(function(){
      $("#projectc h4").show();
   });
   $("#projectc").mouseout(function(){
      $("#projectc h4").hide();
   })
});
$().ready(function(){
   $("#projectd").mouseover(function(){
      $("#projectd h4").show();
   });
   $("#projectd").mouseout(function(){
      $("#projectd h4").hide();
   })
});
$().ready(function(){
   $("#projecte").mouseover(function(){
      $("#projecte h4").show();
   });
   $("#projecte").mouseout(function(){
      $("#projecte h4").hide();
   })
});
$().ready(function(){
   $("#projectf").mouseover(function(){
      $("#projectf h4").show();
   });
   $("#projectf").mouseout(function(){
      $("#projectf h4").hide();
   })
});
$().ready(function(){
   $("#projectg").mouseover(function(){
      $("#projectg h4").show();
   });
   $("#projectg").mouseout(function(){
      $("#projectg h4").hide();
   })
});
$().ready(function(){
   $("#projecth").mouseover(function(){
      $("#projecth h4").show();
   });
   $("#projecth").mouseout(function(){
      $("#projecth h4").hide();
   })
});

//get data from the form, parse it into a JSON object
// $(document).ready(function() {
//    $("#blanks form").submit(function(event) {
//        var username = $("input#name").val();
//        var useremail = $("input#email").val();
//        var usermessage = $("input#message").val();

//        var tochimp = JSON.parse({"name":username, "email":useremail, "message":usermessage});

//        event.preventDefault();
//    });
// });