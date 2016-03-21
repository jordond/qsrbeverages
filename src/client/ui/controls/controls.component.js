import './controls.scss';
import templateUrl from './controls.tpl.html';

/** @ngInject */
function controller(menuDataService) {
  // Refresh logic
  this.isRefreshing = menuDataService.polling;
  this.toggleRefresh = () => menuDataService.togglePolling();

  // Toggle prices
  this.togglePrices = () => {
    menuDataService.disablePolling();
    const visible = menuDataService.playlist.prices;
    menuDataService.playlist.prices = !visible;
  };
}

const component = {
  bindings: {},
  templateUrl,
  controller
};

export default component;
