(function () {
   'use strict';

   angular.module('app.expenseTracker', [
       'ngRoute' // Using ngRoute for simplicity, ui-router is also in the project if preferred
   ])
   .config(config);

   config.$inject = ['$routeProvider', '$locationProvider'];

   function config($routeProvider, $locationProvider) {
       $routeProvider
           .when('/', { // Default route for this module, loaded into ng-view in Expense/Index.cshtml
               templateUrl: '/MyApp/13_ExpenseTracker/Partials/expense-tracker-view.html',
               controller: 'ExpenseController',
               controllerAs: 'vm'
           })
           .otherwise({
               redirectTo: '/'
           });

       // Optional: Use HTML5 mode for cleaner URLs, requires server-side configuration for deep linking
       // $locationProvider.html5Mode(true);
   }
})();
