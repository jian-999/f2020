$(document).ready(function(){
var arrows=$("#arrows button");
var L=4;
var C=0;
var R=1;
var O;
var pos=0;
var slides=$("#animation figure");
var len=slides.length-1;
var timer;
var points=$("#points>div");

points.on({click:function(){
    clearInterval(timer);
 if($(this).index()!=pos){
   L=pos;
   pos=C=$(this).index();
   setlocalL();
                                   }
  settime();
}});

$(window).on({resize:function(){
   clearInterval(timer);
   setlocalL();

}});

arrows.on({click:function(){
    clearInterval(timer);
   switch($(this).attr("data-direction")){
                                     case "left":
                                                     comptedL();
                                                     setlocalL();
                                                     break;
                                     case "right":
                                                     comptedR();
                                                     setlocalR();                                                  
   }
   settime();
}});

function  comptedL(){
  O=L;
  L=pos++;
  if(pos>len){pos=0;}
  C=pos;
  if(pos+1>len){ R=0;}else{R=pos+1;}
}

function  comptedR(){
  O=R;
  R=pos--;
  if(pos<0){pos=len;}
  C=pos;
  if(pos-1<0){ L=len;}else{L=pos-1;}
}


function  setlocalL(){
      slides.removeAttr("class");
      points.removeAttr("class");
    if(window.matchMedia("(max-width:600px)").matches){
         slides.eq(L).addClass("CL");
         slides.eq(C).addClass("RC");
         points.eq(C).addClass("lightgreen");
    }else{
    slides.eq(O).addClass("L2O");
    slides.eq(L).addClass("C2L");
    slides.eq(C).addClass("R2C border");
    slides.eq(R).addClass("O2R");
    }
}

function  setlocalR(){

    slides.removeAttr("class");
    slides.eq(O).addClass("R2O");
    slides.eq(R).addClass("C2R");
    slides.eq(C).addClass("L2C border");
    slides.eq(L).addClass("O2L");
}

function   settime(){
   clearInterval(timer);
   timer=setInterval(repeat,4000);
}
function repeat(){
     comptedL();
    setlocalL();
}
function initial(){
    comptedL();
    setlocalL();
    settime();
}

initial();

});