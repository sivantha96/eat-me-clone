import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as appActions from '../../store/AppStore/actions';
import Cover from './components/Cover';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    // update title header
    dispatch(appActions.setPageTitle('Shop'));
    dispatch(appActions.setPageDescription('Shop Description'));
  }, []);

  return (
    <div className="em-shop" style={{ height: '10000px' }}>
      <Cover />
    </div>
  );
}

export default Shop;
