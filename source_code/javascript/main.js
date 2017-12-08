
var filterStatuses = [];
var numberOfFlags =197;
var flagsList;
var finalResult = [];
var choose =[];

function reset() {
    //reset color buttons
    Array.from(document.getElementsByClassName("btn")).forEach(resetButton);

    document.getElementById("counter").innerHTML = list.length;
    filterStatuses = [];
    choose = [];
    showTable();
}

function resetButton(button) {
    if ($(button).hasClass("selected-color")) {
        // button color
        $(button).removeClass("selected-color");
        $(button).addClass("filter-color");
    }
    // button shape
    else if ($(button).hasClass("selected-shape")) {
        $(button).removeClass("selected-shape");
        $(button).addClass("filter-shape");
    }

    var glyphSpan = $(button).children();

    if(glyphSpan.hasClass("glyphicon-ok")){
        glyphSpan.removeClass("glyphicon-ok");
        glyphSpan.addClass("glyphicon-minus");
    }
}

// click on Color button
function clickColor(color) {
    // get value of the button
    changeColor(color.value);
    filterFlags();
}


// click on Shape button
function clickShape(shape) {
    // get value of the button
    changeShape(shape.value);
    filterFlags();
}

// ChangeColor Method
function changeColor(color) {
    var clickedButton = $("#"+color);
    // get span element in jQuery - Javascript => children;
    var glyphSpan = clickedButton.children();
    if (glyphSpan.hasClass("glyphicon-minus")) {
        //selected
        // change minus to ok
        glyphSpan.removeClass("glyphicon-minus");
        glyphSpan.addClass("glyphicon-ok");

        // remove class filter-color
        clickedButton.removeClass("filter-color");
        clickedButton.hasClass("selected-color");

        // add button color and shape which user chooses
        choose.push(color);
    }
    // glyphicon-ok
    else{
        // change ok to minus
        glyphSpan.removeClass("glyphicon-ok");
        glyphSpan.addClass("glyphicon-minus");

        // remove class selected
        clickedButton.removeClass("selected-color");
        clickedButton.addClass("filter-color");

        // remove color from choose array
        var index = choose.indexOf(color);
        if (index > -1) {
            choose.splice(index, 1);
        }

        // reset list
        filterStatuses = list;

    }
}

// Filter Flags base on color
function filterFlags() {
    choose.forEach(function (item) {
        // empty
        if (filterStatuses.length == 0) {
            flagsList = list;
        }
        else {
            flagsList = filterStatuses;
        }

        var flg;
        switch (item) {
            case "red":
                for (flg in flagsList) {
                    if (flagsList[flg].getRed === true) {
                        finalResult.push(flagsList[flg])
                    }
                }
                break;
            case "orange":
                for (flg in flagsList) {
                    if (flagsList[flg].getOrange === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "yellow":
                for (flg in flagsList) {
                    if (flagsList[flg].getYellow === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "green":
                for (flg in flagsList) {
                    if (flagsList[flg].getGreen === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "blue":
                for (flg in flagsList) {
                    if (flagsList[flg].getBlue === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "purple":
                for (flg in flagsList) {
                    if (flagsList[flg].getPurple === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "brown":
                for (flg in flagsList) {
                    if (flagsList[flg].getBrown === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "white":
                for (flg in flagsList) {
                    if (flagsList[flg].getWhite === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "black":
                for (flg in flagsList) {
                    if (flagsList[flg].getBlack === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "circle":
                for (flg in flagsList) {
                    if (flagsList[flg].getCircle === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "triangle":
                for (flg in flagsList) {
                    if (flagsList[flg].getTriangle === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "star":
                for (flg in flagsList) {
                    if (flagsList[flg].getStar === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "sun":
                for (flg in flagsList) {
                    if (flagsList[flg].getSun === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "moon":
                for (flg in flagsList) {
                    if (flagsList[flg].getMoon === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "cross":
                for (flg in flagsList) {
                    if (flagsList[flg].getCross == true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "tri-color-horz":
                for (flg in flagsList) {
                    if (flagsList[flg].getTriColorHorizontal === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "tri-color-vert":
                for (flg in flagsList) {
                    if (flagsList[flg].getTriColorVertical === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
            case "bi-color-horz":
                for (flg in flagsList) {
                    if (flagsList[flg].getBiColorHorizontal === true) {
                        finalResult.push(flagsList[flg]);
                    }
                }
                break;
        }

        filterStatuses = finalResult;
        finalResult = [];

    });

   // removeDuplicates(filterStatuses);
    showResult();

}

// showResult
function showResult() {
    var table = document.getElementById("myTable");
    while(table.rows.length > 0) {
        table.deleteRow(0);
    }
    var nextRow = 1;
    var index = 0;
    var row = table.insertRow(0);
    for(var i=0; i<filterStatuses.length/6; i++) {
        // print 6 flag in each tow
        for(var j=0; j<6; j++) {
            var cell = row.insertCell(j);
            // print name
            cell.innerHTML = "<a href="+filterStatuses[index].getName+".html><p style='background-color: #474e5d;'><b style='color: white'>"+filterStatuses[index].getName+"</b></p>" +
                "<img src=images/"+ filterStatuses[index].getImageLocation +".png" + " alt="+ filterStatuses[index].getImageLocation +"></a>"

            index++;
            // there is only 197 flags in the list
            if(index == filterStatuses.length) break;
        }
        row = table.insertRow(nextRow);
        nextRow++;
    }

    numberOfFlags = filterStatuses.length;
    document.getElementById("counter").innerHTML = " " + numberOfFlags;
}


// ChangeShape Method
function changeShape(shape) {
    var clickedButton = $("#"+shape);
    // get span element in jQuery - Javascript => children;
    var glyphSpan = clickedButton.children();
    if (glyphSpan.hasClass("glyphicon-minus")) {
        //selected
        // change minus to ok
        glyphSpan.removeClass("glyphicon-minus");
        glyphSpan.addClass("glyphicon-ok");

        // remove class filter-color
        clickedButton.removeClass("filter-shape");
        clickedButton.addClass("selected-shape");

        // add button color and shape which user chooses
        choose.push(shape);
    }
    // glyphicon-ok
    else{
        // change ok to minus
        glyphSpan.removeClass("glyphicon-ok");
        glyphSpan.addClass("glyphicon-minus");

        // remove class selected
        clickedButton.removeClass("selected-shape");
        clickedButton.addClass("filter-shape");

        // remove color from choose array
        var index = choose.indexOf(shape);
        if (index > -1) {
            choose.splice(index, 1);
        }

        // reset list
        filterStatuses = list;
    }
}


// show button color - red, orange, ...
$(function () {
    //Set button colors
    $(".filter-color").each(function () {
        $(this).css("background-color", $(this).val())
    });
});

function showTable() {
    var table = document.getElementById("myTable");
    var nextRow = 1;
    var index = 0;
    var row = table.insertRow(0);
    for(var i=0; i<list.length/5; i++) {
        // print 5 flag in each tow
        for(var j=0; j<5; j++) {
            var cell = row.insertCell(j);
            // print name
            cell.innerHTML = "<a href="+list[index].getName+".html><p style='background-color: #474e5d;'><b style='color: white'>"+list[index].getName+"</b></p>" +
                "<img src=images/"+ list[index].getImageLocation +".png" + " alt="+ list[index].getImageLocation +"></a>"
            index++;
            // there is only 197 flags in the list
            if(index == 197) break;
        }
        row = table.insertRow(nextRow);
        nextRow++;
    }
}


/*function removeDuplicates(originalArray) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
        lookupObject[originalArray[i]['_name']] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    filterStatuses = newArray;
}*/
