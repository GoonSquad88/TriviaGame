var trivia = [
    {
        question: "q",
        answers: ["True", "False"],
        answer: "True",
    },
    {
        question: "q",
        answers: ["True", "False"],
        answer: "False",
    },
    {
        question: "q",
        answers: ["True", "False"],
        answer: "True",
    },
    {
        question: "q",
        answers: ["True", "False"],
        answer: "False",
    },
    {
        question: "q",
        answers: ["True", "False"],
        answer: "False",
    },
    {
        question: "q",
        answers: ["True", "False"],
        answer: "False",
    },
    {
        question: "q",
        answers: ["True", "False"],
        answer: "True",
    },
    {
        question: "q",
        answers: ["True", "False"],
        answer: "True",
    }
];

$("#start-trivia").on("click", function () {
    $("#start-trivia").remove();
    gameLogic.startTrivia();
});

var gameLogic = {
    correctAnswer: 0,
    wrongAnswer: 0,
    time: 10,
    countdown: function () {
        gameLogic.time--;
        $("#time").html(gameLogic.time);
        if (gameLogic.time <= 0) {
            console.log("Time's up!");
            gameLogic.endTrivia();
        }
    },
    startTrivia: function () {
        $("#start-trivia").remove();
        gameTimer = setInterval(gameLogic.countdown, 1000);
        $("#wrapper2").prepend("<h2>Time Remaining:  <span id='time'>120</span> Seconds</h2>");
        for (var i = 0; i < trivia.length; i++) {
            $("#wrapper2").append("<h2>" + trivia[i].question + "</h2>");
            for (var j = 0; j < trivia[i].answers.length; j++) {
                $("#wrapper2").append("<input type='radio' name='question: " + i + "' value='" + trivia[i].answers[j] + "'>" + trivia[i].answers[j]);
            }
        }
    },
        endTrivia: function () {
            $.each($('input[name="trivia-0"]:checked'), function () {
                if ($(this).val() == trivia[0].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
            $.each($('input[name="trivia-1"]:checked'), function () {
                if ($(this).val() == trivia[1].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
            $.each($('input[name="trivia-2"]:checked'), function () {
                if ($(this).val() == trivia[2].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
            $.each($('input[name="trivia-3"]:checked'), function () {
                if ($(this).val() == trivia[3].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
            $.each($('input[name="trivia-4"]:checked'), function () {
                if ($(this).val() == trivia[4].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
            $.each($('input[name="trivia-5"]:checked'), function () {
                if ($(this).val() == trivia[5].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
            $.each($('input[name="trivia-6"]:checked'), function () {
                if ($(this).val() == trivia[6].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
            $.each($('input[name="trivia-7"]:checked'), function () {
                if ($(this).val() == trivia[7].answer) {
                    gameLogic.correctAnswer++;
                } else {
                    gameLogic.wrongAnswer++;
                }
            });
                this.triviaResults();
        },
        triviaResults: function() {
            clearInterval(gameTimer);
            $("#wrapper2 h2").remove();

            $("#wrapper2").append("<h2>Correct Answers: " + this.correctAnswer);
            $("#wrapper2").append("<h2>Incorrect Answers: " + this.wrongAnswer);
            $("#wrapper2").append("<h2>Unanswered Questions: " + trivia.length - (this.wrongAnswer + this.correctAnswer) + "</h2>");
        }
    } 




