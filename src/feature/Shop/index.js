/* eslint-disable no-var */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from '../../store/AppStore/actions';
import * as actions from './redux/actions';
import Basket from './components/Basket';
import Cover from './components/Cover';
import DishesView from './views/DishesView';
import StickyHeader from './components/StickyHeader';

function Shop() {
  const dispatch = useDispatch();
  const coverRef = useRef();

  const [coverHeight, setCoverHeight] = useState(0);
  const [intersectingSection, setIntersectingSection] = useState('');

  const menu = useSelector((state) => state.shop.menu);
  const dishes = useSelector((state) => state.shop.dishes);

  useEffect(() => {
    const io = new IntersectionObserver(
      (events) => {
        events.forEach((e) => {
          if (e.isIntersecting) {
            setIntersectingSection(e.target.id);
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    // observe intersections of dishes sections
    document.querySelectorAll('.em-dishes-view').forEach((elem) => io.observe(elem));

    return () => {
      document.querySelectorAll('.em-dishes-view').forEach((elem) => io.unobserve(elem));
    };
  }, [menu]);

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
    dispatch(appActions.setPageTitle("Tossed - St Martin's Lane"));
    dispatch(appActions.setPageDescription(''));

    dispatch(actions.requestMenu());
    dispatch(actions.requestDishes());

    // set the height of the cover
    setCoverHeight(coverRef.current?.clientHeight);

    // listen to window resize events
    window.addEventListener('resize', handleResize);

    return () => {
      // cleanup listeners
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // listen to window scroll events
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      // cleanup listeners
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [coverHeight]);

  const renderDishes = () => {
    if (!dishes || dishes.length === 0) return;

    return dishes.map((item) => (
      <DishesView
        key={item.id.toString()}
        id={item.id.toString()}
        title={item.title || ''}
        description={item.description || ''}
        data={item.data}
      />
    ));
  };

  return (
    <div className="em-shop">
      <Cover ref={coverRef} />
      <StickyHeader menu={menu} selectedId={intersectingSection} />

      <div className="em-container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-8">{renderDishes()}</div>
          <div className="col-md-5 col-lg-4 d-none d-md-flex position-relative">
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
