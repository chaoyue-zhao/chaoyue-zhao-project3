/*********************
 CACHE DA SELECTORS
 *********************/
const $mondrian = $(".mondrian");
const $element = $(".element");
const $form = $(".user-control");
const $number = $("input[type=range]").val();

/*********************************
 JUICY CODES TO GET DA APP GOING
**********************************/
const mondrianApp = {}; 

//create a variable that store the data (list of elements) 
mondrianApp.mondrian = [];

//write a function to push objects (element) to the Mondrian array 
mondrianApp.gatherUsersInput = function() {
    for (i = 1; i < $number; i++) {
        mondrianApp.mondrian.push({
         //using the random number generated as width and height
          width: mondrianApp.randomNum(5),
          height: mondrianApp.randomNum(5)
        });
    }
};

//write a function that render to the DOM
mondrianApp.renderHTML = function () {

    //call the function to retrieve information from user
    mondrianApp.gatherUsersInput();

    mondrianApp.mondrian.forEach(function(element){

        $mondrian.append(`
            <div class = "horizontal-span-${element.width} vertical-span-${element.height} element">element
            </div>
        `);
    });

};

//write a function that generate a random number 
mondrianApp.randomNum = function (max) {
    return Math.floor(Math.random() * max) + 1;
}

mondrianApp.init = function () {

    $form.on("submit",function (event) {
        event.preventDefault();

        mondrianApp.renderHTML();
    })
};

$(document).ready(function(){
    mondrianApp.init();
});