import menuDataUrl from './playlist.json';

const pollingIntervalInMillis = 1000 * 3; // Three seconds

const deps = new Map();

class MenuDataService {
  /** @ngInject */
  constructor($http, $interval) {
    deps.set('$http', $http);
    deps.set('$interval', $interval);
  }

  getMenuData() {
    return deps.get('$http')
      .get(menuDataUrl)
      .then(response => {
        const playlist = {};
        playlist.left = response.data.items.filter((item) => item.id === 'Coffee' || item.id === 'Tea');
        playlist.right = response.data.items.filter((item) => item.id !== 'Coffee' && item.id !== 'Tea');
        return playlist;
      })
      .catch(err => console.error('menuDataService: get failed', err));
  }

  enablePolling(interval = pollingIntervalInMillis) {
    if (!this.polling) {
      this.polling = deps.get('$interval')(() => {
        this.getMenuData();
      }, interval);
      console.log(`enablePolling: Polling data file every ${interval / 1000} seconds`);
    }
  }

  disablePolling() {
    if (this.polling) {
      deps.get('$interval').cancel(this.polling);
      this.polling = undefined;
      console.log('disablePolling: Disabled the data polling');
    }
  }
}

export default MenuDataService;
