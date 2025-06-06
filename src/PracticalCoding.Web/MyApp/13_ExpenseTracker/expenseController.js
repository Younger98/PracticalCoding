(function () {
    'use strict';

    angular
        .module('app.expenseTracker') // Will define this module later
        .controller('ExpenseController', ExpenseController);

    ExpenseController.$inject = ['expenseService', '$filter'];

    function ExpenseController(expenseService, $filter) {
        var vm = this;

        vm.expenses = [];
        vm.newExpense = { Date: new Date() }; // Default date to today
        vm.editingExpense = null;
        vm.errorMessage = '';
        vm.successMessage = '';

        vm.loadExpenses = loadExpenses;
        vm.addExpense = addExpense;
        vm.editExpense = editExpense;
        vm.saveExpense = saveExpense;
        vm.cancelEdit = cancelEdit;
        vm.deleteExpense = deleteExpense;
        vm.clearMessages = clearMessages;
        vm.formatDateForInput = formatDateForInput;

        activate();

        function activate() {
            loadExpenses();
        }

        function clearMessages() {
            vm.errorMessage = '';
            vm.successMessage = '';
        }

        function loadExpenses() {
            clearMessages();
            expenseService.getExpenses()
                .then(function (data) {
                    vm.expenses = data;
                })
                .catch(function (error) {
                    vm.errorMessage = 'Failed to load expenses: ' + error;
                });
        }

        function addExpense() {
            clearMessages();
            if (!vm.newExpense.Date || !vm.newExpense.Description || !vm.newExpense.Amount) {
                vm.errorMessage = "Date, Description, and Amount are required.";
                return;
            }
            expenseService.addExpense(vm.newExpense)
                .then(function (data) {
                    vm.expenses.unshift(data); // Add to top of the list
                    vm.newExpense = { Date: new Date() }; // Reset form
                    vm.successMessage = 'Expense added successfully!';
                })
                .catch(function (error) {
                    vm.errorMessage = 'Failed to add expense: ' + error;
                });
        }

        function editExpense(expense) {
            clearMessages();
            // Create a copy for editing to avoid modifying the original object directly
            vm.editingExpense = angular.copy(expense);
            // Dates from JSON are strings, convert to Date objects for input type="date"
            vm.editingExpense.Date = new Date(expense.Date);
        }

        function saveExpense() {
            clearMessages();
             if (!vm.editingExpense.Date || !vm.editingExpense.Description || !vm.editingExpense.Amount) {
                vm.errorMessage = "Date, Description, and Amount are required.";
                return;
            }
            expenseService.updateExpense(vm.editingExpense)
                .then(function (data) {
                    var index = vm.expenses.findIndex(function(e) { return e.Id === data.Id; });
                    if (index !== -1) {
                        vm.expenses[index] = data;
                    }
                    vm.editingExpense = null; // Exit edit mode
                    vm.successMessage = 'Expense updated successfully!';
                })
                .catch(function (error) {
                    vm.errorMessage = 'Failed to update expense: ' + error;
                });
        }

        function cancelEdit() {
            vm.editingExpense = null;
            clearMessages();
        }

        function deleteExpense(id) {
            clearMessages();
            if (confirm('Are you sure you want to delete this expense?')) {
                expenseService.deleteExpense(id)
                    .then(function () {
                        vm.expenses = vm.expenses.filter(function (e) { return e.Id !== id; });
                        vm.successMessage = 'Expense deleted successfully!';
                    })
                    .catch(function (error) {
                        vm.errorMessage = 'Failed to delete expense: ' + error;
                    });
            }
        }

        // Helper to format date for <input type="date">
        function formatDateForInput(dateString) {
            return $filter('date')(new Date(dateString), 'yyyy-MM-dd');
        }
    }
})();
