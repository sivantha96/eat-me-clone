/* eslint-disable no-var */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import * as appActions from '../../store/AppStore/actions';
import Basket from './components/Basket';
import Cover from './components/Cover';
import DishesView from './views/DishesView';

function Shop() {
  const dispatch = useDispatch();
  const coverRef = useRef();
  const [coverHeight, setCoverHeight] = useState(0);

  const handleScroll = useCallback(() => {
    const header = document.querySelector('.em-sticky__header');
    const basketCol = document.querySelector('.em-basket');
    const scrollTop = document.body.scrollTop;
    if (scrollTop >= coverHeight) {
      header.classList.add('is-sticky');
      basketCol.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
      basketCol.classList.remove('is-sticky');
    }
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
    <div className="em-shop">
      <Cover ref={coverRef} />
      <div className="em-sticky__header em-container">
        <Button title="Salads" color="primary" size="small" round noBorder />
        <Button title="Salads" color="primary" size="small" round noBorder />
        <Button title="Salads" color="primary" size="small" round noBorder />
        <Button title="Salads" color="primary" size="small" round noBorder />
      </div>

      <div className="em-container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-8">
            <DishesView title={mockData.title} description={mockData.description} />
            <DishesView title={mockData.title} description={mockData.description} />
            <DishesView title={mockData.title} description={mockData.description} />
          </div>
          <div className="col-md-5 col-lg-4 d-none d-md-flex position-relative">
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

var mockData = {
  title: 'Salads',
  description:
    // eslint-disable-next-line max-len
    'Freshly made to every order, we think these are the best salads in London. Choose one of our favourites or create your own!',
};
