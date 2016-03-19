/**
 * App route configuration
 *
 * Disable html5 mode as it requires a web root, and redirect all routes to `/`
 */

/** @ngInject */
export default function configureStates($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}
