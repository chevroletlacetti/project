(function() {
    angular
    .module('app')
    .controller('aboutController', aboutController);
    
	aboutController.$inject = ['$scope'];
    function aboutController($scope){
		$scope.model = {
			name: 'Vadim',
			birthday: '22.11.1991'
		}
		
		
		

	}
})();