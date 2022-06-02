import React from 'react';
import PropTypes from 'prop-types';
const bg =
  // eslint-disable-next-line max-len
  'https://rs-menus-api.roocdn.com/images/0172a091-9ecd-476e-a54a-6787ee4a1c5b/image.jpeg?width=928&height=522&auto=webp&format=jpg&fit=crop';

const DishesView = ({ title, description }) => {
  return (
    <div className="em-dishes-view">
      <div className="em-dishes-view__header">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <ul className="em-dishes-view__list">
        <li className="em-dishes-view__item__container">
          <div className="em-dishes-view__item">
            <strong>Avacado Caesar Salad</strong>
            <span className="em-dishes-view__item__description">
              Chicken or mozzarella, avocado, roasted tomato, super grains, olives, croutons, pesto,
              balsamic vinaigrette.
            </span>
            <span>$9,99</span>
          </div>
          <div
            className="em-dishes-view__item__image"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </li>
        <li className="em-dishes-view__item__container">
          <div className="em-dishes-view__item">
            <strong>Avacado Caesar Salad</strong>
            <span className="em-dishes-view__item__description">
              Chicken or mozzarella, avocado, roasted tomato, super grains, olives, croutons, pesto,
              balsamic vinaigrette.
            </span>
            <span>$9,99</span>
          </div>
          <div
            className="em-dishes-view__item__image"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </li>
        <li className="em-dishes-view__item__container">
          <div className="em-dishes-view__item">
            <strong>Avacado Caesar Salad</strong>
            <span className="em-dishes-view__item__description">
              Chicken or mozzarella, avocado, roasted tomato, super grains, olives, croutons, pesto,
              balsamic vinaigrette.
            </span>
            <span>$9,99</span>
          </div>
          <div
            className="em-dishes-view__item__image"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </li>
        <li className="em-dishes-view__item__container">
          <div className="em-dishes-view__item">
            <strong>Avacado Caesar Salad</strong>
            <span className="em-dishes-view__item__description">
              Chicken or mozzarella, avocado, roasted tomato, super grains, olives, croutons, pesto,
              balsamic vinaigrette.
            </span>
            <span>$9,99</span>
          </div>
          <div
            className="em-dishes-view__item__image"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </li>
      </ul>
    </div>
  );
};

DishesView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DishesView;
