(function() {


	$.validator.addMethod('tel', function(value, element) {
		return /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/g.test(value);
	});
	
    angular
    .module('app')
    .controller('contactsController', contactsController);
    
    
    contactsController.$inject = ['$scope']
    function contactsController($scope){
        $scope.send = function() {
            
        }

		
		
	}
})();