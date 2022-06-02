import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import * as appActions from '../../store/AppStore/actions';
import Cover from './components/Cover';

function Shop() {
  const dispatch = useDispatch();
  const coverRef = useRef();
  const [coverHeight, setCoverHeight] = useState(0);

  const handleScroll = useCallback(() => {
    const header = document.querySelector('.em-sticky__header');
    const scrollTop = document.body.scrollTop;
    scrollTop >= coverHeight
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  }, [coverHeight]);

  const handleResize = () => {
    setCoverHeight(coverRef.current?.clientHeight);
  };

  useEffect(() => {
    // update title header
    dispatch(appActions.setPageTitle('Shop'));
    dispatch(appActions.setPageDescription('Shop Description'));

    // set the height of the cover
    setCoverHeight(coverRef.current?.clientHeight);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [coverHeight]);

  return (
    <div className="em-shop" style={{ height: '10000px' }}>
      <Cover ref={coverRef} />
      <div className="em-sticky__header em-container">
        <Button title="Salads" color="primary" size="small" round noBorder/>
        <Button title="Salads" color="primary" size="small" round noBorder/>
        <Button title="Salads" color="primary" size="small" round noBorder/>
        <Button title="Salads" color="primary" size="small" round noBorder/>
      </div>
    </div>
  );
}

export default Shop;
