import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faArrowRightToBracket,
  faShoppingBasket,
  faXmark,
  faTag,
  faMotorcycle,
  faUserGroup,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faArrowRightToBracket,
  faShoppingBasket,
  faXmark,
  faTag,
  faMotorcycle,
  faUserGroup,
  faStar
);

export const Icons = {
  menu: 'fa-bars',
  login: 'fa-arrow-right-to-bracket',
  shoppingBasket: 'fa-basket-shopping',
  close: 'fa-xmark',
  tag: 'fa-tag',
  deliveryPerson: 'fa-motorcycle',
  userGroup: 'fa-user-group',
  star: 'fa-star',
};
