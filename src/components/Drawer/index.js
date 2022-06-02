import React from 'react';
import PropTypes from 'prop-types';
import DrawerPanel from './DrawerPanel';
import DrawerContent from './DrawerContent';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from '../../store/AppStore/actions';
import Button from '../Button';
import { Icons, Images } from '../../assets';

const Drawer = ({ position = 'right' }) => {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.app.isDrawerOpen);

  return (
    <DrawerPanel
      position={position}
      isOpen={isDrawerOpen}
      onClose={() => dispatch(appActions.closeDrawer())}
    >
      <div className="em-drawer__header">
        <img
          src={Images.app_logo}
          height="50"
          className="em-header__logo"
          width="50"
          alt="background"
        />

        <Button
          iconSize="2x"
          className="me-2 em-drawer__header__close"
          icon={Icons.close}
          color="primary"
          onClick={() => dispatch(appActions.closeDrawer())}
        />
      </div>
      <DrawerContent />
    </DrawerPanel>
  );
};

Drawer.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
};

export default Drawer;
