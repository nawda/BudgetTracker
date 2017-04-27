(function() {
        'use strict';
      angular
            .module('app')
            .controller('TrackerController', TrackerController);
        TrackerController.$inject = [];

        /* @ngInject */
        function TrackerController() {
            var vm = this;
            vm.incomeTotal = 0;
            vm.expenseTotal = 0;
            vm.incomeEntries = [];
            vm.expenseEntries = [];

            vm.addIncome = function() {
                vm.newIncome.amount = Math.round(vm.newIncome.amount*100)/100;
                vm.incomeTotal += vm.newIncome.amount;
                vm.incomeEntries.push(vm.newIncome)
                vm.incomeTotal = Math.round(vm.incomeTotal*100)/100;
                vm.newIncome = '';
            }
            vm.addExpense = function() {
                vm.newExpense.amount = Math.round(vm.newExpense.amount*100)/100;
                vm.expenseTotal += vm.newExpense.amount;
                vm.expenseEntries.push(vm.newExpense)
                vm.expenseTotal = Math.round(vm.expenseTotal*100)/100;
                vm.newExpense = '';
            }
        }
})();
