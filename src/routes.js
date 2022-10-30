(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      list: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Individual Category
  .state('items', {
    url: '/{short_name}',
    templateUrl: 'src/templates/main-items.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      items: ['$stateParams', "MenuDataService",function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.short_name);
      }]
    }
  });
}

})();
