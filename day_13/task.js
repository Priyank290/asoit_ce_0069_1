$(document).ready(function(){
    $("#hide").click(function(){
      $("div").hide(5000);
      alert("Are you sure?");
    });
    $("#show").click(function(){
        $("div").show(5000);
        alert("Are you sure?");
      });
});

$(".show1").click(function() {
    $("div").show(500);
    $(".show1").hide(0);
    $(".hide1").show(0);
});
$(".hide1").click(function() {
    $("div").hide(500);
    $(".show1").show(0);
    $(".hide1").hide(0);
});


$(".plus").on("click", function(){
    let div_widht = $(".div-show").width();
    let new_widht = div_widht + 100;
    let div_height = $(".div-show").height();
    let new_height = div_widht + 100;
    $(".div-show").width(new_widht);
    $(".div-show").height(new_height);
  });
  
  $(".minus").on("click", function(){
    let div_widht = $(".div-show").width();
    let new_widht = div_widht - 100;
    let div_height = $(".div-show").height();
    let new_height = div_widht - 100;
    $(".div-show").width(new_widht);
    $(".div-show").height(new_height);
  });