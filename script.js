
$(document).ready(function(){
    
    $('body').fadeIn(1200);
  var intervalId =  setInterval(changeProject,5000);
   var count = 4;
    changeProject();
 function changeProject(){
     $("#project1").css("left",600*(count-4));
     $("#project2").css("left",600*(count-3));
     $("#project3").css("left",600*(count-2));
     $("#project4").css("left",600*(count-1));
     $("#projectDesc1").css("left",600*(count-4));
     $("#projectDesc2").css("left",600*(count-3));
     $("#projectDesc3").css("left",600*(count-2));
     $("#projectDesc4").css("left",600*(count-1));
     count--;
     if(count==0) count = 4;
 }
    
    $("#back").on("click",function(){

        });
    $("#forward").on("click",function(){
        changeProject();
    clearInterval(intervalId);
        intervalId =  setInterval(changeProject,3000);
        });
    $("#back").on("click",function(){

     count++;
     if(count==5) count = 1;
     $("#project1").css("left",600*(count-4));
     $("#project2").css("left",600*(count-3));
     $("#project3").css("left",600*(count-2));
     $("#project4").css("left",600*(count-1));
     $("#projectDesc1").css("left",600*(count-4));
     $("#projectDesc2").css("left",600*(count-3));
     $("#projectDesc3").css("left",600*(count-2));
     $("#projectDesc4").css("left",600*(count-1));
    clearInterval(intervalId);
        intervalId =  setInterval(changeProject,3000);
        });
    
    

});
