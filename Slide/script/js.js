
var top1=0;
for(i=0;i<$(".back").length;i++){
$(".back")[i].style.top=top1+"vh";
top1 +=100;
}


$(".btn_second").click(function(){
    var topright=0;
   for(i=0;i<$(".back").length;i++){
  $(".back")[i].style.top=topright+"vh";
  if(topright<100){
    topright=100;
   }
  }
    var first=$(".row").find('.back:first');
    var second=$(".row").find('.back:nth-child(2)');
    first.css("top","-100vh")
    second.css("top","0vh")

    setTimeout(function() {
        first.remove();
        $(".row").append(first);
        first.css("top","100vh")
      }, 500);
})

$(".btn_first").click(function(){
    var topleft=0;
   var first=$(".row").find('.back:first');
    var second=$(".row").find('.back:last-child');
     $(".back").css("transition","none")
    first.css("top","0vh")
    second.css("top","-100vh")
    setTimeout(function() {
        $(".back").css("transition","all .5s linear")
        first.css("top","100vh")
        second.css("top","0vh")
      }, 50);
    setTimeout(function() {
        second.remove();
        $(".row").prepend(second);
      }, 500);
})

