/**
 * Created by morykeita on 5/25/2017.
 */
(function () {
    angular.module('turtleFacts').controller("quizCtrl",QuizController);
    QuizController.$inject=['quizMetrics'];

    function QuizController (quizMetrics) {
         var vm=this;
         vm.quizMetrics=quizMetrics;

    }

})();
