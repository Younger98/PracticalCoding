// let's define the scotch controller that we call up in the about state
myapp.controller('scotchController', function ($scope) {
    $scope.title = 'Fine Scotches';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
});

myapp.controller('calculatorController', function ($scope) {
    $scope.displayValue = '';

    $scope.appendToDisplay = function (value) {
        $scope.displayValue += value;
    };

    $scope.clearDisplay = function () {
        $scope.displayValue = '';
    };

    $scope.calculateResult = function () {
        try {
            // Sanitize input to prevent potential security issues with eval
            // This is a basic example; a more robust solution would involve a proper parser.
            let expression = $scope.displayValue;
            // Remove anything that's not a digit, operator, or decimal point
            expression = expression.replace(/[^-()\d/*+.]/g, '');

            if (expression === '') {
                $scope.displayValue = '';
                return;
            }
            // Avoid direct eval if possible, consider a math library for production
            let result = eval(expression);

            if (isNaN(result) || !isFinite(result)) {
                $scope.displayValue = 'Error';
            } else {
                $scope.displayValue = result.toString();
            }
        } catch (e) {
            $scope.displayValue = 'Error';
        }
    };
});
