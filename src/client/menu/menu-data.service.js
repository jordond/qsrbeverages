import menuDataUrl from './playlist.json';

const defaultPollingIntervalInMillis = 1000 * 3; // Three seconds

const privates = new WeakMap();

class MenuDataService {
  /** @ngInject */
  constructor($http, $interval) {
    privates.set(this, { $http, $interval, polling: undefined });
    this.playlist = {};
    this.getMenuData();
  }

  getMenuData() {
    return privates.get(this).$http
      .get(menuDataUrl)
      .then(response => {
        const filteredItems = {
          left: response.data.items.filter((item) => item.id === 'Coffee' || item.id === 'Tea'),
          right: response.data.items.filter((item) => item.id !== 'Coffee' && item.id !== 'Tea')
        };
        response.data.items = filteredItems;
        Object.assign(this.playlist, response.data);
        return this.playlist;
      })
      .catch(err => console.error('menuDataService: get failed', err));
  }

  enablePolling(interval = defaultPollingIntervalInMillis) {
    let polling = privates.get(this).polling;
    if (!polling) {
      polling = privates.get(this).$interval(() => this.getMenuData(), interval);
      console.log(`enablePolling: Polling data file every ${interval / 1000} second${(interval > 1000) ? 's' : ''}`);
    }
  }

  disablePolling() {
    let polling = privates.get(this).polling;
    if (polling) {
      privates.get(this).$interval.cancel(polling);
      polling = undefined;
      console.log('disablePolling: Disabled the data polling');
    }
  }
}

export default MenuDataService;
