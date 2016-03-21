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
    const visible = menuDataService.playlist.data.prices;
    menuDataService.playlist.data.prices = !visible;
  };

  // Toggle random availability
  let lastIndex = -1;
  this.toggleAvailable = () => {
    menuDataService.disablePolling();
    if (lastIndex === -1) {
      lastIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      menuDataService.playlist.data.items.right[lastIndex].available = false;
    } else {
      menuDataService.playlist.data.items.right[lastIndex].available = true;
      lastIndex = -1;
    }
    this.availableToggled = !this.availableToggled;
  };

  // Toggle editor
  this.toggleEditor = () => {
    menuDataService.disablePolling();
    this.showEditor();
  };
}

const component = {
  bindings: {
    showEditor: '&'
  },
  templateUrl,
  controller
};

export default component;
