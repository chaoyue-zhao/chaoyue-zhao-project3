
const mondrianApp = {}; 
//create a variable that select the mondrian in html
const $mondrian = $(".mondrian");
//create a variable that select the element inside the mondrian in html 
// const $element = $(".element");
//write a function that render to the DOM
mondrianApp.renderHTML = function (horizontalSpan, verticalSpan) {
    
    $mondrian.append(`
        <div class = "horizontal-span-${horizontalSpan} vertical-span-${verticalSpan} element">element</div>
    `);
};

//write a function that generate a random number 
mondrianApp.randomNum = function (max) {
    return Math.floor(Math.random() * max) + 1;
}

mondrianApp.init = function () {
    mondrianApp.renderHTML(mondrianApp.randomNum(5), mondrianApp.randomNum(5));
};

$(document).ready(function(){
    mondrianApp.init();
});