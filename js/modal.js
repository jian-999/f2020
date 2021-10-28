$(document).ready(function(){
var lightbox=$("#lightbox")
var close=$("#close");
var arrows=$("#arrows>button");
var slideset=$("#pic>div:nth-child(1)");
var agroup=$("#pic>div:nth-child(2) a")

var slides=$("#pic>div:nth-child(1) img");
var len=agroup.length;
var pos=0;
var bigpic=$("#lightbox>div:nth-child(1) img");

agroup.on({click:function(e){
  e.preventDefault();
},mouseenter:function(){
slides.attr("src",$(this).attr("href"));
pos=$(this).index();

}
});

arrows.on({click:function(){

  if($(this).attr("data-direction")=="left"){
    if(++pos>len-1){
    	pos=0;
    }
   changepic(pos);
  }else{
      if(--pos<0){
    	pos=len-1;}
   changepic(pos);
  }
}});

slideset.on({click:function(){
   lightbox.fadeIn();
   changepic(pos);
} });

close.on({click:function(){
   lightbox.fadeOut();
} });

function changepic(pos){
   bigpic.attr("src",agroup.eq(pos).attr("href"));	
}

});