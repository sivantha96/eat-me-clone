import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';

const StickyHeader = ({ menu, selectedId = '' }) => {
  if (!menu || menu.length === 0) return;

  return (
    <div className="em-sticky__header em-container">
      {menu.map((item) => (
        <Button
          className="em-sticky__header__button"
          key={item.id.toString()}
          filled={selectedId === item.id.toString()}
          title={item.title}
          color="primary"
          size="small"
          round
          noBorder={selectedId !== item.id.toString()}
        />
      ))}
    </div>
  );
};

StickyHeader.propTypes = {
  menu: PropTypes.array,
  selectedId: PropTypes.string,
};

export default StickyHeader;
