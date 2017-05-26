/**
 * Created by morykeita on 5/25/2017.
 */
(function () {
    angular.module('turtleFacts').factory('quizMetrics',QuizMetrics);

    function QuizMetrics() {
        var quizObj={
            quizActive:false,
            changeState: changeState
        };

        return quizObj;

        function changeState (state) {
            quizObj.quizActive=state;

        }


    }

})();