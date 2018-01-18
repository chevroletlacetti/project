(function () {
	angular
		.module('app', ['ngRoute', 'ui.router', 'ngValidate', 'ngStorage', 'base64'])
		.config(config)
		.run(run);


	config.$inject = ['$stateProvider', '$urlRouterProvider', '$validatorProvider', '$httpProvider', '$localStorageProvider'];

	function config($stateProvider, $urlRouterProvider, $validatorProvider, $httpProvider, $localStorageProvider) {
		$stateProvider
			.state('about', {
				url: '/',
				templateUrl: 'js/about/about.view.html',
				controller: 'aboutController'
			})
			.state('contacts', {
				url: '/contacts',
				templateUrl: '/js/contacts/contacts.view.html',
				controller: 'contactsController'
			})

			.state('blog', {
				url: '/blog',
				templateUrl: '/js/blog/blog.view.html',
				controller: 'blogController'
			})

			.state('gallery', {
				url: '/gallery',
				templateUrl: '/js/gallery/gallery.view.html',
				controller: 'galleryController'
			});


		$urlRouterProvider.otherwise('/');

		$validatorProvider.setDefaults({
			errorElement: 'span'
		});
		$validatorProvider.setDefaultMessages({
			required: 'Пожалуйста заполните это поле',
			email: 'Введите корректный Email'
		});
		$validatorProvider.addMethod('tel', function (value, element) {
			return /\+[\d\s\-]{9,}/.test(value);
		}, 'Неверный формат номера телефона.');



	}
	run.$inject = ['$rootScope'];

	function run($rootScope) {
		$rootScope.appSettings = appSettings;
	}
})({
	baseApiUrl: 'https://my-json-server.typicode.com/chevroletlacetti/project/'
});



//$urlRouterProvider отображает если страница не доступна
