(function(){
	angular
		.module('app')
		.factory('galleryService', galleryFactory);
	
	galleryFactory.$inject = ['$http'];
	function galleryFactory(){
		return {
			getGallery: function() {
				$http({
					url: appSetting.baseApiUrl + 'gallery-photos',
					method: 'GET'
				})
					.then(function (response) {
					success(response.data);
				})
			}
		}
	}
})();