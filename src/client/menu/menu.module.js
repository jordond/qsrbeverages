/**
 * Module which contains all the sections of the menu
 */
import './fonts/_fonts';

import angular from 'angular';

/** Menu components */
import menuDataService from './menu-data.service';
import menuListComponent from './menu-list/menu-list.component';
import menuItemComponent from './item/item.component';
import menuPriceComponent from './price/price.component';
import { dollars, cents } from './price/price.filter';

const mod =
  angular
    .module('app.menu', [])
    .service('menuDataService', menuDataService)
    .component('menuList', menuListComponent)
    .component('menuItem', menuItemComponent)
    .component('menuPrice', menuPriceComponent)
    .filter('dollars', dollars)
    .filter('cents', cents);

export default mod.name;
