$(document).ready(function(){
var pre1="";
var pre2="";
var btn1=$(".title1 button");
var btn2=$(".title2 button");

btn1.on({click:function(){
if(pre1){pre1.slideUp();}
if(pre2){pre2.slideUp();}
pre1=$(this).parent().next().next();
pre1.slideDown();
}});

btn2.on({click:function(){
if(pre2){pre2.slideUp();}
pre2=$(this).parent().next();
pre2.slideDown();
}});

});