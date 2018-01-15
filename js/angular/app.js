(function() {
    angular
    .module('app', ['ngRoute', 'ui.router'])
    .config(config)
    .run(run);
    
    
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('about', {
            url: '/',
            templateUrl: '/js/angular/about/about.view.html',
            controller: 'aboutController'
        })
		.state('contacts', {
            url: '/contacts',
            templateUrl: '/js/angular/contacts/contacts.view.html',
            controller: 'contactsController'
        })
		
		.state('blog', {
                url: '/blog',
                templateUrl: '/js/angular/blog/blog.view.html',
                controller: 'blogController'
            })
		
		.state('gallery', {
            url: '/gallery',
            templateUrl: '/js/angular/gallery/gallery.view.html',
            controller: 'galleryController'
        });
		
		
        $urlRouterProvider.otherwise('/');
}
    run.$inject = ['$rootScope'];
    function run($rootScope) {
        $rootScope.appSettings = appSettings;
    }
    
})({
	 baseApiUrl: 'https://my-json-server.typicode.com/chevroletlacetti/project/'
});



//$urlRouterProvider отображает если страница не доступна