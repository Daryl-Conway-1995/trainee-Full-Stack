(function() {
    console.log("1 TRAINEE CONTROLLER :D");
    var traineeController =  function(dataService, traineeService, $state) {
        
    	var vm = this;

        // vm.selectedTrainee = dataService.getData();

        (function(){
            console.log("2 INIT TRAINEE CONTROLLER");
    	    traineeService.getTrainees().then(function(results){
    	        console.log(results);
    	       vm.trainees = results;
    	       console.log("the trainee values are: " + JSON.stringify(results));
            },function (error){
    	        vm.error = true;
    	        vm.errorMessage = error;
            });
        })();

    	vm.giveTraineeFunction = function(trainee){
    		vm.selectedTrainee = trainee;
            dataService.setData(trainee);
            $state.go("traineeDetails");
		};
/*
		vm.trainees =[
			{"firstName": "Hussein","secondName": "Tejan", "subjects": ["java{5}", "javaScript{3}","python{4}"]},
			{"firstName": "George","secondName": "Timbrell", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
			{"firstName": "Sam","secondName": "Kirk", "subjects": ["java{3}", "javaScript{4}","python{4}"]},
			{"firstName": "Mohamed","secondName": "Zakariya", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
			{"firstName": "Birdi","secondName": "Satwant", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
			{"firstName": "Benny","secondName": "Wong", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
			{"firstName": "Nawid","secondName": "Mujadidi", "subjects": ["java{5}", "javaScript{4}","python{3}"]},
			{"firstName": "Christopher","secondName": "Darrall", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
			{"firstName": "Sterling","secondName": "Jevale", "subjects": ["java{3}", "javaScript{4}","python{4}"]},
			{"firstName": "Freitas","secondName": "Andrew", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Ekaterina","secondName": "Genova", "subjects": ["java{5}", "javaScript{3}","python{4}"]},
            {"firstName": "Daryl","secondName": "Conway", "subjects": ["java{5}", "javaScript{3}","python{4}"]},
            {"firstName": "Jarad","secondName": "Huggard", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Liam","secondName": "Donoghue", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Tibor","secondName": "Gazsovics", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Massey","secondName": "Michael", "subjects": ["java{5}", "javaScript{4}","python{3}"]},
            {"firstName": "Afzal","secondName": "Adam", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
			{"firstName": "Stanley","secondName": "Naomi", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Lowe","secondName": "Rachel", "subjects": ["java{3}", "javaScript{4}","python{4}"]},
            {"firstName": "Anmar","secondName": "Al-Qutayri", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Ahmed","secondName": "Syed", "subjects": ["java{5}", "javaScript{4}","python{3}"]},
            {"firstName": "Loades","secondName": "Oliver", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
			{"firstName": "Thompson","secondName": "James", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Reynolds","secondName": "Edward", "subjects": ["java{5}", "javaScript{4}","python{3}"]},
            {"firstName": "Ahrens","secondName": "Nathan", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Sunthar","secondName": "Shiyamalan", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Osagie","secondName": "Daniel", "subjects": ["java{5}", "javaScript{4}","python{4}"]},
            {"firstName": "Tawawala","secondName": "Arwa", "subjects": ["java{3}", "javaScript{4}","python{4}"]},
            {"firstName": "Mepani","secondName": "Mehul", "subjects": ["java{5}", "javaScript{4}","python{4}"]}
			];
*/

    };


    angular.module('traineeApp').controller('traineeController', ['dataService', 'traineeService', '$state', traineeController]);
}());