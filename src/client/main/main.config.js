/**
 * Main and only route
 * loads the Main.component
 */
function getStates() {
  return [
    {
      state: 'main',
      config: {
        name: 'main',
        url: '/',
        template: '<main></main>'
      }
    }
  ];
}

/** @ngInject */
export function routes($stateProvider) {
  const states = getStates();
  states.forEach((state) => $stateProvider.state(state.state, state.config));
}

/** @ngInject */
export function config($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}

