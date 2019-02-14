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
        $("input[name=color-3]").val(),
        //off-white color
        "#FAFAFA",
        //off-black color
        "#232323"
    ];
    
    mondrianApp.$name = $("input[type=text]").val();
    
    for (i = 1; i <= mondrianApp.$number; i++) {
        mondrianApp.mondrian.push({
            //using the random number generated as width and height
            width: mondrianApp.randomNum(5,1),
            height: mondrianApp.randomNum(5,1),
            //randomly select a color off the color array. this has to start from 0 for all the colors to be selected. 
            color: mondrianApp.$color[mondrianApp.randomNum((mondrianApp.$color.length-1),0)],
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

    mondrianApp.mondrian.forEach(function(element,index){
        
        index = mondrianApp.mondrian.indexOf(element);

        //create element based on the width and height randomized (see css for defined span value)
        mondrianApp.$mondrian.append(`
        <div class = "horizontal-span-${element.width} vertical-span-${element.height} element element-${index}"></div>`);

        $(`.element-${index}`).css("background-color", `${element.color}`);     
        //use the color on the element as their background
    });

    $(".message").append(`Congrats! You just made your Mondrian: Composition ${mondrianApp.romanNumerals(mondrianApp.$name)}`)
    
};

//write a function that generate a random number 
mondrianApp.randomNum = function (max, min) {
    return Math.floor(Math.random() * max) + min;
}

// write a function to covert numbers into roman numerals (adopted from https://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/)
mondrianApp.romanNumerals = function (num) {
    let result = "";
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (i = 0; i <= decimal.length; i++) {
        while (num%decimal[i] < num) {
            result += roman[i];
            num -= decimal[i]
        }
    }
    return result;
}

mondrianApp.handleSubmit = function () {
    mondrianApp.$form.on("submit", function(event) {
        event.preventDefault();
        mondrianApp.renderHTML();
    });
}

mondrianApp.init = function () {
    
    mondrianApp.$mondrian = $(".mondrian");
    mondrianApp.$form = $(".user-control"); 
    
    mondrianApp.handleSubmit();
};

$(document).ready(function(){
    mondrianApp.init();
});