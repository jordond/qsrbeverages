/**
 * MenuData Service
 *
 * Makes a request for the playlist.json data file.
 * Assigns the response to `this.playlist.data`.
 *
 * Polling is available in order to grab changes to the `public/dist/json/playlist.json`
 */
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

  /**
   * Grab the data from the playlist.json
   *
   * Filter the items array into two seperate arrays.
   * Merge object with `this.playlist.data` in order to maintain object reference
   *
   * @returns object Playlist data
   */
  getMenuData() {
    return privates.get(this).$http.get(menuDataUrl)
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

  /**
   * Poll the `playlist.json` data file every given interval
   *
   * @param number  interval  (optional)  Time to wait before next request
   */
  enablePolling(interval = defaultPollingIntervalInMillis) {
    if (!this.polling.interval) {
      this.polling.interval = privates.get(this).$interval(() => this.getMenuData(), interval);
      console.log(`enablePolling: Polling data file every ${interval / 1000} second${(interval > 1000) ? 's' : ''}`);
    }
  }

  /**
   * Clear the interval object and disable the polling
   */
  disablePolling() {
    if (this.polling.interval) {
      privates.get(this).$interval.cancel(this.polling.interval);
      this.polling.interval = false;
      console.log('disablePolling: Disabled the data polling');
    }
  }

  /**
   * Toggle the polling on or off
   */
  togglePolling() {
    if (this.polling.interval) {
      this.disablePolling();
    } else {
      this.enablePolling();
    }
  }
}

export default MenuDataService;
