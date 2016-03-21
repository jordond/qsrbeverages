/**
 * Module which contains all the sections of the menu
 *
 * Contains menu submodules for more complex components
 */
import './fonts/_fonts';

import angular from 'angular';

/** Menu components */
import menuDataService from './menu-data.service';
import menuListComponent from './menu-list/menu-list.component';
import menuItemComponent from './item/item.component';
import menuPriceComponent from './price/price.component';

const mod =
  angular
    .module('app.menu', [])
    .service('menuDataService', menuDataService)
    .component('menuList', menuListComponent)
    .component('menuItem', menuItemComponent)
    .component('menuPrice', menuPriceComponent);

export default mod.name;
