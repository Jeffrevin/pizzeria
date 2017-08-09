// A $(document).ready() block.
$(document).ready(function() {
    // All your Javascript
    // code to cycle through carousel
    $("#myCarousel").carousel({
        interval: 3500
    });
    //code to add and delete active class
    $("ul li").click(function(){
    
    var clicked_tab = $(this);
    clicked_tab.addClass("active");
    clicked_tab.parent().children("li").not(clicked_tab).removeClass("active");
    });
    //
    
});


// /*
// function myFunction() {
//     var x = document.getElementById("food").value;
//     if(x == "pizza"){
//       document.getElementById("topping").value = "C";
//     }
// }

// */



function add(type) {
  //Create an input type dynamically.   
  var element = document.createElement("input");
  //Assign different attributes to the element. 
  element.type = type;
  element.value = type; // Really? You want the default value to be the type string?
  element.name = type; // And the name too?
  element.onclick = function() { // Note this is a function
    alert("blabla");
  };

  var foo = document.getElementById("selectItems");
  //Append the element in page (in span).  
  foo.appendChild(element);
}
document.getElementById("btnAdd").onclick = function() {
  add("#selectItems");
};