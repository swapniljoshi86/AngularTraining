var myDirectives=angular.module('myDirectives',[]);

myDirectives.directive('myFirstdirective', function() {
	  return {
		  restrict:'E',
		 // scope:'',
		  template:'Content Returned From Directives' 
		  };
		});


myDirectives.directive('sampleHtmldirective', function() {
	  return {
		  transclude:true,
		  restrict:'E',
		 // scope:'',
		  templateUrl:'templates/sampleDirective.html' 
		  };
		});

myDirectives.directive('myDomDirective', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});

//custom directive examples

myDirectives.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

//confirm password Directive

myDirectives.directive('compareTo', function () {
	return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModelCtrl) {
             
        	ngModelCtrl.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
            	ngModelCtrl.$validate();
            });
        }
    };
});



