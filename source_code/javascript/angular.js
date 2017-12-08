var myModule = angular.module("myGame",[]);

//npm install --save sweetalert

myModule.controller('GameController', function ($scope) {

    $scope.score = 0;
    $scope.question = 1;

    displayQuestion();

    $scope.nextQuestion = function () {

        //remove disable attr
        $('.button1').removeAttr("disabled");
        $('.button2').removeAttr("disabled");
        $('.button3').removeAttr("disabled");
        $('.button4').removeAttr("disabled");

        $scope.question++;

        if($scope.question == 11){
            var r = confirm("You got " + $scope.score +" % If you wanna play again, press OK!");
            localStorage.clear();
            if (r == true) {
                location.reload();
            } else {
                location.href = "index.html";
            }
        }
        else {
            $('button').removeClass("btn-success");
            $('button').removeClass("btn-danger");
            $('button').addClass("btn-default");

            // remove span element
            $('button span').remove();

            displayQuestion();
        }

    }

    function displayQuestion() {

        var randomIndex = Math.floor((Math.random() * 197));

        $scope.flagPicture = list[randomIndex].getImageLocation;


        var random = Math.floor((Math.random() * 4)) + 1;

        switch (random) {
            case 1:
                $scope.flagName1 = list[randomIndex].getName;
                $scope.flagName2 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName3 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName4 = list[Math.floor((Math.random() * 197))].getName;
                break;

            case 2:
                $scope.flagName1 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName2 = list[randomIndex].getName;
                $scope.flagName3 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName4 = list[Math.floor((Math.random() * 197))].getName;
                break;

            case 3:
                $scope.flagName1 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName2 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName3 = list[randomIndex].getName;
                $scope.flagName4 = list[Math.floor((Math.random() * 197))].getName;
                break;
            // United_States_of_America replace() => United States of America
            case 4:
                $scope.flagName1 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName2 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName3 = list[Math.floor((Math.random() * 197))].getName;
                $scope.flagName4 = list[randomIndex].getName;
                break;
        }

        $scope.getButtonValue = function (value) {

            // correct answer
            if (list[randomIndex].getName == value) {
                $('#' + value).append('<span class="glyphicon glyphicon-ok"></span>');
                $('#' + value).removeClass("btn-default");
                $('#' + value).addClass("btn-success");
                // save the score
                if (localStorage.length == 0) {
                    $scope.score += 10;
                    window.localStorage.setItem('score', $scope.score);
                }
                else {
                    $scope.score = parseInt(localStorage.getItem('score'));
                    $scope.score += 10;
                    localStorage.setItem('score', $scope.score);
                }

            }
            // wrong answer
            else {
                $('#' + value).append('<span class="glyphicon glyphicon glyphicon-remove"></span>');
                $('#' + value).removeClass("btn-default");
                $('#' + value).addClass("btn-danger");

                // show the correct answer
                var correctAnswer = list[randomIndex].getName;
                $('#' + correctAnswer).append('<span class="glyphicon glyphicon-ok"></span>');
                $('#' + correctAnswer).removeClass("btn-default");
                $('#' + correctAnswer).addClass("btn-success");
            }

            //disable button
            $('.button1').attr("disabled","disabled");
            $('.button2').attr("disabled","disabled");
            $('.button3').attr("disabled","disabled");
            $('.button4').attr("disabled","disabled");
        }

    }
});
