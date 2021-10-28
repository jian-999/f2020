$(document).ready(function(){
var slides=$("#slides>figure");
var windowPicWidth;
var pos;
var arrows=$("#arrows>button");
var singleWidth;
var slidesSet=$("#box1>div>div:nth-child(1)");
var len=slides.length;

arrows.on({click:function(){
    if($(this).attr("data-direction")=="left"){
        if(++pos!=(windowPicWidth+len)){
          slidesSet.animate({marginLeft:-(pos-windowPicWidth)*singleWidth+"px" });
        }else{
              slidesSet.animate({marginLeft:-(pos-windowPicWidth)*singleWidth+"px" },function(){
                  slidesSet.css({"margin-left":"0px"});
                   pos=windowPicWidth;
              });
        }
    }else{

           if(pos==windowPicWidth){
             slidesSet.css({"margin-left":-(len)*singleWidth+"px"});
             pos=windowPicWidth+len;
             slidesSet.animate({marginLeft:-(--pos-windowPicWidth)*singleWidth+"px" });
           }else{
                   slidesSet.animate({marginLeft:-(--pos-windowPicWidth)*singleWidth+"px" });
           }
    }
}});


 function  comptedSlidesWidth(){

   if(window.matchMedia("(max-width:600px)").matches){
     pos=windowPicWidth=1;
     singleWidth=$(window).innerWidth()/windowPicWidth;
     slides.css({"width":singleWidth+"px","height":singleWidth*0.7+"px"});
     }
   else if(window.matchMedia("(min-width:601px) and (max-width:800px)").matches){

   	 pos=windowPicWidth=2;
     singleWidth=$(window).innerWidth()/windowPicWidth;
     slides.css({"width":singleWidth+"px","height":singleWidth+"px"});
   }else{
     pos=windowPicWidth=3;
     singleWidth=$(window).innerWidth()/windowPicWidth;
     slides.css({"width":singleWidth+"px","height":singleWidth+"px"});
   }
     slidesSet.css({"width":(slides.length+1)*singleWidth+"px"});
 }

$(window).on({resize:function(){
 comptedSlidesWidth();
}});

function initial(){
  for(var x=0;x<5;x++){
    slides.eq(x).clone().appendTo(slidesSet);
  }
  slides=$("#slides>figure");
  comptedSlidesWidth();
}


initial();




});