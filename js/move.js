$(document).ready(function(){
	
var agoup=$("#pic>div:nth-child(2) a");
var set=$("#pic>div:nth-child(1)");

var smallpic=$("#pic>div:nth-child(1)>div:nth-child(1) img");
var bigpic=$("#pic>div:nth-child(1)>div:nth-child(2) img");
var bigpicset=$("#pic>div:nth-child(1)>div:nth-child(2)");
var edgeL;
var edgeT;
var edgeR;
var edgeB;
var box;



$(document).on({mousemove:function(e){

  if(e.pageX>=edgeL && e.pageX<=edgeR && e.pageY>=edgeT&& e.pageY<=edgeB){
  
   bigpicset.css({"left":-(e.pageX-edgeL)+"px","top":-(e.pageY-edgeT)+"px"  });

  }


}});



$(window).on({resize:function(){
          initial();
}});



agoup.on({click:function(e){
        e.preventDefault();
},mouseenter:function(){
   smallpic.attr("src",$(this).attr("href"));
   bigpic.attr("src",$(this).attr("href"));
}
});

function initial(){
box=set.offset();
edgeT=box.top;
edgeB=edgeT+set.height();
edgeL=box.left;
edgeR=edgeL+set.width();  

bigpic.css({"width":set.width()*2+"px","height":set.height()*2+"px"});
}


initial();

});