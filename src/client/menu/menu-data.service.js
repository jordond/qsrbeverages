import menuDataUrl from './playlist.json';

const defaultPollingIntervalInMillis = 1000 * 3; // Three seconds

const privates = new WeakMap();

class MenuDataService {
  /** @ngInject */
  constructor($http, $interval) {
    privates.set(this, { $http, $interval });
    this.playlist = { data: {} };
    this.polling = {};
    this.getMenuData();
  }

  getMenuData() {
    return privates.get(this).$http
      .get(menuDataUrl)
      .then(response => {
        if (response.data) {
          // TODO Implement better way to split, possibly on truthy item image?
          const filteredItems = {
            left: response.data.items.filter((item) => item.id === 'Coffee' || item.id === 'Tea'),
            right: response.data.items.filter((item) => item.id !== 'Coffee' && item.id !== 'Tea')
          };
          response.data.items = filteredItems;
          Object.assign(this.playlist.data, response.data);
        }
        return this.playlist;
      })
      .catch(err => console.error('menuDataService: get failed', err));
  }

  enablePolling(interval = defaultPollingIntervalInMillis) {
    if (!this.polling.interval) {
      this.polling.interval = privates.get(this).$interval(() => this.getMenuData(), interval);
      console.log(`enablePolling: Polling data file every ${interval / 1000} second${(interval > 1000) ? 's' : ''}`);
    }
  }

  disablePolling() {
    if (this.polling.interval) {
      privates.get(this).$interval.cancel(this.polling.interval);
      this.polling.interval = false;
      console.log('disablePolling: Disabled the data polling');
    }
  }

  togglePolling() {
    if (this.polling.interval) {
      this.disablePolling();
    } else {
      this.enablePolling();
    }
  }
}

export default MenuDataService;
