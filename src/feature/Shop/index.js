/* eslint-disable no-var */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  const [intersectingSection, setIntersectingSection] = useState('dish-0');

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

  const io = useMemo(
    () =>
      new IntersectionObserver(
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
      ),
    []
  );

  const handleResize = () => {
    setCoverHeight(coverRef.current?.clientHeight);
  };

  useEffect(() => {
    // update title header
    dispatch(appActions.setPageTitle('Shop'));
    dispatch(appActions.setPageDescription('Shop Description'));

    // set the height of the cover
    setCoverHeight(coverRef.current?.clientHeight);

    // listen to window resize events
    window.addEventListener('resize', handleResize);

    // observe intersections of dishes sections
    document.querySelectorAll('.em-dishes-view').forEach((elem) => io.observe(elem));

    return () => {
      // cleanup listeners
      window.removeEventListener('resize', handleResize);
      document.querySelectorAll('.em-dishes-view').forEach((elem) => io.unobserve(elem));
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
        <Button
          filled={intersectingSection === 'dish-0'}
          title="Salads"
          color="primary"
          size="small"
          round
          noBorder={intersectingSection !== 'dish-0'}
        />
        <Button
          filled={intersectingSection === 'dish-1'}
          title="Salads"
          color="primary"
          size="small"
          round
          noBorder={intersectingSection !== 'dish-1'}
        />
        <Button
          filled={intersectingSection === 'dish-2'}
          title="Salads"
          color="primary"
          size="small"
          round
          noBorder={intersectingSection !== 'dish-2'}
        />
      </div>

      <div className="em-container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-8">
            <DishesView id={'dish-0'} title={mockData.title} description={mockData.description} />
            <DishesView id={'dish-1'} title={mockData.title} description={mockData.description} />
            <DishesView id={'dish-2'} title={mockData.title} description={mockData.description} />
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
