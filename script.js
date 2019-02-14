/*********************************
 JUICY CODES TO GET DA APP GOING
**********************************/
const mondrianApp = {}; 

//create a variable that store the data (list of elements) 
mondrianApp.mondrian = [];

//write a function to push objects (element) to the Mondrian array 
mondrianApp.gatherUsersInput = function() {

    //get the user's input from the DOM
    mondrianApp.$number = $("input[type=range]").val();
    mondrianApp.$color = [
        $("input[name=color-1]").val(),
        $("input[name=color-2]").val(),
        $("input[name=color-3]").val()
    ];
    
    for (i = 1; i <= mondrianApp.$number; i++) {
      mondrianApp.mondrian.push({
        //using the random number generated as width and height
        width: mondrianApp.randomNum(5),
        height: mondrianApp.randomNum(5)
      });
    }
};

//write a function that render to the DOM
mondrianApp.renderHTML = function () {
    //VERY VERY IMPORTANT TO DO BOTH: you want clear both the DOM and your array
    mondrianApp.mondrian = [];
    $(".mondrian").empty();

    //call the function to retrieve information from user
    mondrianApp.gatherUsersInput();
    mondrianApp.mondrian.forEach(function(element){

            mondrianApp.$mondrian.append(`
            <div class = "horizontal-span-${
              element.width
            } vertical-span-${element.height} element">element
            </div>
        `);
    });
};

//write a function that generate a random number 
mondrianApp.randomNum = function (max) {
    return Math.floor(Math.random() * max) + 1;
}

mondrianApp.handleSubmit = function () {
    mondrianApp.$form.on("submit", function(event) {
        event.preventDefault();
        mondrianApp.renderHTML();
    });
}

mondrianApp.init = function () {
    
    /*********************
    CACHE DA SELECTORS
    *********************/
    mondrianApp.$mondrian = $(".mondrian");
    mondrianApp.$element = $(".element");
    mondrianApp.$form = $(".user-control"); 
    
    mondrianApp.handleSubmit();
};

$(document).ready(function(){
    mondrianApp.init();
});