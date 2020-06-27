/* Home Page Card Script */
(function($) {
  "use strict";

  // manual carousel controls
  $('.next').click(function(){ $('.carousel1').carousel('next');return false; });
  $('.prev').click(function(){ $('.carousel1').carousel('prev');return false; });
  $('.next').click(function(){ $('.carousel2').carousel('next');return false; });
  $('.prev').click(function(){ $('.carousel2').carousel('prev');return false; });
  $('.next').click(function(){ $('.carousel3').carousel('next');return false; });
  $('.prev').click(function(){ $('.carousel3').carousel('prev');return false; });

  
})(jQuery);



/* Gallery Page Filtering Script */

filterImage("all")
function filterImage(c) {
  var x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("BtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


