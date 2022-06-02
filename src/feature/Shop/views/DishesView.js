import React from 'react';
import PropTypes from 'prop-types';

const placeholder = 'https://via.placeholder.com/400x400/eeeeee/969696?text=Not+Found';

const DishesView = ({ title, description, id, data }) => {
  const renderItems = () => {
    if (!data || data.length === 0) return;

    return data.map((item) => (
      <li key={item.dishId.toString()} className="em-dishes-view__item__container">
        <div className="em-dishes-view__item">
          <strong className="em-dishes-view__item__name">{item.dishName}</strong>
          <span className="em-dishes-view__item__description">{item.description}</span>
          <span>
            {item.currency} {item.displayPricing}
          </span>
        </div>
        <div
          className="em-dishes-view__item__image"
          style={{
            backgroundImage: `url(${item.imageUrl}) , url(${placeholder})`,
          }}
        ></div>
      </li>
    ));
  };

  return (
    <div className="em-dishes-view" id={id}>
      <div className="em-dishes-view__header">
        <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
        <span>{description}</span>
      </div>
      <ul className="em-dishes-view__list">{renderItems()}</ul>
    </div>
  );
};

DishesView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.array,
};

export default DishesView;
