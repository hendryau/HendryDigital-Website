/**
 * @author hendryau
 * 
 */
angular.module('hd')
	.directive('hdTemplate', [function() {
		return {
			scope: {
				content: '='
			},
			templateUrl: 'templates/hd_template_template.html'
		}
	}]);