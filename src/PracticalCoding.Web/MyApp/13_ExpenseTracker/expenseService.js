(function () {
    'use strict';

    angular
        .module('app.expenseTracker') // Will define this module later
        .factory('expenseService', expenseService);

    expenseService.$inject = ['$http', '$q'];

    function expenseService($http, $q) {
        var serviceBase = '/api/expenses/';
        var service = {
            getExpenses: getExpenses,
            addExpense: addExpense,
            updateExpense: updateExpense,
            deleteExpense: deleteExpense
        };

        return service;

        function getExpenses() {
            return $http.get(serviceBase)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    return $q.reject(error.data.Message || 'Error fetching expenses');
                });
        }

        function addExpense(expense) {
            return $http.post(serviceBase, expense)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    return $q.reject(error.data.Message || 'Error adding expense');
                });
        }

        function updateExpense(expense) {
            return $http.put(serviceBase + expense.Id, expense)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    return $q.reject(error.data.Message || 'Error updating expense');
                });
        }

        function deleteExpense(id) {
            return $http.delete(serviceBase + id)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    return $q.reject(error.data.Message || 'Error deleting expense');
                });
        }
    }
})();
