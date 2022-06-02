import React from 'react';
import { useDispatch } from 'react-redux';
import { Icons, Images } from '../assets';
import Button from './Button';
import * as appActions from '../store/AppStore/actions';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="em-header px-4 px-md-5">
      <div className="em-header__left">
        <img
          src={Images.app_logo}
          height="50"
          className="em-header__logo"
          width="50"
          alt="background"
        />
      </div>
      <div className="em-header__center"></div>
      <div className="em-header__right">
        <Button
          className="me-2 d-none d-sm-block"
          title="$0.00"
          icon={Icons.shoppingBasket}
          color="primary"
        />
        <Button
          className="me-2 d-none d-sm-block"
          title="Sign up or log in"
          icon={Icons.login}
          color="primary"
        />
        <Button
          title="Menu"
          icon={Icons.menu}
          color="primary"
          onClick={() => dispatch(appActions.openDrawer())}
        />
      </div>
    </div>
  );
}
