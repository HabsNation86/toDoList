
// when an li is clicked inside a ul
// run line 7


$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

// click on x to delete to-do

$("span").on("click", function(event){
    // below code is to remove the parent element
    // in this case the parent of "span" which is "li"
    // fadeout for 1 seconds then remove
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    // below code is to prevent event "bubbling"
    // note that to do below, "event" must be 
    // used as argument of function
    event.stopPropagation();
});


// add user input to bottom of list
// specified we only want input of type "text"

$("input[type='text']").on("keypress", function(event){
    // to check if keypress is"enter"
    if(event.which === 13){
    // assign what was entered to "todoText"
        var todoText = $(this).val();
    //   after enter pressed clear the display
        $(this).val("");
    // create a new li and add it to ul
      $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
    }
});