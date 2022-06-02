import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faArrowRightToBracket,
  faShoppingBasket,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faArrowRightToBracket, faShoppingBasket, faXmark);

export const Icons = {
  menu: 'fa-bars',
  login: 'fa-arrow-right-to-bracket',
  shoppingBasket: 'fa-basket-shopping',
  close: 'fa-xmark',
};
